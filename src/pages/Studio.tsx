import React, { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import ComingSoonDialog from "@/components/ComingSoonDialog";
import CallToAction from "@/components/CallToAction";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

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
  
  // Coming soon dialog state
  const [comingSoonDialog, setComingSoonDialog] = useState({ open: false, title: "" });

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


      {/* Projects Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
            {[{
            title: "Knock Knock Cafe",
            slug: "knock-knock-cafe-kuala-terengganu",
            description: "Art direction & brand design",
            hasDetails: true
          }, {
            title: "MoneyX App - Fintech",
            slug: "moneyx-savings-goals-manual-entry",
            description: "App feature UIUX design",
            hasDetails: true
          }, {
            title: "PolicyStreet - InsurTech",
            slug: "policystreet-car-insurance-platform",
            description: "Insurance marketplace platform",
            hasDetails: true
          }, {
            title: "Great Eastern Takaful Malaysia",
            slug: "great-eastern-takaful-malaysia",
            description: "UX Audit",
            hasDetails: true
          }, {
            title: "Deal Experience Platform (DXP)",
            slug: "deal-experience-platform",
            description: "SaaS tools design",
            hasDetails: false
          }, {
            title: "SPARK",
            slug: "spark-parking-app",
            description: "Design Exploration for parking app",
            hasDetails: true
          }, {
            title: "Verdant Solar",
            slug: "verdant-solar-my",
            description: "Social media and ad graphics",
            hasDetails: true
          }, {
            title: "Aqa Group of Companies",
            slug: "aqa-group-of-companies",
            description: "Website redesign",
            hasDetails: true
          }, {
            title: "Babyborong Commerce",
            slug: "babyborong-commerce",
            description: "B2B Commerce, UI Design",
            hasDetails: false
          }, {
            title: "Referral Program Design",
            slug: "moneyx-moneyxbiz-referral-program",
            description: "Insurance marketplace platform",
            hasDetails: true
          }, {
            title: "CH Phoon & Associates",
            slug: "ch-phoon-associates",
            description: "Law firm logo redesign",
            hasDetails: false
          }].map((project, index) => {
            const getImageSrc = (index: number) => {
              const images = [
                "/lovable-uploads/2ec90d04-32fe-40d7-ad32-37985537079c.png", // Knock Knock Cafe
                "/lovable-uploads/3f82fbbf-f7a3-4418-bc91-7b43dcb140e8.png", // MoneyX App
                "/lovable-uploads/87b6fb4e-ffa5-46a7-9852-1a38db415cb4.png", // PolicyStreet
                "/lovable-uploads/69a2f54d-177c-4bcd-9167-0e4939d7b7fb.png", // Great Eastern
                "/lovable-uploads/f83e49dc-cff5-4e61-af7d-10bef4f81e8d.png", // Deal Experience Platform
                "/lovable-uploads/c439fbb4-3f35-4764-a184-273325e4e840.png", // SPARK
                "/lovable-uploads/b4780aa0-32a0-449d-b039-b83cc167691e.png", // Verdant Solar
                "/lovable-uploads/6a5cb6e1-03b7-4408-acc9-3a920fc02038.png", // Aqa Group
                "/lovable-uploads/a0d51a79-c8e0-48dd-a846-8ee7d9ccec37.png", // Babyborong Commerce
                "/lovable-uploads/3203ca77-96ca-4347-9e77-4a9c89891bfb.png", // Referral Program
                "/lovable-uploads/f3563e28-9a23-4146-bb62-ca77d0cd0da9.png"  // CH Phoon & Associates
              ];
              return images[index] || allImages[index % allImages.length];
            };

            const handleClick = (e: React.MouseEvent) => {
              if (!project.hasDetails) {
                e.preventDefault();
                setComingSoonDialog({ open: true, title: project.title });
              }
            };

            const CardContent = () => (
              <div className="rounded-[10px] overflow-hidden bg-white">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={getImageSrc(index)} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    loading="lazy" 
                  />
                </div>
                <div className="p-2 sm:p-3" style={{
              backgroundColor: '#F5F5F5'
            }}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-display text-base font-medium text-black mb-1">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-[10px] text-gray-700 uppercase">
                        {project.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      <ArrowRight className="text-gray-600" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            );

            return project.hasDetails ? (
              <Link key={index} to={`/projects/${project.slug}`} className="group cursor-pointer">
                <CardContent />
              </Link>
            ) : (
              <div key={index} onClick={handleClick} className="group cursor-pointer">
                <CardContent />
              </div>
            );
          })}
          </div>
        </div>
      </section>

      <CallToAction page="projects" />
      
      <Footer />
      <ScrollToTopButton />
      
      <ComingSoonDialog 
        open={comingSoonDialog.open}
        onOpenChange={(open) => setComingSoonDialog(prev => ({ ...prev, open }))}
        projectTitle={comingSoonDialog.title}
      />
    </div>;
};
export default Studio;