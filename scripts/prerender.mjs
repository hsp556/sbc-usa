#!/usr/bin/env node
/**
 * Build-time prerender: writes one static HTML file per route into dist/ so crawlers and
 * AI answer engines that don't execute JS get the page content, title, meta and JSON-LD.
 *
 * Runs after `vite build` (client) and `vite build --ssr src/entry-prerender.tsx` (dist-ssr/).
 * Output: dist/index.html, dist/about.html, dist/services/transfer-pricing.html, ...
 * served at clean URLs by Vercel (`cleanUrls` in vercel.json). dist/404.html is the plain
 * SPA shell, served with a real 404 status for unknown paths.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, routes } = await import(
  url.pathToFileURL(path.join(ssrDir, "entry-prerender.js")).href
);

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const ATTR_NAMES = { hrefLang: "hreflang", crossOrigin: "crossorigin" };

function tagToHtml({ tag, attrs, children }) {
  const a = Object.entries(attrs)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${ATTR_NAMES[k] ?? k}="${esc(v)}"`)
    .join(" ");
  const open = `<${tag} data-prerender ${a}`.trimEnd();
  if (tag === "meta" || tag === "link") return `${open} />`;
  // JSON-LD must not contain a literal </script>.
  const body = tag === "script" ? String(children).replace(/<\//g, "<\\/") : esc(children ?? "");
  return `${open}>${body}</${tag}>`;
}

// Skip head tags the static template already carries (charset, viewport, fonts, icons, sitemap).
function inTemplate({ tag, attrs }) {
  if (tag === "meta" && attrs.name) return template.includes(`name="${attrs.name}"`);
  if (
    tag === "link" &&
    ["preconnect", "stylesheet", "icon", "apple-touch-icon", "sitemap"].includes(attrs.rel)
  )
    return true;
  return false;
}

let failed = false;
for (const route of routes) {
  const { status, html, head } = await render(route);
  if (status !== 200 || !html.includes("<main")) {
    console.error(`  [FAIL] ${route} — status ${status}`);
    failed = true;
    continue;
  }
  const headHtml = head
    .filter((t) => !inTemplate(t))
    .map(tagToHtml)
    .join("\n    ");
  const page = template
    .replace(/<title[^>]*>[\s\S]*?<\/title>\s*/, "")
    .replace("</head>", `    ${headHtml}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  console.log(`  [ok]   ${route} -> dist/${file}`);
}

// Unknown URLs: plain SPA shell (client router renders the 404 view), never indexed.
fs.writeFileSync(
  path.join(dist, "404.html"),
  template.replace("</head>", '    <meta name="robots" content="noindex" />\n  </head>'),
);
fs.rmSync(ssrDir, { recursive: true, force: true });

if (failed) process.exit(1);
console.log(`Prerendered ${routes.length} routes.`);
