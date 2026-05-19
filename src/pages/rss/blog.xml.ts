import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE } from "../../data/links";

export async function GET(context: APIContext) {
  const entries = await getCollection("blog", ({ data }) => !data.draft);
  return rss({
    title: `${SITE.name} Blog`,
    description:
      "Longer posts about AgentBounty, adjudication, USDC settlement, and progressive autonomy.",
    site: context.site ?? SITE.url,
    items: entries
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.pubDate,
        link: `/blog/${entry.id}/`,
      })),
    customData: "<language>en-us</language>",
  });
}
