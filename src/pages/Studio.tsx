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
  return <div className="min-h-screen bg-background">
      <StickyNavbar />

      {/* Filters Section */}
      <ProjectFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        sortBy={sortBy}
        onSortChange={setSortBy}
        projectTypes={projectTypes}
      />

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 xl:px-16 md:pt-8">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
            {filteredProjects.map((project, index) => {
              const handleClick = (e: React.MouseEvent) => {
                if (!project.hasDetails) {
                  e.preventDefault();
                  setComingSoonDialog({ open: true, title: project.title });
                }
              };

              const CardContent = () => (
                <div className="rounded-[10px] overflow-hidden bg-white h-full flex flex-col">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <LazyImage 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      priority={index < 2}
                      preload={index < 4}
                      blurUp={true}
                    />
                  </div>
                  <div className="p-2 sm:p-3" style={{ backgroundColor: '#F5F5F5' }}>
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
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <ArrowRight className="text-black" size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );

              return project.hasDetails ? (
                <Link key={project.slug} to={`/projects/${project.slug}`} className="group cursor-pointer h-full">
                  <CardContent />
                </Link>
              ) : (
                <div key={project.slug} onClick={handleClick} className="group cursor-pointer h-full">
                  <CardContent />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction page="projects" />
      
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