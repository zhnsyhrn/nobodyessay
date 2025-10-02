import React from "react";

const InfoBanner = () => {
  return (
    <div className="sticky top-[70px] z-40 w-full bg-warning border-b border-warning-border px-4 sm:px-6 md:px-6 lg:px-12 xl:px-16 py-3">
      <div className="w-full">
        <p className="font-mono text-sm sm:text-base text-warning-foreground text-left">
          🚧 This website is currently in progress using AI tools.
        </p>
      </div>
    </div>
  );
};

export default InfoBanner;