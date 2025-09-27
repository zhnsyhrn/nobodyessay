import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { Check, HelpCircle, Smartphone, Globe, Laptop, Image, FileText, Megaphone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Bcreatives = () => {
  const services = [
    { name: "Mobile Apps Design", icon: Smartphone },
    { name: "Business landing page and websites", icon: Globe }, 
    { name: "SaaS Apps", icon: Laptop },
    { name: "Social Media Graphics", icon: Image },
    { name: "Pitch Decks", icon: FileText },
    { name: "Social Media Ads", icon: Megaphone }
  ];

  return (
    <TooltipProvider>
      <Helmet>
        <title>bcreatives - Design Services | Your Business Best Friend</title>
        <meta name="description" content="Monthly rental and quick sprint design services. Mobile apps, websites, SaaS apps, social media graphics, and more." />
      </Helmet>
      
      <StickyNavbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-16 sm:py-24 bg-bcreatives-hero">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 leading-tight text-black px-2">
              Your Business Best Friend
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-black/80 px-2">
              Monthly rental and quick sprint design services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mt-8 px-2">
              <Button asChild size="lg" className="font-display bg-black text-white hover:bg-black/90 w-full sm:w-auto min-h-[48px]">
                <a href="https://wasap.my/60183943519" target="_blank" rel="noopener noreferrer">
                  I'm Interested
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-display border-black text-black hover:bg-black/10 w-full sm:w-auto min-h-[48px]">
                <Link to="/studio">
                  View Works
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 sm:mb-12 text-center px-2">
              All your design needs covered
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-center space-y-3">
                      <IconComponent className="w-8 h-8 text-primary" />
                      <p className="font-medium text-base sm:text-lg leading-snug">{service.name}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-4 sm:px-6 py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">WHAT EVERYONE IS SAYING</p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium px-2">
                Trusted by professionals.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 text-left bg-white">
                <div className="mb-6">
                  <p className="text-base sm:text-lg leading-relaxed mb-4">
                    "Zahin gave us the flexibility to test ideas quickly without the cost of an in-house team. The speed and clarity were game-changing."
                  </p>
                </div>
                <div className="pt-4 border-t border-muted">
                  <p className="font-medium text-sm">— Founder, SaaS Startup</p>
                </div>
              </Card>
              
              <Card className="p-6 sm:p-8 text-left bg-white">
                <div className="mb-6">
                  <p className="text-base sm:text-lg leading-relaxed mb-4">
                    "As a growing team, design used to slow us down. With Zahin, we can iterate in days, not weeks. It feels like having a design lab on demand."
                  </p>
                </div>
                <div className="pt-4 border-t border-muted">
                  <p className="font-medium text-sm">— Product Lead, Fintech</p>
                </div>
              </Card>
              
              <Card className="p-6 sm:p-8 text-left bg-white">
                <div className="mb-6">
                  <p className="text-base sm:text-lg leading-relaxed mb-4">
                    "From landing pages to product screens, the sandbox model just works. No fuss, no waiting — just design that keeps up with us."
                  </p>
                </div>
                <div className="pt-4 border-t border-muted">
                  <p className="font-medium text-sm">— Marketing Director, D2C Brand</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="px-4 sm:px-6 py-16 bg-bcreatives-pricing">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 sm:mb-12 text-center px-2" style={{ color: '#d1ff00' }}>
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Plan 1 */}
              <Card className="p-4 sm:p-6 lg:p-8 relative bg-white">
                <div className="mb-6">
                  <h3 className="font-display text-xl sm:text-2xl font-medium mb-2 leading-tight">Monthly Design Subscription</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">Available slot: 3 seats per month</p>
                  <div className="text-2xl sm:text-3xl font-display font-medium">
                    MYR 1,800<span className="text-base sm:text-lg text-muted-foreground">/Mo</span>
                  </div>
                </div>
                
                <Separator className="mb-6" />
                
                <div className="space-y-4">
                  <h4 className="font-medium mb-3 text-sm sm:text-base">Includes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base leading-relaxed">Marketing and social media graphics</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base leading-relaxed">Product design for mobile and web</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base leading-relaxed">Up to 2 design syncs and requests per week</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>👉 At most two meetings (or check-ins) per week where the design team (and sometimes other stakeholders) gather to synchronize — i.e., align on progress, decisions, blockers, or next steps.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Button asChild className="w-full font-display bg-black text-white hover:bg-black/90">
                    <a href="https://wasap.my/60183943519" target="_blank" rel="noopener noreferrer">
                      I'm Interested
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full font-display border-black text-black hover:bg-black/10">
                    <Link to="/studio">
                      View Works
                    </Link>
                  </Button>
                </div>
              </Card>

              {/* Plan 2 */}
              <Card className="p-4 sm:p-6 lg:p-8 relative bg-white">
                <div className="mb-6">
                  <h3 className="font-display text-xl sm:text-2xl font-medium mb-2 leading-tight">Quick Sprint</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">Available slot: Up to 2 seats per month</p>
                  <div className="text-2xl sm:text-3xl font-display font-medium">
                    MYR 3,800
                  </div>
                </div>
                
                <Separator className="mb-6" />
                
                <div className="space-y-4">
                  <h4 className="font-medium mb-3 text-sm sm:text-base">Includes:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base leading-relaxed">Best for pitch decks and marketing projects, quick prototyping, or UX refinements</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base leading-relaxed">Marketing and social media graphics based on your social media content calendar</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base leading-relaxed">Product design for mobile and web ready with copywriting for your first product landing page</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Button asChild className="w-full font-display bg-black text-white hover:bg-black/90">
                    <a href="https://wasap.my/60183943519" target="_blank" rel="noopener noreferrer">
                      I'm Interested
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full font-display border-black text-black hover:bg-black/10">
                    <Link to="/studio">
                      View Works
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Hire Me Section */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium mb-6 sm:mb-8 text-center px-2">
              Why hire me?
            </h2>
            <div className="prose prose-base sm:prose-lg max-w-none px-2">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a product designer from Malaysia, and I've had the chance to work across different startups — from Insurtech and Fintech to B2B commerce and software houses. Along the way, I've learned how design can directly shape business growth, not just make things look good.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I also started Senangreka (Designloka), my first venture in design services. Running it taught me what it's really like for businesses when they struggle to find the right designer — someone reliable who understands both the creative side and the business side.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                That's why I don't just stop at design. I bring in everything I've learned from my past roles, combining system-oriented thinking with an entrepreneurial mindset. It helps me approach each request in a more structured way, while still being creative and flexible.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I know the challenges businesses face when working with freelancers or junior designers — inconsistent quality, lack of context, or designs that don't really solve the bigger problem. I've been on both sides of that struggle, and my goal is to make the process easier by delivering work that's thoughtful, practical, and impactful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you're looking for a designer who can balance creativity with business sense, this is a great opportunity to work with me. I rarely take on freelance projects, and I only work with selective, quality clients — with limited slots open each month.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mt-8 sm:mt-12 px-2">
              <Button asChild size="lg" className="font-display bg-black text-white hover:bg-black/90 w-full sm:w-auto min-h-[48px]">
                <a href="https://wasap.my/60183943519" target="_blank" rel="noopener noreferrer">
                  I'm Interested
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-display border-black text-black hover:bg-black/10 w-full sm:w-auto min-h-[48px]">
                <Link to="/studio">
                  View Works
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </TooltipProvider>
  );
};

export default Bcreatives;