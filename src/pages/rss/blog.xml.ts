import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE } from "../../data/links";

export async function GET(context: APIContext) {
  const entries = await getCollection("blog", ({ data }) => !data.draft);
  const sorted = entries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  const latest = (sorted[0]?.data.pubDate ?? new Date()).toUTCString();
  return rss({
    title: `${SITE.name} Blog`,
    description:
      "Longer posts about AgentBounty, adjudication, USDC settlement, and progressive autonomy.",
    site: context.site ?? SITE.url,
    items: sorted.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/blog/${entry.id}/`,
    })),
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData: `<language>en-us</language><lastBuildDate>${latest}</lastBuildDate><pubDate>${latest}</pubDate><generator>@astrojs/rss</generator><docs>https://www.rssboard.org/rss-specification</docs><atom:link href="${new URL("/rss/blog.xml", context.site ?? SITE.url).href}" rel="self" type="application/rss+xml"/>`,
  });
}
