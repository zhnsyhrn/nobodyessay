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
import { motion, AnimatePresence } from "framer-motion";
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
  
  // ZHA 4-Filter states
  const [selectedExpertise, setSelectedExpertise] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  
  // Get unique options dynamically from data
  const availableExpertise = useMemo(() => {
    const set = new Set(projects.map(p => p.expertise || p.type));
    return Array.from(set).sort();
  }, []);

  const availableCompanies = useMemo(() => {
    const set = new Set(projects.map(p => p.company));
    return Array.from(set).sort();
  }, []);
  
  // Filter projects by 4 criteria
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (selectedExpertise !== "all" && (project.expertise || project.type) !== selectedExpertise) return false;
      if (selectedCompany !== "all" && project.company !== selectedCompany) return false;
      if (selectedStatus !== "all" && project.status !== selectedStatus) return false;
      if (selectedCountry !== "all" && project.country !== selectedCountry) return false;
      return true;
    });
  }, [selectedExpertise, selectedCompany, selectedStatus, selectedCountry]);

  const handleClearAll = () => {
    setSelectedExpertise("all");
    setSelectedCompany("all");
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
          {/* ZHA-Style 4-Dropdown Filters Bar */}
          <ProjectFiltersBar 
            selectedExpertise={selectedExpertise}
            onExpertiseChange={setSelectedExpertise}
            selectedCompany={selectedCompany}
            onCompanyChange={setSelectedCompany}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
            onClearAll={handleClearAll}
            totalCount={filteredProjects.length}
            availableExpertise={availableExpertise}
            availableCompanies={availableCompanies}
          />

          {/* Animated ZHA Grid Container */}
          <div className="min-h-[500px] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:grid-flow-dense">
              <AnimatePresence>
                {filteredProjects.map((project, index) => {
                  const isFirstBento = index === 0 && filteredProjects.length >= 3;

                  return (
                    <motion.div
                      key={project.slug}
                      layout="position"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                        delay: Math.min(index * 0.02, 0.15),
                      }}
                      className={
                        isFirstBento 
                          ? "lg:col-span-2 lg:row-span-2" 
                          : "lg:col-span-1 lg:row-span-1"
                      }
                    >
                      <ProjectCard 
                        project={project} 
                        priority={index < 3}
                        preload={index < 5}
                        showBlobBackground={isFirstBento}
                        className="h-full"
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
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Empty state when no projects match filter */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-16 text-center font-mono"
            >
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-4">
                No projects match the selected criteria.
              </p>
              <button
                type="button"
                onClick={handleClearAll}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-[4px] text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
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