import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowLeft } from "lucide-react";

// Import gallery images
import galleryImage1 from "@/assets/gallery-01.jpg";
import galleryImage2 from "@/assets/gallery-02.jpg";
import galleryImage3 from "@/assets/gallery-03.jpg";
import galleryImage4 from "@/assets/gallery-04.jpg";
import galleryImage5 from "@/assets/gallery-05.jpg";
import galleryImage6 from "@/assets/gallery-06.jpg";
import galleryImage7 from "@/assets/gallery-07.jpg";
import galleryImage8 from "@/assets/gallery-08.jpg";

// MoneyX project images (using public URLs)
const moneyxImages = [
  "/lovable-uploads/7818744d-3050-4496-824e-8c4c7a8b1a4e.png", // Components & Wireframes
  "/lovable-uploads/c528a13e-2b16-4074-9369-d55af61f04ac.png", // Dashboard Core Experiences
  "/lovable-uploads/1dcf470c-2ae1-4041-9270-802a1b166480.png", // Goal Creation
  "/lovable-uploads/c931605e-784c-4a52-ae00-b9eb94d0be58.png", // Transactions
  "/lovable-uploads/75943d99-0ed4-4445-9bdd-80d0bab01e5f.png", // UI Flow
  "/lovable-uploads/02594b85-35a5-4f5e-b0f9-c93ee3f201a7.png", // Interface Flow
  "/lovable-uploads/2fbd8484-6091-4de8-8f0d-0c7c7ded5fb0.png", // Categories & Charts
  "/lovable-uploads/b0b84054-8135-427f-8108-9f34cecc6fa7.png"  // Final Flow
];

