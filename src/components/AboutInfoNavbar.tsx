import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus, X, ExternalLink, GraduationCap, Award, Users, HeartHandshake, Quote, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type AboutTabType = "KEY FACTS" | "TESTIMONIALS" | "EXPERTISE" | null;

interface AboutInfoNavbarProps {
  customFacts?: Record<string, string>;
}

export const AboutInfoNavbar: React.FC<AboutInfoNavbarProps> = () => {
  // Start closed by default on page load
  const [activeTab, setActiveTab] = useState<AboutTabType>(null);
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

  const handleTabClick = (tab: AboutTabType) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  const tabs: AboutTabType[] = ["KEY FACTS", "TESTIMONIALS", "EXPERTISE"];

  const getSectionTitle = () => {
    switch (activeTab) {
      case "KEY FACTS":
        return "About Key Facts";
      case "TESTIMONIALS":
        return "Recommendations & Praise";
      case "EXPERTISE":
        return "Skills & Capabilities";
      default:
        return "About Information";
    }
  };

  return (
    <div
      ref={panelRef}
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center max-w-[96vw] pointer-events-none z-40"
    >
      {/* Floating Expanded Pure White Information Card (Matching ZHA Reference) */}
      <AnimatePresence>
        {activeTab && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className="pointer-events-auto mb-4 w-[94vw] max-w-[960px] max-h-[calc(100vh-170px)] sm:max-h-[calc(100vh-190px)] overflow-y-auto zha-scrollbar bg-white text-slate-900 rounded-2xl p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-slate-200/90 relative origin-bottom"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveTab(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-black hover:bg-slate-100 transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Split Layout: Left Column (Profile & Title) | Right Column (Tab Content) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Column: Profile Cover Image + Section Title */}
              <div className="md:col-span-5 flex flex-col">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
                  <img
                    src="/Profile/hiking_2.jpg"
                    alt="Zahin Syahiran"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-black mt-4">
                  {getSectionTitle()}
                </h2>
                <p className="font-sans text-xs text-slate-500 mt-1">
                  Zahin Syahiran — Product Designer & Design Lead
                </p>
              </div>

              {/* Right Column: Tab Content */}
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
                    {/* TAB 1: KEY FACTS */}
                    {activeTab === "KEY FACTS" && (
                      <div className="space-y-5 border-b border-slate-100 pb-6">
                        {/* 1. Education */}
                        <div>
                          <dt className="font-sans text-[13px] text-slate-400 font-normal mb-1">
                            Education
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed">
                            Bachelor of Design (Graphic Design)(Honours), Saito University College, Petaling Jaya, Selangor D.E.
                          </dd>
                        </div>

                        {/* 2. Years of Experience */}
                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-400 font-normal mb-1">
                            Years of Experience
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed">
                            6 Years (FinTech, InsurTech, Enterprise B2B Platforms)
                          </dd>
                        </div>

                        {/* 3. Certification */}
                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-400 font-normal mb-1">
                            Certification
                          </dt>
                          <dd>
                            <ul className="list-disc list-outside pl-5 space-y-1 font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed">
                              <li>AI Vibe Coding & Prototyping, by AITraining2u (May, 2026)</li>
                              <li>Sekolah Demokrasi, by Democratic Action Party (DAP), (Mar & Oct 2017)</li>
                              <li>Cohort 5, University Entpreneurship Masterclass, by StartupMalaysia.org (Nov, 2018)</li>
                            </ul>
                          </dd>
                        </div>

                        {/* 4. Professional Membership */}
                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-400 font-normal mb-1">
                            Professional Membership
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed">
                            MII Toastmasters Club
                          </dd>
                        </div>

                        {/* 5. Volunteers */}
                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-400 font-normal mb-1">
                            Volunteers
                          </dt>
                          <dd>
                            <ul className="list-disc list-outside pl-5 space-y-1 font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed">
                              <li>MUDA Wangsa Maju Committee Team</li>
                              <li>Social Media Coordinator, Parti Sosialis Malaysia (PSM)</li>
                              <li>Political Campaign for Dun Lanchang, Parti Keadilan Rakyat (PKR)</li>
                            </ul>
                          </dd>
                          <p className="font-sans text-[11px] text-slate-400 italic mt-2">
                            *Note: Reflects past voluntary initiatives, community service, and civic engagements.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* TAB 2: TESTIMONIALS */}
                    {activeTab === "TESTIMONIALS" && (
                      <div className="space-y-5 border-b border-slate-100 pb-6">
                        {/* 1. Casimir Yong */}
                        <div>
                          <dt className="font-sans text-[13px] text-slate-500 font-medium mb-1.5 flex items-center gap-2.5">
                            <img
                              src="/images/casimir-yong.png"
                              alt="Casimir Yong"
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-slate-200 shadow-sm shrink-0"
                            />
                            <div>
                              <span className="font-semibold text-slate-900 text-sm">Casimir Yong</span>
                              <span className="text-slate-400 text-xs ml-1.5">• CEO, Paperballad & Co.</span>
                            </div>
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed pl-9.5">
                            "It's difficult to come across someone who is as passionate about design as Zahin. Two years ago, I had the pleasure of working with Zahin and learning from him on a number of entrepreneurship-related projects. I was always in awe of Zahin's ability to combine both critical thinking and creative thinking into his craft and design. No matter how challenging or minor the issue, Zahin gives his all and strives to find a lasting solution that pleases his devoted clientele. Any client would be lucky to work with Zahin and he has my highest recommendation as a designer."
                          </dd>
                        </div>

                        {/* 2. Justin Chen */}
                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-500 font-medium mb-1.5 flex items-center gap-2.5">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold flex items-center justify-center text-xs shrink-0">
                              JC
                            </div>
                            <div>
                              <span className="font-semibold text-slate-900 text-sm">Justin Chen</span>
                              <span className="text-slate-400 text-xs ml-1.5">• Hiring Manager & Product Leader</span>
                            </div>
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed pl-9.5">
                            "One of the most impressive interviews I've ever conducted was with Zahin Syahiran for the role of a digital designer. He was still pursuing his degree, and as is often the case with interviews of fresh graduates, I did not expect much. What impressed me the most was when he entered the interview, instead of talking about his name and educational background, he had prepared a pitch deck on his background and his portfolio, and how he could provide the most value to the company. He made sure I knew that this was a mutual professional exchange."
                          </dd>
                        </div>

                        {/* 2. Justin Wong */}
                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-500 font-medium mb-1.5 flex items-center gap-2.5">
                            <img
                              src="/images/justin-wong.png"
                              alt="Justin Wong"
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-slate-200 shadow-sm shrink-0"
                            />
                            <div>
                              <span className="font-semibold text-slate-900 text-sm">Justin Wong</span>
                              <span className="text-slate-400 text-xs ml-1.5">• Ex-Uber | Founder @ RedSquare & JomeInvoice</span>
                            </div>
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed pl-9.5">
                            "Connected with Zahin Syahiran from PolicyStreet to talk about creative, branding, startup, marketing, partnership and NFT. He founded a '1-monthly price for unlimited designs', Designloka back in 2018 with an innovative business model to the market back then. Love his passion in branding & design! Looking forward to your work in PolicyStreet. 🎨"
                          </dd>
                        </div>

                        {/* 2. Karu Khoo */}
                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-500 font-medium mb-1.5 flex items-center gap-2.5">
                            <img
                              src="/images/karu-khoo.png"
                              alt="Karu Khoo"
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-slate-200 shadow-sm shrink-0"
                            />
                            <div>
                              <span className="font-semibold text-slate-900 text-sm">Karu Khoo</span>
                              <span className="text-slate-400 text-xs ml-1.5">• Country Head / Commercial Director / People & Growth</span>
                            </div>
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed pl-9.5">
                            "Thinking ahead of the competition and creatively presenting yourself. Great work !! A rare gem. Go beyond never settle for just enough."
                          </dd>
                        </div>

                        {/* 2. Winnie Chua */}
                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-500 font-medium mb-1.5 flex items-center gap-2.5">
                            <img
                              src="/images/winnie-chua.png"
                              alt="Winnie Chua 蔡沛宁"
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-slate-200 shadow-sm shrink-0"
                            />
                            <div>
                              <span className="font-semibold text-slate-900 text-sm">Winnie Chua 蔡沛宁</span>
                              <span className="text-slate-400 text-xs ml-1.5">• Co-founder, PolicyStreet & Principal Officer</span>
                            </div>
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed pl-9.5">
                            "A very important initiative. Kudos to you and the rest of growth team!"
                          </dd>
                        </div>

                        {/* 2. Tang Siew Wai */}
                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-500 font-medium mb-1.5 flex items-center gap-2.5">
                            <img
                              src="/images/tang-siew-wai.png"
                              alt="Tang Siew Wai 邓少伟"
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-slate-200 shadow-sm shrink-0"
                            />
                            <div>
                              <span className="font-semibold text-slate-900 text-sm">Tang Siew Wai 邓少伟</span>
                              <span className="text-slate-400 text-xs ml-1.5">• Chief Digital Officer, PolicyStreet</span>
                            </div>
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed pl-9.5">
                            "Zahin Syahiran it has been a wonderful experience working together with you to revamp our website, improved the UI of our D2C site & claims portals, refreshed the PolicyStreet brand, enhanced the overall user experience, and many more interesting projects. You've made tons of significant contributions to PolicyStreet, and I'll always remember the milestones that you have achieved together with the team. I sincerely wish you all the best in your next adventure. I'm pretty sure you'll continue to do well. Keep in touch!"
                          </dd>
                        </div>
                      </div>
                    )}

                    {/* TAB 3: EXPERTISE */}
                    {activeTab === "EXPERTISE" && (
                      <div className="space-y-5 border-b border-slate-100 pb-6">
                        <div>
                          <dt className="font-sans text-[13px] text-slate-400 font-normal mb-1 flex items-center gap-1.5">
                            <Wrench size={14} className="text-slate-500" />
                            Core Competencies
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed">
                            End-to-End Product Design, Mobile App UX/UI, Enterprise SaaS, UX Auditing, Design Systems & Rapid Prototyping
                          </dd>
                        </div>

                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-400 font-normal mb-1">
                            Design Tools & Technologies
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed">
                            Figma, Adobe Creative Cloud, Framer, Webflow, React, Tailwind CSS, HTML5/CSS3, VS Code
                          </dd>
                        </div>

                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-400 font-normal mb-1">
                            Industry Domains
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal leading-relaxed">
                            FinTech & Personal Finance, InsurTech, AI-Driven Construction Tech (Gamuda Tech), Brand Identity & Education
                          </dd>
                        </div>

                        <div className="border-t border-slate-100/80 pt-4">
                          <dt className="font-sans text-[13px] text-slate-400 font-normal mb-1">
                            Languages
                          </dt>
                          <dd className="font-display text-slate-900 text-base sm:text-lg font-normal">
                            English (Professional), Bahasa Malaysia (Native)
                          </dd>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Obvious Glassmorphism ZHA Floating Navigation Pill Bar */}
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-3 bg-white/60 dark:bg-black/60 backdrop-blur-2xl backdrop-saturate-180 backdrop-contrast-125 border border-white/80 dark:border-white/20 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_12px_36px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_16px_40px_rgba(0,0,0,0.6)] text-slate-900 dark:text-white">
        {tabs.map((tab, idx) => (
          <React.Fragment key={tab}>
            {idx > 0 && <span className="text-slate-400/40 dark:text-white/30 select-none">|</span>}
            <button
              onClick={() => handleTabClick(tab)}
              className={`relative flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${
                activeTab === tab
                  ? "text-white font-semibold"
                  : "text-slate-800 dark:text-white/85 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/15"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activePillBgAbout"
                  className="absolute inset-0 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${activeTab === tab ? "text-white dark:text-slate-900 font-semibold" : ""}`}>
                {tab}
              </span>
              <motion.span
                animate={{ rotate: activeTab === tab ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`relative z-10 inline-block ${activeTab === tab ? "text-white dark:text-slate-900" : ""}`}
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

export default AboutInfoNavbar;
