import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
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
              <Link to="/writings" className="font-display text-sm hover:text-muted-foreground transition-colors">
                Writings
              </Link>
              <Link to="/about" className="font-display text-sm text-foreground">
                About
              </Link>
              <a href="#contact" className="font-display text-sm hover:text-muted-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <section className="py-20 px-6 fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-light mb-12 text-center tracking-tight">
            About the Writer
          </h1>
          
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="font-typewriter text-muted-foreground leading-relaxed text-lg">
              I am nobody in particular, yet somebody in the sense that we all are—
              a consciousness attempting to make sense of existence through words. 
              These essays emerge from quiet observation, late-night contemplation, 
              and the persistent belief that writing can illuminate the overlooked 
              corners of human experience.
            </p>
            
            <p className="font-typewriter text-muted-foreground leading-relaxed text-lg">
              Each piece here represents an attempt to capture something fleeting: 
              a feeling, an insight, a moment of clarity in the beautiful chaos of being alive. 
              If these words resonate with you, then perhaps we share something in our solitude.
            </p>

            <p className="font-typewriter text-muted-foreground leading-relaxed text-lg">
              Writing, for me, is not about answers but about better questions. It's about 
              sitting with uncertainty and finding beauty in the unresolved. In a world 
              that demands constant noise, these essays are an invitation to pause, to 
              reflect, and to find meaning in the spaces between words.
            </p>

            <p className="font-typewriter text-muted-foreground leading-relaxed text-lg">
              I write because I must, not because I have something profound to say, 
              but because the act of writing itself is a form of listening—to the world, 
              to others, to the quiet voice that speaks only in the early hours of morning 
              when the rest of the world sleeps.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link to="/writings">
              <Button variant="ghost" className="font-display">
                Read my writings →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 mt-16">
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

export default About;