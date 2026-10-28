// Build-time entry used only by scripts/prerender.mjs (bundled with `vite build --ssr`).
// Renders one route to static HTML so crawlers that don't run JS see real content and per-page meta.
import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { renderToString } from "react-dom/server";

import { routeTree } from "./routeTree.gen";
import { services } from "./data/services";
import { team } from "./data/team";

export const routes = [
  "/",
  "/about",
  "/contact",
  "/services",
  ...services.map((s) => `/services/${s.slug}`),
  ...team.map((m) => `/team/${m.slug}`),
];

type Tag = { tag: string; attrs: Record<string, string>; children?: string };

export async function render(url: string) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [url] }),
    context: { queryClient: new QueryClient() },
  });
  await router.load();

  const status = router.state.statusCode;
  // <HeadContent /> sits inside #root, so its tags land in the body markup. They are emitted
  // into <head> below instead; strip them here so each page has one title/canonical/description.
  const html = renderToString(<RouterProvider router={router} />)
    .replace(/<title>[\s\S]*?<\/title>/g, "")
    .replace(/<(meta|link)\b[^>]*\/?>/g, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");

  // Collect head() output from every matched route; deeper routes override shallower ones.
  const byKey = new Map<string, Tag>();
  const scripts: Tag[] = [];
  for (const match of router.state.matches) {
    for (const m of match.meta ?? []) {
      if (!m) continue;
      if ("title" in m && m.title) {
        byKey.set("title", { tag: "title", attrs: {}, children: m.title });
        continue;
      }
      if ("charSet" in m) continue;
      const key = (m as Record<string, string>).name ?? (m as Record<string, string>).property;
      if (key) byKey.set(`meta:${key}`, { tag: "meta", attrs: m as Record<string, string> });
    }
    for (const l of match.links ?? []) {
      if (!l) continue;
      const link = l as Record<string, string>;
      // canonical / hreflang alternates are one-per-page; other links (fonts, icons) keyed by href.
      const key =
        link.rel === "canonical" || link.rel === "alternate"
          ? `link:${link.rel}:${link.hrefLang ?? ""}`
          : `link:${link.rel}:${link.href}`;
      byKey.set(key, { tag: "link", attrs: link });
    }
    for (const s of match.headScripts ?? []) {
      if (s)
        scripts.push({
          tag: "script",
          attrs: { type: String(s.type ?? "") },
          children: String(s.children ?? ""),
        });
    }
    for (const s of match.scripts ?? []) {
      if (s)
        scripts.push({
          tag: "script",
          attrs: { type: String(s.type ?? "") },
          children: String(s.children ?? ""),
        });
    }
  }

  return { status, html, head: [...byKey.values(), ...scripts] };
}
