import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getEssayBySlug } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const essay = slug ? getEssayBySlug(slug) : undefined;

  if (!essay) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-medium mb-4">Essay Not Found</h1>
          <p className="font-typewriter text-muted-foreground mb-6">
            The essay you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/writings">
            <Button className="font-display">
              ← Back to Writings
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <StickyNavbar />

      {/* Article Header */}
      <article className="py-12 px-6 fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link to="/writings">
              <Button variant="ghost" className="font-display text-sm p-0 h-auto mb-6 hover:bg-transparent hover:text-foreground">
                ← Back to all writings
              </Button>
            </Link>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground font-typewriter mb-6">
              <div className="flex items-center space-x-4">
                <span>{essay.date}</span>
                <span>•</span>
                <span className="bg-muted px-2 py-1 rounded text-xs">
                  {essay.category}
                </span>
              </div>
              <span>{essay.readTime}</span>
            </div>
            
            <h1 className="font-display text-4xl font-light mb-6 tracking-tight leading-tight">
              {essay.title}
            </h1>
            
            <p className="font-typewriter text-lg text-muted-foreground leading-relaxed">
              {essay.excerpt}
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="font-typewriter leading-relaxed text-foreground"
              dangerouslySetInnerHTML={{ 
                __html: essay.content
                  .split('\n\n')
                  .map(paragraph => {
                    if (paragraph.startsWith('## ')) {
                      return `<h2 class="font-display text-2xl font-medium mt-12 mb-6 text-foreground">${paragraph.slice(3)}</h2>`;
                    }
                    if (paragraph.trim() === '') {
                      return '';
                    }
                    return `<p class="mb-6 leading-relaxed">${paragraph}</p>`;
                  })
                  .join('')
              }}
            />
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Link to="/writings">
                <Button variant="ghost" className="font-display">
                  ← More writings
                </Button>
              </Link>
              
              <div className="text-right">
                <p className="font-typewriter text-sm text-muted-foreground mb-2">
                  Found this piece meaningful?
                </p>
                <p className="font-typewriter text-xs text-muted-foreground">
                  Share it with someone who might appreciate it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

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
      <ScrollToTopButton />
    </div>
  );
};

export default Post;