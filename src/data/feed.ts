import { getCollection } from "astro:content";

export async function getMergedLogItems() {
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

  return [...devlog, ...blog].sort(
    (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf(),
  );
}
