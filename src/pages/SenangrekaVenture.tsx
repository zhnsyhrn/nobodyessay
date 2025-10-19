import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Twitter, Github, Linkedin } from "lucide-react";
import { inProgressProjects, shippedProjects, timeline } from "@/data/ventures";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const SenangrekaVenture = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-gradient" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center fade-in">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Building simple,<br />AI-powered products.
          </h1>
          <p className="font-jakarta text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Follow my journey as I design, build, and ship using AI tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-jakarta" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="font-jakarta" asChild>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" />
                Follow on X
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* In Progress Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              🚧 Currently Building
            </h2>
            <p className="font-jakarta text-muted-foreground text-lg">
              Projects in active development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressProjects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">
                    {project.status}
                  </Badge>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="font-jakarta text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipped Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              ✅ Shipped Products
            </h2>
            <p className="font-jakarta text-muted-foreground text-lg">
              Live products ready to use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shippedProjects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 group fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <Badge className="mb-3">
                    {project.status}
                  </Badge>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="font-jakarta text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>

                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Visit site
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Build Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              📈 Build Timeline
            </h2>
            <p className="font-jakarta text-muted-foreground text-lg">
              Key milestones in my building journey
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-jakarta font-medium">{item.event}</p>
                  <p className="font-mono text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            About
          </h2>
          <p className="font-jakarta text-lg text-muted-foreground leading-relaxed mb-6">
            I'm Zach — a designer building AI-powered tools and digital products in public.
          </p>
          <p className="font-jakarta text-base text-muted-foreground leading-relaxed">
            Using tools like <span className="text-foreground font-medium">Lovable</span>, <span className="text-foreground font-medium">Cursor</span>, and <span className="text-foreground font-medium">ChatGPT</span>, I focus on simplicity and speed to ship products that solve real problems.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-jakarta text-sm text-muted-foreground">
              Built with ❤️ using Lovable + AI.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
};

export default SenangrekaVenture;
