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

  return (
    <div className="min-h-screen bg-background">
      <StickyNavbar />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 fade-in">
        <div className="max-w-6xl mx-auto text-left sm:text-center">
          <h1 className="font-display text-4xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-tight lg:leading-tight">
            Here is my collection of designs and experiments. Turning briefs into real things, even the ones that change halfway.
          </h1>
          <p className="font-mono sm:text-lg max-w-2xl sm:mx-auto leading-[27px] sm:leading-[29px]" style={{
            fontSize: '18px',
            color: '#606060'
          }}>
            Your unsolicited critique is expected, your approval is optional, and your silence will be taken as applause. Don't worry, I already judged it harsher than you ever will. Scroll, skim, judge… I'll act surprised either way.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map(project => (
              <div key={project} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                  <img
                    src={allImages[(project - 1) % allImages.length]}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/75 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-display text-lg font-medium mb-2 text-foreground">
                      Project {project}
                    </h3>
                    <p className="font-typewriter text-muted-foreground text-sm">
                      Design exploration and creative process documentation.
                    </p>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Studio;