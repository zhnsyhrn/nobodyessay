import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-medium mb-6 sm:mb-8 leading-tight max-w-3xl mx-auto">
          {getTitle()}
        </h2>
        
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