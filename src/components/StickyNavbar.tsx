import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActiveRoute = (path: string) => {
    if (path === '/about' && location.pathname === '/about') return true;
    if (path === '/writings' && location.pathname.startsWith('/writings')) return true;
    if (path === '/studio' && location.pathname === '/studio') return true;
    return false;
  };

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
            <Link 
              to="/writings" 
              className={`font-display text-sm transition-colors py-2 ${
                isActiveRoute('/writings') 
                  ? 'text-foreground font-medium' 
                  : 'hover:text-muted-foreground'
              }`}
            >
              Writings
            </Link>
            <Link 
              to="/studio" 
              className={`font-display text-sm transition-colors py-2 ${
                isActiveRoute('/studio') 
                  ? 'text-foreground font-medium' 
                  : 'hover:text-muted-foreground'
              }`}
            >
              Studio
            </Link>
            <Link 
              to="/about" 
              className={`font-display text-sm transition-colors py-2 ${
                isActiveRoute('/about') 
                  ? 'text-foreground font-medium' 
                  : 'hover:text-muted-foreground'
              }`}
            >
              Manifesto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="md:hidden p-3 h-12 w-12 touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[73px] z-50 md:hidden bg-background border-t border-border">
            <div className="h-full overflow-y-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/writings" 
                  onClick={closeMenu}
                  className={`font-display text-lg transition-colors py-4 px-4 rounded-md min-h-[56px] flex items-center border-b border-border ${
                    isActiveRoute('/writings')
                      ? 'text-foreground font-medium bg-muted'
                      : 'hover:text-muted-foreground hover:bg-muted/30'
                  }`}
                >
                  Writings
                </Link>
                <Link 
                  to="/studio" 
                  onClick={closeMenu}
                  className={`font-display text-lg transition-colors py-4 px-4 rounded-md min-h-[56px] flex items-center border-b border-border ${
                    isActiveRoute('/studio')
                      ? 'text-foreground font-medium bg-muted'
                      : 'hover:text-muted-foreground hover:bg-muted/30'
                  }`}
                >
                  Studio
                </Link>
                <Link 
                  to="/about" 
                  onClick={closeMenu}
                  className={`font-display text-lg transition-colors py-4 px-4 rounded-md min-h-[56px] flex items-center border-b border-border ${
                    isActiveRoute('/about')
                      ? 'text-foreground font-medium bg-muted'
                      : 'hover:text-muted-foreground hover:bg-muted/30'
                  }`}
                >
                  Manifesto
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default StickyNavbar;