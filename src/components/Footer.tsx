import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Name */}
          <h2 className="font-display text-xl sm:text-2xl font-medium">
            Zahin Syahiran
          </h2>

          {/* Navigation Links */}
          <nav className="flex gap-6 sm:gap-8" role="navigation" aria-label="Footer navigation">
            <Link 
              to="/studio" 
              className="font-display text-sm sm:text-base hover:text-muted-foreground transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/writings" 
              className="font-display text-sm sm:text-base hover:text-muted-foreground transition-colors"
            >
              Articles
            </Link>
            <Link 
              to="/about" 
              className="font-display text-sm sm:text-base hover:text-muted-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-display text-sm sm:text-base hover:text-muted-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3" role="navigation" aria-label="Social links">
            <a
              href="https://www.instagram.com/byzahin_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zahinsyahiran/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-4">
        <p className="font-display text-sm text-center text-muted-foreground">
          © 2025 Zahin Syahiran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;