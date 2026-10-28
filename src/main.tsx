import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { router } from "./router";
import "./styles.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element #root not found");
}

// Prerendered pages (scripts/prerender.mjs) ship static head tags for crawlers; drop them so
// the router's <HeadContent /> is the only source and titles update on client navigation.
document.querySelectorAll("[data-prerender]").forEach((el) => el.remove());

createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
