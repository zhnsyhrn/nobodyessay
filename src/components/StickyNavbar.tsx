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
      const el = navRef.current;
      const h = el?.offsetHeight ?? 64;
      const top = el?.offsetTop ?? 0;
      document.documentElement.style.setProperty('--navbar-height', `${h + top + 8}px`);
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
    if (path === '/journals' && location.pathname.startsWith('/journals')) return true;
    if (path === '/studio' && location.pathname === '/studio') return true;
    if (path === '/contact' && location.pathname === '/contact') return true;
    return false;
  };
  return <nav ref={navRef} className="sticky top-3 sm:top-4 z-50 px-3 sm:px-6 pt-1">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex items-center justify-between rounded-full bg-background border border-border/60 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] pl-4 sm:pl-5 pr-2 py-2">
          <Link to="/" onClick={closeMenu} className="flex items-center space-x-2 sm:space-x-3 z-10">
            <img src="/lovable-uploads/e058676f-a0f2-441a-983c-a931949d96b8.png" alt="byzahin" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover" />
            <h1 className="font-display text-base sm:text-lg font-medium hover:text-muted-foreground transition-colors">Zahin Syahiran</h1>
          </Link>

          {/* Desktop Navigation - absolutely centered */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-9 absolute left-1/2 -translate-x-1/2">
            <Link to="/journals" className={`font-display text-sm text-foreground transition-colors ${isActiveRoute('/journals') ? 'font-medium underline underline-offset-[6px] decoration-2 decoration-foreground' : 'hover:text-muted-foreground'}`}>
              Journals
            </Link>
            <Link to="/studio" className={`font-display text-sm text-foreground transition-colors ${isActiveRoute('/studio') ? 'font-medium underline underline-offset-[6px] decoration-2 decoration-foreground' : 'hover:text-muted-foreground'}`}>Projects</Link>
            <Link to="/about" className={`font-display text-sm text-foreground transition-colors ${isActiveRoute('/about') ? 'font-medium underline underline-offset-[6px] decoration-2 decoration-foreground' : 'hover:text-muted-foreground'}`}>About</Link>
          </div>

          {/* Right side - Contact pill (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-2 z-10">
            <Link
              to="/contact"
              className={`hidden md:inline-flex items-center rounded-full border px-5 py-2 font-display text-sm transition-colors ${
                isActiveRoute('/contact')
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-foreground/80 text-foreground hover:bg-foreground hover:text-background'
              }`}
            >
              Contact Us
            </Link>
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="md:hidden p-2 h-10 w-10 touch-manipulation rounded-full" aria-label="Toggle menu">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
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
                <Link to="/journals" onClick={closeMenu} className={`font-display text-3xl transition-colors py-8 text-center flex items-center justify-center text-black hover:text-gray-600 ${isActiveRoute('/journals') ? 'font-medium' : ''}`}>
                  Journals
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