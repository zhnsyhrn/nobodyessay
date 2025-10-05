export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  hasDetails: boolean;
  type: string;
  date?: string;
}

export const projects: Project[] = [
  {
    title: "Rearchitecting the Customer Experience for Great Eastern Takaful Website",
    slug: "great-eastern-takaful-malaysia",
    description: "UX Audit, Design-led Initiative",
    image: "/lovable-uploads/69a2f54d-177c-4bcd-9167-0e4939d7b7fb.png",
    hasDetails: true,
    type: "UX/UI Design",
    date: "2024"
  },
  {
    title: "MoneyX App - Fintech",
    slug: "moneyx-savings-goals-manual-entry",
    description: "App feature UIUX design",
    image: "/lovable-uploads/3f82fbbf-f7a3-4418-bc91-7b43dcb140e8.png",
    hasDetails: true,
    type: "App Design",
    date: "2024"
  },
  {
    title: "PolicyStreet - InsurTech",
    slug: "policystreet-car-insurance-platform",
    description: "Insurance marketplace platform",
    image: "/lovable-uploads/87b6fb4e-ffa5-46a7-9852-1a38db415cb4.png",
    hasDetails: true,
    type: "UX/UI Design",
    date: "2023"
  },
  {
    title: "Knock Knock Cafe",
    slug: "knock-knock-cafe-kuala-terengganu",
    description: "Art direction & brand design",
    image: "/lovable-uploads/2ec90d04-32fe-40d7-ad32-37985537079c.png",
    hasDetails: true,
    type: "Branding",
    date: "2023"
  },
  {
    title: "Deal Experience Platform (DXP)",
    slug: "deal-experience-platform",
    description: "SaaS tools design",
    image: "/lovable-uploads/f83e49dc-cff5-4e61-af7d-10bef4f81e8d.png",
    hasDetails: false,
    type: "Product Design",
    date: "2023"
  },
  {
    title: "SPARK",
    slug: "spark-parking-app",
    description: "Design Exploration for parking app",
    image: "/lovable-uploads/c439fbb4-3f35-4764-a184-273325e4e840.png",
    hasDetails: true,
    type: "App Design",
    date: "2022"
  },
  {
    title: "Verdant Solar",
    slug: "verdant-solar-my",
    description: "Social media and ad graphics",
    image: "/lovable-uploads/b4780aa0-32a0-449d-b039-b83cc167691e.png",
    hasDetails: true,
    type: "Graphic Design",
    date: "2022"
  },
  {
    title: "Aqa Group of Companies",
    slug: "aqa-group-of-companies",
    description: "Website redesign",
    image: "/lovable-uploads/6a5cb6e1-03b7-4408-acc9-3a920fc02038.png",
    hasDetails: true,
    type: "Web Design",
    date: "2022"
  },
  {
    title: "Babyborong Commerce",
    slug: "babyborong-commerce",
    description: "B2B Commerce, UI Design",
    image: "/lovable-uploads/a0d51a79-c8e0-48dd-a846-8ee7d9ccec37.png",
    hasDetails: false,
    type: "Product Design",
    date: "2021"
  },
  {
    title: "Referral Program Design",
    slug: "moneyx-moneyxbiz-referral-program",
    description: "Insurance marketplace platform",
    image: "/lovable-uploads/3203ca77-96ca-4347-9e77-4a9c89891bfb.png",
    hasDetails: true,
    type: "UX/UI Design",
    date: "2023"
  },
  {
    title: "CH Phoon & Associates",
    slug: "ch-phoon-associates",
    description: "Law firm logo redesign",
    image: "/lovable-uploads/f3563e28-9a23-4146-bb62-ca77d0cd0da9.png",
    hasDetails: false,
    type: "Branding",
    date: "2021"
  }
];
