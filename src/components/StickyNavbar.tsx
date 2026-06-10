import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "./ThemeToggle";

const StickyNavbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement | null>(null);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ms' : 'en';
    i18n.changeLanguage(newLang);
  };

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
        <div className="relative flex items-center justify-between rounded-full bg-white/60 dark:bg-[#1a1a1a]/80 backdrop-blur-xl border border-border/60 dark:border-white/10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.6)] pl-4 sm:pl-5 pr-2 py-2 transition-all duration-300">
          <Link to="/" onClick={closeMenu} className="flex items-center space-x-2 sm:space-x-3 z-10">
            <img src="/lovable-uploads/e058676f-a0f2-441a-983c-a931949d96b8.png" alt="byzahin" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover" />
            <h1 className="font-display text-base sm:text-lg font-medium hover:text-muted-foreground transition-colors">Zahin Syahiran</h1>
          </Link>

          {/* Desktop Navigation - absolutely centered */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-9 absolute left-1/2 -translate-x-1/2">
            <Link to="/journals" className={`font-display text-sm transition-colors ${isActiveRoute('/journals') ? 'font-medium text-blue-600 dark:text-blue-400' : 'text-foreground hover:text-muted-foreground'}`}>
              {t('nav.journals')}
            </Link>
            <Link to="/studio" className={`font-display text-sm transition-colors ${isActiveRoute('/studio') ? 'font-medium text-blue-600 dark:text-blue-400' : 'text-foreground hover:text-muted-foreground'}`}>
              {t('nav.projects')}
            </Link>
            <Link to="/about" className={`font-display text-sm transition-colors ${isActiveRoute('/about') ? 'font-medium text-blue-600 dark:text-blue-400' : 'text-foreground hover:text-muted-foreground'}`}>
              {t('nav.about')}
            </Link>
          </div>

          {/* Right side - Contact pill (desktop) + Language Toggle + Theme Toggle + Hamburger (mobile) */}
          <div className="flex items-center gap-2 z-10">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger className="font-display text-xs sm:text-sm font-medium px-2 py-1 flex items-center gap-1 hover:text-muted-foreground transition-colors focus:outline-none data-[state=open]:text-muted-foreground">
                {i18n.language === 'en' ? 'EN' : 'MS'}
                <ChevronDown size={14} className="opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[120px] border-border/50 bg-white/90 dark:bg-card/90 backdrop-blur-xl shadow-lg rounded-xl mt-2 p-1">
                <DropdownMenuItem 
                  onClick={() => i18n.changeLanguage('en')}
                  className={`font-display text-sm px-3 py-2 cursor-pointer rounded-lg transition-colors ${i18n.language === 'en' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 focus:bg-blue-100 dark:focus:bg-blue-900/50 font-medium' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800'}`}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => i18n.changeLanguage('ms')}
                  className={`font-display text-sm px-3 py-2 cursor-pointer rounded-lg transition-colors ${i18n.language === 'ms' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 focus:bg-blue-100 dark:focus:bg-blue-900/50 font-medium' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800'}`}
                >
                  Bahasa Malaysia
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/contact"
              className={`hidden md:inline-flex items-center rounded-full border px-5 py-2 font-display text-sm transition-colors ${
                isActiveRoute('/contact')
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-foreground/80 text-foreground hover:bg-foreground hover:text-background'
              }`}
            >
              {t('nav.contact')}
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
                  {t('nav.journals')}
                </Link>
                
                <Separator className="bg-gray-200" />
                
                <Link to="/studio" onClick={closeMenu} className={`font-display text-3xl transition-colors py-8 text-center flex items-center justify-center text-black hover:text-gray-600 ${isActiveRoute('/studio') ? 'font-medium' : ''}`}>
                  {t('nav.projects')}
                </Link>
                
                <Separator className="bg-gray-200" />
                
                <Link to="/about" onClick={closeMenu} className={`font-display text-3xl transition-colors py-8 text-center flex items-center justify-center text-black hover:text-gray-600 ${isActiveRoute('/about') ? 'font-medium' : ''}`}>
                  {t('nav.about')}
                </Link>
                
                <Separator className="bg-gray-200" />
                
                <Link to="/contact" onClick={closeMenu} className={`font-display text-3xl transition-colors py-8 text-center flex items-center justify-center text-black hover:text-gray-600 ${isActiveRoute('/contact') ? 'font-medium' : ''}`}>
                  {t('nav.contact_mobile')}
                </Link>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default StickyNavbar;