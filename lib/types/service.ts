import { LucideIcon } from "lucide-react";
export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export type ServiceCategory =
  | "residential"
  | "commercial"
  | "both";

export interface Service {
  // Identity
  slug: string;
  title: string;

  // Display
  shortDescription: string;
  heroDescription: string;
  image: string;
  heroImageAlt: string;
  icon: LucideIcon;

  // SEO
  seoTitle: string;
  metaDescription: string;

  // Organization
  category: ServiceCategory;
  featured: boolean;

  // Content
  problems: string[];
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQ[];

  // Relationships
  relatedServices: string[];
}