import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { getFeaturedEssays, essays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FigjamCursor from "@/components/FigjamCursor";
import { Instagram, Linkedin, X, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { LazyImage } from "@/components/ui/lazy-image";
import { useCarouselPreloader } from "@/hooks/useImagePreloader";
import { projects } from "@/data/projects";

// Portfolio design images - Your latest design portfolio work
const portfolioImages = [
  { src: "/lovable-uploads/4f35efbc-ddf9-451c-bf0a-e7c2e5ccceec.png", title: "MoneyX App", type: "App Design" },
  { src: "/lovable-uploads/ed2d1384-cbe4-4b7a-8d35-9fbad4f3f104.png", title: "Great Eastern Takaful", type: "UX/UI Design" },
  { src: "/lovable-uploads/f4697a18-0878-474e-993a-80b25600aa97.png", title: "Mobile App Screens", type: "App Design" },
  { src: "/lovable-uploads/ebb70966-3d48-4bd8-a0fb-dcb74281f5fb.png", title: "PolicyStreet", type: "UX/UI Design" },
  { src: "/lovable-uploads/87011945-cf3d-4d63-8f09-146843fb1e36.png", title: "Banking & Finance App", type: "App Design" },
  { src: "/lovable-uploads/a4606376-f5cc-4a88-bf08-f8485cba771a.png", title: "Dealn Mobile App", type: "Product Design" },
  { src: "/lovable-uploads/151a6112-1d81-410d-b905-46eb1820545e.png", title: "Knock Knock Cafe", type: "Branding" },
  { src: "/lovable-uploads/9fe47bb5-a2b9-40fc-8df4-560e811a56b4.png", title: "Finance App Screens", type: "App Design" },
  { src: "/lovable-uploads/c4f41984-363c-4bd4-92f4-318ddc3e4368.png", title: "AQA Group of Companies", type: "Web Design" },
  { src: "/lovable-uploads/b4c83dca-133b-41b0-9c28-44746d3f650f.png", title: "Coffee Packaging", type: "Branding" },
];
const Index = () => {
  const featuredJournals = getFeaturedEssays();
  const latestAnnouncement = essays.find((e) => e.category === "Announcement");
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const heroRef = React.useRef<HTMLElement>(null);
  const galleryImages = portfolioImages;

  // Preload carousel images intelligently
  useCarouselPreloader(galleryImages.map(g => g.src), current, 3);
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
      <div
        style={{
          backgroundColor: "#f7f8fa",
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
      <StickyNavbar />

      {/* Announcement banner */}
      {latestAnnouncement && (
        <div className="pt-10 sm:pt-14 px-4 sm:px-6 flex justify-center fade-in">
          <Link
            to={`/journals/${latestAnnouncement.slug}`}
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background pl-1.5 pr-3 py-1.5 hover:border-foreground/30 transition-colors max-w-full"
          >
            <span
              className="font-typewriter uppercase text-[10px] rounded-full px-2 py-0.5 animate-soft-pulse"
              style={{
                color: "#1e40af",
                backgroundColor: "#dbeafe",
                border: "1px solid #bfdbfe",
                letterSpacing: "0.08em",
              }}
            >
              New
            </span>
            <span className="font-jakarta text-[13px] text-foreground truncate max-w-[220px] sm:max-w-none">
              {latestAnnouncement.title}
            </span>
            <ArrowRight
              size={14}
              className="shrink-0 transition-transform group-hover:translate-x-0.5"
              style={{ color: "#606060" }}
            />
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-8 sm:py-12 lg:py-20 px-4 sm:px-6 fade-in pb-4 sm:pb-6 md:cursor-none">
        <FigjamCursor targetRef={heroRef} label="You" color="#ec4899" />
        <div className="max-w-6xl mx-auto text-left lg:text-center relative">
          <h2 className="font-display text-4xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-tight lg:leading-tight">Experiment Freely, Design Fearlessly.</h2>
          <p style={{
          color: '#606060'
        }} className="font-jakarta text-lg sm:text-lg max-w-2xl lg:mx-auto leading-[27px] sm:leading-relaxed px-1 mb-6 sm:mb-8 sm:px-0">I'm a multidisciplinary designer specialist in product design. 5 years of experience within FinTech, InsurTech, and B2B SaaS ecosystem. Currently, exploring AI-tech stacks to build functional prototype.</p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-1 sm:px-2 lg:justify-center">
            <Link to="/studio" className="w-full sm:w-auto">
              <div className="relative rounded-full">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={80} inactiveZone={0.3} />
                <Button className="font-display min-h-[48px] px-6 w-full touch-manipulation shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">View All Works</Button>
              </div>
            </Link>
            <Link to="/journals" className="w-full sm:w-auto">
              <Button variant="light" className="font-display min-h-[48px] px-6 w-full touch-manipulation">
                Read My Thoughts
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>

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
              {galleryImages.map((item, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="group relative aspect-square overflow-hidden rounded-[10px] cursor-pointer">
                         <LazyImage src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" priority={index < 2}
                    preload={index < 3}
                    blurUp={true}
                    />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-white/80 mb-2">
                            {item.type}
                          </p>
                          <h3 className="font-display text-base sm:text-lg font-medium text-white mb-3 max-w-[90%]">
                            {item.title}
                          </h3>
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-black font-display text-xs sm:text-sm">
                            View More <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl w-full p-4 border-0">
                      <div className="relative">
                        <DialogClose className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10 bg-background/80 backdrop-blur-sm p-2">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                         <LazyImage src={item.src} alt={item.title} className="w-full h-auto rounded-[10px]" priority={true}
                    blurUp={true} // Enable blur-up effect
                    />
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <ScrollToTopButton />
    </div>;
};
export default Index;