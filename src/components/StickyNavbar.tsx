import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
const StickyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement | null>(null);

  // Set CSS var for navbar height to align sticky filters
  useEffect(() => {
    const updateVar = () => {
      const h = navRef.current?.offsetHeight ?? 64;
      document.documentElement.style.setProperty('--navbar-height', `${h}px`);
    };
    updateVar();
    window.addEventListener('resize', updateVar);
    return () => window.removeEventListener('resize', updateVar);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const toggleMenu = () => {
    console.log('Menu toggle clicked, current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    console.log('Menu closed');
    setIsMenuOpen(false);
  };
  const isActiveRoute = (path: string) => {
    if (path === '/about' && (location.pathname === '/about' || location.pathname === '/manifesto')) return true;
    if (path === '/writings' && location.pathname.startsWith('/writings')) return true;
    if (path === '/studio' && location.pathname === '/studio') return true;
    if (path === '/faq' && location.pathname === '/faq') return true;
    if (path === '/contact' && location.pathname === '/contact') return true;
    return false;
  };
  return <nav ref={navRef} className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border px-4 sm:px-6 lg:px-12 xl:px-16 py-3 sm:py-4">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={closeMenu} className="flex items-center space-x-3">
            <img src="/lovable-uploads/e058676f-a0f2-441a-983c-a931949d96b8.png" alt="byzahin" className="w-8 h-8 rounded-full object-cover" />
            <h1 className="font-display text-lg sm:text-xl font-medium hover:text-muted-foreground transition-colors">Zahin Syahiran</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/writings" className={`font-display text-sm transition-colors py-2 ${isActiveRoute('/writings') ? 'text-foreground font-medium' : 'hover:text-muted-foreground'}`}>
              Writings
            </Link>
            <Link to="/studio" className={`font-display text-sm transition-colors py-2 ${isActiveRoute('/studio') ? 'text-foreground font-medium' : 'hover:text-muted-foreground'}`}>Projects</Link>
            <Link to="/about" className={`font-display text-sm transition-colors py-2 ${isActiveRoute('/about') ? 'text-foreground font-medium' : 'hover:text-muted-foreground'}`}>About</Link>
            <Link to="/faq" className={`font-display text-sm transition-colors py-2 ${isActiveRoute('/faq') ? 'text-foreground font-medium' : 'hover:text-muted-foreground'}`}>FAQ</Link>
            <Link to="/contact" className={`font-display text-sm transition-colors py-2 ${isActiveRoute('/contact') ? 'text-foreground font-medium' : 'hover:text-muted-foreground'}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" onClick={toggleMenu} className="md:hidden p-3 h-12 w-12 touch-manipulation" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu Overlay - Full Page */}
        {isMenuOpen && <div className="fixed inset-0 z-[9999] md:hidden flex flex-col bg-white" style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        minWidth: '100vw',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
            {/* Header with close button */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
              <Link to="/" onClick={closeMenu} className="flex items-center space-x-3">
                <img src="/lovable-uploads/e058676f-a0f2-441a-983c-a931949d96b8.png" alt="byzahin" className="w-8 h-8 rounded-full object-cover" />
                <h1 className="font-display text-lg sm:text-xl font-medium text-black">
                  byzahin
                </h1>
              </Link>
              <Button variant="ghost" size="sm" onClick={closeMenu} className="p-3 h-12 w-12 touch-manipulation text-black hover:bg-gray-100" aria-label="Close menu">
                <X size={24} />
              </Button>
            </div>

            {/* Menu Content - Top Aligned */}
            <div className="flex-1 flex flex-col justify-start items-center px-4 sm:px-6 pt-8" style={{
          backgroundColor: '#ffffff'
        }}>
              <div className="flex flex-col w-full max-w-sm">
                <Link to="/writings" onClick={closeMenu} className={`font-display text-3xl transition-colors py-8 text-center flex items-center justify-center text-black hover:text-gray-600 ${isActiveRoute('/writings') ? 'font-medium' : ''}`}>
                  Writings
                </Link>
                
                <Separator className="bg-gray-200" />
                
                <Link to="/studio" onClick={closeMenu} className={`font-display text-3xl transition-colors py-8 text-center flex items-center justify-center text-black hover:text-gray-600 ${isActiveRoute('/studio') ? 'font-medium' : ''}`}>
                  Studio
                </Link>
                
                <Separator className="bg-gray-200" />
                
                <Link to="/about" onClick={closeMenu} className={`font-display text-3xl transition-colors py-8 text-center flex items-center justify-center text-black hover:text-gray-600 ${isActiveRoute('/about') ? 'font-medium' : ''}`}>
                  About
                </Link>
                
                <Separator className="bg-gray-200" />
                
                <Link to="/faq" onClick={closeMenu} className={`font-display text-3xl transition-colors py-8 text-center flex items-center justify-center text-black hover:text-gray-600 ${isActiveRoute('/faq') ? 'font-medium' : ''}`}>
                  FAQ
                </Link>
                
                <Separator className="bg-gray-200" />
                
                <Link to="/contact" onClick={closeMenu} className={`font-display text-3xl transition-colors py-8 text-center flex items-center justify-center text-black hover:text-gray-600 ${isActiveRoute('/contact') ? 'font-medium' : ''}`}>
                  Contact
                </Link>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default StickyNavbar;