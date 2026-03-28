export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    company: "ImagineX Studio",
    role: "Software Developer",
    period: "2025 — Present",
    description: "Home warranty enterprise platform — Costa Rica, Remote",
    highlights: [
      "Architected a Next.js multi-zone system decoupling customer portals, admin tools, and plan activation flows into independently deployable modules — serving 500K+ homeowners.",
      "Engineered a configuration-driven plan activation engine with dynamic multi-step forms, real-time notifications, and payment processing.",
      "Published an internal NPM UI library (Tailwind, Storybook, Redux) enforcing WCAG 2.1 compliance across enterprise teams.",
    ],
    current: true,
  },
  {
    company: "Shrine Development",
    role: "Software Developer",
    period: "2023 — 2024",
    description: "Aesthetics loyalty platform & healthtech — Remote",
    highlights: [
      "Built React micro-frontends across a distributed loyalty platform serving 3M+ members.",
      "Optimized backend performance supporting 20K+ concurrent medical offices.",
      "Launched a guided meditation app for content creators.",
    ],
  },
];

export const linkedInUrl = "https://www.linkedin.com/in/sbenavds/";
