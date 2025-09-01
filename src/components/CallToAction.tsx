import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CallToActionProps {
  page: 'writings' | 'projects' | 'about';
}

const CallToAction = ({ page }: CallToActionProps) => {
  const getSupportingText = () => {
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
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 leading-tight">
          Hiring for a Product Design role or in search for someone to do design works?
        </h2>
        
        <p className="font-jakarta text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          {getSupportingText()}
        </p>
        
        <Link to="/contact">
          <Button 
            variant="default" 
            size="lg"
            className="font-display text-base px-8 py-6 h-auto min-h-[44px]"
          >
            Yes, Hire Zahin
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;