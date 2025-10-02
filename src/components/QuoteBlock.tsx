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
    <div className="bg-muted/50 p-8 rounded-[10px] mb-8">
      <p 
        className="mb-6"
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '21px',
          lineHeight: '32px',
          color: '#374151'
        }}
      >
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <img 
          src={authorImage} 
          alt={authorName}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p 
            className="font-medium"
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
