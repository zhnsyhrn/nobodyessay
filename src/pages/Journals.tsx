import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { essays } from "@/data/essays";
import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

const formatMonthYear = (dateStr: string) => {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const Journals = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    essays.forEach((e) => set.add(e.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return essays;
    return essays.filter((e) => e.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <StickyNavbar />

      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <header>
            <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-foreground">
              Journals
            </h1>
            <p className="font-jakarta text-base mt-3" style={{ color: "#606060" }}>
              Notes on craft, process, industry, and the in-between.
            </p>
          </header>

          {/* Filter tabs */}
          <div
            className="flex gap-2 mt-8 overflow-x-auto sm:flex-wrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-display text-xs rounded-full border px-3 py-1.5 transition-colors shrink-0 ${
                    active
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-foreground border-border hover:border-foreground/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Article rows */}
          <ul className="mt-8 border-b border-border/60">
            {filtered.map((writing) => (
              <li
                key={writing.slug}
                className="border-t border-border/60 transition-opacity duration-200 hover:opacity-70"
              >
                <Link
                  to={`/journals/${writing.slug}`}
                  className="grid items-start gap-2 sm:gap-4 py-5 sm:py-6 grid-cols-1 sm:[grid-template-columns:120px_1fr_28px]"
                >
                  <span
                    className="font-typewriter uppercase text-[12px] sm:pt-0.5"
                    style={{ color: "#919191" }}
                  >
                    {formatMonthYear(writing.date)}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-[18px] font-medium leading-snug text-foreground">
                      {writing.title}
                    </h2>
                    <p
                      className="font-jakarta text-[14px] leading-relaxed mt-1.5"
                      style={{ color: "#606060" }}
                    >
                      {writing.excerpt}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="hidden sm:block text-muted-foreground mt-1 justify-self-end"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction page="journals" />

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Journals;