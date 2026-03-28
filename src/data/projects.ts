export interface Project {
  title: string;
  description: string;
  url: string;
  repo?: string;
  image?: string;
  video?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "TweetSip",
    description: "The X digest you actually want to read.",
    url: "https://tweetsip.sbenavds-account.workers.dev/feed",
    video: "/portfolio/projects/tweetsip-demo.mp4",
    tech: ["TanStack Start", "Drizzle ORM", "Cloudflare Workers", "D1", "Cloudflare AI"],
  },
  {
    title: "Project Two",
    description: "Enterprise platform serving thousands of users with complex workflows.",
    url: "#",
    tech: ["React", "TanStack", "AWS", "PostgreSQL"],
  },
  {
    title: "Obsidian Protocol",
    description: "Premium fitness/personal training brand website.",
    url: "https://obsidian-protocol.sbenavds-account.workers.dev/",
    video: "/portfolio/projects/obsidian-demo.mp4",
    tech: ["Astro 6", "Sanity v3", "Cloudflare Pages"],
  },
];
