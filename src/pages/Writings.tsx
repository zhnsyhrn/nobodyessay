import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { essays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
const Writings = () => {
  const allWritings = essays;
  return <div className="min-h-screen bg-background">
      <StickyNavbar />


      {/* All Writings */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {allWritings.map((writing, index) => <Card key={index} className="p-4 sm:p-6 lg:p-8 border-border hover:border-foreground/20 transition-colors">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-sm text-muted-foreground font-typewriter uppercase">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="uppercase">{writing.date}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="bg-muted px-2 py-1 rounded text-xs inline-block w-fit">
                        {writing.category}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm uppercase">{writing.readTime}</span>
                  </div>
                  
                  <h2 className="font-display text-lg sm:text-xl font-medium leading-tight">
                    {writing.title}
                  </h2>
                  
                  <p className="font-jakarta leading-relaxed text-sm sm:text-base" style={{
                color: '#606060'
              }}>
                    {writing.excerpt}
                  </p>
                  
                  <Link to={`/writings/${writing.slug}`}>
                    <Button variant="ghost" className="font-display text-sm p-0 h-auto hover:bg-transparent hover:text-foreground min-h-[44px] flex items-center">
                      Read more →
                    </Button>
                  </Link>
                </div>
              </Card>)}
          </div>

          
        </div>
      </section>

      <CallToAction page="writings" />
      
      <Footer />
      <ScrollToTopButton />
    </div>;
};
export default Writings;