export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  tags: string[];
  description: string;
  cover: string; // path to image
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "techhub",
    title: "TechHub FSM",
    category: "UI/UX",
    year: "2024",
    tags: ["Mobile", "iOS", "Field Service"],
    description: "Redesign of an internal iPhone app for Sears Home Services field technicians — scheduling, navigation, CRM, and reporting in one flow.",
    cover: "/projects/techhub-cover.jpg",
    featured: true,
  },
  {
    id: "flo-health",
    title: "Flo Health",
    category: "UI/UX",
    year: "2023",
    tags: ["Product", "Health", "Mobile"],
    description: "UI/UX design for one of the world's leading women's health apps.",
    cover: "/projects/flo-cover.jpg",
    featured: true,
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    category: "Brand",
    year: "2023",
    tags: ["Branding", "Identity", "Visual"],
    description: "Visual identity and communication design for a cultural festival.",
    cover: "/projects/brand-cover.jpg",
    featured: false,
  },
];
