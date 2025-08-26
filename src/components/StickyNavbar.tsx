import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={closeMenu} className="flex items-center space-x-3">
            <img src="/lovable-uploads/e058676f-a0f2-441a-983c-a931949d96b8.png" alt="byzahin" className="w-8 h-8 rounded-full object-cover" />
            <h1 className="font-display text-lg sm:text-xl font-medium hover:text-muted-foreground transition-colors">
              byzahin
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/writings" className="font-display text-sm hover:text-muted-foreground transition-colors py-2">
              Writings
            </Link>
            <Link to="/about" className="font-display text-sm hover:text-muted-foreground transition-colors py-2">
              Manifesto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="md:hidden p-2 h-10 w-10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <Link 
                to="/writings" 
                onClick={closeMenu}
                className="font-display text-base hover:text-muted-foreground transition-colors py-3 px-2 rounded-md hover:bg-muted/50 min-h-[44px] flex items-center"
              >
                Writings
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="font-display text-base hover:text-muted-foreground transition-colors py-3 px-2 rounded-md hover:bg-muted/50 min-h-[44px] flex items-center"
              >
                Manifesto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default StickyNavbar;