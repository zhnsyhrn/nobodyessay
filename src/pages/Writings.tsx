import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { essays } from "@/data/essays";

const Writings = () => {
  const allWritings = essays;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-display text-xl font-medium hover:text-muted-foreground transition-colors">
              nobody.essay
            </Link>
            <div className="flex items-center space-x-8">
              <Link to="/writings" className="font-display text-sm text-foreground">
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

      {/* Header */}
      <section className="py-20 px-6 fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl font-light mb-6 tracking-tight">
            All Writings
          </h1>
          <p className="font-typewriter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A chronological collection of thoughts, observations, and reflections. 
            Each piece an attempt to capture something fleeting in the permanence of words.
          </p>
        </div>
      </section>

      {/* All Writings */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {allWritings.map((writing, index) => (
              <Card key={index} className="p-8 border-border hover:border-foreground/20 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground font-typewriter">
                    <div className="flex items-center space-x-4">
                      <span>{writing.date}</span>
                      <span>•</span>
                      <span className="bg-muted px-2 py-1 rounded text-xs">
                        {writing.category}
                      </span>
                    </div>
                    <span>{writing.readTime}</span>
                  </div>
                  
                  <h2 className="font-display text-xl font-medium">
                    {writing.title}
                  </h2>
                  
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

          <div className="text-center mt-16">
            <p className="font-typewriter text-muted-foreground text-sm mb-6">
              More writings coming soon...
            </p>
            <Link to="/">
              <Button variant="ghost" className="font-display">
                ← Back to home
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

export default Writings;