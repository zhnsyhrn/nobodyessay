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
import { LazyImage } from "@/components/ui/lazy-image";
import { useCarouselPreloader } from "@/hooks/useImagePreloader";

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
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="font-display text-4xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-tight lg:leading-tight">I specialise in user interface and experience design, branding and creative direction.</h2>
          <p style={{
          color: '#606060'
        }} className="font-jakarta text-lg sm:text-lg max-w-2xl leading-[27px] sm:leading-relaxed px-1 mb-6 sm:mb-8 sm:px-0">I create design solutions that bring clarity to complex systems.</p>
          
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
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-[#1a1a1a] text-white border-0 rounded-[24px] p-8 sm:p-16 text-center">
            <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 tracking-tight leading-tight">
              Design is not linear. It's systemic.<br />
              Every system evolves with intention.
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              I treat every project as a dynamic system of interactions,<br className="hidden sm:block" />
              not a collection of assets. They are living ecosystems — made of people, processes, and touch points.
            </p>
          </Card>
        </div>
      </section>

      {/* Proof in Practice Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <Link to="/studio" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src="/lovable-uploads/151a6112-1d81-410d-b905-46eb1820545e.png"
                    alt="Knock Knock Cafe - Art Direction & Brand Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium mb-1">Knock Knock Cafe</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">ART DIRECTION & BRAND DESIGN</p>
                </div>
              </Card>
            </Link>

            {/* Project 2 */}
            <Link to="/studio" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-[#ff4438]">
                  <LazyImage
                    src="/lovable-uploads/87011945-cf3d-4d63-8f09-146843fb1e36.png"
                    alt="MoneyX App - Fintech App Feature UX/UI Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium mb-1">MoneyX App - Fintech</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">APP FEATURE UX/UI DESIGN</p>
                </div>
              </Card>
            </Link>

            {/* Project 3 */}
            <Link to="/studio" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src="/lovable-uploads/f4697a18-0878-474e-993a-80b25600aa97.png"
                    alt="Great Eastern Takaful - Website Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium mb-1">Great Eastern Takaful</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">WEBSITE REDESIGN</p>
                </div>
              </Card>
            </Link>

            {/* Project 4 */}
            <Link to="/studio" className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src="/lovable-uploads/ebb70966-3d48-4bd8-a0fb-dcb74281f5fb.png"
                    alt="PolicyStreet - Mobile App Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium mb-1">PolicyStreet Mobile</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">MOBILE APP UX/UI DESIGN</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>;
};
export default Index;