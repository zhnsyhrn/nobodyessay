import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

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
                    <span className="text-foreground font-medium">Strategic Thinking:</span> Connecting business objectives with user needs
                  </div>
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">Digital Storytelling:</span> Crafting narratives that resonate and engage
                  </div>
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">User-Centered Design:</span> Prioritizing empathy and accessibility
                  </div>
                  <div className="font-typewriter text-muted-foreground">
                    <span className="text-foreground font-medium">Systems Thinking:</span> Building cohesive experiences across touchpoints
                  </div>
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
                      Senior Digital Strategist
                    </div>
                    <div className="font-typewriter text-muted-foreground text-sm">
                      Creative Agency • 2022 - Present
                    </div>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <div className="font-typewriter text-foreground font-medium">
                      UX Designer
                    </div>
                    <div className="font-typewriter text-muted-foreground text-sm">
                      Tech Startup • 2020 - 2022
                    </div>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <div className="font-typewriter text-foreground font-medium">
                      Digital Marketing Specialist
                    </div>
                    <div className="font-typewriter text-muted-foreground text-sm">
                      Marketing Firm • 2018 - 2020
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