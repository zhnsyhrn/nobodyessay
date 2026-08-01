import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { ExternalLink, Mic, Briefcase, Rocket } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const About = () => {
  const { t } = useTranslation();
  const clients = [
    { name: "Grain Singapore", logo: "/lovable-uploads/3c96f375-d885-4200-93e7-d6c296d99beb.png", url: "https://grain.com.sg/" },
    { name: "Great Eastern Takaful Berhad", logo: "/lovable-uploads/27f41456-e5d7-44d0-b7c9-cd34256d208c.png", url: "https://www.greateasterntakaful.com/en/personal-takaful.html" },
    { name: "Multimedia University", logo: "/lovable-uploads/3d45a311-8480-4ac2-9b4e-d4581026c946.png", url: "https://www.mmu.edu.my/" },
    { name: "NanoMalaysia Berhad", logo: "/lovable-uploads/a692e280-7921-4475-86cc-982c64f086ab.png", url: "https://nanomalaysia.com.my/" },
    { name: "Verdant Solar", logo: "/lovable-uploads/4b7c51d8-a0b7-4436-b96f-64b7615e0f0e.png", url: "https://verdantsolar.my/" },
    { name: "MyTigas Alliance", logo: "/lovable-uploads/85e1f77f-633b-418c-8603-068070a2d55e.png", url: "https://mytigas.com/" },
    { name: "MoneyX", logo: "/lovable-uploads/ea89b5b1-149b-4473-93c4-c8044d3fb71b.png", url: "https://moneyx.com.my/" },
    { name: "MoneyX Biz", logo: "/lovable-uploads/7444c41d-b2f9-4848-9e79-08b6d96b24b0.png", url: "https://www.moneyxbiz.com.my/" },
    { name: "PolicyStreet", logo: "/lovable-uploads/714500df-499f-4bcc-b0b1-ddfb6dfd74b6.png", url: "https://policystreet.com.my/reinsurance" },
    { name: "Borong", logo: "/lovable-uploads/3c3c213c-e6f9-4cd7-a841-b9b012ff9fdd.png", url: "https://market.borong.com/my" },
    { name: "Meca Consultancy", logo: "/lovable-uploads/e6ecb381-b351-4f44-b892-7e3efcb31c42.png", url: "https://meca.com.my/" },
    { name: "Paperballad & Co.", logo: "/lovable-uploads/6ec75d24-bfe9-44c6-afff-4c215221d6bb.png", url: "https://paperballad.com/" },
  ];

  const sideProjects = [
    { name: "Dealn", url: "https://dealn.app/", description: "Deal Experience Platform (DXP)", active: false },
    { name: "Nobody Collective", url: "https://www.instagram.com/nobody.collective/", description: "Design Education Contents", active: true },
    { name: "Designloka", url: null, description: "Unlimited Design Subscription", active: false },
  ];

  const speakingPhotos = [
    { src: "/lovable-uploads/cdb5672f-de57-4d19-a313-9bdec559de7b.png", alt: "Group photo at university workshop" },
    { src: "/lovable-uploads/a78f735b-9b5e-496f-807c-d89d3bb3fbc1.png", alt: "Speaking at entrepreneurship masterclass" },
    { src: "/lovable-uploads/d0b90204-89f8-4b16-9387-912ec4ef8cf9.png", alt: "Virtual workshop presentation" },
    { src: "/lovable-uploads/be876eca-c1a0-4e2f-940e-27d0df2042fa.png", alt: "Hands-on workshop session" },
    { src: "/lovable-uploads/56d6ab0a-15f4-4d7c-80b5-6e358fb73882.png", alt: "Team photo at bootcamp event" },
    { src: "/lovable-uploads/8f343185-b806-43de-b723-33d36c31b526.png", alt: "Large group photo at university event" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>About Zahin Syahiran | UI/UX Design & Branding Portfolio</title>
        <meta name="description" content="Learn about Zahin Syahiran's experience working with top tech companies, startups, and enterprises to deliver high-converting UX/UI and brand identities." />
      </Helmet>
      <StickyNavbar />

      <main className="flex-1 flex flex-col">
      {/* Speaking & Participation — Photo-forward hero */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-3 tracking-tight">
            {t('about.title')}
          </h1>
          <p className="font-jakarta text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            {t('about.description')}
          </p>

          {/* Photo mosaic */}
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 sm:auto-rows-[220px] gap-3 sm:gap-4 mb-10">
            {speakingPhotos.map((photo, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl h-48 sm:h-full ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <LazyImage
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                  priority={i === 0}
                  blurUp
                />
              </div>
            ))}
          </div>

          {/* Speaking timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Canva Design Workshop", org: "Universiti Malaysia Sabah", year: "2022" },
              { title: "Createz Bootcamp 3.0", org: "University of Malaya", year: "2020" },
              { title: "Entrepreneurship Masterclass", org: "StartupMalaysia", year: "2018" },
            ].map((event, i) => (
              <div
                key={i}
                className="group rounded-xl bg-white dark:bg-white/[0.03] border border-transparent dark:border-white/10 p-5 hover:shadow-sm dark:hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="font-mono text-xs text-muted-foreground">{event.year}</span>
                <h3 className="font-display font-medium text-foreground mt-1.5 text-[15px] leading-snug">
                  {event.title}
                </h3>
                <p className="font-jakarta text-sm text-muted-foreground mt-1">{event.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Side Projects */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Clients — 3 cols */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-8 tracking-tight">
                {t('about.clients_title')}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {clients.map((client) => (
                  <a
                    key={client.name}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl bg-white dark:bg-white/[0.03] border border-transparent dark:border-white/10 p-3.5 hover:shadow-sm dark:hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-8 h-8 object-contain rounded flex-shrink-0"
                    />
                    <span className="font-jakarta text-sm font-medium text-foreground truncate group-hover:text-foreground/80 transition-colors">
                      {client.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Side projects — 2 cols */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-8 tracking-tight">
                {t('about.projects_title')}
              </h2>

              <div className="space-y-3">
                {sideProjects.map((project) => (
                  <div
                    key={project.name}
                    className={`rounded-xl bg-white dark:bg-white/[0.03] border border-transparent dark:border-white/10 p-5 transition-all duration-300 ${
                      project.active ? "hover:shadow-sm dark:hover:bg-white/[0.06]" : "opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-jakarta text-foreground font-medium hover:underline flex items-center gap-2"
                        >
                          {project.name}
                          <ExternalLink size={13} className="text-muted-foreground" />
                        </a>
                      ) : (
                        <span className="font-jakarta text-foreground font-medium">
                          {project.name}
                        </span>
                      )}
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-semibold font-jakarta ${
                          project.active
                            ? "bg-green-500/10 text-green-700 dark:text-green-400"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {project.active ? t('about.active') : t('about.inactive')}
                      </span>
                    </div>
                    <p className="font-jakarta text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};
export default About;