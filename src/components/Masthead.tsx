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
      <div className={`max-w-4xl mx-auto ${isExpanded ? 'py-1.5' : 'py-1.5'}`}>
        <div className={`flex items-center justify-start gap-2 ${isExpanded ? 'h-auto' : 'h-4'}`}>
          {/* Malaysian Flag */}
          <div className="text-sm">🇲🇾</div>
          
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
            How to identify
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
            <div className="space-y-0.5">
              <p className="font-sans text-sm font-bold text-[#3F3F46] leading-relaxed">
                Identification is based on participation records at{" "}
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
              <p className="font-sans text-xs font-normal text-[#3F3F46] leading-relaxed">
                A non-profit initiative to showcase Malaysian creative talent globally. This is community-driven and voluntary, non-government affiliated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;