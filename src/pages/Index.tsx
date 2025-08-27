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

// Portfolio design images - Your uploaded design work
const portfolioImages = [
  "/lovable-uploads/5e22d04c-6828-4453-8808-32c27baf6300.png", // Dealn mobile app UI
  "/lovable-uploads/87978cbd-e470-43d1-8333-9b508eb0b9c2.png", // Verdant Solar marketing design
  "/lovable-uploads/b4c34ae3-5a20-4ed1-8698-0dc1ee592864.png", // PolicyStreet insurance app
  "/lovable-uploads/fb470af7-08a0-44be-9c12-d70835933af9.png", // Banking app interface
  "/lovable-uploads/3f87fe59-00ad-4e23-ab43-17deef621121.png", // Health tracking app UI
  "/lovable-uploads/142e34cc-19ad-4a3d-81d0-cb0541aa6d36.png", // Coffee packaging design
  "/lovable-uploads/a0a6813e-77fb-4198-98df-6a3b6567f65e.png", // Corporate website design
  "/lovable-uploads/500eeae1-3838-468e-88fb-9ec65fbd80bb.png", // Financial goal tracking UI
  "/lovable-uploads/b7be53e6-a0c5-4056-9aec-355fee6e1d3c.png", // Legal firm branding
  "/lovable-uploads/8a85e726-bd5e-4bb2-9714-dca0e7968541.png"  // Spark mobile app onboarding
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