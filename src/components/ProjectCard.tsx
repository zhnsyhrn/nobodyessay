import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import { Project } from "@/data/projects";
import ZHABlobBackground from "@/components/ZHABlobBackground";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  preload?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  imageContainerClassName?: string;
  showBlobBackground?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  priority = false,
  preload = false,
  onClick,
  className = "",
  imageContainerClassName = "",
  showBlobBackground = false,
}) => {
  const CardContent = () => (
    <div className="rounded-[10px] overflow-hidden bg-white dark:bg-white/[0.03] border border-transparent dark:border-white/10 hover:shadow-sm dark:hover:bg-white/[0.06] transition-all duration-300 h-full flex flex-col">
      <div className={`overflow-hidden bg-muted ${imageContainerClassName || "aspect-video"}`}>
        <LazyImage 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          priority={priority}
          preload={preload}
          blurUp={true}
        />
      </div>

      <div className={`p-2.5 sm:p-3.5 transition-colors mt-auto relative overflow-hidden ${
        showBlobBackground ? "bg-background dark:bg-[#0a0a0a] text-foreground dark:text-white border-t border-border dark:border-white/10" : "bg-white dark:bg-transparent"
      }`}>
        {/* Animated ZHA Canvas Blob background ONLY inside title area — dark mode only */}
        {showBlobBackground && <ZHABlobBackground />}

        <div className="flex items-center justify-between relative z-10">
          <div className="flex-1">
            <h3 className={`font-display text-base font-medium mb-1 transition-colors ${
              showBlobBackground ? "text-foreground dark:text-white" : "text-black dark:text-white"
            }`}>
              {project.title}
            </h3>
            <p className={`font-mono text-xs sm:text-[10px] uppercase transition-colors ${
              showBlobBackground ? "text-muted-foreground dark:text-white/70" : "text-gray-700 dark:text-gray-300"
            }`}>
              {project.description}
            </p>
          </div>
          <div className="ml-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-colors ${
              showBlobBackground ? "bg-black/5 dark:bg-white/15 hover:bg-black/10 dark:hover:bg-white/25 border border-black/10 dark:border-white/20" : "bg-white dark:bg-white/10"
            }`}>
              <ArrowRight className={showBlobBackground ? "text-foreground dark:text-white" : "text-black dark:text-white"} size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (project.hasDetails !== false) {
    return (
      <Link to={`/projects/${project.slug}`} className={`group cursor-pointer h-full block ${className}`}>
        <CardContent />
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={`group cursor-pointer h-full block ${className}`}>
      <CardContent />
    </div>
  );
};

export default ProjectCard;
