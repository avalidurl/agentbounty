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

  const latest = (items[0]?.pubDate ?? new Date()).toUTCString();

  return rss({
    title: `${SITE.name} Log`,
    description:
      "Merged feed: short build notes and longer posts about AgentBounty, adjudication, USDC settlement, and progressive autonomy.",
    site: context.site ?? SITE.url,
    items,
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData: `<language>en-us</language><lastBuildDate>${latest}</lastBuildDate><pubDate>${latest}</pubDate><generator>@astrojs/rss</generator><docs>https://www.rssboard.org/rss-specification</docs><atom:link href="${new URL("/rss/log.xml", context.site ?? SITE.url).href}" rel="self" type="application/rss+xml"/>`,
  });
}
