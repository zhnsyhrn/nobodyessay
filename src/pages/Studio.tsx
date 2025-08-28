import React, { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Autoplay from "embla-carousel-autoplay";

// Sample project images - you can replace these with actual project images
import galleryImage1 from "@/assets/gallery-01.jpg";
import galleryImage2 from "@/assets/gallery-02.jpg";
import galleryImage3 from "@/assets/gallery-03.jpg";
import galleryImage4 from "@/assets/gallery-04.jpg";
import galleryImage5 from "@/assets/gallery-05.jpg";
import galleryImage6 from "@/assets/gallery-06.jpg";
import galleryImage7 from "@/assets/gallery-07.jpg";
import galleryImage8 from "@/assets/gallery-08.jpg";
import galleryImage9 from "@/assets/gallery-09.jpg";
const Studio = () => {
  // Carousel state
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // All gallery images
  const allImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7, galleryImage8, galleryImage9];

  // Carousel setup
  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return <div className="min-h-screen bg-background">
      <StickyNavbar />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 fade-in lg:py-[60px]">
        <div className="max-w-6xl mx-auto text-left sm:text-center">
          <h1 className="font-display text-4xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight sm:leading-tight lg:leading-tight">Turning briefs into real things, even the ones that change halfway.</h1>
          <p className="font-jakarta sm:text-lg max-w-2xl sm:mx-auto leading-[27px] sm:leading-[29px]" style={{
          fontSize: '18px',
          color: '#606060'
        }}>Your unsolicited critique is expected, your approval is optional, and your silence will be taken as applause. Scroll, skim, judge… I'll act surprised either way.</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[{
            title: "MoneyX App",
            slug: "moneyx-savings-goals-manual-entry",
            description: "App feature UIUX design"
          }, {
            title: "Knock Knock Cafe",
            slug: "knock-knock-cafe-kuala-terengganu",
            description: "Art direction & brand design"
          }, {
            title: "Changfeng Mixed Use Development",
            slug: "changfeng-mixed-use",
            description: "Integrated commercial and residential complex with modern architectural design"
          }, {
            title: "Metropolitan Transit Hub",
            slug: "metropolitan-transit-hub",
            description: "Multi-modal transportation center connecting various transit systems"
          }, {
            title: "Waterfront Cultural District",
            slug: "waterfront-cultural-district",
            description: "Arts and culture destination featuring museums, galleries, and performance venues"
          }, {
            title: "Sustainable Office Complex",
            slug: "sustainable-office-complex",
            description: "Energy-efficient commercial development with innovative green building technologies"
          }].map((project, index) => <Link key={index} to={`/projects/${project.slug}`} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <img src={index === 0 ? "/lovable-uploads/38a4617f-499b-49dd-accd-4531551d30ac.png" : index === 1 ? "/lovable-uploads/727cdb13-e96f-4680-8771-62fb1f9b98ef.png" : allImages[index % allImages.length]} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6 rounded-b-lg" style={{
              backgroundColor: '#F5F5F5'
            }}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-medium text-black mb-1">
                        {project.title}
                      </h3>
                      <p className="font-mono text-sm text-gray-700">
                        {project.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>;
};
export default Studio;