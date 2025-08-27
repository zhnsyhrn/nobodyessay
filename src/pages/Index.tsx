import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { getFeaturedEssays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { Instagram, Linkedin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Portfolio design images
const portfolioImages = [
  "/lovable-uploads/7818744d-3050-4496-824e-8c4c7a8b1a4e.png", // UI Components & Wireframes
  "/lovable-uploads/c528a13e-2b16-4074-9369-d55af61f04ac.png", // Dashboard Design
  "/lovable-uploads/1dcf470c-2ae1-4041-9270-802a1b166480.png", // Goal Creation Interface
  "/lovable-uploads/c931605e-784c-4a52-ae00-b9eb94d0be58.png", // Transaction Flows
  "/lovable-uploads/75943d99-0ed4-4445-9bdd-80d0bab01e5f.png", // Mobile UI Flow
  "/lovable-uploads/02594b85-35a5-4f5e-b0f9-c93ee3f201a7.png", // Interface Design
  "/lovable-uploads/2fbd8484-6091-4de8-8f0d-0c7c7ded5fb0.png", // Data Visualization
  "/lovable-uploads/b0b84054-8135-427f-8108-9f34cecc6fa7.png", // User Experience Flow
  "/lovable-uploads/307c85f4-d33f-45a4-83d5-c8d95c1b4a07.png", // Brand Design
  "/lovable-uploads/318ce04d-e3cb-473d-81bc-63e4c917981c.png"  // Product Design
];
const Index = () => {
  const featuredWritings = getFeaturedEssays();
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const galleryImages = portfolioImages;
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
  return <div className="min-h-screen bg-background">
      <StickyNavbar />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 fade-in pb-4 sm:pb-6">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="font-display text-4xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-tight lg:leading-tight">I do design and write. Everything's documented here. Because what's the point if I don't overshare?</h2>
          <p style={{
          color: '#606060'
        }} className="font-mono text-lg sm:text-lg max-w-2xl leading-[27px] sm:leading-relaxed px-1 mb-6 sm:mb-8 sm:px-0">I'd learned to code this site using AI so that I can show my collection of works.</p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-1 sm:px-2">
            <Link to="/studio" className="w-full sm:w-auto">
              <div className="relative">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={80} inactiveZone={0.3} />
                <Button className="font-display min-h-[48px] px-6 w-full touch-manipulation shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
                  The Evidence
                </Button>
              </div>
            </Link>
            <Link to="/writings" className="w-full sm:w-auto">
              <Button variant="light" className="font-display min-h-[48px] px-6 w-full touch-manipulation">
                Read My Thoughts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-2 sm:py-4">
        <div className="w-full">
          <Carousel opts={{
          align: "start",
          loop: true
        }} plugins={[Autoplay({
          delay: 3000,
          stopOnInteraction: true
        })]} setApi={setApi} className="w-full relative">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img src={image} alt={`Design portfolio work ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>;
};
export default Index;