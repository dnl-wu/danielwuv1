import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type Post = CollectionEntry<'writing'>;

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** Published posts by `order`, then newest first. Drafts are visible in `astro dev` only. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort(
    (a, b) => a.data.order - b.data.order || (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0),
  );
}

/** Articles that are a project's case study link to that project; the rest have their own page. */
export function postHref(post: Post): string {
  return post.data.project ? `/projects/${post.data.project}` : `/writing/${post.id}`;
}

/** Featured projects link to their case study; others link out to the demo or repo. */
export function projectHref(project: Project): string | undefined {
  if (project.data.featured) return `/projects/${project.id}`;
  return project.data.links.demo ?? project.data.links.devpost ?? project.data.links.repo;
}

export function readingTime(body = ''): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}

export function formatDate(date: Date, month: 'long' | 'short' = 'long'): string {
  return date.toLocaleDateString('en-US', { timeZone: 'UTC', year: 'numeric', month, day: 'numeric' });
}
