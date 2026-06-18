import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

function getJournalSlugs(): string[] {
  const journalDir = path.join(process.cwd(), 'content/journal');
  const files = fs.readdirSync(journalDir);
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getJournalSlugs();

  const journalUrls = slugs.map((slug) => ({
    url: `https://www.siamaura.org/journal/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Tour slugs - add new tours here as they are published
  const tourSlugs = [
    'bangkok-temples',
    'ayutthaya-full-day',
    'train-market-floating-market',
    'tuktuk-food-tour',
    'canal-royal-barge',
    'river-kwai-death-railway-2d1n',
    'river-kwai-complete-experience-3d2n',
  ];

  const tourUrls = tourSlugs.map((slug) => ({
    url: `https://www.siamaura.org/tours/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: 'https://www.siamaura.org',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.siamaura.org/tours',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    ...tourUrls,
    {
      url: 'https://www.siamaura.org/journal',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.siamaura.org/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.siamaura.org/search',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.siamaura.org/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...journalUrls,
  ];
}
