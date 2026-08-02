import React from "react";
import { ChevronDown, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProjectFiltersBarProps {
  selectedType: string;
  onTypeChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
  selectedCountry: string;
  onCountryChange: (value: string) => void;
  onClearAll: () => void;
  totalCount: number;
  availableTypes: string[];
}

export const PROJECT_STATUS_OPTIONS = [
  "Complete",
  "Under Development",
  "Planning",
  "Concept",
  "Design",
  "Experimental / Design R&D",
];

export const COUNTRY_OPTIONS = [
  "Malaysia",
  "Singapore",
  "Philippines",
];

export const ProjectFiltersBar: React.FC<ProjectFiltersBarProps> = ({
  selectedType,
  onTypeChange,
  selectedStatus,
  onStatusChange,
  selectedCountry,
  onCountryChange,
  onClearAll,
  totalCount,
  availableTypes,
}) => {
  const hasActiveFilters =
    selectedType !== "all" ||
    selectedStatus !== "all" ||
    selectedCountry !== "all";

  return (
    <div className="w-full mb-8 space-y-4">
      {/* ZHA-Style Minimalist Dropdown Filters Bar */}
      <div className="flex flex-wrap items-center gap-3">
        {/* 1. PROJECT TYPE */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-[4px] border flex items-center justify-between gap-3 transition-colors focus:outline-none min-w-[180px] sm:min-w-[200px] ${
              selectedType !== "all"
                ? "border-foreground bg-foreground text-background"
                : "border-border/80 dark:border-white/20 bg-background dark:bg-card text-foreground hover:border-foreground/50"
            }`}
          >
            <span className="truncate">
              {selectedType !== "all" ? selectedType : "PROJECT TYPE"}
            </span>
            <ChevronDown size={14} className="shrink-0 opacity-70" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="min-w-[200px] bg-background dark:bg-card border border-border dark:border-white/15 p-1 shadow-lg rounded-[6px] font-mono text-xs"
          >
            <DropdownMenuItem
              onClick={() => onTypeChange("all")}
              className="cursor-pointer font-medium uppercase hover:bg-accent"
            >
              ALL TYPES
            </DropdownMenuItem>
            {availableTypes.map((type) => (
              <DropdownMenuItem
                key={type}
                onClick={() => onTypeChange(type)}
                className={`cursor-pointer hover:bg-accent ${
                  selectedType === type ? "font-bold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                {type}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 2. PROJECT STATUS */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-[4px] border flex items-center justify-between gap-3 transition-colors focus:outline-none min-w-[190px] sm:min-w-[210px] ${
              selectedStatus !== "all"
                ? "border-foreground bg-foreground text-background"
                : "border-border/80 dark:border-white/20 bg-background dark:bg-card text-foreground hover:border-foreground/50"
            }`}
          >
            <span className="truncate">
              {selectedStatus !== "all" ? selectedStatus : "PROJECT STATUS"}
            </span>
            <ChevronDown size={14} className="shrink-0 opacity-70" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="min-w-[210px] bg-background dark:bg-card border border-border dark:border-white/15 p-1 shadow-lg rounded-[6px] font-mono text-xs"
          >
            <DropdownMenuItem
              onClick={() => onStatusChange("all")}
              className="cursor-pointer font-medium uppercase hover:bg-accent"
            >
              ALL STATUSES
            </DropdownMenuItem>
            {PROJECT_STATUS_OPTIONS.map((status) => (
              <DropdownMenuItem
                key={status}
                onClick={() => onStatusChange(status)}
                className={`cursor-pointer hover:bg-accent ${
                  selectedStatus === status ? "font-bold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                {status}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 3. COUNTRY */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-[4px] border flex items-center justify-between gap-3 transition-colors focus:outline-none min-w-[160px] sm:min-w-[180px] ${
              selectedCountry !== "all"
                ? "border-foreground bg-foreground text-background"
                : "border-border/80 dark:border-white/20 bg-background dark:bg-card text-foreground hover:border-foreground/50"
            }`}
          >
            <span className="truncate">
              {selectedCountry !== "all" ? selectedCountry : "COUNTRY"}
            </span>
            <ChevronDown size={14} className="shrink-0 opacity-70" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="min-w-[180px] bg-background dark:bg-card border border-border dark:border-white/15 p-1 shadow-lg rounded-[6px] font-mono text-xs"
          >
            <DropdownMenuItem
              onClick={() => onCountryChange("all")}
              className="cursor-pointer font-medium uppercase hover:bg-accent"
            >
              ALL COUNTRIES
            </DropdownMenuItem>
            {COUNTRY_OPTIONS.map((country) => (
              <DropdownMenuItem
                key={country}
                onClick={() => onCountryChange(country)}
                className={`cursor-pointer hover:bg-accent ${
                  selectedCountry === country ? "font-bold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                {country}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Action & Status Indicator Bar */}
      <div className="flex items-center gap-6 pt-1">
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={onClearAll}
            className="font-mono text-xs uppercase tracking-wider underline underline-offset-4 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            CLEAR ALL
          </button>
        ) : (
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/60 border-b border-muted-foreground/30 pb-0.5">
            CLEAR ALL
          </span>
        )}

        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <strong className="text-foreground">{totalCount}</strong> PROJECTS
        </span>
      </div>
    </div>
  );
};

export default ProjectFiltersBar;
