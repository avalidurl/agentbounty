import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://agentbounty.dev",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes("/rss/") &&
        !page.endsWith("/llms.txt") &&
        !page.endsWith("/llms-full.txt") &&
        !page.endsWith("/site-index.json"),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
});
