export interface Project {
  title: string;
  description: string;
  tools: string[];
  status: "In Progress" | "Shipped";
  link?: string;
  image?: string;
}

export const inProgressProjects: Project[] = [
  {
    title: "Medigo",
    description: "An AI-powered medical tourism marketplace that connects patients with verified clinics across Malaysia.",
    tools: ["Lovable", "Cursor", "ChatGPT"],
    status: "In Progress"
  },
  {
    title: "PromptShelf",
    description: "A personal AI prompt organizer for designers and founders to save, tag, and reuse their best prompts.",
    tools: ["Next.js", "Supabase", "Lovable"],
    status: "In Progress"
  },
  {
    title: "Design Pulse",
    description: "A weekly visual digest that curates trending design systems and AI tools for creators.",
    tools: ["Notion API", "ChatGPT", "Lovable"],
    status: "In Progress"
  }
];

export const shippedProjects: Project[] = [
  {
    title: "Taskly",
    description: "A minimal AI to-do app that helps you focus and summarize your daily progress automatically.",
    tools: ["Lovable", "Vercel", "OpenAI API"],
    link: "https://taskly.app",
    status: "Shipped"
  },
  {
    title: "Briefly",
    description: "An AI-powered creative brief generator that helps agencies align faster with clients.",
    tools: ["ChatGPT", "Cursor", "Supabase"],
    link: "https://briefly.ai",
    status: "Shipped"
  },
  {
    title: "Moodfolio",
    description: "A visual moodboard web app for designers to create and share aesthetic collections in seconds.",
    tools: ["React", "Lovable", "Cloudinary"],
    link: "https://moodfolio.app",
    status: "Shipped"
  }
];

export const timeline = [
  { event: "Started Medigo MVP", date: "Oct 2025" },
  { event: "Launched Taskly", date: "Aug 2025" },
  { event: "Shipped Briefly v1.0", date: "Jul 2025" },
  { event: "Built Moodfolio", date: "May 2025" },
];
