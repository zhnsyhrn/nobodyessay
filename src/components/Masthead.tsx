import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Masthead = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full bg-[#F4F4F5] border-b border-zinc-200 px-3 sm:px-4 md:px-6">
      {/* Fixed height container for collapsed state */}
      <div className={`max-w-4xl mx-auto ${isExpanded ? 'py-2' : 'py-2'}`}>
        <div className={`flex items-center justify-start gap-1.5 sm:gap-2 ${isExpanded ? 'h-auto' : 'h-4'}`}>
          {/* Malaysian Flag */}
          <img 
            src="/lovable-uploads/4caa9234-a2a4-43ab-8e4c-54fc63c41265.png" 
            alt="Malaysian Flag" 
            className="w-3.5 h-2.5 sm:w-4 sm:h-3 flex-shrink-0"
          />
          
          {/* Title */}
          <p className="font-sans text-xs sm:text-sm text-[#3F3F46] font-medium truncate">
            A Malaysian Designer Website
          </p>
          
          {/* How to identify button */}
          <button
            onClick={toggleExpanded}
            className="flex items-center gap-0.5 sm:gap-1 font-sans text-xs sm:text-sm text-[#2563EB] font-medium hover:text-blue-700 transition-colors flex-shrink-0 ml-auto sm:ml-0"
            aria-expanded={isExpanded}
            aria-controls="masthead-content"
          >
            <span className="hidden sm:inline">How to identify</span>
            <span className="sm:hidden">Identify</span>
            {isExpanded ? (
              <ChevronUp size={12} className="sm:w-3.5 sm:h-3.5" />
            ) : (
              <ChevronDown size={12} className="sm:w-3.5 sm:h-3.5" />
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
            <div className="space-y-0.5">
              <p className="font-sans text-sm font-bold text-[#3F3F46] leading-relaxed">
                Identification is based on participation records at{" "}
                <a 
                  href="https://malaysiabydesign.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:underline"
                >
                  Malaysia by Design
                </a>
                .
              </p>
              <p className="font-sans text-sm font-normal text-[#3F3F46] leading-relaxed">
                A non-profit initiative to highlight Malaysian creative talent globally. This is community-driven and voluntary, non-government affiliated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;