import { Link } from "react-router-dom";

const StickyNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="font-display text-xl font-medium hover:text-muted-foreground transition-colors">
              nobody.essay
            </h1>
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/writings" className="font-display text-sm hover:text-muted-foreground transition-colors">
              Writings
            </Link>
            <Link to="/about" className="font-display text-sm hover:text-muted-foreground transition-colors">
              About
            </Link>
            <a href="#contact" className="font-display text-sm hover:text-muted-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;