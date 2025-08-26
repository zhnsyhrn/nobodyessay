import React, { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
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
  const allImages = [
    galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5,
    galleryImage6, galleryImage7, galleryImage8, galleryImage9
  ];

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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 fade-in">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-medium mb-4 sm:mb-6 tracking-tight" style={{ lineHeight: '72px' }}>
            Featured Projects
          </h1>
          <p className="font-display text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#606060' }}>
            A curated collection of design projects, creative explorations, and visual narratives.
          </p>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            setApi={setApi}
            className="w-full relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={image}
                      alt={`Design project ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
          
          {/* Dot indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(allImages.length / 2) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  Math.ceil(current / 2) === index + 1 || (current === 0 && index === 0)
                    ? "bg-foreground" 
                    : "bg-muted-foreground/30"
                }`}
                onClick={() => api?.scrollTo(index * 2)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-medium mb-8 sm:mb-12 text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted mb-4">
                  <img
                    src={allImages[(project - 1) % allImages.length]}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-medium mb-2">
                  Project {project}
                </h3>
                <p className="font-typewriter text-muted-foreground text-sm">
                  Design exploration and creative process documentation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-xs sm:text-sm text-muted-foreground">
            © 2025 | byzahin. All rights reserved. — All thoughts are freely given
          </p>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default Studio;