import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  preload?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  imageContainerClassName?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  priority = false,
  preload = false,
  onClick,
  className = "",
  imageContainerClassName = "",
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
      <div className="p-2 sm:p-3 bg-white dark:bg-transparent transition-colors mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-display text-base font-medium text-black dark:text-white mb-1 transition-colors">
              {project.title}
            </h3>
            <p className="font-mono text-xs sm:text-[10px] text-gray-700 dark:text-gray-300 uppercase transition-colors">
              {project.description}
            </p>
          </div>
          <div className="ml-4">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm transition-colors">
              <ArrowRight className="text-black dark:text-white transition-colors" size={20} />
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
