import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { getFeaturedEssays, essays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { Instagram, Linkedin, X, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { LazyImage } from "@/components/ui/lazy-image";
import { useCarouselPreloader } from "@/hooks/useImagePreloader";
import { projects } from "@/data/projects";

// Portfolio design images - Your latest design portfolio work
const portfolioImages = ["/lovable-uploads/4f35efbc-ddf9-451c-bf0a-e7c2e5ccceec.png",
// Health tracking app UI
"/lovable-uploads/ed2d1384-cbe4-4b7a-8d35-9fbad4f3f104.png",
// Great Eastern Takaful website
"/lovable-uploads/f4697a18-0878-474e-993a-80b25600aa97.png",
// Mobile app screens
"/lovable-uploads/ebb70966-3d48-4bd8-a0fb-dcb74281f5fb.png",
// PolicyStreet mobile app
"/lovable-uploads/87011945-cf3d-4d63-8f09-146843fb1e36.png",
// Banking/finance app
"/lovable-uploads/a4606376-f5cc-4a88-bf08-f8485cba771a.png",
// Dealn mobile app
"/lovable-uploads/151a6112-1d81-410d-b905-46eb1820545e.png",
// Coffee branding/mugs
"/lovable-uploads/9fe47bb5-a2b9-40fc-8df4-560e811a56b4.png",
// Finance app screens
"/lovable-uploads/c4f41984-363c-4bd4-92f4-318ddc3e4368.png",
// AQA Group website
"/lovable-uploads/b4c83dca-133b-41b0-9c28-44746d3f650f.png" // Coffee packaging
];
const Index = () => {
  const featuredJournals = getFeaturedEssays();
  const latestAnnouncement = essays.find((e) => e.category === "Announcement");
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const galleryImages = portfolioImages;

  // Preload carousel images intelligently
  useCarouselPreloader(galleryImages, current, 3);
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
      <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 fade-in pb-4 sm:pb-6">
        <div className="max-w-6xl mx-auto text-left lg:text-center">
          <h2 className="font-display text-4xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-tight lg:leading-tight">Experiment freely, Design fearlessly.</h2>
          <p style={{
          color: '#606060'
        }} className="font-jakarta text-lg sm:text-lg max-w-2xl lg:mx-auto leading-[27px] sm:leading-relaxed px-1 mb-6 sm:mb-8 sm:px-0">Where ideas play, and designs grow — product design, brand design systems, and rapid R&D for startups.</p>
          
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
                      <div className="aspect-square overflow-hidden rounded-[10px] cursor-pointer">
                         <LazyImage src={image} alt={`Design portfolio work ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" priority={index < 2} // High priority for first 2 images
                    preload={index < 3} // Preload first 3 images for better LCP
                    blurUp={true} // Enable blur-up effect
                    />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl w-full p-4 border-0">
                      <div className="relative">
                        <DialogClose className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10 bg-background/80 backdrop-blur-sm p-2">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                         <LazyImage src={image} alt={`Design portfolio work ${index + 1}`} className="w-full h-auto rounded-[10px]" priority={true} // High priority for dialog images since user explicitly clicked
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

      {/* Proof in Practice Section */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="w-full">
          <div className="text-left md:text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 tracking-tight">
              Proof in Practice.
            </h2>
            <p className="font-jakarta text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] md:text-[17px] md:leading-[28px] lg:text-[18px] lg:leading-[29px] text-muted-foreground max-w-2xl md:mx-auto mb-2">
              Every project is a system in motion. Every outcome is<br className="hidden sm:block" />
              measurable, scalable, enduring.
            </p>
            <Link to="/studio" className="text-primary hover:underline font-medium">
              View More →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {projects.slice(0, 4).map((project, index) => (
              <Link 
                key={project.slug} 
                to={project.hasDetails ? `/projects/${project.slug}` : "/studio"} 
                className="group cursor-pointer h-full"
              >
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-16 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] lg:leading-[60px] font-bold text-foreground mb-8 font-jakarta">
            Let's talk. <span className="text-muted-foreground font-normal">I'd love<br />to hear from you.</span>
          </h2>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Contact
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>;
};
export default Index;