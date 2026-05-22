import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE } from "../../data/links";

export async function GET(context: APIContext) {
  const devlog = (await getCollection("devlog", ({ data }) => !data.draft)).map(
    (entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/devlog/${entry.id}/`,
      categories: ["devlog", ...entry.data.tags],
    }),
  );

  const blog = (await getCollection("blog", ({ data }) => !data.draft)).map(
    (entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/blog/${entry.id}/`,
      categories: ["blog", ...entry.data.tags],
    }),
  );

  const items = [...devlog, ...blog].sort(
    (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf(),
  );

  return rss({
    title: `${SITE.name} Log`,
    description:
      "Merged feed: short build notes and longer posts about AgentBounty, adjudication, USDC settlement, and progressive autonomy.",
    site: context.site ?? SITE.url,
    items,
    customData: "<language>en-us</language>",
  });
}
