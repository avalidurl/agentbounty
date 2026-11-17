import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds, unified } from "@astrojs/markdown-remark";

export default defineConfig({
  site: "https://agentbounty.dev",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    inlineStylesheets: "always",
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
    // User rehype plugins run before built-in heading ids, so inject ids first.
    processor: unified({
      rehypePlugins: [
        rehypeHeadingIds,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            properties: {
              className: ["hanchor"],
              ariaLabel: "Link to this section",
            },
            content: { type: "text", value: "#" },
          },
        ],
      ],
    }),
  },
});
