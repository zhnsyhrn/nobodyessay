import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { essays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
const Writings = () => {
  const allWritings = essays;
  return <div className="min-h-screen bg-background">
      <StickyNavbar />

      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 fade-in">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight" style={{
          lineHeight: '56px'
        }}>If you’re here, you’re already curious. Welcome to my thoughts!</h2>
          <p className="font-display text-base sm:text-lg max-w-2xl leading-relaxed px-2" style={{
          color: '#606060'
        }}>
            A chronological collection of thoughts, observations, and reflections.
          </p>
        </div>
      </section>

      {/* All Writings */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            {allWritings.map((writing, index) => <Card key={index} className="p-4 sm:p-6 lg:p-8 border-border hover:border-foreground/20 transition-colors">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-sm text-muted-foreground font-typewriter">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span>{writing.date}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="bg-muted px-2 py-1 rounded text-xs inline-block w-fit">
                        {writing.category}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm">{writing.readTime}</span>
                  </div>
                  
                  <h2 className="font-display text-lg sm:text-xl font-medium leading-tight">
                    {writing.title}
                  </h2>
                  
                  <p className="font-typewriter text-muted-foreground leading-relaxed text-sm sm:text-base">
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

          <div className="text-center mt-12 sm:mt-16">
            <p className="font-typewriter text-muted-foreground text-sm mb-4 sm:mb-6">
              More writings coming soon...
            </p>
            <Link to="/">
              <Button variant="ghost" className="font-display min-h-[44px] px-4">
                ← Back to home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-xs sm:text-sm text-muted-foreground">
            © 2025 | byzahin. All rights reserved. — All thoughts are freely given
          </p>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>;
};
export default Writings;