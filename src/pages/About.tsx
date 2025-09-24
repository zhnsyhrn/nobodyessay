import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
          <p className="font-jakarta text-lg sm:text-xl text-white/70 mb-6">
            Create experiences that serve people while staying true to a brand's identity.
          </p>
          
          <Link to="/bcreatives" className="inline-block">
            <Button 
              className="font-display min-h-[48px] px-6 bg-white text-black hover:bg-white/90 transition-colors"
            >
              Design Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Competencies & Design Philosophy Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
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

      {/* Engagements Section */}
      <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="font-jakarta text-2xl font-medium mb-4 text-foreground">
                Speaking & Participation
              </h2>
              <p className="font-jakarta leading-relaxed mb-6 text-base" style={{
                color: '#606060'
              }}>
                I occasionally speak at events, workshops, and consultations, and have also joined startup accelerators and workshops as a participant.
              </p>

              {/* Workshops List */}
              <div className="space-y-3">
                <div className="font-jakarta text-muted-foreground" style={{ fontSize: '16px' }}>
                  <span className="text-foreground font-medium">Canva Design Workshop, Universiti Malaysia Sabah</span> • <span className="font-mono">2022</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="font-jakarta text-muted-foreground" style={{ fontSize: '16px' }}>
                  <span className="text-foreground font-medium">Createz Bootcamp 3.0, University of Malaya</span> • <span className="font-mono">2020</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="font-jakarta text-muted-foreground" style={{ fontSize: '16px' }}>
                  <span className="text-foreground font-medium">University Entrepreneurship Masterclass, StartupMalaysia</span> • <span className="font-mono">2018</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image Grid */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-[4/3] overflow-hidden relative" style={{
                  borderRadius: '10px'
                }}>
                   <LazyImage 
                     src="/lovable-uploads/cdb5672f-de57-4d19-a313-9bdec559de7b.png" 
                     alt="Group photo at university workshop" 
                     className="w-full h-full object-cover" 
                     priority={true} // High priority for first image
                     blurUp={true} // Enable blur-up effect
                   />
                </div>
                
                <div className="aspect-[4/3] overflow-hidden relative" style={{
                  borderRadius: '10px'
                }}>
                   <LazyImage 
                     src="/lovable-uploads/a78f735b-9b5e-496f-807c-d89d3bb3fbc1.png" 
                     alt="Speaking at entrepreneurship masterclass" 
                     className="w-full h-full object-cover"
                     blurUp={true} // Enable blur-up effect
                   />
                </div>
                
                <div className="aspect-[4/3] overflow-hidden relative" style={{
                  borderRadius: '10px'
                }}>
                   <LazyImage 
                     src="/lovable-uploads/d0b90204-89f8-4b16-9387-912ec4ef8cf9.png" 
                     alt="Virtual workshop presentation" 
                     className="w-full h-full object-cover"
                     blurUp={true} // Enable blur-up effect
                   />
                </div>
                
                <div className="aspect-[4/3] overflow-hidden relative" style={{
                  borderRadius: '10px'
                }}>
                   <LazyImage 
                     src="/lovable-uploads/be876eca-c1a0-4e2f-940e-27d0df2042fa.png" 
                     alt="Hands-on workshop session" 
                     className="w-full h-full object-cover"
                     blurUp={true} // Enable blur-up effect
                   />
                </div>
                
                <div className="aspect-[4/3] overflow-hidden relative" style={{
                  borderRadius: '10px'
                }}>
                   <LazyImage 
                     src="/lovable-uploads/56d6ab0a-15f4-4d7c-80b5-6e358fb73882.png" 
                     alt="Team photo at bootcamp event" 
                     className="w-full h-full object-cover"
                     blurUp={true} // Enable blur-up effect
                   />
                </div>
                
                <div className="aspect-[4/3] overflow-hidden relative" style={{
                  borderRadius: '10px'
                }}>
                   <LazyImage 
                     src="/lovable-uploads/8f343185-b806-43de-b723-33d36c31b526.png" 
                     alt="Large group photo at university event" 
                     className="w-full h-full object-cover"
                     blurUp={true} // Enable blur-up effect
                   />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 bg-[#f3f3f3]">
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
                  <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                    <div className="flex items-center gap-3">
                      <img src="/lovable-uploads/3c96f375-d885-4200-93e7-d6c296d99beb.png" alt="Grain Singapore logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                       <a href="https://grain.com.sg/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                         Grain Singapore
                         <ExternalLink size={14} className="text-primary" />
                       </a>
                     </div>
                   </div>
                   
                   <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                     <div className="flex items-center gap-3">
                        <img src="/lovable-uploads/27f41456-e5d7-44d0-b7c9-cd34256d208c.png" alt="Great Eastern Takaful logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                       <a href="https://www.greateasterntakaful.com/en/personal-takaful.html" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                         Great Eastern Takaful Berhad
                         <ExternalLink size={14} className="text-primary" />
                       </a>
                     </div>
                   </div>

                   <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                     <div className="flex items-center gap-3">
                        <img src="/lovable-uploads/3d45a311-8480-4ac2-9b4e-d4581026c946.png" alt="Multimedia University logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                       <a href="https://www.mmu.edu.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                         Multimedia University
                         <ExternalLink size={14} className="text-primary" />
                       </a>
                     </div>
                   </div>

                    <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-3">
                         <img src="/lovable-uploads/a692e280-7921-4475-86cc-982c64f086ab.png" alt="NanoMalaysia logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                        <a href="https://nanomalaysia.com.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          NanoMalaysia Berhad
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-3">
                         <img src="/lovable-uploads/4b7c51d8-a0b7-4436-b96f-64b7615e0f0e.png" alt="Verdant Solar logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                        <a href="https://verdantsolar.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          Verdant Solar
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-3">
                         <img src="/lovable-uploads/85e1f77f-633b-418c-8603-068070a2d55e.png" alt="MyTigas Alliance logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                        <a href="https://mytigas.com/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          MyTigas Alliance
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-3">
                         <img src="/lovable-uploads/ea89b5b1-149b-4473-93c4-c8044d3fb71b.png" alt="MoneyX logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                        <a href="https://moneyx.com.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          MoneyX
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-3">
                         <img src="/lovable-uploads/7444c41d-b2f9-4848-9e79-08b6d96b24b0.png" alt="MoneyX Biz logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                        <a href="https://www.moneyxbiz.com.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          MoneyX Biz
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-3">
                         <img src="/lovable-uploads/714500df-499f-4bcc-b0b1-ddfb6dfd74b6.png" alt="PolicyStreet logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                        <a href="https://policystreet.com.my/reinsurance" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          PolicyStreet
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-3">
                         <img src="/lovable-uploads/3c3c213c-e6f9-4cd7-a841-b9b012ff9fdd.png" alt="Borong logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                        <a href="https://market.borong.com/my" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          Borong
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-3">
                         <img src="/lovable-uploads/e6ecb381-b351-4f44-b892-7e3efcb31c42.png" alt="Meca Consultancy logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
                        <a href="https://meca.com.my/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2 underline">
                          Meca Consultancy
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      </div>
                    </div>

                    <div className="border border-border p-3 bg-white" style={{
                borderRadius: '10px'
              }}>
                      <div className="flex items-center gap-3">
                        <img src="/lovable-uploads/6ec75d24-bfe9-44c6-afff-4c215221d6bb.png" alt="Paperballad & Co. logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0" />
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
                  <div className="border border-border p-3 bg-white" style={{
                  borderRadius: '10px'
                }}>
                    <div className="flex items-start gap-3 mb-1">
                       <img src="/lovable-uploads/ea89b5b1-149b-4473-93c4-c8044d3fb71b.png" alt="MoneyX logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-jakarta text-foreground font-medium">
                            <a href="https://moneyx.com.my/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 underline">
                              MoneyX
                              <ExternalLink size={14} className="text-primary" />
                            </a>
                          </div>
                          <span className="font-mono text-muted-foreground text-xs">2024 - Present</span>
                        </div>
                        <p className="font-jakarta text-muted-foreground text-sm mt-1">
                          FinTech
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-border p-3 bg-white" style={{
                  borderRadius: '10px'
                }}>
                    <div className="flex items-start gap-3 mb-1">
                       <img src="/lovable-uploads/ea65d18a-23b5-4265-8264-2531abb9878b.png" alt="Borong logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
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
                        <p className="font-jakarta text-muted-foreground text-sm mt-1">
                          B2B Commerce
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border p-3 bg-white" style={{
                  borderRadius: '10px'
                }}>
                    <div className="flex items-start gap-3 mb-1">
                       <img src="/lovable-uploads/7fb05563-421a-490c-a6a6-bf42424d4004.png" alt="PolicyStreet logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
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
                        <p className="font-jakarta text-muted-foreground text-sm mt-1">
                          InsurTech
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border p-3 bg-white" style={{
                  borderRadius: '10px'
                }}>
                    <div className="flex items-start gap-3 mb-1">
                       <img src="/lovable-uploads/11824137-1783-42f5-9bfa-c07f47d2a9cf.png" alt="Fixcolab Group logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
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
                        <p className="font-jakarta text-muted-foreground text-sm mt-1">
                          Software and technology
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border p-3 bg-white" style={{
                  borderRadius: '10px'
                }}>
                    <div className="flex items-start gap-3 mb-1">
                       <img src="/lovable-uploads/038a006c-27e6-4a90-8ac8-038eb8276732.png" alt="Senangreka Venture logo" className="w-8 h-8 object-contain rounded border border-border flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-jakarta text-foreground font-medium">
                            Senangreka Venture
                          </div>
                          <span className="font-mono text-muted-foreground text-xs">
                            2018 - 2020
                          </span>
                        </div>
                        <p className="font-jakarta text-muted-foreground text-sm mt-1">
                          Creative agency
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                {/* Side Projects */}
                <div>
                  <h2 className="font-jakarta text-2xl font-medium mb-4 text-foreground">
                    Side Projects
                  </h2>
                  <div className="space-y-3">
                    <div className="border border-border p-3 bg-white" style={{
                  borderRadius: '10px'
                }}>
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 bg-muted border border-border rounded flex-shrink-0 mt-0.5"></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
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
                          <p className="font-jakarta text-muted-foreground text-sm mt-1">
                            Deal Experience Platform (DXP)
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-border p-3 bg-white" style={{
                  borderRadius: '10px'
                }}>
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 bg-muted border border-border rounded flex-shrink-0 mt-0.5"></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
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
                          <p className="font-jakarta text-muted-foreground text-sm mt-1">
                            Design Education Contents
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-border p-3 bg-white" style={{
                  borderRadius: '10px'
                }}>
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 bg-muted border border-border rounded flex-shrink-0 mt-0.5 opacity-60"></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-jakarta text-foreground font-medium opacity-60">
                              Designloka
                            </span>
                            <span className="bg-gray-500/20 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-jakarta">
                              Inactive
                            </span>
                          </div>
                          <p className="font-jakarta text-muted-foreground text-sm opacity-60 mt-1">
                            Unlimited Design Subscription
                          </p>
                        </div>
                      </div>
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