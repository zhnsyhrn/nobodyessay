import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Share2, Twitter, Facebook, Link as LinkIcon } from "lucide-react";
import { getEssayBySlug, getRelatedEssays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { parseRichContent, postProcessContent } from "@/utils/contentParser";
import DOMPurify from "dompurify";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const essay = slug ? getEssayBySlug(slug) : undefined;
  const relatedEssays = slug ? getRelatedEssays(slug, 3) : [];

  // Generate the processed content
  const processedContent = essay ? postProcessContent(parseRichContent(essay.content)) : '';

  if (!essay) {
    return (
      <>
        <Helmet>
          <title>Essay Not Found | Zahin | UX & Creative Direction</title>
          <meta name="description" content="The essay you're looking for doesn't exist or has been moved. Browse our collection of UX design and creative direction writings." />
        </Helmet>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-medium mb-4">Essay Not Found</h1>
            <p className="font-typewriter uppercase text-muted-foreground mb-6">
              The essay you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/writings">
              <Button className="font-display">
                ← Back to Writings
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const pageTitle = `${essay.title} | Zahin | UX & Creative Direction`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out "${essay.title}" by Zahin S.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={essay.metaDescription} />
        <meta name="keywords" content={`UX design, ${essay.category.toLowerCase()}, creative direction, ${essay.title}`} />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={essay.title} />
        <meta property="og:description" content={essay.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Zahin | UX & Creative Direction" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={essay.title} />
        <meta name="twitter:description" content={essay.metaDescription} />
        
        {/* Article specific */}
        <meta property="article:author" content="Zahin S." />
        <meta property="article:published_time" content={essay.date} />
        <meta property="article:section" content={essay.category} />
        <meta property="article:tag" content={essay.category} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": essay.title,
            "description": essay.metaDescription,
            "author": {
              "@type": "Person",
              "name": "Zahin S."
            },
            "datePublished": essay.date,
            "articleSection": essay.category,
            "wordCount": essay.content.split(' ').length,
            "timeRequired": essay.readTime,
            "publisher": {
              "@type": "Organization",
              "name": "Zahin | UX & Creative Direction"
            }
          })}
        </script>
      </Helmet>

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
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const url = currentUrl;
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`, '_blank');
                  }}
                  className="p-2 sm:p-3 h-9 w-9 sm:h-10 sm:w-10 touch-manipulation"
                >
                  <Twitter size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const url = currentUrl;
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
                    navigator.clipboard.writeText(currentUrl);
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
                  __html: DOMPurify.sanitize(processedContent)
                }}
              />
            </div>

          {/* Next Articles Section */}
          {relatedEssays.length > 0 && (
            <div className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-border">
              <h2 className="font-display text-xl sm:text-2xl font-medium mb-6 sm:mb-8">
                Next Articles You Might Like
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {relatedEssays.map((relatedEssay) => (
                  <div key={relatedEssay.slug} className="p-4 sm:p-6 lg:p-8 border border-border hover:border-foreground/20 transition-colors" style={{ borderRadius: '10px' }}>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-sm text-muted-foreground font-typewriter uppercase">
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
  </>
);
};

export default Post;