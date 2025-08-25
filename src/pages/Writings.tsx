import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { essays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Writings = () => {
  const allWritings = essays;

  return (
    <div className="min-h-screen bg-background">
      <StickyNavbar />

      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 lg:mb-8 tracking-tight">
            All Writings
          </h1>
          <p className="font-typewriter text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            A chronological collection of thoughts, observations, and reflections. 
            Each piece an attempt to capture something fleeting in the permanence of words.
          </p>
        </div>
      </section>

      {/* All Writings */}
      <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {allWritings.map((writing, index) => (
              <Card key={index} className="p-4 sm:p-6 lg:p-10 xl:p-12 border-border hover:border-foreground/20 transition-colors hover:shadow-lg">
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 lg:gap-6 text-sm lg:text-base text-muted-foreground font-typewriter">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span>{writing.date}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="bg-muted px-3 py-1.5 rounded text-xs lg:text-sm inline-block w-fit">
                        {writing.category}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base">{writing.readTime}</span>
                  </div>
                  
                  <h2 className="font-display text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium leading-tight">
                    {writing.title}
                  </h2>
                  
                  <p className="font-typewriter text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg max-w-4xl">
                    {writing.excerpt}
                  </p>
                  
                  <div className="pt-2">
                    <Link to={`/writings/${writing.slug}`}>
                      <Button 
                        variant="ghost" 
                        className="font-display text-sm lg:text-base p-0 h-auto hover:bg-transparent hover:text-foreground min-h-[44px] flex items-center group"
                      >
                        <span className="relative">
                          Read more →
                          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <p className="font-typewriter text-muted-foreground text-sm lg:text-base mb-4 sm:mb-6 lg:mb-8">
              More writings coming soon...
            </p>
            <Link to="/">
              <Button variant="ghost" className="font-display min-h-[44px] lg:min-h-[48px] px-4 lg:px-6 text-sm lg:text-base">
                ← Back to home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-typewriter text-sm lg:text-base text-muted-foreground mb-3 sm:mb-4 lg:mb-6 leading-relaxed px-2 max-w-2xl mx-auto">
            "The best way to find out if you can trust somebody is to trust them."
          </p>
          <p className="font-display text-xs sm:text-sm lg:text-base text-muted-foreground">
            © 2024 nobody.essay — All thoughts are freely given
          </p>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default Writings;