import rss from '@astrojs/rss';

export const get = () =>
  rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://astro-tutorial-202301.vercel.app',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>ja</language>`,
  });
