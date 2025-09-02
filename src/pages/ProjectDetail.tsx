import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";

// Import gallery images
import galleryImage1 from "@/assets/gallery-01.jpg";
import galleryImage2 from "@/assets/gallery-02.jpg";
import galleryImage3 from "@/assets/gallery-03.jpg";
import galleryImage4 from "@/assets/gallery-04.jpg";
import galleryImage5 from "@/assets/gallery-05.jpg";
import galleryImage6 from "@/assets/gallery-06.jpg";
import galleryImage7 from "@/assets/gallery-07.jpg";
import galleryImage8 from "@/assets/gallery-08.jpg";

// Import Carousel for Verdant Solar
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// MoneyX project images (using public URLs)
const moneyxImages = ["/lovable-uploads/7818744d-3050-4496-824e-8c4c7a8b1a4e.png",
// Components & Wireframes
"/lovable-uploads/c528a13e-2b16-4074-9369-d55af61f04ac.png",
// Dashboard Core Experiences
"/lovable-uploads/1dcf470c-2ae1-4041-9270-802a1b166480.png",
// Goal Creation
"/lovable-uploads/c931605e-784c-4a52-ae00-b9eb94d0be58.png",
// Transactions
"/lovable-uploads/75943d99-0ed4-4445-9bdd-80d0bab01e5f.png",
// UI Flow
"/lovable-uploads/02594b85-35a5-4f5e-b0f9-c93ee3f201a7.png",
// Interface Flow
"/lovable-uploads/2fbd8484-6091-4de8-8f0d-0c7c7ded5fb0.png",
// Categories & Charts
"/lovable-uploads/b0b84054-8135-427f-8108-9f34cecc6fa7.png" // Final Flow
];

// Knock Knock Cafe project images
const knockKnockImages = ["/lovable-uploads/2ec90d04-32fe-40d7-ad32-37985537079c.png" // Cafe storefront
];

// Knock Knock Cafe branding images (for grid layout)
const knockKnockBrandingImages = [
  "/lovable-uploads/0b90dd1f-2e0c-4cea-9622-6b345dcd480d.png", // Logo on black
  "/lovable-uploads/64832b62-e750-4885-959a-66813f85078d.png", // Coffee machine with branding
  "/lovable-uploads/86ddb1e9-5e7f-4b73-b047-1aa627b6b9ec.png", // Pour over coffee
  "/lovable-uploads/951498a7-dfc1-4382-a38d-42ee2427abb7.png", // Branded coffee mugs
  "/lovable-uploads/ca49269f-c5cf-44d5-8312-dee498ccaa03.png", // Coffee cup with branding
  "/lovable-uploads/fb717700-2c2d-478c-9555-fa375093bfd0.png", // Wall signage
  "/lovable-uploads/947f2684-f773-4dc8-a59c-1689e8415d2f.png", // Branded apron
  "/lovable-uploads/0e8b7ab7-7337-4a4a-ae43-0ab5e4306dca.png", // Street view of cafe
  "/lovable-uploads/168e7a46-8c2a-481f-b86b-9ac4b3f7ecc8.png", // Interior signage
  "/lovable-uploads/4323e2a7-a557-4508-a17c-7552c47f1bb0.png"  // Coffee packaging
];

// PolicyStreet project images
const policyStreetImages = ["/lovable-uploads/a3d87d83-a1e8-426c-9d12-475e9f6f3488.png", "/lovable-uploads/933cdd11-2964-478a-a9f2-09f288821be8.png", "/lovable-uploads/0a9faeb6-72a3-484e-83a5-0aad681f0684.png", "/lovable-uploads/296d95da-ee08-407a-9413-025d7c4bc61d.png", "/lovable-uploads/bbfa2e07-10f8-41ed-91a7-5b3c0cdb3c1c.png"];

// Referral Program project images
const referralProgramImages = ["/lovable-uploads/3203ca77-96ca-4347-9e77-4a9c89891bfb.png"];

