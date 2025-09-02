import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";
const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:muhammadzahien@gmail.com";
  };
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/zahinsyahiran/", "_blank", "noopener,noreferrer");
  };
  return <>
      <StickyNavbar />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-display sm:text-4xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-tight lg:leading-tight lg:text-4xl text-3xl">Hiring for a Product Design role or in search for someone to do design works?</h1>
                <p style={{
                color: '#606060'
              }} className="font-mono text-lg max-w-2xl leading-[27px] sm:leading-relaxed px-1 mb-6 sm:mb-8 sm:px-0 text-zinc-400 sm:text-sm">SEND ME A MESSAGE ON LINKEDIN OR AN EMAIL.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-1 sm:px-2">
                <Button onClick={handleLinkedinClick} variant="default" className="font-display min-h-[48px] px-6 w-full touch-manipulation shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
                
                <Button onClick={handleEmailClick} variant="light" className="font-display min-h-[48px] px-6 w-full touch-manipulation flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </Button>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-muted overflow-hidden" style={{ borderRadius: '10px' }}>
                <img src="/lovable-uploads/85dfff20-5584-4879-821e-0d913def0dc1.png" alt="Profile photo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>;
};
export default Contact;