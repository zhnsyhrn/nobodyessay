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
          <p className="font-display text-base sm:text-lg max-w-2xl leading-relaxed px-2 mb-8" style={{ color: '#606060' }}>
            Because what's the point if I don't overshare?
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 px-2">
            <Link to="/studio">
              <Button className="font-display min-h-[44px] px-6 w-full sm:w-auto">
                The Evidence
              </Button>
            </Link>
            <Link to="/writings">
              <Button variant="light" className="font-display min-h-[44px] px-6 w-full sm:w-auto">
                Read My Thoughts
              </Button>
            </Link>
          </div>
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
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-display text-xs sm:text-sm text-muted-foreground">
              © 2025 | byzahin. All rights reserved. — All thoughts are freely given
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/byzahin_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 7.204.048 6.48.082 5.2.207 4.15.374c-1.08.172-2.04.402-2.833.777-.824.389-1.527.918-2.223 1.614C.397 3.467-.032 4.14.001 5.204c-.033.659-.01 1.126.048 1.851.061.726.186 2.042.374 3.122.172 1.08.402 2.04.777 2.833.389.824.918 1.527 1.614 2.223.696.696 1.399 1.225 2.223 1.614.793.375 1.753.605 2.833.777 1.08.172 2.396.297 3.122.374.725.058 1.192.081 1.851.048.659.033 1.126.01 1.851-.048.726-.077 2.042-.202 3.122-.374 1.08-.172 2.04-.402 2.833-.777.824-.389 1.527-.918 2.223-1.614.696-.696 1.225-1.399 1.614-2.223.375-.793.605-1.753.777-2.833.172-1.08.297-2.396.374-3.122.058-.725.081-1.192.048-1.851.033-.659.01-1.126-.048-1.851-.077-.726-.202-2.042-.374-3.122-.172-1.08-.402-2.04-.777-2.833-.389-.824-.918-1.527-1.614-2.223C19.533.397 18.86-.032 17.796.001c-.659-.033-1.126-.01-1.851.048-.726.061-2.042.186-3.122.374-1.08.172-2.04.402-2.833.777-.824.389-1.527.918-2.223 1.614C7.071 3.51 6.542 4.213 6.153 5.037c-.375.793-.605 1.753-.777 2.833-.172 1.08-.297 2.396-.374 3.122-.058.725-.081 1.192-.048 1.851zm-.017 21.996c3.621 0 4.088-.013 4.813-.048.726-.034 2.006-.159 3.056-.326 1.054-.167 1.99-.388 2.763-.752.802-.376 1.479-.882 2.163-1.566.684-.684 1.19-1.361 1.566-2.163.364-.773.585-1.709.752-2.763.167-1.05.292-2.33.326-3.056.035-.725.048-1.192.048-4.813s-.013-4.088-.048-4.813c-.034-.726-.159-2.006-.326-3.056-.167-1.054-.388-1.99-.752-2.763-.376-.802-.882-1.479-1.566-2.163-.684-.684-1.361-1.19-2.163-1.566-.773-.364-1.709-.585-2.763-.752-1.05-.167-2.33-.292-3.056-.326-.725-.035-1.192-.048-4.813-.048s-4.088.013-4.813.048c-.726.034-2.006.159-3.056.326-1.054.167-1.99.388-2.763.752-.802.376-1.479.882-2.163 1.566-.684.684-1.19 1.361-1.566 2.163-.364.773-.585 1.709-.752 2.763-.167 1.05-.292 2.33-.326 3.056-.035.725-.048 1.192-.048 4.813s.013 4.088.048 4.813c.034.726.159 2.006.326 3.056.167 1.054.388 1.99.752 2.763.376.802.882 1.479 1.566 2.163.684.684 1.361 1.19 2.163 1.566.773.364 1.709.585 2.763.752 1.05.167 2.33.292 3.056.326.725.035 1.192.048 4.813.048zM5.838 12.017c0-3.4 2.779-6.179 6.179-6.179s6.179 2.779 6.179 6.179-2.779 6.179-6.179 6.179-6.179-2.779-6.179-6.179zm2.016 0c0 2.299 1.864 4.163 4.163 4.163s4.163-1.864 4.163-4.163-1.864-4.163-4.163-4.163-4.163 1.864-4.163 4.163zm7.406-6.584c0 .796-.646 1.441-1.441 1.441s-1.441-.645-1.441-1.441.645-1.441 1.441-1.441 1.441.645 1.441 1.441z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/zahinsyahiran/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default Index;