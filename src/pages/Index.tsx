import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { getFeaturedEssays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
const Index = () => {
  const featuredWritings = getFeaturedEssays();
  return <div className="min-h-screen bg-background">
      <StickyNavbar />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 fade-in">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 tracking-tight">I do design and write. I documenting everything through writings. Enjoy.</h2>
          <p className="font-display text-base sm:text-lg max-w-2xl leading-relaxed px-2" style={{
          color: '#606060'
        }}>Every designers should write to articulate their thoughts. It's like your actual scriptures and spread the message. The best way to find out if you want to know somebody is through their writings.</p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Separator className="mb-12 sm:mb-16" />
      </div>

      {/* Featured Writings */}
      <section className="py-0 sm:py-0 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <h3 className="font-display text-xl sm:text-2xl font-medium">
              Featured Writings
            </h3>
            <Link to="/writings">
              <Button variant="ghost" className="font-display text-sm min-h-[44px] px-4">
                View all writings →
              </Button>
            </Link>
          </div>
          
          <div className="space-y-8 sm:space-y-12">
            {featuredWritings.map((writing, index) => <Card key={index} className="p-4 sm:p-6 lg:p-8 border-border hover:border-foreground/20 transition-colors">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-muted-foreground font-typewriter">
                    <span>{writing.date}</span>
                    <span>{writing.readTime}</span>
                  </div>
                  
                  <h4 className="font-display text-lg sm:text-xl font-medium leading-tight">
                    {writing.title}
                  </h4>
                  
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30 mt-12 sm:mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-display text-xl sm:text-2xl font-medium mb-4 sm:mb-6">
            More to Explore
          </h3>
          
          <p className="font-typewriter text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-2 text-sm sm:text-base">
            Discover more essays and reflections, or learn about the person behind these words.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/writings">
              <Button className="font-display min-h-[44px] px-6 w-full sm:w-auto">
                All Writings
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="font-display min-h-[44px] px-6 w-full sm:w-auto">
                About the Writer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-typewriter text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed px-2">
            "The best way to find out if you can trust somebody is to trust them."
          </p>
          <p className="font-display text-xs sm:text-sm text-muted-foreground">
            © 2024 nobody.essay — All thoughts are freely given
          </p>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>;
};
export default Index;