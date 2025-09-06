import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const About = () => {
  return <div className="min-h-screen bg-background">
      <StickyNavbar />
      
      {/* Hero Section */}
      <section className="bg-[#1f1f1f] py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="font-display font-medium text-white mb-6 leading-tight lg:leading-[68px]" style={{
          fontSize: '36px'
        }}>
            <span className="sm:text-4xl md:text-5xl lg:text-6xl sm:leading-tight">Design with empathy.<br />
Built for identity.</span>
          </h1>
          <p className="font-jakarta text-lg sm:text-xl text-white/70">
            Create experiences that serve people while staying true to a brand's identity.
          </p>
        </div>
      </section>

      {/* Engagements Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="font-jakarta text-2xl font-medium mb-4 text-foreground">
                Engagements
              </h2>
              <p className="font-jakarta leading-relaxed mb-6 text-base" style={{
                color: '#606060'
              }}>
                I occasionally accept invitations to speak at events, workshops & consultations to share things that I care about.
              </p>

              {/* Workshops List */}
              <div className="space-y-3">
                <div className="font-jakarta text-muted-foreground">
                  <span className="text-foreground font-medium">Canva Design Workshop, Universiti Malaysia Sabah</span> • <span className="font-mono">2022</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="font-jakarta text-muted-foreground">
                  <span className="text-foreground font-medium">Createz Bootcamp 3.0, University of Malaya</span> • <span className="font-mono">2020</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="font-jakarta text-muted-foreground">
                  <span className="text-foreground font-medium">University Entrepreneurship Masterclass, StartupMalaysia</span> • <span className="font-mono">2018</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image Slider */}
            <div>
              <Carousel className="w-full relative border border-border overflow-hidden" style={{
                borderRadius: '10px'
              }} plugins={[Autoplay({
                delay: 3000,
                stopOnInteraction: true
              })]} opts={{
                align: "start",
                loop: true
              }}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-[4/3] overflow-hidden relative" style={{
                      borderRadius: '10px'
                    }}>
                      <img src="/lovable-uploads/cdb5672f-de57-4d19-a313-9bdec559de7b.png" alt="Group photo at university workshop" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/3] overflow-hidden relative" style={{
                      borderRadius: '10px'
                    }}>
                      <img src="/lovable-uploads/a78f735b-9b5e-496f-807c-d89d3bb3fbc1.png" alt="Speaking at entrepreneurship masterclass" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/3] overflow-hidden relative" style={{
                      borderRadius: '10px'
                    }}>
                      <img src="/lovable-uploads/d0b90204-89f8-4b16-9387-912ec4ef8cf9.png" alt="Virtual workshop presentation" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/3] overflow-hidden relative" style={{
                      borderRadius: '10px'
                    }}>
                      <img src="/lovable-uploads/be876eca-c1a0-4e2f-940e-27d0df2042fa.png" alt="Hands-on workshop session" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/3] overflow-hidden relative" style={{
                      borderRadius: '10px'
                    }}>
                      <img src="/lovable-uploads/56d6ab0a-15f4-4d7c-80b5-6e358fb73882.png" alt="Team photo at bootcamp event" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/3] overflow-hidden relative" style={{
                      borderRadius: '10px'
                    }}>
                      <img src="/lovable-uploads/8f343185-b806-43de-b723-33d36c31b526.png" alt="Large group photo at university event" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-[4/3] overflow-hidden relative" style={{
                      borderRadius: '10px'
                    }}>
                      <img src="/lovable-uploads/48722f75-9955-4d59-9183-79b77034c818.png" alt="Presenting at startup event" className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies & Design Philosophy Section */}
      <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border border-border p-6" style={{
            borderRadius: '10px'
          }}>
            <h2 className="font-jakarta text-2xl font-medium mb-4 text-foreground">
              Core Competencies & Design Philosophy
            </h2>
            <div className="space-y-3">
              <div className="font-jakarta text-muted-foreground text-base">
                <span className="text-foreground font-medium">Systems-Oriented Thinking:</span> Building cohesive experiences across touchpoints
              </div>
              <div className="h-px bg-border"></div>
              <div className="font-jakarta text-muted-foreground text-base">
                <span className="text-foreground font-medium">Multi-Platform Design Execution:</span> Designing modules across web, mobile, and admin tools
              </div>
              <div className="h-px bg-border"></div>
              <div className="font-jakarta text-muted-foreground text-base">
                <span className="text-foreground font-medium">Ownership & Delivery Under Pressure:</span> Driving end-to-end projects under tight deadlines
              </div>
              <div className="h-px bg-border"></div>
              <div className="font-jakarta text-muted-foreground text-base">
                <span className="text-foreground font-medium">User-Centered Design:</span> Prioritizing empathy and accessibility
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
              {/* Vertical divider - only visible on larger screens */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2"></div>
            
            {/* Left Column */}
            <div className="space-y-8">

              {/* Design & Client Projects */}
              <div>
                <h2 className="font-jakarta text-2xl font-medium mb-4 text-foreground">
                  Design & Client Projects
                </h2>
                <div className="space-y-3">
                  <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                    <div className="flex items-center gap-2">
                       <a href="https://grain.com.sg/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                         Grain Singapore
                         <ExternalLink size={14} className="text-primary" />
                       </a>
                     </div>
                   </div>
                   
                   <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                     <div className="flex items-center gap-2">
                       <a href="https://www.greateasterntakaful.com/en/personal-takaful.html" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                         Great Eastern Takaful Berhad
                         <ExternalLink size={14} className="text-primary" />
                       </a>
                     </div>
                   </div>

                   <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                     <div className="flex items-center gap-2">
                       <a href="https://www.mmu.edu.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                         Multimedia University
                         <ExternalLink size={14} className="text-primary" />
                       </a>
                     </div>
                   </div>

                    <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-2">
                        <a href="https://nanomalaysia.com.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          NanoMalaysia Berhad
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-2">
                        <a href="https://verdantsolar.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          Verdant Solar
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-2">
                        <a href="https://mytigas.com/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          MyTigas Alliance
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-2">
                        <a href="https://moneyx.com.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          MoneyX
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-2">
                        <a href="https://www.moneyxbiz.com.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          MoneyX Biz
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-2">
                        <a href="https://policystreet.com.my/reinsurance" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          PolicyStreet
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-2">
                        <a href="https://market.borong.com/my" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          Borong
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-2">
                        <a href="https://meca.com.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          Meca Consultancy
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="p-3" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-2">
                        <a href="https://paperballad.com/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          Paperballad & Co.
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="space-y-8">
              
              {/* Work Experience */}
              <div>
                <h2 className="font-jakarta text-2xl font-medium mb-4 text-foreground">
                  Work Experience
                </h2>
                <div className="space-y-3">
                  <div className="border border-border p-3" style={{
                  borderRadius: '10px'
                }}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-jakarta text-foreground font-medium">
                        <a href="https://moneyx.com.my/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 underline">
                          MoneyX
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                       <span className="font-mono text-muted-foreground text-xs">2024 - Present</span>
                    </div>
                    <p className="font-jakarta text-muted-foreground text-sm">
                      FinTech
                    </p>
                  </div>
                  
                  <div className="border border-border p-3" style={{
                  borderRadius: '10px'
                }}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-jakarta text-foreground font-medium">
                        <a href="https://www.borong.com/my" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 underline">
                          Borong (Dropee)
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                       <span className="font-mono text-muted-foreground text-xs">
                         2023
                       </span>
                    </div>
                    <p className="font-jakarta text-muted-foreground text-sm">
                      B2B Commerce
                    </p>
                  </div>

                  <div className="border border-border p-3" style={{
                  borderRadius: '10px'
                }}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-jakarta text-foreground font-medium">
                        <a href="https://policystreet.com.my/reinsurance" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 underline">
                          PolicyStreet
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                       <span className="font-mono text-muted-foreground text-xs">
                         2022 - 2023
                       </span>
                    </div>
                    <p className="font-jakarta text-muted-foreground text-sm">
                      InsurTech
                    </p>
                  </div>

                  <div className="border border-border p-3" style={{
                  borderRadius: '10px'
                }}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-jakarta text-foreground font-medium">
                        <a href="https://senangstart.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 underline">
                          Fixcolab Group Sdn Bhd
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                       <span className="font-mono text-muted-foreground text-xs">
                         2020 - 2022
                       </span>
                    </div>
                    <p className="font-jakarta text-muted-foreground text-sm">
                      Software and technology
                    </p>
                  </div>

                  <div className="border border-border p-3" style={{
                  borderRadius: '10px'
                }}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-jakarta text-foreground font-medium">
                        Senangreka Venture
                      </div>
                       <span className="font-mono text-muted-foreground text-xs">
                         2018 - 2020
                       </span>
                    </div>
                    <p className="font-jakarta text-muted-foreground text-sm">
                      Creative agency
                    </p>
                  </div>
                </div>
              </div>

                {/* Side Projects */}
                <div>
                  <h2 className="font-jakarta text-2xl font-medium mb-4 text-foreground">
                    Side Projects
                  </h2>
                  <div className="space-y-3">
                    <div className="border border-border p-3" style={{
                  borderRadius: '10px'
                }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                           <a href="https://dealn.app/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                             Dealn
                             <ExternalLink size={14} className="text-primary" />
                           </a>
                         </div>
                         <span className="bg-green-500/20 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-jakarta">
                           Active
                         </span>
                       </div>
                       <p className="font-jakarta text-muted-foreground text-sm">
                        Deal Experience Platform (DXP)
                      </p>
                    </div>
                    
                    <div className="border border-border p-3" style={{
                  borderRadius: '10px'
                }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                           <a href="https://www.instagram.com/nobody.collective/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                             Nobody Collective
                             <ExternalLink size={14} className="text-primary" />
                           </a>
                         </div>
                         <span className="bg-green-500/20 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-jakarta">
                           Active
                         </span>
                       </div>
                       <p className="font-jakarta text-muted-foreground text-sm">
                        Design Education Contents
                      </p>
                    </div>

                    <div className="border border-border p-3" style={{
                  borderRadius: '10px'
                }}>
                      <div className="flex items-center justify-between mb-2">
                         <span className="font-jakarta text-foreground font-medium opacity-60">
                           Designloka
                         </span>
                         <span className="bg-gray-500/20 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-jakarta">
                           Inactive
                         </span>
                       </div>
                       <p className="font-jakarta text-muted-foreground text-sm opacity-60">
                        Unlimited Design Subscription
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>;
};
export default About;