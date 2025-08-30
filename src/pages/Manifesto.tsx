import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNavbar />
      
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column */}
            <div className="space-y-8">
              
              {/* Summary */}
              <div>
                <h2 className="font-display text-2xl font-medium mb-4 text-foreground">
                  What I Do
                </h2>
                <p className="font-typewriter text-muted-foreground leading-relaxed">
                  I create digital experiences that bridge the gap between human intuition and technological possibility. Through thoughtful design and strategic thinking, I help brands and individuals tell their stories in the digital landscape.
                </p>
              </div>

              {/* About the Writer */}
              <div>
                <h2 className="font-display text-2xl font-medium mb-4 text-foreground">
                  About the Writer
                </h2>
                <p className="font-typewriter text-muted-foreground leading-relaxed mb-4">
                  A digital strategist and creative thinker who believes in the power of authentic storytelling. I approach every project with curiosity and a commitment to understanding the deeper why behind what we create.
                </p>
                <p className="font-typewriter text-muted-foreground leading-relaxed">
                  When I'm not crafting digital experiences, you'll find me exploring the intersection of technology, philosophy, and human behavior through writing and conversation.
                </p>
              </div>

              {/* Core Competencies */}
              <div>
                <h2 className="font-display text-2xl font-medium mb-4 text-foreground">
                  Core Competencies & Design Philosophy
                </h2>
                <div className="space-y-3">
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">Systems-Oriented Thinking:</span> Building cohesive experiences across touchpoints
                  </div>
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">Multi-Platform Design Execution:</span> Designing modules across web, mobile, and admin tools
                  </div>
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">Ownership & Delivery Under Pressure:</span> Driving end-to-end projects under tight deadlines
                  </div>
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">User-Centered Design:</span> Prioritizing empathy and accessibility
                  </div>
                </div>
              </div>

              {/* Engagements */}
              <div>
                <h2 className="font-display text-2xl font-medium mb-4 text-foreground">
                  Engagements
                </h2>
                <p className="font-typewriter text-muted-foreground leading-relaxed mb-6">
                  I occasionally accept invitations to speak at events, workshops & consultations to share things that I care about.
                </p>
                
                {/* Workshops List */}
                <div className="space-y-3 mb-6">
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">Design Systems Workshop</span> • 2024
                  </div>
                  <div className="h-px bg-border"></div>
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">User Experience Strategy</span> • 2023
                  </div>
                  <div className="h-px bg-border"></div>
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">Digital Product Design</span> • 2023
                  </div>
                  <div className="h-px bg-border"></div>
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">Design Thinking for Startups</span> • 2022
                  </div>
                </div>

                {/* Image Slider */}
                <div className="mb-6">
                  <Carousel className="w-full max-w-lg mx-auto relative">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                          <img 
                            src="/lovable-uploads/02594b85-35a5-4f5e-b0f9-c93ee3f201a7.png" 
                            alt="Speaking engagement" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                          <img 
                            src="/lovable-uploads/0a9faeb6-72a3-484e-83a5-0aad681f0684.png" 
                            alt="Workshop session" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                          <img 
                            src="/lovable-uploads/1dcf470c-2ae1-4041-9270-802a1b166480.png" 
                            alt="Design consultation" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                          <img 
                            src="/lovable-uploads/296d95da-ee08-407a-9413-025d7c4bc61d.png" 
                            alt="Event presentation" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                          <img 
                            src="/lovable-uploads/2fbd8484-6091-4de8-8f0d-0c7c7ded5fb0.png" 
                            alt="Workshop facilitation" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                          <img 
                            src="/lovable-uploads/307c85f4-d33f-45a4-83d5-c8d95c1b4a07.png" 
                            alt="Design thinking session" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                          <img 
                            src="/lovable-uploads/318ce04d-e3cb-473d-81bc-63e4c917981c.png" 
                            alt="Speaking at conference" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                          <img 
                            src="/lovable-uploads/3203ca77-96ca-4347-9e77-4a9c89891bfb.png" 
                            alt="Workshop participant interaction" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                          <img 
                            src="/lovable-uploads/38a4617f-499b-49dd-accd-4531551d30ac.png" 
                            alt="Design consultation meeting" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
                  </Carousel>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              
              {/* Work Experience */}
              <div>
                <h2 className="font-display text-2xl font-medium mb-4 text-foreground">
                  Work Experience
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-border pl-4">
                    <div className="font-typewriter text-foreground font-medium">
                      <a 
                        href="https://moneyx.com.my/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        MoneyX
                      </a>
                    </div>
                    <div className="font-typewriter text-muted-foreground text-sm">
                      FinTech • 2024 - 2025
                    </div>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <div className="font-typewriter text-foreground font-medium">
                      <a 
                        href="https://www.borong.com/my" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        Borong (Dropee)
                      </a>
                    </div>
                    <div className="font-typewriter text-muted-foreground text-sm">
                      B2B Commerce • 2023 - 2023
                    </div>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <div className="font-typewriter text-foreground font-medium">
                      <a 
                        href="https://policystreet.com.my/reinsurance" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        PolicyStreet
                      </a>
                    </div>
                    <div className="font-typewriter text-muted-foreground text-sm">
                      InsurTech • 2022 - 2023
                    </div>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <div className="font-typewriter text-foreground font-medium">
                      <a 
                        href="https://senangstart.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        Fixcolab Group Sdn Bhd
                      </a>
                    </div>
                    <div className="font-typewriter text-muted-foreground text-sm">
                      Software and technology • 2020 - 2022
                    </div>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <div className="font-typewriter text-foreground font-medium">
                      Senangreka Venture
                    </div>
                    <div className="font-typewriter text-muted-foreground text-sm">
                      Creative agency • 2018 - 2020
                    </div>
                  </div>
                </div>
              </div>

                {/* Side Projects */}
                <div>
                  <h2 className="font-display text-2xl font-medium mb-4 text-foreground">
                    Side Projects
                  </h2>
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <a 
                            href="https://dealn.app/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-typewriter text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2"
                          >
                            Dealn
                            <ExternalLink size={14} className="text-primary" />
                          </a>
                        </div>
                        <span className="bg-green-500/20 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-typewriter">
                          Active
                        </span>
                      </div>
                      <p className="font-typewriter text-muted-foreground text-sm">
                        Deal Experience Platform (DXP)
                      </p>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <a 
                            href="https://www.instagram.com/nobody.collective/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-typewriter text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2"
                          >
                            Nobody Collective
                            <ExternalLink size={14} className="text-primary" />
                          </a>
                        </div>
                        <span className="bg-green-500/20 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-typewriter">
                          Active
                        </span>
                      </div>
                      <p className="font-typewriter text-muted-foreground text-sm">
                        Design Education Contents
                      </p>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-typewriter text-foreground font-medium opacity-60">
                          Designloka
                        </span>
                        <span className="bg-gray-500/20 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-typewriter">
                          Inactive
                        </span>
                      </div>
                      <p className="font-typewriter text-muted-foreground text-sm opacity-60">
                        Unlimited Design Subscription
                      </p>
                    </div>
                  </div>
                </div>

                {/* Design Projects */}
                <div>
                  <h2 className="font-display text-2xl font-medium mb-4 text-foreground">
                    Design Projects
                  </h2>
                  <div className="space-y-3">
                    <div className="font-typewriter text-muted-foreground">
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2"
                      >
                        E-commerce Platform Redesign
                        <ExternalLink size={14} className="text-primary" />
                      </a>
                    </div>
                    <div className="font-typewriter text-muted-foreground">
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2"
                      >
                        Mobile Banking App
                        <ExternalLink size={14} className="text-primary" />
                      </a>
                    </div>
                    <div className="font-typewriter text-muted-foreground">
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2"
                      >
                        SaaS Dashboard Interface
                        <ExternalLink size={14} className="text-primary" />
                      </a>
                    </div>
                    <div className="font-typewriter text-muted-foreground">
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2"
                      >
                        Insurance Platform UX
                        <ExternalLink size={14} className="text-primary" />
                      </a>
                    </div>
                    <div className="font-typewriter text-muted-foreground">
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2"
                      >
                        B2B Commerce Portal
                        <ExternalLink size={14} className="text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Manifesto;