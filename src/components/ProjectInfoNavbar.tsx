import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectInfoNavbarProps {
  projectInfo: Record<string, string>;
  title: string;
  websiteUrl?: string;
  image?: string;
}

type TabType = "KEY FACTS" | "PEOPLE" | "CREDITS" | null;

export const ProjectInfoNavbar: React.FC<ProjectInfoNavbarProps> = ({
  projectInfo,
  title,
  websiteUrl,
  image,
}) => {
  // Default active tab to "KEY FACTS" open on load (like ZHA reference)
  const [activeTab, setActiveTab] = useState<TabType>("KEY FACTS");
  const panelRef = useRef<HTMLDivElement>(null);

  // Close panel on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setActiveTab(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveTab(null);
      }
    };

    if (activeTab) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeTab]);

  if (!projectInfo || Object.keys(projectInfo).length === 0) {
    return null;
  }

  // Categorize projectInfo keys into sections
  const keyFactsEntries: [string, string][] = [];
  const peopleEntries: [string, string][] = [];
  const creditsEntries: [string, string][] = [];

  Object.entries(projectInfo).forEach(([key, value]) => {
    const lowerKey = key.toLowerCase();
    if (lowerKey.includes("credit")) {
      creditsEntries.push([key, value]);
    } else if (
      lowerKey.includes("lead") ||
      lowerKey.includes("manager") ||
      lowerKey.includes("people") ||
      lowerKey.includes("personnel")
    ) {
      peopleEntries.push([key, value]);
    } else {
      keyFactsEntries.push([key, value]);
    }
  });

  // Always ensure robust fallbacks so no tab is ever empty
  if (peopleEntries.length === 0) {
    Object.entries(projectInfo).forEach(([key, value]) => {
      if (key.toLowerCase().includes("role") || key.toLowerCase().includes("project")) {
        peopleEntries.push([key, value]);
      }
    });
    if (peopleEntries.length === 0) {
      peopleEntries.push(...Object.entries(projectInfo));
    }
  }

  if (creditsEntries.length === 0) {
    Object.entries(projectInfo).forEach(([key, value]) => {
      if (key.toLowerCase().includes("contribution") || key.toLowerCase().includes("added") || key.toLowerCase().includes("role")) {
        creditsEntries.push([key, value]);
      }
    });
    if (creditsEntries.length === 0) {
      creditsEntries.push(...Object.entries(projectInfo));
    }
  }

  const handleTabClick = (tab: TabType) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  const getEntriesForActiveTab = (): [string, string][] => {
    switch (activeTab) {
      case "KEY FACTS":
        return keyFactsEntries.length > 0 ? keyFactsEntries : Object.entries(projectInfo);
      case "PEOPLE":
        return peopleEntries.length > 0 ? peopleEntries : Object.entries(projectInfo);
      case "CREDITS":
        return creditsEntries.length > 0 ? creditsEntries : Object.entries(projectInfo);
      default:
        return Object.entries(projectInfo);
    }
  };

  const currentEntries = getEntriesForActiveTab();
  const tabs: TabType[] = ["KEY FACTS", "PEOPLE", "CREDITS"];

  const getSectionTitle = () => {
    switch (activeTab) {
      case "KEY FACTS":
        return "Project Key Facts";
      case "PEOPLE":
        return "Project People";
      case "CREDITS":
        return "Project Credits";
      default:
        return "Project Information";
    }
  };

  return (
    <div
      ref={panelRef}
      className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center max-w-[96vw] pointer-events-none ${
        activeTab ? "z-[200]" : "z-[140]"
      }`}
    >
      {/* Floating Expanded White Information Card (Matching ZHA Reference) */}
      <AnimatePresence>
        {activeTab && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mb-4 w-[94vw] max-w-[960px] max-h-[80vh] overflow-y-auto zha-scrollbar bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-slate-200/80 relative origin-bottom"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveTab(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-black hover:bg-slate-100 transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Split Layout: Left Column (Image & Title) | Right Column (Details Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Project Cover Image + Section Title */}
              <div className="md:col-span-5 flex flex-col">
                {image && (
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-black mt-4">
                  {getSectionTitle()}
                </h2>
              </div>

              {/* Right Column: Key Details Grid */}
              <div className="md:col-span-7 pt-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 border-b border-slate-100 pb-6">
                      {currentEntries.map(([key, value], idx) => {
                        const isLong = value.length > 50;
                        return (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: idx * 0.04 }}
                            className={isLong ? "sm:col-span-2 border-t border-slate-100/80 pt-4" : ""}
                          >
                            <dt className="font-sans text-[13px] text-slate-400 font-normal mb-1">
                              {key}
                            </dt>
                            <dd className={`font-display text-slate-900 leading-relaxed ${isLong ? "text-base sm:text-lg font-normal" : "text-xl sm:text-2xl font-normal"}`}>
                              {value}
                            </dd>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Footer link if website URL exists */}
                    {websiteUrl && (
                      <div className="pt-2 flex justify-end">
                        <a
                          href={websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors uppercase tracking-wider"
                        >
                          Visit Website
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating ZHA-style Navigation Pill Bar */}
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-3 bg-white/95 dark:bg-[#18181b]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.25)] text-slate-900 dark:text-white">
        {tabs.map((tab, idx) => (
          <React.Fragment key={tab}>
            {idx > 0 && <span className="text-slate-300 dark:text-white/25 select-none">|</span>}
            <button
              onClick={() => handleTabClick(tab)}
              className={`relative flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                activeTab === tab
                  ? "text-white font-semibold"
                  : "text-slate-700 dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/15"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activePillBg"
                  className="absolute inset-0 bg-black dark:bg-white dark:text-black rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${activeTab === tab ? "text-white dark:text-black font-semibold" : ""}`}>
                {tab}
              </span>
              <motion.span
                animate={{ rotate: activeTab === tab ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`relative z-10 inline-block ${activeTab === tab ? "text-white dark:text-black" : ""}`}
              >
                {activeTab === tab ? <Minus size={12} /> : <Plus size={12} />}
              </motion.span>
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProjectInfoNavbar;
