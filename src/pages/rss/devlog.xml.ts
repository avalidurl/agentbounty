import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE } from "../../data/links";

export async function GET(context: APIContext) {
  const entries = await getCollection("devlog", ({ data }) => !data.draft);
  return rss({
    title: `${SITE.name} Devlog`,
    description:
      "Short build notes for AgentBounty. Site changes, mechanism updates, operational notes.",
    site: context.site ?? SITE.url,
    items: entries
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.pubDate,
        link: `/devlog/${entry.id}/`,
      })),
    customData: "<language>en-us</language>",
  });
}
