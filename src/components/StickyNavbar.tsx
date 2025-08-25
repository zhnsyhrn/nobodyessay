import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={closeMenu}>
            <h1 className="font-display text-lg sm:text-xl lg:text-2xl font-medium hover:text-muted-foreground transition-colors">
              nobody.essay
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link to="/writings" className="font-display text-sm lg:text-base hover:text-muted-foreground transition-colors py-2 px-1 relative group">
              <span>Writings</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link to="/about" className="font-display text-sm lg:text-base hover:text-muted-foreground transition-colors py-2 px-1 relative group">
              <span>About</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <a href="#contact" className="font-display text-sm lg:text-base hover:text-muted-foreground transition-colors py-2 px-1 relative group">
              <span>Contact</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
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
                About
              </Link>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="font-display text-base hover:text-muted-foreground transition-colors py-3 px-2 rounded-md hover:bg-muted/50 min-h-[44px] flex items-center"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default StickyNavbar;