import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Masthead = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full bg-[#F4F4F5] border-b border-zinc-200">
      {/* Fixed height container for collapsed state */}
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 ${isExpanded ? 'py-1.5' : 'py-1.5'}`}>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Malaysia's Design Identity */}
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#3F3F46] mb-2">
                  Malaysia's Design Identity
                </h3>
                <p className="font-sans text-xs text-[#3F3F46] leading-relaxed">
                  Discover the rich cultural heritage and contemporary design thinking that shapes Malaysian creative work. From traditional batik patterns to modern digital interfaces.
                </p>
              </div>
              
              {/* Creative Talent Showcase */}
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#3F3F46] mb-2">
                  Creative Talent Showcase
                </h3>
                <p className="font-sans text-xs text-[#3F3F46] leading-relaxed">
                  Explore portfolios and stories from Malaysia's most innovative designers, artists, and creative professionals making their mark locally and internationally.
                </p>
              </div>
              
              {/* Voluntary Participation */}
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#3F3F46] mb-2">
                  Voluntary Participation
                </h3>
                <p className="font-sans text-xs text-[#3F3F46] leading-relaxed">
                  This initiative is community-driven and voluntary. Malaysian designers can showcase their work and connect with peers in the creative industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;