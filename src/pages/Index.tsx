import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { getFeaturedEssays, essays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { Instagram, Linkedin, X, ArrowRight, Search, CornerDownLeft } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { LazyImage } from "@/components/ui/lazy-image";
import { useCarouselPreloader } from "@/hooks/useImagePreloader";
import { projects } from "@/data/projects";
import { useChat } from "@/contexts/ChatContext";
import { useTranslation } from "react-i18next";

// Portfolio design images - Your latest design portfolio work
const portfolioImages = [
  { src: "/lovable-uploads/4f35efbc-ddf9-451c-bf0a-e7c2e5ccceec.png", title: "MoneyX App", type: "App Design", slug: "moneyx-savings-goals-manual-entry" },
  { src: "/lovable-uploads/ed2d1384-cbe4-4b7a-8d35-9fbad4f3f104.png", title: "Great Eastern Takaful", type: "UX/UI Design", slug: "great-eastern-takaful-malaysia" },
  { src: "/lovable-uploads/f4697a18-0878-474e-993a-80b25600aa97.png", title: "Mobile App Screens", type: "App Design", slug: "moneyx-savings-goals-manual-entry" },
  { src: "/lovable-uploads/ebb70966-3d48-4bd8-a0fb-dcb74281f5fb.png", title: "PolicyStreet", type: "UX/UI Design", slug: "policystreet-car-insurance-platform" },
  { src: "/lovable-uploads/87011945-cf3d-4d63-8f09-146843fb1e36.png", title: "Banking & Finance App", type: "App Design", slug: "moneyx-savings-goals-manual-entry" },
  { src: "/lovable-uploads/a4606376-f5cc-4a88-bf08-f8485cba771a.png", title: "Dealn Mobile App", type: "Product Design", slug: "deal-experience-platform" },
  { src: "/lovable-uploads/151a6112-1d81-410d-b905-46eb1820545e.png", title: "Knock Knock Cafe", type: "Branding", slug: "knock-knock-cafe-kuala-terengganu" },
  { src: "/lovable-uploads/9fe47bb5-a2b9-40fc-8df4-560e811a56b4.png", title: "Finance App Screens", type: "App Design", slug: "moneyx-moneyxbiz-referral-program" },
  { src: "/lovable-uploads/c4f41984-363c-4bd4-92f4-318ddc3e4368.png", title: "AQA Group of Companies", type: "Web Design", slug: "aqa-group-of-companies" },
  { src: "/lovable-uploads/b4c83dca-133b-41b0-9c28-44746d3f650f.png", title: "Coffee Packaging", type: "Branding", slug: "knock-knock-cafe-kuala-terengganu" },
];

const HERO_TITLES = [
  "Hey! Welcome to my space.",
  "Entrepreneurship, Product Design & Branding."
];

const TypewriterEffect = () => {
  const [textIndex, setTextIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = HERO_TITLES[textIndex % HERO_TITLES.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % HERO_TITLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <>
      {displayedText}
      <span className="ml-1 inline-block w-[3px] h-[0.8em] bg-gradient-to-t from-blue-600 to-cyan-400 align-middle animate-pulse"></span>
    </>
  );
};

const Index = () => {
  const { t } = useTranslation();
  const featuredJournals = getFeaturedEssays();
  const latestAnnouncement = essays.find((e) => e.category === "Announcement");
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const heroRef = React.useRef<HTMLElement>(null);
  const galleryImages = portfolioImages;
  const { openChat, sendMessage } = useChat();
  const [searchValue, setSearchValue] = React.useState("");

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    const text = searchValue.trim();
    setSearchValue("");
    openChat();
    sendMessage(text);
  };

  // Preload carousel images intelligently
  useCarouselPreloader(galleryImages.map(g => g.src), current, 3);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Zahin Syahiran | UI/UX Designer & Brand Strategist</title>
        <meta name="description" content="Hire Zahin Syahiran, a UI/UX designer and branding expert specializing in enterprise software, SaaS, and premium tech company profiles." />
        <meta property="og:title" content="Zahin Syahiran | UI/UX Designer & Brand Strategist" />
        <meta property="og:description" content="Hire Zahin Syahiran, a UI/UX designer and branding expert specializing in enterprise software, SaaS, and premium tech company profiles." />
        <meta name="twitter:title" content="Zahin Syahiran | UI/UX Designer & Brand Strategist" />
        <meta name="twitter:description" content="Hire Zahin Syahiran, a UI/UX designer and branding expert specializing in enterprise software, SaaS, and premium tech company profiles." />
      </Helmet>
      
      <main className="flex-1 flex flex-col">
      <div className="bg-[#f7f8fa] dark:bg-background transition-colors">
      <h1 className="sr-only">Zahin Syahiran - Expert UI/UX Designer & Brand Strategist</h1>
      <StickyNavbar />

      {/* Announcement banner */}
      {latestAnnouncement && (
        <div className="pt-10 sm:pt-14 px-4 sm:px-6 flex justify-center fade-in">
          <Link
            to={`/journals/${latestAnnouncement.slug}`}
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md px-4 py-2 transition-all hover:bg-white/90 dark:hover:bg-white/10 hover:shadow-sm max-w-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-blue-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-400"></span>
            </span>
            <span className="font-jakarta text-[12px] sm:text-[13px] text-slate-700 dark:text-slate-200 font-medium truncate">
              {latestAnnouncement.title}
            </span>
            <ArrowRight
              size={14}
              className="shrink-0 text-slate-400 dark:text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-slate-700 dark:group-hover:text-slate-200"
            />
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-8 sm:py-12 lg:py-20 px-4 sm:px-6 fade-in pb-4 sm:pb-6">
        <div className="max-w-6xl mx-auto text-left lg:text-center relative z-10">
          <h2 className="font-display text-[36px] lg:text-[48px] font-medium mb-2 sm:mb-3 tracking-tight leading-[42px] lg:leading-[54px] min-h-[90px] sm:min-h-[80px] lg:min-h-[60px]">
            <TypewriterEffect />
          </h2>
          <p style={{
          color: 'var(--body-text)'
        }} className="font-jakarta text-[14px] sm:text-[16px] max-w-2xl lg:mx-auto leading-[25px] sm:leading-[29px] px-1 mb-6 sm:mb-8 sm:px-0">{t('hero.subtitle')}</p>
          
          {/* AI Search Bar */}
          <div className="flex flex-col items-center px-1 sm:px-2 mt-8 lg:mt-12 relative z-10 group">
            <div className="relative w-full max-w-2xl">
              {/* Glowing Aura */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 dark:from-blue-500 dark:via-cyan-400 dark:to-blue-500 rounded-full blur-md opacity-20 dark:opacity-50 group-hover:opacity-50 dark:group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-gradient bg-[length:200%_auto]"></div>
              
              <form onSubmit={handleHeroSubmit} className="relative flex items-center w-full h-full bg-white dark:bg-card rounded-full p-2 pl-6 pr-3 shadow-sm transition-colors">
                <input 
                  type="text" 
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleHeroSubmit(e);
                    }
                  }}
                  enterKeyHint="send"
                  placeholder={t('hero.search_placeholder')}
                  className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-foreground font-jakarta text-[15px] placeholder:text-muted-foreground w-full outline-none"
                />
                
                <div className="flex items-center gap-1 sm:gap-2 pl-2 sm:pl-4">
                  <button 
                    type="submit" 
                    title="Send question to AI"
                    className="p-2 sm:p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors group/btn shrink-0 flex items-center justify-center touch-manipulation"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>

            {/* Search Suggestions */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-5">
                {[
                  { full: t('search_suggestions.who_is_zahin.full'), short: t('search_suggestions.who_is_zahin.short') },
                  { full: t('search_suggestions.recent_works.full'), short: t('search_suggestions.recent_works.short') },
                  { full: t('search_suggestions.skills.full'), short: t('search_suggestions.skills.short') }
                ].map((suggestion, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                      openChat();
                      sendMessage(suggestion.full);
                    }}
                    className="px-3 sm:px-4 py-1.5 rounded-full bg-white/50 dark:bg-card/50 hover:bg-white dark:hover:bg-card border border-border/40 hover:border-border/80 text-xs sm:text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-all shadow-sm hover:shadow-md"
                  >
                    <span className="sm:hidden">{suggestion.short}</span>
                    <span className="hidden sm:inline">{suggestion.full}</span>
                  </button>
                ))}
              </div>
          </div>
        </div>
      </section>
      </div>

      {/* Gallery Slider */}
      <section className="py-2 sm:py-4">
        <div className="w-full">
          <Carousel opts={{
          align: "start",
          loop: true
        }} plugins={[Autoplay({
          delay: 3000,
          stopOnInteraction: true
        })]} setApi={setApi} className="w-full relative">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((item, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
                  <Link to={item.slug ? `/projects/${item.slug}` : "/studio"} className="block">
                    <div className="group relative aspect-square overflow-hidden rounded-[10px] cursor-pointer">
                      <LazyImage src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" priority={index < 2}
                        preload={index < 3}
                        blurUp={true}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-white/80 mb-2">
                          {item.type}
                        </p>
                        <h3 className="font-display text-base sm:text-lg font-medium text-white mb-3 max-w-[90%]">
                          {item.title}
                        </h3>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-black font-display text-xs sm:text-sm">
                          View More <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      </main>

      <ScrollToTopButton />
      <Footer copyrightOnly />
    </div>;
};
export default Index;