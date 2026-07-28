import { LucideIcon } from "lucide-react";
export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;

  title: string;

  shortDescription: string;

  heroDescription: string;

  seoTitle: string;

  metaDescription: string;

  image: string;

  icon: LucideIcon;

  featured?: boolean;

  problems: string[];

  benefits: string[];

  process: {
    title: string;
    description: string;
  }

  faqs: FAQ[];
}