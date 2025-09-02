import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Share2, Twitter, Facebook, Link as LinkIcon } from "lucide-react";
import { getEssayBySlug, getRelatedEssays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import DOMPurify from "dompurify";

// Function to parse inline formatting (bold, italic, underline, links)
const parseInlineFormatting = (text: string): string => {
  let formatted = text;
  
  // Links [text](url)
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Bold **text** or __text__
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>');
  formatted = formatted.replace(/__([^_]+)__/g, '<strong class="font-semibold">$1</strong>');
  
  // Italic *text* or _text_ (but not if surrounded by __)
  formatted = formatted.replace(/(?<!_)\*([^*]+)\*(?!\*)/g, '<em class="italic">$1</em>');
  formatted = formatted.replace(/(?<!_)_([^_]+)_(?!_)/g, '<em class="italic">$1</em>');
  
  // Underline ~~text~~
  formatted = formatted.replace(/~~([^~]+)~~/g, '<u class="underline">$1</u>');
  
  return formatted;
};

// Rich text content parser
const parseRichContent = (content: string) => {
  return content
    .split('\n\n')
    .map(paragraph => {
      const trimmed = paragraph.trim();
      
      // Empty paragraphs
      if (!trimmed) return '';
      
      // Different heading levels
      if (trimmed.startsWith('### ')) {
        const text = parseInlineFormatting(trimmed.slice(4));
        return `<h3 class="font-display text-lg sm:text-xl font-medium mt-6 sm:mt-8 mb-3 sm:mb-4 text-foreground">${DOMPurify.sanitize(text)}</h3>`;
      }
      if (trimmed.startsWith('## ')) {
        const text = parseInlineFormatting(trimmed.slice(3));
        return `<h2 class="font-display text-xl sm:text-2xl font-medium mt-8 sm:mt-12 mb-4 sm:mb-6 text-foreground">${DOMPurify.sanitize(text)}</h2>`;
      }
      if (trimmed.startsWith('# ')) {
        const text = parseInlineFormatting(trimmed.slice(2));
        return `<h1 class="font-display text-2xl sm:text-3xl font-medium mt-8 sm:mt-12 mb-6 sm:mb-8 text-foreground">${DOMPurify.sanitize(text)}</h1>`;
      }
      
      // Quote blocks
      if (trimmed.startsWith('> ')) {
        const text = parseInlineFormatting(trimmed.slice(2));
        return `<blockquote class="border-l-4 border-primary pl-4 sm:pl-6 my-6 sm:my-8 italic text-sm sm:text-base font-jakarta" style="color: #606060">${DOMPurify.sanitize(text)}</blockquote>`;
      }
      
      // Images
      if (trimmed.match(/!\[.*?\]\(.*?\)/)) {
        const match = trimmed.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          return `<img src="${DOMPurify.sanitize(match[2])}" alt="${DOMPurify.sanitize(match[1])}" class="w-full rounded-lg my-6 sm:my-8" />`;
        }
      }
      
      // Unordered lists
      if (trimmed.includes('\n- ')) {
        const items = trimmed.split('\n- ').filter(item => item.trim());
        const listItems = items.map(item => {
          const itemText = item.startsWith('- ') ? item.slice(2) : item;
          return `<li class="mb-2">${DOMPurify.sanitize(parseInlineFormatting(itemText))}</li>`;
        }).join('');
        return `<ul class="list-disc list-inside my-4 sm:my-6 space-y-2 text-sm sm:text-base font-jakarta" style="color: #606060">${listItems}</ul>`;
      }
      
      // Ordered lists
      if (trimmed.match(/^\d+\./)) {
        const lines = trimmed.split('\n');
        const listItems = lines
          .filter(line => line.match(/^\d+\./))
          .map(line => {
            const itemText = line.replace(/^\d+\.\s*/, '');
            return `<li class="mb-2">${DOMPurify.sanitize(parseInlineFormatting(itemText))}</li>`;
          })
          .join('');
        return `<ol class="list-decimal list-inside my-4 sm:my-6 space-y-2 text-sm sm:text-base font-jakarta" style="color: #606060">${listItems}</ol>`;
      }
      
      // Regular paragraphs with inline formatting
      const formattedText = parseInlineFormatting(trimmed);
      return `<p class="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base font-jakarta" style="color: #606060">${DOMPurify.sanitize(formattedText)}</p>`;
    })
    .join('');
};

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const essay = slug ? getEssayBySlug(slug) : undefined;
  const relatedEssays = slug ? getRelatedEssays(slug, 3) : [];

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
      <article className="py-8 sm:py-12 px-4 sm:px-6 fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 sm:mb-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 text-sm text-muted-foreground font-typewriter uppercase mb-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <span className="text-xs sm:text-sm">{essay.date}</span>
                <span>•</span>
                <span className="bg-muted px-2 py-1 rounded text-xs">
                  {essay.category}
                </span>
              </div>
              <span className="text-xs sm:text-sm">{essay.readTime}</span>
            </div>
            
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 tracking-tight leading-tight">
              {essay.title}
            </h1>
            
            <p className="text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#606060' }}>
              {essay.excerpt}
            </p>
            
            {/* Author Info and Social Share */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                  <AvatarImage src="/lovable-uploads/307c85f4-d33f-45a4-83d5-c8d95c1b4a07.png" alt="Author" />
                  <AvatarFallback>ZS</AvatarFallback>  
                </Avatar>
                <div>
                  <p className="font-display text-sm sm:text-base font-medium">Zahin S.</p>
                  <p className="font-typewriter uppercase text-xs sm:text-sm text-muted-foreground">Nobody Author</p>
                </div>
              </div>
              
              {/* Social Share Buttons */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const url = window.location.href;
                    const text = `Check out "${essay.title}" by Zahin S.`;
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                  }}
                  className="p-2 sm:p-3 h-9 w-9 sm:h-10 sm:w-10 touch-manipulation"
                >
                  <Twitter size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const url = window.location.href;
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                  }}
                  className="p-2 sm:p-3 h-9 w-9 sm:h-10 sm:w-10 touch-manipulation"
                >
                  <Facebook size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    // You could add a toast notification here
                  }}
                  className="p-2 sm:p-3 h-9 w-9 sm:h-10 sm:w-10 touch-manipulation"
                >
                  <LinkIcon size={16} />
                </Button>
              </div>
            </div>
            
            {/* Divider */}
            <div className="border-t border-border mt-4 sm:mt-6"></div>
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <div 
              className="font-jakarta leading-relaxed"
              style={{ color: '#606060' }}
              dangerouslySetInnerHTML={{ 
                __html: DOMPurify.sanitize(parseRichContent(essay.content))
              }}
            />
          </div>

          {/* Article Footer */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border">
            <Link to="/writings">
              <Button variant="ghost" className="font-display touch-manipulation min-h-[44px]">
                ← More writings
              </Button>
            </Link>
          </div>

          {/* Next Articles Section */}
          {relatedEssays.length > 0 && (
            <div className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-border">
              <h2 className="font-display text-xl sm:text-2xl font-medium mb-6 sm:mb-8">
                Next Articles You Might Like
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {relatedEssays.map((relatedEssay) => (
                  <div key={relatedEssay.slug} className="p-4 sm:p-6 lg:p-8 border border-border hover:border-foreground/20 transition-colors rounded-lg">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-sm text-muted-foreground font-typewriter">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span className="uppercase">{relatedEssay.date}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="bg-muted px-2 py-1 rounded text-xs inline-block w-fit">
                            {relatedEssay.category}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm uppercase">{relatedEssay.readTime}</span>
                      </div>
                      
                      <h3 className="font-display text-lg sm:text-xl font-medium leading-tight">
                        {relatedEssay.title}
                      </h3>
                      
                      <p className="font-jakarta leading-relaxed text-sm sm:text-base" style={{ color: '#606060' }}>
                        {relatedEssay.excerpt}
                      </p>
                      
                      <Link to={`/writings/${relatedEssay.slug}`}>
                        <Button variant="ghost" className="font-display text-sm p-0 h-auto hover:bg-transparent hover:text-foreground min-h-[44px] flex items-center">
                          Read more →
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Post;