import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Masthead = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full bg-[#F4F4F5] border-b border-zinc-200 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="w-full py-2">
        <div className="flex justify-center">
          {/* Double chip */}
          <div className="inline-flex items-stretch rounded-full bg-background border border-zinc-200 shadow-sm overflow-hidden">
            {/* Left chip: flag + label */}
            <div className="flex items-center gap-2 pl-3 pr-3.5 py-1">
              <img
                src="/lovable-uploads/4caa9234-a2a4-43ab-8e4c-54fc63c41265.png"
                alt="Malaysian Flag"
                className="w-4 h-3 flex-shrink-0"
              />
              <p className="font-sans text-xs sm:text-[13px] text-[#3F3F46] font-medium whitespace-nowrap">
                A Malaysian Designer Website
              </p>
            </div>

            {/* Divider */}
            <div className="w-px self-stretch bg-zinc-200" />

            {/* Right chip: identify toggle */}
            <button
              onClick={toggleExpanded}
              className="flex items-center gap-1 pl-3 pr-3 py-1 font-sans text-xs sm:text-[13px] text-[#2563EB] font-medium hover:bg-blue-50 transition-colors whitespace-nowrap"
              aria-expanded={isExpanded}
              aria-controls="masthead-content"
            >
              <span className="hidden sm:inline">How to identify</span>
              <span className="sm:hidden">Identify</span>
              {isExpanded ? (
                <ChevronUp size={13} />
              ) : (
                <ChevronDown size={13} />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Content */}
        <div
          id="masthead-content"
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-xl mx-auto border-t border-zinc-300 pt-3 text-center">
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
                The initiative to highlight Malaysian creative talent globally. This is community-driven and voluntary, non-government affiliated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;