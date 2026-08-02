import React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProjectFiltersBarProps {
  selectedExpertise: string;
  onExpertiseChange: (value: string) => void;
  selectedTypology: string;
  onTypologyChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
  selectedCountry: string;
  onCountryChange: (value: string) => void;
  selectedRegion: string;
  onRegionChange: (value: string) => void;
  onClearAll: () => void;
  totalCount: number;
  availableExpertise: string[];
  availableTypologies: string[];
}

export const STATUS_OPTIONS = [
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

export const REGION_OPTIONS = [
  "Southeast Asia",
  "Asia Pacific",
  "Global",
];

/**
 * ZHA (Zaha Hadid Architects) Exact Replica Project Filters Bar.
 * Reference: https://www.zha.com/projects
 */
export const ProjectFiltersBar: React.FC<ProjectFiltersBarProps> = ({
  selectedExpertise,
  onExpertiseChange,
  selectedTypology,
  onTypologyChange,
  selectedStatus,
  onStatusChange,
  selectedCountry,
  onCountryChange,
  selectedRegion,
  onRegionChange,
  onClearAll,
  totalCount,
  availableExpertise,
  availableTypologies,
}) => {
  const hasActiveFilters =
    selectedExpertise !== "all" ||
    selectedTypology !== "all" ||
    selectedStatus !== "all" ||
    selectedCountry !== "all" ||
    selectedRegion !== "all";

  return (
    <div className="w-full mb-8 space-y-4 font-mono">
      {/* 5-Dropdown Filter Row matching ZHA.com/projects */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
        {/* 1. EXPERTISE */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            className={`group font-mono text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-none border flex items-center justify-between gap-3 transition-all duration-200 focus:outline-none w-full ${
              selectedExpertise !== "all"
                ? "border-blue-500 bg-blue-600 text-white shadow-sm"
                : "border-white/20 bg-black text-white hover:border-white/50 hover:bg-white/5"
            }`}
          >
            <span className="truncate">
              {selectedExpertise !== "all" ? selectedExpertise : "EXPERTISE"}
            </span>
            <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={4}
            className="min-w-[200px] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
          >
            <DropdownMenuItem
              onClick={() => onExpertiseChange("all")}
              className="cursor-pointer font-medium uppercase hover:bg-white/10 text-white/80 focus:bg-white/10 focus:text-white rounded-none transition-colors py-2 px-3"
            >
              ALL EXPERTISE
            </DropdownMenuItem>
            {availableExpertise.map((exp) => (
              <DropdownMenuItem
                key={exp}
                onClick={() => onExpertiseChange(exp)}
                className={`cursor-pointer hover:bg-white/10 focus:bg-white/10 rounded-none transition-colors py-2 px-3 ${
                  selectedExpertise === exp ? "font-bold text-blue-400 bg-white/10" : "text-white/90"
                }`}
              >
                {exp}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 2. TYPOLOGIES */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            className={`group font-mono text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-none border flex items-center justify-between gap-3 transition-all duration-200 focus:outline-none w-full ${
              selectedTypology !== "all"
                ? "border-blue-500 bg-blue-600 text-white shadow-sm"
                : "border-white/20 bg-black text-white hover:border-white/50 hover:bg-white/5"
            }`}
          >
            <span className="truncate">
              {selectedTypology !== "all" ? selectedTypology : "TYPOLOGIES"}
            </span>
            <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={4}
            className="min-w-[200px] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
          >
            <DropdownMenuItem
              onClick={() => onTypologyChange("all")}
              className="cursor-pointer font-medium uppercase hover:bg-white/10 text-white/80 focus:bg-white/10 focus:text-white rounded-none transition-colors py-2 px-3"
            >
              ALL TYPOLOGIES
            </DropdownMenuItem>
            {availableTypologies.map((typ) => (
              <DropdownMenuItem
                key={typ}
                onClick={() => onTypologyChange(typ)}
                className={`cursor-pointer hover:bg-white/10 focus:bg-white/10 rounded-none transition-colors py-2 px-3 ${
                  selectedTypology === typ ? "font-bold text-blue-400 bg-white/10" : "text-white/90"
                }`}
              >
                {typ}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 3. CONSTRUCTION STATUS */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            className={`group font-mono text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-none border flex items-center justify-between gap-3 transition-all duration-200 focus:outline-none w-full ${
              selectedStatus !== "all"
                ? "border-blue-500 bg-blue-600 text-white shadow-sm"
                : "border-white/20 bg-black text-white hover:border-white/50 hover:bg-white/5"
            }`}
          >
            <span className="truncate">
              {selectedStatus !== "all" ? selectedStatus : "CONSTRUCTION STATUS"}
            </span>
            <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={4}
            className="min-w-[210px] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
          >
            <DropdownMenuItem
              onClick={() => onStatusChange("all")}
              className="cursor-pointer font-medium uppercase hover:bg-white/10 text-white/80 focus:bg-white/10 focus:text-white rounded-none transition-colors py-2 px-3"
            >
              ALL STATUSES
            </DropdownMenuItem>
            {STATUS_OPTIONS.map((status) => (
              <DropdownMenuItem
                key={status}
                onClick={() => onStatusChange(status)}
                className={`cursor-pointer hover:bg-white/10 focus:bg-white/10 rounded-none transition-colors py-2 px-3 ${
                  selectedStatus === status ? "font-bold text-blue-400 bg-white/10" : "text-white/90"
                }`}
              >
                {status}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 4. COUNTRY */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            className={`group font-mono text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-none border flex items-center justify-between gap-3 transition-all duration-200 focus:outline-none w-full ${
              selectedCountry !== "all"
                ? "border-blue-500 bg-blue-600 text-white shadow-sm"
                : "border-white/20 bg-black text-white hover:border-white/50 hover:bg-white/5"
            }`}
          >
            <span className="truncate">
              {selectedCountry !== "all" ? selectedCountry : "COUNTRY"}
            </span>
            <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={4}
            className="min-w-[180px] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
          >
            <DropdownMenuItem
              onClick={() => onCountryChange("all")}
              className="cursor-pointer font-medium uppercase hover:bg-white/10 text-white/80 focus:bg-white/10 focus:text-white rounded-none transition-colors py-2 px-3"
            >
              ALL COUNTRIES
            </DropdownMenuItem>
            {COUNTRY_OPTIONS.map((country) => (
              <DropdownMenuItem
                key={country}
                onClick={() => onCountryChange(country)}
                className={`cursor-pointer hover:bg-white/10 focus:bg-white/10 rounded-none transition-colors py-2 px-3 ${
                  selectedCountry === country ? "font-bold text-blue-400 bg-white/10" : "text-white/90"
                }`}
              >
                {country}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 5. REGION */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            className={`group font-mono text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-none border flex items-center justify-between gap-3 transition-all duration-200 focus:outline-none w-full ${
              selectedRegion !== "all"
                ? "border-blue-500 bg-blue-600 text-white shadow-sm"
                : "border-white/20 bg-black text-white hover:border-white/50 hover:bg-white/5"
            }`}
          >
            <span className="truncate">
              {selectedRegion !== "all" ? selectedRegion : "REGION"}
            </span>
            <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={4}
            className="min-w-[180px] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
          >
            <DropdownMenuItem
              onClick={() => onRegionChange("all")}
              className="cursor-pointer font-medium uppercase hover:bg-white/10 text-white/80 focus:bg-white/10 focus:text-white rounded-none transition-colors py-2 px-3"
            >
              ALL REGIONS
            </DropdownMenuItem>
            {REGION_OPTIONS.map((reg) => (
              <DropdownMenuItem
                key={reg}
                onClick={() => onRegionChange(reg)}
                className={`cursor-pointer hover:bg-white/10 focus:bg-white/10 rounded-none transition-colors py-2 px-3 ${
                  selectedRegion === reg ? "font-bold text-blue-400 bg-white/10" : "text-white/90"
                }`}
              >
                {reg}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Action & Status Indicator Bar (Exact ZHA reference layout) */}
      <div className="flex items-center gap-4 pt-1.5 font-mono text-[11px] sm:text-xs">
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={onClearAll}
            className="uppercase tracking-wider underline underline-offset-4 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer font-medium"
          >
            CLEAR ALL
          </button>
        ) : (
          <span className="uppercase tracking-wider text-muted-foreground/40 border-b border-muted-foreground/20 pb-0.5">
            CLEAR ALL
          </span>
        )}

        <span className="uppercase tracking-wider text-muted-foreground/80">
          <strong className="text-blue-500 font-bold mr-1">{totalCount}</strong>
          PROJECTS
        </span>
      </div>
    </div>
  );
};

export default ProjectFiltersBar;
