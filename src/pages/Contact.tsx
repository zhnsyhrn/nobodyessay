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

  return (
    <>
      <StickyNavbar />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  Contact
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Send me a message on Linkedin or an email at muhammadzahien@gmail.com
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleLinkedinClick}
                  variant="default"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
                
                <Button 
                  onClick={handleEmailClick}
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </Button>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-muted-foreground/20 rounded-full mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;