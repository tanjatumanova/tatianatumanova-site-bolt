export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  result?: string;
  videoUrl: string;
  thumbnail: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  avatar?: string;
  logo?: string;
}

export type PortfolioCategory = 'all' | 'advertisement' | 'reportage' | 'educational' | 'seminars' | 'product-reviews';
