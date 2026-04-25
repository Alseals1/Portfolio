export interface Project {
  title: string;
  description: string;
  outcome: string;
  stack: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Movement Website",
    description:
      "Marketing site with a built-in content management system so the team can update pages, posts, and media without touching code.",
    outcome: "Non-technical staff manage all content independently — zero developer dependency after launch.",
    stack: ["React", "Astro", "Node.js", "Express", "Payload CMS"],
    github: "https://github.com/Alseals1",
    featured: true,
  },
  {
    title: "SPACES Web App",
    description:
      "Gamified learning platform built from zero — authentication, AI guardrails, onboarding flows, file storage, and real-time monitoring.",
    outcome: "Serves hundreds of learners across Ed Farm community sites with zero downtime.",
    stack: ["TypeScript", "React", "TanStack", "Supabase", "Mastra AI", "Cloudflare"],
    github: "https://github.com/Alseals1",
    featured: true,
  },
  {
    title: "Cloud Resume Challenge",
    description:
      "Serverless resume site with a live visitor counter — no servers to manage, deploys automatically on every git push.",
    outcome: "Full AWS infrastructure provisioned with Terraform. CI/CD pipeline ships updates in under 2 minutes.",
    stack: ["React", "AWS Lambda", "DynamoDB", "CloudFront", "Terraform", "GitHub Actions"],
    github: "https://github.com/Alseals1",
    featured: true,
  },
];
