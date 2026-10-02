// Site-wide details. The home page text itself lives in src/data/letter.mdx.

export const site = {
  name: 'Daniel Wu',
  description: 'Waterloo student building things. Projects, writing, and a short note about me.',
  email: 'ca.danielwu@gmail.com',
};

/** Shown as icons in the intro box on the home page, followed by email. */
export const socials = [
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/dnlwu' },
  { label: 'X', icon: 'x', href: 'https://x.com/dnlwu_' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/dnl-wu' },
] as const;
