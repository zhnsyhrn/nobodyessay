import { Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border sm:py-6 px-4 sm:px-6 py-[2px]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 py-[16px]">
          <div className="flex gap-4">
            <a href="https://www.instagram.com/byzahin_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/zahinsyahiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="font-display text-xs sm:text-sm text-muted-foreground">
            byzahin © 2025 | All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;