// Great Eastern Takaful project images
const greatEasternTakafulImages = ["/lovable-uploads/dc0d7de5-bc75-471f-9868-78660db2e084.png", "/lovable-uploads/670c5b9d-1b3f-462a-a20f-e76679352f64.png", "/lovable-uploads/2386a452-3187-4691-b942-7b67ffcf80fb.png", "/lovable-uploads/b73c248c-bad3-4363-9939-e5cecdec3e91.png", "/lovable-uploads/d0f62019-9599-4112-a540-dc3bcdfd0f0f.png"];

// Verdant Solar project images - Climate Awareness Graphics
const verdantSolarImages = ["/lovable-uploads/1f6d4e2e-7b54-4f9c-ae30-fb04593a5db8.png", "/lovable-uploads/51d094bb-7212-44aa-880f-81843fda108d.png", "/lovable-uploads/3ce0b311-2366-442e-ae3d-44512f7e5f93.png", "/lovable-uploads/6b5aaf11-dbc3-4f4d-800d-fbfdd59965ea.png", "/lovable-uploads/a8f38dd3-d20d-454e-befd-b9935a81579d.png", "/lovable-uploads/f4a75733-8f8a-4c38-997e-85eaeafb9f5b.png"];

// Verdant Solar grid images (for two-column layout)
const verdantSolarGridImages = ["/lovable-uploads/75b4d467-d07b-4a22-8523-6a9a556c5e2a.png", "/lovable-uploads/13a8a4c7-9cd9-478e-a490-d3a7722f360a.png", "/lovable-uploads/fc9707ef-ea3a-4b10-8e9d-c8d31441015b.png", "/lovable-uploads/bc558340-fdd3-4e28-964d-459e2f34bd20.png", "/lovable-uploads/bfa83407-2aa7-4d54-9719-7c2ae449a499.png", "/lovable-uploads/5686ffae-e247-45ab-add8-45cbc20b7546.png", "/lovable-uploads/8747297b-76ba-4837-a7d9-b5f45b56dcdf.png", "/lovable-uploads/6d87d690-731a-40f4-a0c9-220a616c8954.png"];

// Verdant Solar Image Slider Component (for title section)
const VerdantSolarImageSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return <div className="mt-8">
      {/* Image Slider */}
      <div className="relative w-full">
        <Carousel className="w-full group" plugins={[Autoplay({
        delay: 3000,
        stopOnInteraction: true
      })]} setApi={setApi} opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1
      }}>
          <CarouselContent className="-ml-2">
            {verdantSolarImages.map((image, index) => <CarouselItem key={index} className="pl-2 basis-1/2">
                <div className="aspect-square overflow-hidden rounded-[10px] bg-muted">
                  <img src={image} alt={`Verdant Solar Climate Awareness ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
              </CarouselItem>)}
          </CarouselContent>
          
          {/* Internal Navigation Controls */}
          <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white border-white/20 backdrop-blur-sm" />
          <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white border-white/20 backdrop-blur-sm" />
        </Carousel>
      </div>
      
      {/* Dots Indicator - Outside the image */}
      <div className="flex justify-center mt-4 space-x-2">
        {verdantSolarImages.map((_, index) => <button key={index} className={`w-2 h-2 rounded-full transition-colors duration-200 ${current === index ? 'bg-foreground' : 'bg-muted-foreground hover:bg-foreground/70'}`} aria-label={`Go to slide ${index + 1}`} onClick={() => api?.scrollTo(index)} />)}
      </div>
      
      {/* Divider Line */}
      <div className="border-b border-border mt-8"></div>
    </div>;
};

// Verdant Solar Grid Component (for full-width section)
const VerdantSolarGridContent = () => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      {verdantSolarGridImages.map((image, index) => <div key={index} className="aspect-square overflow-hidden rounded-[10px] bg-muted">
          <img src={image} alt={`Verdant Solar Design ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div>)}
    </div>;
};

