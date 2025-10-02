import React from "react";

interface QuoteBlockProps {
  quote: string;
  authorName: string;
  authorImage: string;
  authorTitle?: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ 
  quote, 
  authorName, 
  authorImage,
  authorTitle 
}) => {
  return (
    <div className="bg-muted/50 p-6 md:p-8 rounded-[10px] mb-8 border border-border">
      <p 
        className="mb-4 md:mb-6 text-base md:text-[21px] leading-relaxed md:leading-[32px]"
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          color: '#374151'
        }}
      >
        "{quote}"
      </p>
      <div className="flex items-center gap-3 md:gap-4">
        <img 
          src={authorImage} 
          alt={authorName}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <p 
            className="font-medium text-sm md:text-base"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              color: '#374151'
            }}
          >
            {authorName}
            {authorTitle && `, ${authorTitle}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock;
