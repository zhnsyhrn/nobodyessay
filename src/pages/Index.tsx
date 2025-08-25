import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getFeaturedEssays } from "@/data/essays";

const Index = () => {
  const featuredWritings = getFeaturedEssays();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-xl font-medium">nobody.essay</h1>
            <div className="flex items-center space-x-8">
              <Link to="/writings" className="font-display text-sm hover:text-muted-foreground transition-colors">
                Writings
              </Link>
              <Link to="/about" className="font-display text-sm hover:text-muted-foreground transition-colors">
                About
              </Link>
              <a href="#contact" className="font-display text-sm hover:text-muted-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl font-light mb-6 tracking-tight">
            nobody.essay
          </h2>
          <p className="font-typewriter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of thoughts, observations, and reflections on the human condition. 
            Written by someone who believes that the most profound truths often emerge 
            from the quietest corners of existence.
          </p>
        </div>
      </section>

      {/* Featured Writings */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-display text-2xl font-medium">
              Featured Writings
            </h3>
            <Link to="/writings">
              <Button variant="ghost" className="font-display text-sm">
                View all writings →
              </Button>
            </Link>
          </div>
          
          <div className="space-y-12">
            {featuredWritings.map((writing, index) => (
              <Card key={index} className="p-8 border-border hover:border-foreground/20 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground font-typewriter">
                    <span>{writing.date}</span>
                    <span>{writing.readTime}</span>
                  </div>
                  
                  <h4 className="font-display text-xl font-medium">
                    {writing.title}
                  </h4>
                  
                  <p className="font-typewriter text-muted-foreground leading-relaxed">
                    {writing.excerpt}
                  </p>
                  
                  <Link to={`/writings/${writing.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="font-display text-sm p-0 h-auto hover:bg-transparent hover:text-foreground"
                    >
                      Read more →
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-display text-2xl font-medium mb-6">
            More to Explore
          </h3>
          
          <p className="font-typewriter text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover more essays and reflections, or learn about the person behind these words.
          </p>

          <div className="flex items-center justify-center space-x-6">
            <Link to="/writings">
              <Button className="font-display">
                All Writings
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="font-display">
                About the Writer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-typewriter text-sm text-muted-foreground mb-4">
            "The best way to find out if you can trust somebody is to trust them."
          </p>
          <p className="font-display text-sm text-muted-foreground">
            © 2024 nobody.essay — All thoughts are freely given
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;