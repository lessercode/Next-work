export type WebsiteCategory =
  | 'Social Media'
  | 'Productivity'
  | 'News'
  | 'Entertainment'
  | 'Shopping'
  | 'Other';

export type WebsiteActivity = {
  id: number;
  domain: string;
  faviconUrl: string;
  timeSpent: number; // in minutes
  category: WebsiteCategory;
};
