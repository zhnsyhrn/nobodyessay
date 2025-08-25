import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredWritings = [
    {
      title: "On the Nature of Solitude",
      excerpt: "In the quiet spaces between thoughts, we find not emptiness but fullness—a recognition that solitude is not the absence of company, but the presence of self.",
      date: "March 15, 2024",
      readTime: "8 min read"
    },
    {
      title: "Digital Ghosts and Modern Memory",
      excerpt: "Our devices store more than data; they preserve fragments of who we were, creating digital fossils of our former selves in the sedimentary layers of forgotten files.",
      date: "February 28, 2024", 
      readTime: "12 min read"
    },
    {
      title: "The Weight of Unwritten Words",
      excerpt: "Every word we choose carries the shadow of all the words we didn't. In this selective silence lies both the power and the burden of expression.",
      date: "January 12, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-xl font-medium">nobody.essay</h1>
            <div className="flex items-center space-x-8">
              <a href="#writings" className="font-display text-sm hover:text-muted-foreground transition-colors">
                Writings
              </a>
              <a href="#about" className="font-display text-sm hover:text-muted-foreground transition-colors">
                About
              </a>
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
      <section id="writings" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-medium mb-12 text-center">
            Featured Writings
          </h3>
          
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
                  
                  <Button 
                    variant="ghost" 
                    className="font-display text-sm p-0 h-auto hover:bg-transparent hover:text-foreground"
                  >
                    Read more →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-medium mb-8 text-center">
            About the Writer
          </h3>
          
          <div className="max-w-2xl mx-auto">
            <p className="font-typewriter text-muted-foreground leading-relaxed mb-6">
              I am nobody in particular, yet somebody in the sense that we all are—
              a consciousness attempting to make sense of existence through words. 
              These essays emerge from quiet observation, late-night contemplation, 
              and the persistent belief that writing can illuminate the overlooked 
              corners of human experience.
            </p>
            
            <p className="font-typewriter text-muted-foreground leading-relaxed">
              Each piece here represents an attempt to capture something fleeting: 
              a feeling, an insight, a moment of clarity in the beautiful chaos of being alive. 
              If these words resonate with you, then perhaps we share something in our solitude.
            </p>
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