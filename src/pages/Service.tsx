import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import StickyNavbar from "@/components/StickyNavbar";
import Footer from "@/components/Footer";

type ServiceItem = {
  name: string;
  rate: string;
  breakdown?: string;
};

const services: ServiceItem[] = [
  { name: "Logo Design", rate: "800 / design" },
  { name: "Poster / Flyer Design", rate: "180 / design" },
  { name: "Company Profile Design", rate: "1,500 / 10 pages" },
  { name: "Social Media Design Visuals", rate: "110 / visual" },
  { name: "Brand Identity Package", rate: "1,000 – 3,000" },
  { name: "Website Design (UI only)", rate: "450 / page" },
  { name: "Business Card Design", rate: "150 / design" },
  { name: "Presentation / Pitch Deck Design", rate: "1,300 / document" },
  { name: "Brochure / Trifold Design", rate: "350 / visual" },
  { name: "Packaging Design", rate: "150 – 350" },
  { name: "Email Newsletter Design", rate: "300 / visual" },
  { 
    name: "Website Design and Development", 
    rate: "5,300", 
    breakdown: "• UI/UX design\n• Frontend development\n• Development using Google Antigravity\n• Custom responsive layout\n• Generative Engine Optimization (GEO) setup\n• Content integration\n• Up to 7 pages\n\n* Note: Cost of domain and hosting are separate." 
  },
];

const Service = () => {
  const handleWhatsappClick = () => {
    window.open("http://wasap.my/60183943519", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <StickyNavbar />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h1 className="font-display sm:text-4xl font-medium tracking-tight leading-tight lg:text-4xl text-3xl">
                Design Services & Rates
              </h1>
              <p className="font-mono text-lg text-zinc-400 sm:text-sm">
                PROFESSIONAL RATES (RM)
              </p>
            </div>

            <div className="bg-muted/50 rounded-2xl overflow-hidden border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="py-4 px-6 font-display font-medium text-lg">Design Service</th>
                      <th className="py-4 px-6 font-display font-medium text-lg text-right">(RM)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) => (
                      <tr 
                        key={index} 
                        className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-6 font-mono text-zinc-300">
                          <div>{service.name}</div>
                          {service.breakdown && (
                            <div className="text-sm text-zinc-500 mt-1 whitespace-pre-wrap">{service.breakdown}</div>
                          )}
                        </td>
                        <td className="py-4 px-6 font-mono text-zinc-300 text-right">{service.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <Button 
                onClick={handleWhatsappClick} 
                variant="default" 
                className="font-display min-h-[48px] px-8 touch-manipulation shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Contact via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Service;
