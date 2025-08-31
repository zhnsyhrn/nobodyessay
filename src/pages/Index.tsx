import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { getFeaturedEssays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { Instagram, Linkedin, X } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Portfolio design images - Your latest design portfolio work
const portfolioImages = ["/lovable-uploads/8522cb15-bd11-4bf2-9180-619939a55e10.png",
// Dealn mobile app UI
"/lovable-uploads/53e0e815-137f-432c-b911-7b4e350825c9.png",
// Verdant Solar marketing design
"/lovable-uploads/3f6db57e-8fa8-4856-8053-b49d12f800a6.png",
// PolicyStreet insurance app
"/lovable-uploads/788b5ed7-7c3b-45d4-9514-30ed5c61b691.png",
// Banking app interface
"/lovable-uploads/dae15990-3155-4b7d-b781-466cb9ae3574.png",
// Health tracking app UI
"/lovable-uploads/b738fc37-b9ee-4bea-9dca-797cef546f3a.png",
// Coffee packaging design
"/lovable-uploads/514634dc-ae1c-4362-8cb4-ebdea96fd21e.png",
// Corporate website design
"/lovable-uploads/4982d9b9-bf59-4d92-b1df-f4df6aefa746.png",
// Financial goal tracking UI
"/lovable-uploads/a88214a6-39ca-471c-aee2-8eadc8dafa6f.png",
// Legal firm branding
"/lovable-uploads/6944a474-3ed4-4943-ac6d-b1d7bcf575ec.png" // Spark mobile app onboarding
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
          <h2 className="font-display text-4xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-tight lg:leading-tight">I specialise in user interface and experience design, branding and creative direction.</h2>
          <p style={{
          color: '#606060'
        }} className="font-jakarta text-lg sm:text-lg max-w-2xl leading-[27px] sm:leading-relaxed px-1 mb-6 sm:mb-8 sm:px-0">I create design solutions that bring clarity to complex systems, enhance usability, and strengthen brand presence across digital platforms.</p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-1 sm:px-2">
            <Link to="/studio" className="w-full sm:w-auto">
              <div className="relative">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={80} inactiveZone={0.3} />
                <Button className="font-display min-h-[48px] px-6 w-full touch-manipulation shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">View All Works</Button>
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
              {galleryImages.map((image, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="aspect-square overflow-hidden rounded-lg cursor-pointer">
                        <img src={image} alt={`Design portfolio work ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl w-full p-4 border-0">
                      <div className="relative">
                        <DialogClose className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10 bg-background/80 backdrop-blur-sm p-2">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                        <img src={image} alt={`Design portfolio work ${index + 1}`} className="w-full h-auto rounded-lg" />
                      </div>
                    </DialogContent>
                  </Dialog>
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