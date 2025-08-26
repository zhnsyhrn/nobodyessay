import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { getFeaturedEssays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import gallery images
import gallery01 from "@/assets/gallery-01.jpg";
import gallery02 from "@/assets/gallery-02.jpg";
import gallery03 from "@/assets/gallery-03.jpg";
import gallery04 from "@/assets/gallery-04.jpg";
import gallery05 from "@/assets/gallery-05.jpg";
import gallery06 from "@/assets/gallery-06.jpg";
import gallery07 from "@/assets/gallery-07.jpg";
import gallery08 from "@/assets/gallery-08.jpg";
import gallery09 from "@/assets/gallery-09.jpg";

const Index = () => {
  const featuredWritings = getFeaturedEssays();
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  
  const galleryImages = [
    gallery01, gallery02, gallery03, gallery04, gallery05,
    gallery06, gallery07, gallery08, gallery09
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 fade-in pb-4 sm:pb-6">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight" style={{ lineHeight: '56px' }}>
            I do design and write. Everything's documented here.
          </h2>
          <p className="font-display text-base sm:text-lg max-w-2xl leading-relaxed px-2" style={{ color: '#606060' }}>
            Want to really know someone? Skip the selfies—read their scribbles.
          </p>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-2 sm:py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            setApi={setApi}
            className="w-full relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
            {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  Math.ceil(current / 3) === index + 1 || (current === 0 && index === 0)
                    ? "bg-foreground" 
                    : "bg-muted-foreground/30"
                }`}
                onClick={() => api?.scrollTo(index * 3)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Separator />
      </div>

      {/* Latest Writings */}
      <section className="py-0 sm:py-0 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <h3 className="font-display text-xl sm:text-2xl font-medium">
              Latest Writings
            </h3>
            <Link to="/writings">
              <Button variant="ghost" className="font-display text-sm min-h-[44px] px-4">
                View all writings →
              </Button>
            </Link>
          </div>
          
          <div className="space-y-8 sm:space-y-12">
            {featuredWritings.map((writing, index) => (
              <Card key={index} className="p-4 sm:p-6 lg:p-8 border-border hover:border-foreground/20 transition-colors">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-sm text-muted-foreground font-typewriter">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span>{writing.date}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="bg-muted px-2 py-1 rounded text-xs inline-block w-fit">
                        {writing.category}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm">{writing.readTime}</span>
                  </div>
                  
                  <h2 className="font-display text-lg sm:text-xl font-medium leading-tight">
                    {writing.title}
                  </h2>
                  
                  <p className="font-typewriter text-muted-foreground leading-relaxed text-sm sm:text-base mb-2">
                    {writing.excerpt}
                  </p>
                  
                  <Link to={`/writings/${writing.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="font-display text-sm p-0 h-auto hover:bg-transparent hover:text-foreground min-h-[44px] flex items-center"
                    >
                      Read more →
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30 mt-12 sm:mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-display text-xl sm:text-2xl font-medium mb-4 sm:mb-6">
            More to Explore
          </h3>
          
          <p className="font-typewriter text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-2 text-sm sm:text-base">
            Discover more essays and reflections, or learn about the person behind these words.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/writings">
              <Button className="font-display min-h-[44px] px-6 w-full sm:w-auto">
                All Writings
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="font-display min-h-[44px] px-6 w-full sm:w-auto">
                About the Writer
              </Button>
            </Link>
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

export default Index;