// Knock Knock Cafe Branding Grid Component (for full-width section)  
const KnockKnockBrandingGridContent = () => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      {knockKnockBrandingImages.map((image, index) => <div key={index} className="aspect-square overflow-hidden rounded-[10px] bg-muted">
          <img src={image} alt={`Knock Knock Cafe Branding ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div>)}
    </div>;
};

// Sample project data - you can replace this with actual data
const projectsData = {
  "moneyx-savings-goals-manual-entry": {
    title: "MoneyX App",
    websiteUrl: "https://moneyx.com.my/",
    overview: "Led the end-to-end design of a new net worth simulation feature within 2 months, defining design direction and components to boost engagement and cross-feature exploration.",
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
  "knock-knock-cafe-kuala-terengganu": {
    title: "Knock Knock Cafe",
    websiteUrl: "https://share.google/iyxthFbyCnHGwy5zD",
    overview: "Minor branding and design project for a local café in Kampung Cina, Kuala Terengganu. It just steps away from Pasar Payang.",
    projectInfo: {
      "Project / Company": "Knock Knock Cafe, Kuala Terengganu, Terengganu, Malaysia",
      "Type": "Art direction, Logo & brand design",
      "Role / Project Ownership": "Lead designer",
      "Contribution": "Design research, logo creation, brand identity concept",
      "Project Lead / Product Manager(s)": "Zahin Syahiran",
      "Value Added": "Design consultation",
      "Credits": "Not available"
    }
  },
  "policystreet-car-insurance-platform": {
    title: "PolicyStreet - InsurTech",
    websiteUrl: "https://policystreet.com/partners/business-insurance-partnership",
    overview: "Designed a mobile-first car insurance comparison platform, leading market research and UX design while collaborating with the growth team to align user needs with business goals.",
    projectInfo: {
      "Project / Company": "PolicyStreet (InsurTech Company)",
      "Type": "Web Portal, UIUX Design",
      "Role / Project Ownership": "Design owner",
      "Contribution": "High-fidelity design, design research, product testing and quality assurance",
      "Project Lead / Product Manager(s)": "Shaun Choy, Nazatul",
      "Value Added": "Redefine the customer journey of buying car insurance, Improve the existing interaction design and components for web-based platform",
      "Credits": "Qistina (UX Copywriter), Sher Rhie (Creative Designer)"
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
  "moneyx-moneyxbiz-referral-program": {
    title: "Referral Program Design",
    websiteUrl: "https://moneyx.com.my/referral",
    overview: "The idea of this module is to design and implement a Revenue Sharing Model concept for all business owners that comes onto our platform and strengthen the unique selling point (USP) of the MoneyX Biz platform as an important factor that ought to be considered in a B2B aggregator platform including for MoneyX App. It took around 3-4 weeks to design, followed by 2-3 months for development and testing. The process started from 23/12/2024 till 8/1/2025 for full development.",
    projectInfo: {
      "Project / Company": "MoneyX, Hextar Technologies Solutions Berhad",
      "Type": "Web Portal, UIUX Design, Admin Dashboard",
      "Role / Project Ownership": "Lead designer for this project",
      "Contribution": "High-fidelity design, design research, assets creation",
      "Project Lead / Product Manager(s)": "Shan Yi T., Megan Kwan",
      "Value Added": "Functional logics, tech specs",
      "Credits": "Yudhis (3D Icons)"
    }
  },
  "great-eastern-takaful-malaysia": {
    title: "Great Eastern Takaful Malaysia",
    websiteUrl: "https://www.greateasterntakaful.com/en/personal-takaful.html",
    overview: "Led a 2-month UX Audit and redesign for Great Eastern Takaful Berhad's corporate website, aligning it with the latest Great Eastern Group identity before handing over to the Singapore team.",
    projectInfo: {
      "Project / Company": "Great Eastern Takaful Berhad",
      "Type": "UX Audit",
      "Role / Project Ownership": "Lead designer",
      "Contribution": "Design workshop with multiple stakeholders",
      "Project Lead / Product Manager(s)": "Zahin Syahiran",
      "Value Added": "Design consultation",
      "Credits": "Not available"
    }
  },
  "verdant-solar-my": {
    title: "Verdant Solar",
    websiteUrl: "https://verdantsolar.my/",
    overview: "Crafted engaging social media graphics and ads for Verdant Solar to highlight their renewable energy solutions, boost brand presence, and connect with eco-conscious audiences.",
    projectInfo: {
      "Project / Company": "Verdant Solar SDN BHD",
      "Type": "Graphic Design",
      "Role / Project Ownership": "Lead designer",
      "Contribution": "Creative direction",
      "Project Lead / Product Manager(s)": "Zahin Syahiran",
      "Value Added": "Design consultation",
      "Credits": "Not available"
    }
  },
  "aqa-group-of-companies": {
    title: "Aqa Group of Companies",
    websiteUrl: "https://www.aqagoc.com/",
    overview: "Conducted design exploration and proposed a website redesign concept that streamlined navigation, refreshed the visual identity, and laid the foundation for development.",
    projectInfo: {
      "Project / Company": "AQA Group of Companies, Philippines",
      "Type": "Design Exploration",
      "Role / Project Ownership": "Lead designer",
      "Contribution": "Assets creation",
      "Project Lead / Product Manager(s)": "Zahin Syahiran",
      "Value Added": "Not available",
      "Credits": "Not available"
    },
    gallery: [
      { src: "/lovable-uploads/685158de-18a9-4c06-8b43-5214ae7a89a9.png", alt: "AQA Group VR Experience Design" },
      { src: "/lovable-uploads/e9ff0741-ec96-470e-b68e-3443cd5dddd1.png", alt: "AQA Group Mobile App Design" },
      { src: "/lovable-uploads/bf0cf575-5ca2-4ba9-8adc-baba0c8e181d.png", alt: "AQA Group Desktop Website Design" },
      { src: "/lovable-uploads/9e77dbee-24bf-4c37-8923-4c938248c684.png", alt: "AQA Group Expertise Page Design" },
      { src: "/lovable-uploads/e58c7e72-dc68-42b4-ae8f-b9cdf550a518.png", alt: "AQA Group Contact Page Design" },
      { src: "/lovable-uploads/0929a14f-34e4-48ac-be77-7853b55de84f.png", alt: "AQA Group Complete Design System" }
    ]
  }
};
// Available projects with their Studio page info
const availableProjects = [
  {
    title: "Great Eastern Takaful Malaysia",
    slug: "great-eastern-takaful-malaysia",
    description: "UX Audit",
    image: "/lovable-uploads/69a2f54d-177c-4bcd-9167-0e4939d7b7fb.png"
  },
  {
    title: "PolicyStreet - InsurTech",
    slug: "policystreet-car-insurance-platform", 
    description: "Insurance marketplace platform",
    image: "/lovable-uploads/8537072c-4ef3-428b-8003-c4c1877fac8c.png"
  },
  {
    title: "Aqa Group of Companies",
    slug: "aqa-group-of-companies",
    description: "Website redesign", 
    image: "/lovable-uploads/6a5cb6e1-03b7-4408-acc9-3a920fc02038.png"
  },
  {
    title: "MoneyX App - Fintech",
    slug: "moneyx-savings-goals-manual-entry",
    description: "App feature UIUX design",
    image: "/lovable-uploads/38a4617f-499b-49dd-accd-4531551d30ac.png"
  },
  {
    title: "Knock Knock Cafe",
    slug: "knock-knock-cafe-kuala-terengganu",
    description: "Art direction & brand design",
    image: "/lovable-uploads/2ec90d04-32fe-40d7-ad32-37985537079c.png"
  },
  {
    title: "Verdant Solar",
    slug: "verdant-solar-my", 
    description: "Social media and ad graphics",
    image: "/lovable-uploads/b4780aa0-32a0-449d-b039-b83cc167691e.png"
  },
  {
    title: "Referral Program Design",
    slug: "moneyx-moneyxbiz-referral-program",
    description: "Insurance marketplace platform",
    image: "/lovable-uploads/3203ca77-96ca-4347-9e77-4a9c89891bfb.png"
  }
];

const ProjectDetail = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  // Track viewed projects in localStorage
  useEffect(() => {
    if (slug) {
      const viewedProjects = JSON.parse(localStorage.getItem('viewedProjects') || '[]');
      if (!viewedProjects.includes(slug)) {
        viewedProjects.push(slug);
        localStorage.setItem('viewedProjects', JSON.stringify(viewedProjects));
      }
    }
  }, [slug]);

  // Get smart recommendations for two projects
  const getRecommendedProjects = () => {
    const viewedProjects = JSON.parse(localStorage.getItem('viewedProjects') || '[]');
    const currentIndex = availableProjects.findIndex(p => p.slug === slug);
    
    // Find unviewed projects
    const unviewedProjects = availableProjects.filter(p => 
      !viewedProjects.includes(p.slug) && p.slug !== slug
    );
    
    if (unviewedProjects.length >= 2) {
      // Return two random unviewed projects for variety
      const shuffled = [...unviewedProjects].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 2);
    } else if (unviewedProjects.length === 1) {
      // Return one unviewed project and one sequential project
      const viewedOtherProjects = availableProjects.filter(p => 
        viewedProjects.includes(p.slug) && p.slug !== slug
      );
      if (viewedOtherProjects.length > 0) {
        return [unviewedProjects[0], viewedOtherProjects[Math.floor(Math.random() * viewedOtherProjects.length)]];
      } else {
        // Fallback to sequential
        const nextIndex = currentIndex === availableProjects.length - 1 ? 0 : currentIndex + 1;
        const nextIndex2 = nextIndex === availableProjects.length - 1 ? 0 : nextIndex + 1;
        return [unviewedProjects[0], availableProjects[nextIndex2]];
      }
    }
    
    // If all viewed or less than 2 available, return two sequential projects
    let nextIndex = currentIndex === availableProjects.length - 1 ? 0 : currentIndex + 1;
    let nextIndex2 = nextIndex === availableProjects.length - 1 ? 0 : nextIndex + 1;
    
    // Ensure we don't return the current project
    if (availableProjects[nextIndex].slug === slug) {
      nextIndex = nextIndex === availableProjects.length - 1 ? 0 : nextIndex + 1;
    }
    if (availableProjects[nextIndex2].slug === slug) {
      nextIndex2 = nextIndex2 === availableProjects.length - 1 ? 0 : nextIndex2 + 1;
    }
    
    return [availableProjects[nextIndex], availableProjects[nextIndex2]];
  };
  if (!project) {
    return <div className="min-h-screen bg-background">
        <StickyNavbar />
        <div className="max-w-4xl mx-auto py-20 px-4 text-center">
          <h1 className="font-display text-2xl mb-4">Project not found</h1>
          <Link to="/studio">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              BACK TO STUDIO
            </Button>
          </Link>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-background">
      <StickyNavbar />
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-[30px] sm:px-0">
        {/* Back Navigation */}
        <div className="mb-4 sm:mb-8">
          <Link to="/studio" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK TO STUDIO
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
            <p className="text-base sm:text-lg leading-relaxed" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060'
          }}>
              {project.overview}
            </p>
          </div>
        </div>

        {/* Project Information */}
        <div className="mt-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="project-info">
              <AccordionTrigger className="font-display text-xl font-medium">
                Project Information
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-4">
                  {Object.entries(project.projectInfo).map(([key, value], index, array) => <div key={key} className={`pb-2 ${index < array.length - 1 ? 'border-b border-border/50' : ''}`}>
                      <div className="flex flex-col sm:flex-row sm:items-start">
                        <div className="w-full sm:w-48 mb-2 sm:mb-0">
                           <span className="font-mono text-sm text-muted-foreground uppercase tracking-wide">
                             {key}
                           </span>
                        </div>
                        <div className="flex-1">
                           <p className="font-mono text-foreground text-sm uppercase">
                             {value}
                           </p>
                        </div>
                      </div>
                    </div>)}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Verdant Solar Image Slider - Only for verdant-solar-my */}
        {slug === 'verdant-solar-my' && <VerdantSolarImageSlider />}

      </div>

      {/* Project Gallery - Full Width */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 mb-4 sm:mb-12">
        {slug === 'great-eastern-takaful-malaysia' ?
      // Special content layout for Great Eastern Takaful with mixed text and images
      <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="font-display text-2xl font-medium mb-4">What is this about? UX Audit?</h3>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                I led the UX Audit exercise for Great Eastern Takaful Berhad, Malaysia, for their corporate website design revamp.
              </p>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                The objective of this exercise was to provide a fresh update by following the latest corporate identity design of the Great Eastern Group, laid out by the design team based in Singapore.
              </p>
              
              <p className="mb-8" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                It took me 2 months from the audit and web translation for Bahasa Malaysia to the design handover to the AVP of Website in Singapore.
              </p>
              
              {/* First 3 images */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                {greatEasternTakafulImages.slice(0, 3).map((image, index) => <div key={index} className="aspect-video overflow-hidden rounded-[10px] bg-muted">
                    <img src={image} alt={`Great Eastern Takaful - Image ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>)}
              </div>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                However, despite the intense workload and tight deadlines, I handled everything on my own with minimal support from the internal designer at Great Eastern Malaysia.
              </p>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                They only applauded and gave positive feedback on my last day after I submitted my resignation letter, when he said, "Good job! You did it quite fast, only one month plus." (I'll share this specific story in my reflections on work.)
              </p>
              
              <p className="mb-8" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                Unfortunately, I wasn't able to capture or document all of the work I completed here. I often spent more than 8 hours per day, working overtime at Starbucks Jalan Ampang to organize all the audits, design arrangements, and workshop plans as a first-timer. There's another personal story from this experience that I'll share soon.
              </p>
              
              <h3 className="font-display text-2xl font-medium mb-4">What I've done and why it matters?</h3>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                The exercise involved conducting a content audit for every single page on the site, identifying issues such as outdated content and broken links, as well as rearranging the site navigation and content structure for the help centre.
              </p>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                These activities required me to document everything in Excel sheets to organize and plan the next steps for issues such as setting up meetings with content owners, organizing design workshops, and facilitating internal discussions.
              </p>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                I don't have the screenshots of the Excel files and some of the documentation I created due to strict IT security policies enforced by the IT team, as the items were confidential.
              </p>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                Some of the meetings I conducted were with the web owner or gatekeeper, the AVP for Brand and Marketing Communications, Aida Yuhaniza, the AVP for Brand and Corporate Communications, Mastura Abd Rahim, as well as other managers responsible for specific content or site pages on the website. They are very helpful.
              </p>
              
              <p className="mb-8" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                Then, I needed to refer to the Great Eastern Singapore site as the main reference and identify relevant designs for adaptation based on the latest web page content.
              </p>
              
              <h3 className="font-display text-2xl font-medium mb-4">Do I need to do the design in Figma?</h3>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                For this task, it was less about creating new assets or designs in Figma, and more about managing stakeholders' expectations and coordinating communication between managers from different departments to reach a consensus on new content arrangements and web navigation (information architecture).
              </p>
              
              <p className="mb-8" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                The design work in Figma was mainly to visualize the updated layouts for key pages such as corporate, products, company profile, and articles, while also ensuring ease of web development by leveraging the existing templates and assets created by the Singapore team.
              </p>
              
              {/* Last 2 images */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                {greatEasternTakafulImages.slice(3, 5).map((image, index) => <div key={index + 3} className="aspect-video overflow-hidden rounded-[10px] bg-muted">
                    <img src={image} alt={`Great Eastern Takaful - Image ${index + 4}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>)}
              </div>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                This included the new information architecture (before and after), updated illustration placements, color usage, page content layouts, and the side-by-side design of Bahasa Malaysia translations with the English version for every single page, among many other updates.
              </p>
              
              <p className="mb-8" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                Everything was well-documented from the initial phase through to the design phase, including project updates.
              </p>
              
              <h3 className="font-display text-2xl font-medium mb-4">How I did the design workshop?</h3>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                I'll write more. I'm tired.
              </p>
              
              <p className="mb-4" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: '#606060',
            fontSize: '16px'
          }}>
                Let me rest for awhile.
              </p>
            </div>
          </div> : slug === 'knock-knock-cafe-kuala-terengganu' ?
      // Knock Knock Cafe layout with portrait image first, then branding grid
      <div className="space-y-8">
            {/* Portrait image - full width */}
            <div className="w-full">
              <div className="aspect-video overflow-hidden rounded-[10px] bg-muted">
                <img src={knockKnockImages[0]} alt="Knock Knock Cafe Storefront" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            </div>
            
            {/* Branding grid */}
            <KnockKnockBrandingGridContent />
          </div> : slug === 'verdant-solar-my' ?
      // Special layout for Verdant Solar - only the grid in full-width section
      <VerdantSolarGridContent /> :
      // Regular gallery for other projects
      <div className="grid grid-cols-1 gap-2 sm:gap-6">
            {(slug === 'moneyx-savings-goals-manual-entry' ? moneyxImages : 
               slug === 'knock-knock-cafe-kuala-terengganu' ? knockKnockImages : 
               slug === 'policystreet-car-insurance-platform' ? policyStreetImages : 
               slug === 'moneyx-moneyxbiz-referral-program' ? referralProgramImages :
               slug === 'aqa-group-of-companies' ? [
                 "/lovable-uploads/685158de-18a9-4c06-8b43-5214ae7a89a9.png",
                 "/lovable-uploads/e9ff0741-ec96-470e-b68e-3443cd5dddd1.png", 
                 "/lovable-uploads/bf0cf575-5ca2-4ba9-8adc-baba0c8e181d.png",
                 "/lovable-uploads/9e77dbee-24bf-4c37-8923-4c938248c684.png",
                 "/lovable-uploads/e58c7e72-dc68-42b4-ae8f-b9cdf550a518.png",
                 "/lovable-uploads/0929a14f-34e4-48ac-be77-7853b55de84f.png"
               ] :
               [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7, galleryImage8]).map((image, index) => <div key={index} className="aspect-video overflow-hidden rounded-[10px] bg-muted">
                 <img src={image} alt={`${project.title} - Image ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
               </div>)}
          </div>}
      </div>

      {/* Next Projects You Might Like */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 mb-12">
        <div className="border-t border-border pt-12">
          <h2 className="font-display text-2xl font-medium mb-8 text-center">
            Next Projects You Might Like
          </h2>
          {(() => {
            const recommendedProjects = getRecommendedProjects();
            
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedProjects.map((project, index) => (
                  <Link 
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                    className="cursor-pointer block"
                  >
                    <div className="rounded-[10px] overflow-hidden bg-white border border-border">
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-2 sm:p-3" style={{
                        backgroundColor: '#F5F5F5'
                      }}>
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-display text-base font-medium text-black mb-1">
                              {project.title}
                            </h3>
                             <p className="font-mono text-xs sm:text-[10px] text-gray-700 uppercase">
                               {project.description}
                             </p>
                          </div>
                          <div className="ml-4">
                            <ArrowRight className="text-gray-600" size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            );
          })()}
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center">
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
    </div>;
};
export default ProjectDetail;