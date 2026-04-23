export interface PublicationLink {
  label: string;
  icon: string;
  href: string;
}

export type ChipVariant = "default" | "primary" | "sandy" | "secondary" | "tertiary";

export interface Publication {
  year: string;
  conference?: string;
  conferenceVariant?: ChipVariant;
  typeLabel: string;
  publisher?: string;
  title: string;
  description: string;
  links: PublicationLink[];
  image?: {
    src: string;
    alt: string;
  };
}

export interface ExperienceItem {
  company: string;
  logo: string;
  logoAlt?: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
  image: string;
  github: string;
}

export interface HonorItem {
  title: string;
  org: string;
  date: string;
  description: string;
  highlight: string;
}

export interface LeadershipItem {
  role: string;
  event: string;
  date: string;
  description: string;
}

export interface TravelItem {
  imageUrl: string;
  location: string;
  season: string;
  title: string;
  description: string;
  aspect: string;
}
