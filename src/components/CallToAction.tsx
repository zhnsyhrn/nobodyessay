import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CallToActionProps {
  page: 'writings' | 'projects' | 'about';
}

const CallToAction = ({ page }: CallToActionProps) => {
  const getTitle = () => {
    switch (page) {
      case 'writings':
        return (
          <>
            Let's talk. <span className="text-muted-foreground font-normal">I'd love<br />to hear from you.</span>
          </>
        );
      case 'projects':
        return (
          <>
            Let's talk. <span className="text-muted-foreground font-normal">I'd love<br />to hear from you.</span>
          </>
        );
      case 'about':
        return (
          <>
            Let's talk. <span className="text-muted-foreground font-normal">I'd love<br />to hear from you.</span>
          </>
        );
      default:
        return '';
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-16 border-t border-border">
      <div className="max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] lg:leading-[60px] font-bold text-foreground mb-8 font-jakarta">
          {getTitle()}
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Contact
            </Button>
          </Link>
          
          {page === 'projects' && (
            <Link to="/bcreatives">
              <Button variant="secondary" size="lg">
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