// Sample project data - you can replace this with actual data
const projectsData = {
  "moneyx-savings-goals-manual-entry": {
    title: "MoneyX App",
    websiteUrl: "https://moneyx.com.my/",
    overview: "I worked on this new feature for 2 months together with a Product Manager, Business Analyst, and Lead UX Designer. I had the opportunity to lead the design process and decision of their overall feature experience, setting up design direction, and components creation. This project assigned to me a month after officially joining the team. The goal was to keep users engaged and encourage them to explore other features within the app that are linked to the net worth simulation.",
    projectInfo: {
      "Project / Company": "MoneyX, Hextar Technologies Solutions Berhad",
      "Type": "App UX/UI, Product Design",
      "Role / Project Ownership": "App feature design owner",
      "Contribution": "User interface, component design research, experience and feature functionality, end-to-end flow screen design",
      "Project Lead / Product Manager(s)": "Shan Yi T.",
      "Value Added": "Component assets creation, user flow optimisation",
      "Credits": "Yudhis (3D Icons), Toshi Feryanshah (Lead UX Designer)"
    }
  },
  "south-sabah-masterplan": {
    title: "South Sabah Al-Ahmad Masterplan",
    websiteUrl: "https://example.com/project1",
    overview: "Comprehensive urban development planning for sustainable community growth in Southern Kuwait. This masterplan encompasses residential, commercial, and recreational zones designed to create a thriving, environmentally conscious community for the next generation.",
    projectInfo: {
      "Project / Company": "Urban Development Solutions",
      "Type": "Master Planning & Urban Design",
      "Role / Project Ownership": "Lead Urban Planner & Design Director",
      "Contribution": "Strategic planning, zoning design, sustainability framework",
      "Project Lead / Product Manager(s)": "Sarah Al-Ahmad, Michael Chen",
      "Value Added": "Increased projected population capacity by 40% while maintaining sustainability goals",
      "Credits": "Kuwait Ministry of Public Works, Environmental Planning Associates"
    }
  },
  "changfeng-mixed-use": {
    title: "Changfeng Mixed Use Development",
    websiteUrl: "https://example.com/project2", 
    overview: "Integrated commercial and residential complex with modern architectural design in the heart of Shanghai. This development bridges traditional Chinese architecture with contemporary urban living needs.",
    projectInfo: {
      "Project / Company": "Shanghai Development Group",
      "Type": "Mixed-Use Development",
      "Role / Project Ownership": "Senior Architect & Project Coordinator",
      "Contribution": "Architectural design, space planning, community integration",
      "Project Lead / Product Manager(s)": "Li Wei, Jennifer Park",
      "Value Added": "Created 30% more livable space through innovative design solutions",
      "Credits": "Shanghai Urban Planning Bureau, Green Building Council"
    }
  },
  "metropolitan-transit-hub": {
    title: "Metropolitan Transit Hub",
    websiteUrl: "https://example.com/project3",
    overview: "Multi-modal transportation center connecting various transit systems in Dubai. This hub serves as a gateway connecting metro, bus, and future hyperloop systems.",
    projectInfo: {
      "Project / Company": "Dubai Transport Authority",
      "Type": "Transportation Infrastructure",
      "Role / Project Ownership": "Infrastructure Design Lead",
      "Contribution": "System integration, passenger flow optimization, accessibility design",
      "Project Lead / Product Manager(s)": "Ahmed Al-Rashid, Maria Rodriguez",
      "Value Added": "Reduced average transfer time by 60% between transport modes",
      "Credits": "Dubai Municipality, International Transit Association"
    }
  },
  "waterfront-cultural-district": {
    title: "Waterfront Cultural District",
    websiteUrl: "https://example.com/project4",
    overview: "Arts and culture destination featuring museums, galleries, and performance venues along Singapore's waterfront. A cultural hub that celebrates both local heritage and international arts.",
    projectInfo: {
      "Project / Company": "Singapore Cultural Development Board",
      "Type": "Cultural & Entertainment Complex",
      "Role / Project Ownership": "Cultural Space Designer & Creative Director",
      "Contribution": "Cultural programming, architectural integration, public space design",
      "Project Lead / Product Manager(s)": "Tan Hui Min, Robert Thompson",
      "Value Added": "Increased cultural tourism by 85% in the surrounding area",
      "Credits": "National Arts Council Singapore, Heritage Conservation Society"
    }
  },
  "sustainable-office-complex": {
    title: "Sustainable Office Complex",
    websiteUrl: "https://example.com/project5",
    overview: "Energy-efficient commercial development with innovative green building technologies in London. This complex sets new standards for sustainable office environments.",
    projectInfo: {
      "Project / Company": "Green Development Ltd",
      "Type": "Commercial Office Development",
      "Role / Project Ownership": "Sustainability Consultant & Design Lead",
      "Contribution": "Green technology integration, energy systems design, LEED certification",
      "Project Lead / Product Manager(s)": "James Mitchell, Sophie Green",
      "Value Added": "Achieved 90% energy efficiency compared to traditional office buildings",
      "Credits": "UK Green Building Council, Mayor of London's Office"
    }
  },
  "smart-city-innovation-park": {
    title: "Smart City Innovation Park",
    websiteUrl: "https://example.com/project6",
    overview: "Technology-focused development promoting innovation and digital transformation in Tokyo. A living laboratory for smart city technologies and sustainable urban solutions.",
    projectInfo: {
      "Project / Company": "Tokyo Innovation Authority",
      "Type": "Technology Park & Innovation Hub",
      "Role / Project Ownership": "Smart Systems Designer & Innovation Strategist",
      "Contribution": "IoT infrastructure, smart building systems, innovation ecosystem design",
      "Project Lead / Product Manager(s)": "Hiroshi Yamamoto, Anna Kowalski",
      "Value Added": "Created Japan's first fully integrated smart city testbed",
      "Credits": "Ministry of Digital Affairs Japan, Tokyo Metropolitan Government"
    }
  }
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <StickyNavbar />
        <div className="max-w-4xl mx-auto py-20 px-4 text-center">
          <h1 className="font-display text-2xl mb-4">Project not found</h1>
          <Link to="/studio">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Studio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <StickyNavbar />
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/studio" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Studio
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
            <h1 className="font-display text-3xl sm:text-4xl font-medium mb-4 sm:mb-0 sm:mr-8">
              {project.title}
            </h1>
            <Button asChild className="w-fit">
              <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                VISIT WEBSITE
              </a>
            </Button>
          </div>
          
          <div className="border-b border-border pb-2">
            <p className="text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#606060' }}>
              {project.overview}
            </p>
          </div>
        </div>

        {/* Project Information */}
        <div className="mb-12 mt-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="project-info">
              <AccordionTrigger className="font-display text-xl font-medium">
                Project Information
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-4">
                  {Object.entries(project.projectInfo).map(([key, value], index, array) => (
                    <div key={key} className={`pb-2 ${index < array.length - 1 ? 'border-b border-border/50' : ''}`}>
                      <div className="flex flex-col sm:flex-row sm:items-start">
                        <div className="w-full sm:w-48 mb-2 sm:mb-0">
                          <span className="font-mono text-sm text-muted-foreground uppercase tracking-wide">
                            {key}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="font-mono text-foreground">
                            {value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Project Gallery */}
        <div className="mb-12">
          <div className="grid grid-cols-1 gap-6">
            {(slug === 'moneyx-savings-goals-manual-entry' 
              ? moneyxImages
              : [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7, galleryImage8]
            ).map((image, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 text-center">
          <Link to="/studio">
            <Button variant="light" size="lg" className="font-display">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ProjectDetail;