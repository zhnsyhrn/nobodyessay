import { Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border sm:py-6 px-4 sm:px-6 py-[2px]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-[16px]">
          <p className="font-display text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
            byzahin © 2025 | All rights reserved.
          </p>
          <div className="flex gap-4 order-1 sm:order-2 justify-center sm:justify-end">
            <a href="https://www.instagram.com/byzahin_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/zahinsyahiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;