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
import { ProjectFilters } from "@/components/ProjectFilters";
import { ProjectCard } from "@/components/ProjectCard";
import { Helmet } from "react-helmet-async";

// Sample project images - you can replace these with actual project images
import galleryImage1 from "@/assets/gallery-01.jpg";
import galleryImage2 from "@/assets/gallery-02.jpg";
import galleryImage3 from "@/assets/gallery-03.jpg";
import galleryImage4 from "@/assets/gallery-04.jpg";
import galleryImage5 from "@/assets/gallery-05.jpg";
import galleryImage6 from "@/assets/gallery-06.jpg";
import galleryImage7 from "@/assets/gallery-07.jpg";
import galleryImage8 from "@/assets/gallery-08.jpg";
import galleryImage9 from "@/assets/gallery-09.jpg";
const Studio = () => {
  // Carousel state
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  
  // Coming soon dialog state
  const [comingSoonDialog, setComingSoonDialog] = useState({ open: false, title: "" });
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState<"date" | "alphabetical">("date");
  
  // Get unique project types
  const projectTypes = useMemo(() => {
    const types = new Set(projects.map(p => p.type));
    return Array.from(types).sort();
  }, []);
  
  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply type filter
    if (selectedType !== "all") {
      filtered = filtered.filter(project => project.type === selectedType);
    }
    
    // Apply sorting
    const sorted = [...filtered];
    if (sortBy === "alphabetical") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sorted.sort((a, b) => {
        const dateA = a.date || "0";
        const dateB = b.date || "0";
        return dateB.localeCompare(dateA);
      });
    }
    
    return sorted;
  }, [searchQuery, selectedType, sortBy]);

  // All gallery images
  const allImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7, galleryImage8, galleryImage9];

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
      {/* Projects Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 xl:px-16 md:pt-8">
        <div className="w-full">
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