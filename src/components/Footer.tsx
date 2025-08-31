import { Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border py-4 sm:py-6 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 py-4">
          <div className="order-1 sm:order-2 flex gap-3 sm:gap-4 justify-center sm:justify-end" role="navigation" aria-label="Social links">
            <a
              href="https://www.instagram.com/byzahin_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-muted/40"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zahinsyahiran/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-muted/40"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <p className="order-2 sm:order-1 font-display text-xs sm:text-sm text-muted-foreground text-center">
            byzahin © 2025 | All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;