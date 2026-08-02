import React, { useCallback, useEffect, useState, useMemo } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import ComingSoonDialog from "@/components/ComingSoonDialog";
import CallToAction from "@/components/CallToAction";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import { projects } from "@/data/projects";
import { ProjectFiltersBar } from "@/components/ProjectFiltersBar";
import { ProjectCard } from "@/components/ProjectCard";
import { Helmet } from "react-helmet-async";

const Studio = () => {
  // Carousel state
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  
  // Coming soon dialog state
  const [comingSoonDialog, setComingSoonDialog] = useState({ open: false, title: "" });
  
  // ZHA-Style Filter states
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  
  // Get unique project types dynamically from data
  const projectTypes = useMemo(() => {
    const types = new Set(projects.map(p => p.type));
    return Array.from(types).sort();
  }, []);
  
  // Filter projects by type, status, and country
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (selectedType !== "all" && project.type !== selectedType) return false;
      if (selectedStatus !== "all" && project.status !== selectedStatus) return false;
      if (selectedCountry !== "all" && project.country !== selectedCountry) return false;
      return true;
    });
  }, [selectedType, selectedStatus, selectedCountry]);

  const handleClearAll = () => {
    setSelectedType("all");
    setSelectedStatus("all");
    setSelectedCountry("all");
  };

  // Carousel setup
  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Portfolio | UI/UX & Branding Design Projects by Zahin Syahiran</title>
        <meta name="description" content="Explore my latest UI/UX design, app design, and branding projects. See how I solve complex business problems through intuitive design." />
      </Helmet>
      <h1 className="sr-only">UI/UX and Branding Design Portfolio</h1>
      <StickyNavbar />

      <main className="flex-1 flex flex-col">
      {/* Projects Grid + ZHA Filter Bar */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 xl:px-16 md:pt-8">
        <div className="w-full">
          {/* ZHA-Style Filters Bar */}
          <ProjectFiltersBar 
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
            onClearAll={handleClearAll}
            totalCount={filteredProjects.length}
            availableTypes={projectTypes}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:grid-flow-dense">
            {filteredProjects.map((project, index) => {
              const isFirstBento = index === 0 && filteredProjects.length >= 3;

              return (
                <ProjectCard 
                  key={project.slug} 
                  project={project} 
                  priority={index < 3}
                  preload={index < 5}
                  showBlobBackground={isFirstBento}
                  className={
                    isFirstBento 
                      ? "lg:col-span-2 lg:row-span-2" 
                      : "lg:col-span-1 lg:row-span-1"
                  }
                  imageContainerClassName={
                    isFirstBento 
                      ? "flex-1 min-h-[240px] sm:min-h-[320px] lg:min-h-[440px]" 
                      : "aspect-video"
                  }
                  onClick={(e) => {
                    if (!project.hasDetails) {
                      e.preventDefault();
                      setComingSoonDialog({ open: true, title: project.title });
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <ScrollToTopButton />
      
      <ComingSoonDialog 
        open={comingSoonDialog.open}
        onOpenChange={(open) => setComingSoonDialog(prev => ({ ...prev, open }))}
        projectTitle={comingSoonDialog.title}
      />
    </div>;
};
export default Studio;