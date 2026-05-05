import StickyNavbar from "@/components/StickyNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { ExternalLink, Mic, Briefcase, Rocket } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";

const About = () => {
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
    { name: "Dealn", url: "https://dealn.app/", description: "Deal Experience Platform (DXP)", active: true },
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
    <div className="min-h-screen bg-background">
      <StickyNavbar />

      {/* Speaking & Participation — Photo-forward hero */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-2.5 mb-3">
            <Mic size={16} className="text-muted-foreground" />
            <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Speaking & Participation
            </span>
          </div>
          <h2 className="font-jakarta text-3xl sm:text-4xl font-semibold text-foreground mb-3 tracking-tight">
            Workshops & Events
          </h2>
          <p className="font-jakarta text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            I occasionally speak at events, workshops, and consultations, and have joined startup accelerators as a participant.
          </p>

          {/* Photo mosaic */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
            {speakingPhotos.map((photo, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <LazyImage
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full object-cover hover:scale-[1.03] transition-transform duration-500 ${
                    i === 0 ? "h-48 sm:h-full" : "h-48 sm:h-52"
                  }`}
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
                className="group rounded-xl border border-border bg-secondary/40 p-5 hover:bg-secondary/70 transition-colors"
              >
                <span className="font-mono text-xs text-muted-foreground">{event.year}</span>
                <h3 className="font-jakarta font-medium text-foreground mt-1.5 text-[15px] leading-snug">
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
              <div className="flex items-center gap-2.5 mb-3">
                <Briefcase size={16} className="text-muted-foreground" />
                <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Design & Client Projects
                </span>
              </div>
              <h2 className="font-jakarta text-3xl sm:text-4xl font-semibold text-foreground mb-8 tracking-tight">
                People I've worked with
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {clients.map((client) => (
                  <a
                    key={client.name}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3.5 hover:border-foreground/20 hover:shadow-sm transition-all duration-200"
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
              <div className="flex items-center gap-2.5 mb-3">
                <Rocket size={16} className="text-muted-foreground" />
                <span className="font-jakarta text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Side Projects
                </span>
              </div>
              <h2 className="font-jakarta text-3xl sm:text-4xl font-semibold text-foreground mb-8 tracking-tight">
                Things I'm building
              </h2>

              <div className="space-y-3">
                {sideProjects.map((project) => (
                  <div
                    key={project.name}
                    className={`rounded-xl border border-border p-5 transition-all duration-200 ${
                      project.active
                        ? "bg-background hover:border-foreground/20 hover:shadow-sm"
                        : "bg-secondary/30 opacity-60"
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
                            ? "bg-green-500/10 text-green-700"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {project.active ? "Active" : "Inactive"}
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

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};
export default About;