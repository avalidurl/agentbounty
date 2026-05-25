import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE } from "../../data/links";
import { getMergedLogItems } from "../../data/feed";

export async function GET(context: APIContext) {
  const items = await getMergedLogItems();
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
