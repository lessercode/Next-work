import type { WebsiteActivity } from '@/lib/types';

export const mockActivity: WebsiteActivity[] = [
  {
    id: 1,
    domain: 'youtube.com',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64',
    timeSpent: 72,
    category: 'Entertainment',
  },
  {
    id: 2,
    domain: 'twitter.com',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=twitter.com&sz=64',
    timeSpent: 45,
    category: 'Social Media',
  },
  {
    id: 3,
    domain: 'github.com',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
    timeSpent: 125,
    category: 'Productivity',
  },
  {
    id: 4,
    domain: 'amazon.com',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=64',
    timeSpent: 18,
    category: 'Shopping',
  },
  {
    id: 5,
    domain: 'nytimes.com',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=nytimes.com&sz=64',
    timeSpent: 24,
    category: 'News',
  },
  {
    id: 6,
    domain: 'wikipedia.org',
    faviconUrl: 'https://www.google.com/s2/favicons?domain=wikipedia.org&sz=64',
    timeSpent: 15,
    category: 'Other',
  },
];
