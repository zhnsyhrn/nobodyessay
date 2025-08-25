import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getFeaturedEssays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  const featuredWritings = getFeaturedEssays();

  return (
    <div className="min-h-screen bg-background">
      <StickyNavbar />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-light mb-4 sm:mb-6 lg:mb-8 tracking-tight">
            nobody.essay
          </h2>
          <p className="font-typewriter text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            A collection of thoughts, observations, and reflections on the human condition. 
            Written by someone who believes that the most profound truths often emerge 
            from the quietest corners of existence.
          </p>
        </div>
      </section>

      {/* Featured Writings */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 lg:mb-16 gap-4">
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-medium">
              Featured Writings
            </h3>
            <Link to="/writings">
              <Button variant="ghost" className="font-display text-sm lg:text-base min-h-[44px] px-4 lg:px-6">
                View all writings →
              </Button>
            </Link>
          </div>
          
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {featuredWritings.map((writing, index) => (
              <Card key={index} className="p-4 sm:p-6 lg:p-10 xl:p-12 border-border hover:border-foreground/20 transition-colors hover:shadow-lg">
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm lg:text-base text-muted-foreground font-typewriter">
                    <span>{writing.date}</span>
                    <span>{writing.readTime}</span>
                  </div>
                  
                  <h4 className="font-display text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium leading-tight">
                    {writing.title}
                  </h4>
                  
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 lg:mb-8">
            More to Explore
          </h3>
          
          <p className="font-typewriter text-muted-foreground leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto px-2 text-sm sm:text-base lg:text-lg">
            Discover more essays and reflections, or learn about the person behind these words.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <Link to="/writings">
              <Button className="font-display min-h-[44px] lg:min-h-[48px] px-6 lg:px-8 w-full sm:w-auto text-sm lg:text-base">
                All Writings
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="font-display min-h-[44px] lg:min-h-[48px] px-6 lg:px-8 w-full sm:w-auto text-sm lg:text-base">
                About the Writer
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

export default Index;