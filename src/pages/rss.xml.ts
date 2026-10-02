import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../data/site';
import { getPosts, postHref } from '../lib/content';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${site.name} — Writing`,
    description: site.description,
    site: context.site!,
    items: posts
      .filter((post) => !post.data.draft)
      .map((post) => ({
        title: post.data.title,
        description: post.data.summary,
        pubDate: post.data.date,
        link: postHref(post),
      })),
  });
}
