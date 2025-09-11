import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Masthead = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full bg-[#F4F4F5] border-b border-zinc-200 px-4 sm:px-6">
      {/* Fixed height container for collapsed state */}
      <div className={`max-w-4xl mx-auto ${isExpanded ? 'py-2' : 'py-2'}`}>
        <div className={`flex items-center justify-start gap-2 ${isExpanded ? 'h-auto' : 'h-4'}`}>
          {/* Malaysian Flag */}
          <img 
            src="/lovable-uploads/4caa9234-a2a4-43ab-8e4c-54fc63c41265.png" 
            alt="Malaysian Flag" 
            className="w-4 h-3"
          />
          
          {/* Title */}
          <p className="font-sans text-sm text-[#3F3F46] font-medium">
            A Malaysian Designer Website
          </p>
          
          {/* How to identify button */}
          <button
            onClick={toggleExpanded}
            className="flex items-center gap-1 font-sans text-sm text-[#2563EB] font-medium hover:text-blue-700 transition-colors"
            aria-expanded={isExpanded}
            aria-controls="masthead-content"
          >
            <span className="hidden sm:inline">How to identify</span>
            <span className="sm:hidden">Identify</span>
            {isExpanded ? (
              <ChevronUp size={14} />
            ) : (
              <ChevronDown size={14} />
            )}
          </button>
        </div>
        
        {/* Expandable Content */}
        <div
          id="masthead-content"
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-zinc-300 pt-4">
            <p className="font-sans text-sm text-[#3F3F46] leading-relaxed">
              Made with ❤️ from Malaysia. Identification is based on participation records at{" "}
              <a 
                href="https://malaysia.design" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2563EB] hover:underline"
              >
                malaysia.design
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;