#!/usr/bin/env node
/**
 * Automated WCAG AA contrast check for alert / error / validation UI states.
 *
 * Parses CSS custom properties from src/styles.css, computes WCAG 2.1
 * contrast ratios for each (foreground, background) pair we care about,
 * and exits non-zero if any pair fails its required threshold.
 *
 * Run: `node scripts/check-contrast.mjs`
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const CSS_PATH = path.resolve(__dirname, "../src/styles.css");

// ---------- color parsing ----------
function parseOklch(str) {
  const m = str.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.%]+))?\s*\)/i);
  if (!m) throw new Error(`Cannot parse oklch: ${str}`);
  return { L: +m[1], C: +m[2], h: +m[3] };
}

// OKLCh -> linear sRGB (per CSS Color 4)
function oklchToLinearRgb({ L, C, h }) {
  const hr = (h * Math.PI) / 180;
  const a = Math.cos(hr) * C;
  const b = Math.sin(hr) * C;
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
  return {
    r: +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    g: -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    b: -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
  };
}

function linearToSrgb(c) {
  c = Math.max(0, Math.min(1, c));
  return c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055;
}

function relLuminance({ r, g, b }) {
  // r/g/b here are linear sRGB already
  const f = (v) => {
    v = Math.max(0, Math.min(1, v));
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  // Convert linear->sRGB->linear so clamp matches what the browser would display
  const sr = linearToSrgb(r), sg = linearToSrgb(g), sb = linearToSrgb(b);
  return 0.2126 * f(sr) + 0.7152 * f(sg) + 0.0722 * f(sb);
}

function contrast(c1, c2) {
  const L1 = relLuminance(oklchToLinearRgb(c1));
  const L2 = relLuminance(oklchToLinearRgb(c2));
  const [a, b] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (a + 0.05) / (b + 0.05);
}

// ---------- token extraction ----------
const css = fs.readFileSync(CSS_PATH, "utf8");
function extract(scope, name) {
  // scope: ':root' or '.dark'
  const block = css.match(new RegExp(`${scope.replace(".", "\\.")}\\s*{([\\s\\S]*?)}`));
  if (!block) throw new Error(`Missing scope ${scope}`);
  const re = new RegExp(`--${name}:\\s*(oklch\\([^)]+\\))`);
  const m = block[1].match(re);
  if (!m) throw new Error(`Missing token --${name} in ${scope}`);
  return parseOklch(m[1]);
}

const light = {
  background: extract(":root", "background") ?? parseOklch("oklch(1 0 0)"),
  foreground: extract(":root", "foreground"),
  destructive: extract(":root", "destructive"),
  "destructive-foreground": extract(":root", "destructive-foreground"),
  primary: extract(":root", "primary"),
  "primary-foreground": extract(":root", "primary-foreground"),
  muted: extract(":root", "muted"),
  "muted-foreground": extract(":root", "muted-foreground"),
};

// ---------- WCAG AA thresholds ----------
// 4.5:1 for normal text; 3:1 for large text & non-text UI components.
const NORMAL = 4.5;
const UI = 3.0;

const checks = [
  // Alert (destructive variant): text + icon on page background
  { name: "Alert destructive text on background",
    fg: light.destructive, bg: light.background, min: NORMAL },
  // Solid destructive button / badge
  { name: "Destructive button (fg on destructive bg)",
    fg: light["destructive-foreground"], bg: light.destructive, min: NORMAL },
  // Destructive border / focus ring is non-text UI
  { name: "Destructive border on background",
    fg: light.destructive, bg: light.background, min: UI },
  // Form validation error message
  { name: "Validation error message on background",
    fg: light.destructive, bg: light.background, min: NORMAL },
  // Primary CTA in toast / alert actions
  { name: "Primary button (fg on primary bg)",
    fg: light["primary-foreground"], bg: light.primary, min: UI },
  // Body / muted helper text shown inside alerts
  { name: "Body text on background",
    fg: light.foreground, bg: light.background, min: NORMAL },
  { name: "Muted helper text on background",
    fg: light["muted-foreground"], bg: light.background, min: NORMAL },
];

let failed = 0;
console.log("WCAG AA contrast check — alert / error / validation states\n");
for (const c of checks) {
  const ratio = contrast(c.fg, c.bg);
  const pass = ratio >= c.min;
  if (!pass) failed++;
  const mark = pass ? "PASS" : "FAIL";
  console.log(
    `  [${mark}] ${c.name.padEnd(48)} ${ratio.toFixed(2)}:1  (min ${c.min}:1)`
  );
}
console.log("");
if (failed > 0) {
  console.error(`${failed} contrast check(s) failed WCAG AA.`);
  process.exit(1);
}
console.log("All alert / error / validation states pass WCAG AA.");
