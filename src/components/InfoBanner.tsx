import React from "react";

const InfoBanner = () => {
  return (
    <div className="w-full bg-warning border-b border-warning-border px-4 sm:px-6 py-3">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-sm sm:text-base text-warning-foreground text-left">
          🚧 This website is currently in progress.
        </p>
      </div>
    </div>
  );
};

export default InfoBanner;