export interface Direction {
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
}

export interface AboutHighlight {
  title: string;
  text: string;
}

export interface NewsItem {
  id?: string;
  title: string;
  date: string;
  text: string;
  image?: string;
}

export type Theme = 'light' | 'dark';
