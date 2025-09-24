import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface CallToActionProps {
  page: 'writings' | 'projects' | 'about';
}

const CallToAction = ({ page }: CallToActionProps) => {
  const getTitle = () => {
    switch (page) {
      case 'writings':
        return "Enjoyed my perspective on design? Let's turn ideas into real solutions.";
      case 'projects':
        return "If these projects spark interest, I'd love to create impactful work for you too.";
      case 'about':
        return "I'm open to new opportunities and collaborations — let's build something great together.";
      default:
        return '';
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#f3f3f3]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-medium mb-6 sm:mb-8 leading-tight max-w-3xl mx-auto">
          {getTitle()}
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="inline-block">
            <div className="relative">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={80} inactiveZone={0.3} />
              <Button 
                className="font-display min-h-[48px] px-6 touch-manipulation shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
              >
                Yes, Hire Zahin
              </Button>
            </div>
          </Link>
          
          {page === 'projects' && (
            <Link to="/bcreatives" className="inline-block">
              <Button 
                variant="outline"
                className="font-display min-h-[48px] px-6 touch-manipulation"
              >
                Design Services
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;