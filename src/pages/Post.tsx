import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getEssayBySlug, getRelatedEssays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { parseRichContent, postProcessContent } from "@/utils/contentParser";
import DOMPurify from "dompurify";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const essay = slug ? getEssayBySlug(slug) : undefined;
  const relatedEssays = slug ? getRelatedEssays(slug, 2) : [];

  // Generate the processed content
  const processedContent = essay ? postProcessContent(parseRichContent(essay.content)) : '';

  if (!essay) {
    return (
      <>
        <Helmet>
          <title>Essay Not Found | Zahin | UX & Creative Direction</title>
          <meta name="description" content="The essay you're looking for doesn't exist or has been moved. Browse our collection of UX design and creative direction journals." />
        </Helmet>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-medium mb-4">Essay Not Found</h1>
            <p className="font-typewriter uppercase text-muted-foreground mb-6">
              The essay you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/journals">
              <Button className="font-display">
                ← Back to Journals
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const pageTitle = `${essay.title} | Zahin | UX & Creative Direction`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const formatMonthYear = (dateStr: string) => {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

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

        <article className="pt-10 sm:pt-12 pb-8 sm:pb-12 px-4 sm:px-6 fade-in">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              to="/journals"
              className="inline-flex items-center gap-1.5 font-jakarta text-[13px] no-underline hover:underline transition-colors"
              style={{ color: "#919191" }}
            >
              <ArrowLeft size={14} />
              Journals
            </Link>

            {/* Category pill */}
            <div className="mt-6">
              <span
                className="inline-block font-typewriter uppercase text-[11px] rounded-full border border-border px-2.5 py-1"
                style={{ color: "#606060" }}
              >
                {essay.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display font-medium tracking-tight mt-4 text-[22px] sm:text-[26px] max-w-full sm:max-w-[560px]"
              style={{ lineHeight: 1.3 }}
            >
              {essay.title}
            </h1>

            {/* Subtitle / description (announcement posts) */}
            {essay.category === "Announcement" && essay.excerpt && (
              <p
                className="font-jakarta max-w-full sm:max-w-[600px]"
                style={{
                  color: "#606060",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  marginTop: "12px",
                }}
              >
                {essay.excerpt}
              </p>
            )}

            {/* Meta row */}
            <div
              className="flex items-center font-jakarta text-[12px] sm:text-[13px]"
              style={{
                color: "#919191",
                gap: "16px",
                marginTop:
                  essay.category === "Announcement" && essay.excerpt
                    ? "20px"
                    : "16px",
              }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                {essay.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} />
                {essay.readTime}
              </span>
            </div>

            {/* Cover image - announcements only */}
            {essay.category === "Announcement" && essay.coverImage && (
              <img
                src={essay.coverImage}
                alt={essay.title}
                className="w-full object-cover rounded-lg mt-8 h-[220px] sm:h-[400px]"
                style={{ marginBottom: "24px" }}
              />
            )}

            {/* Article body */}
            <div className="mt-10">
              <div
                className="font-jakarta prose-post max-w-full sm:max-w-[600px]"
                style={{
                  color: "#606060",
                  fontSize: "15px",
                  lineHeight: 1.8,
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(processedContent),
                }}
              />
            </div>

            {/* More journals */}
            {relatedEssays.length > 0 && (
              <div className="mt-16 pt-8 border-t border-border/60">
                <p
                  className="font-typewriter uppercase text-[11px]"
                  style={{ color: "#919191", letterSpacing: "0.08em" }}
                >
                  More journals
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {relatedEssays.slice(0, 2).map((r) => (
                    <Link
                      key={r.slug}
                      to={`/journals/${r.slug}`}
                      className="block rounded-lg border border-border/60 p-4 transition-colors hover:border-foreground/30"
                    >
                      <p
                        className="font-typewriter uppercase text-[11px]"
                        style={{ color: "#919191" }}
                      >
                        {formatMonthYear(r.date)}
                      </p>
                      <h3 className="font-display text-[13px] font-medium leading-snug mt-1.5 text-foreground">
                        {r.title}
                      </h3>
                    </Link>
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