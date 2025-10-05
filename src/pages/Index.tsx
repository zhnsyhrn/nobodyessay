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
import { Instagram, Linkedin, X, ArrowRight, FileText, TrendingUp, LayoutGrid } from "lucide-react";
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
  const featuredWritings = getFeaturedEssays();
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

      {/* Design Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full">
          <Card className="bg-[#1a1a1a] text-white border-0 rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
              <p className="font-jakarta uppercase tracking-wider text-[10px] sm:text-[11px] md:text-xs mb-4 sm:mb-5 md:mb-6" style={{ color: '#666666' }}>
                Design Philosophy
              </p>
              <h2 className="font-display text-white font-medium mb-4 sm:mb-5 md:mb-6 tracking-tight text-[28px] leading-[36px] sm:text-[32px] sm:leading-[42px] md:text-[40px] md:leading-[52px] lg:text-[48px] lg:leading-[60px]" style={{ color: '#F3F3F3' }}>
                Design is not linear. It's systemic.
                <br className="hidden sm:block" />
                <span className="block sm:inline"> Every system evolves with intention.</span>
              </h2>
              <p className="font-jakarta max-w-4xl mx-auto text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] md:text-[17px] md:leading-[28px] lg:text-[18px] lg:leading-[29px] px-2 sm:px-4 md:px-0" style={{ color: '#D9D9D9' }}>
                I treat every project as a dynamic system of interactions, not a collection of assets. They are living ecosystems — made of people, processes, and touch points.
              </p>
            </div>

            {/* Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-5 lg:gap-6 mt-8 sm:mt-10 md:mt-14 lg:mt-16">
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-6 sm:p-6 md:p-7 lg:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 sm:mb-4 md:mb-5 lg:mb-6">
                  <FileText className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white/80" />
                </div>
                <h3 className="font-jakarta font-semibold mb-3 sm:mb-3 md:mb-4 text-[20px] leading-[28px] sm:text-[21px] sm:leading-[30px] md:text-[22px] md:leading-[32px] lg:text-[24px] lg:leading-[34px]" style={{ color: '#F3F3F3' }}>
                  Imagine & Experiment.
                </h3>
                <p className="font-jakarta text-[14px] leading-[22px] sm:text-[14.5px] sm:leading-[22px] md:text-[15px] md:leading-[23px] lg:text-[16px] lg:leading-[24px]" style={{ color: '#C2C2C2' }}>
                  Map possibilities across the brand system, design prototypes and push boundaries. In this phase, ideas compete, merge, and evolve.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-6 sm:p-6 md:p-7 lg:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 sm:mb-4 md:mb-5 lg:mb-6">
                  <TrendingUp className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white/80" />
                </div>
                <h3 className="font-jakarta font-semibold mb-3 sm:mb-3 md:mb-4 text-[20px] leading-[28px] sm:text-[21px] sm:leading-[30px] md:text-[22px] md:leading-[32px] lg:text-[24px] lg:leading-[34px]" style={{ color: '#F3F3F3' }}>
                  Refine. Cohesion by Design.
                </h3>
                <p className="font-jakarta text-[14px] leading-[22px] sm:text-[14.5px] sm:leading-[22px] md:text-[15px] md:leading-[23px] lg:text-[16px] lg:leading-[24px]" style={{ color: '#C2C2C2' }}>
                  What survives experimentation becomes systemized. Each element serves a role, aligned to function and scalability — visual languages & component libraries.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-6 sm:p-6 md:p-7 lg:p-8 border border-white/10">
                <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 sm:mb-4 md:mb-5 lg:mb-6">
                  <LayoutGrid className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white/80" />
                </div>
                <h3 className="font-jakarta font-semibold mb-3 sm:mb-3 md:mb-4 text-[20px] leading-[28px] sm:text-[21px] sm:leading-[30px] md:text-[22px] md:leading-[32px] lg:text-[24px] lg:leading-[34px]" style={{ color: '#F3F3F3' }}>
                  Emerge. Systems That Lead.
                </h3>
                <p className="font-jakarta text-[14px] leading-[22px] sm:text-[14.5px] sm:leading-[22px] md:text-[15px] md:leading-[23px] lg:text-[16px] lg:leading-[24px]" style={{ color: '#C2C2C2' }}>
                  Finally, the system comes to life. Each brand we design can scale, flex, and evolve without losing its essence. Growth becomes effortless.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Proof in Practice Section */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 tracking-tight">
              Proof in Practice.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
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
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] lg:leading-[60px] font-bold text-foreground mb-8">
            Let's talk. <span className="text-muted-foreground font-normal">I'd love to hear from you.</span>
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