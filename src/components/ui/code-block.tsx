import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Prism from "prismjs";

// Import common language modules
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-python";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

// Import Prism CSS theme
import "prismjs/themes/prism-tomorrow.css";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export const CodeBlock = ({ code, language = "text", className }: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className={cn("relative my-6 rounded-lg overflow-hidden", className)}>
      <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm">
        <code 
          ref={codeRef}
          className={`language-${language}`}
        >
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;