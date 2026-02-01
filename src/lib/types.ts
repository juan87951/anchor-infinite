export interface Cruise {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  dates: string;
  route: string[];
  highlights: string[];
  marketingPoints: string[];
  price: string;
  priceInCents: number;
  description: string;
  itinerary: { day: string; title: string; description: string }[];
}

export interface Product {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  benefits: string[];
  marketingPoints: string[];
  features: { title: string; description: string }[];
}

export interface SiteContent {
  nav: {
    home: string;
    cruises?: string;
    products?: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    company: string;
    tagline: string;
    copyright: string;
    links: { label: string; href: string }[];
  };
}
