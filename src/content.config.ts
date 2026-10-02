import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Short neon label shown next to the title in the projects list, e.g. "Building...". */
    status: z.string().optional(),
    /** One concrete result, e.g. "1,200 weekly users" or "1st @ Hack the North". */
    metric: z.string().optional(),
    links: z
      .object({
        demo: z.url().optional(),
        devpost: z.url().optional(),
        repo: z.url().optional(),
      })
      .default({}),
    /** Featured projects get a full case-study page and appear on the home page. */
    featured: z.boolean().default(false),
    /** Lower numbers sort first. */
    order: z.number().default(100),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date().optional(),
    /** Slug of a project whose case study this article is; the list then links there instead of a /writing page. */
    project: z.string().optional(),
    /** Lower numbers sort first; ties fall back to newest date. */
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
