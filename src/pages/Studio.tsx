import React, { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Autoplay from "embla-carousel-autoplay";

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

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 fade-in">
        <div className="max-w-6xl mx-auto text-left sm:text-center">
          <h1 className="font-display text-4xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-tight lg:leading-tight">Turning briefs into real things, even the ones that change halfway.</h1>
          <p className="font-mono sm:text-lg max-w-2xl sm:mx-auto leading-[27px] sm:leading-[29px]" style={{
          fontSize: '18px',
          color: '#606060'
        }}>Your unsolicited critique is expected, your approval is optional, and your silence will be taken as applause. Scroll, skim, judge… I'll act surprised either way.</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "South Sabah Al-Ahmad Masterplan",
                slug: "south-sabah-masterplan",
                description: "Comprehensive urban development planning for sustainable community growth"
              },
              {
                title: "Changfeng Mixed Use Development", 
                slug: "changfeng-mixed-use",
                description: "Integrated commercial and residential complex with modern architectural design"
              },
              {
                title: "Metropolitan Transit Hub",
                slug: "metropolitan-transit-hub",
                description: "Multi-modal transportation center connecting various transit systems"
              },
              {
                title: "Waterfront Cultural District",
                slug: "waterfront-cultural-district",
                description: "Arts and culture destination featuring museums, galleries, and performance venues"
              },
              {
                title: "Sustainable Office Complex",
                slug: "sustainable-office-complex",
                description: "Energy-efficient commercial development with innovative green building technologies"
              },
              {
                title: "Smart City Innovation Park",
                slug: "smart-city-innovation-park",
                description: "Technology-focused development promoting innovation and digital transformation"
              }
            ].map((project, index) => (
              <Link key={index} to={`/projects/${project.slug}`} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <img 
                    src={allImages[index % allImages.length]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    loading="lazy" 
                  />
                </div>
                <div className="p-6 rounded-b-lg" style={{ backgroundColor: '#F5F5F5' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-medium text-black mb-1">
                        {project.title}
                      </h3>
                      <p className="font-mono text-sm text-gray-700">
                        {project.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-gray-600"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More to Explore */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-display text-xl sm:text-2xl font-medium mb-4 sm:mb-6">
            More to Explore
          </h3>
          
          <p className="font-typewriter text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-2 text-sm sm:text-base">
            Discover more essays and reflections, or learn about the person behind these words.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <Link to="/writings" className="w-full sm:w-auto">
              <Button className="font-display min-h-[48px] px-6 w-full">
                All Writings
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button variant="ghost" className="font-display min-h-[48px] px-6 w-full">
                About the Writer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>;
};
export default Studio;