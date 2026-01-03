
export type Category = 'Stock Market Basics' | 'Crypto Fundamentals' | 'Market Analysis' | 'Risk Management' | 'Long-Term Investing';

export interface Article {
  id: string;
  title: string;
  category: Category;
  description: string;
  content: string;
  readTime: string;
  date: string;
  author: string;
  imageUrl: string;
}

export interface NavLink {
  label: string;
  path: string;
}
