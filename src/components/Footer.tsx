import { Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border py-2 sm:py-6 lg:py-2 px-4 sm:px-6 bg-[#1f1f1f]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 py-2 lg:py-2">
          <div className="order-1 sm:order-2 flex gap-3 sm:gap-4 justify-center sm:justify-end" role="navigation" aria-label="Social links">
            <a
              href="https://www.instagram.com/byzahin_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="text-white/70 hover:text-white transition-colors p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-white/10"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zahinsyahiran/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-white/70 hover:text-white transition-colors p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <p className="order-2 sm:order-1 font-display text-xs sm:text-sm text-white/70 text-center">
            byzahin © 2025 | All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;