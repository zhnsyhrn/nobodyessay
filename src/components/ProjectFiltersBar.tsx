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
  selectedCompany: string;
  onCompanyChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
  selectedCountry: string;
  onCountryChange: (value: string) => void;
  onClearAll: () => void;
  totalCount: number;
  availableExpertise: string[];
  availableCompanies: string[];
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

/**
 * ZHA-Style Project Filters Bar.
 * Filters: EXPERTISE | COMPANY NAME | CONSTRUCTION STATUS | COUNTRY
 */
export const ProjectFiltersBar: React.FC<ProjectFiltersBarProps> = ({
  selectedExpertise,
  onExpertiseChange,
  selectedCompany,
  onCompanyChange,
  selectedStatus,
  onStatusChange,
  selectedCountry,
  onCountryChange,
  onClearAll,
  totalCount,
  availableExpertise,
  availableCompanies,
}) => {
  const hasActiveFilters =
    selectedExpertise !== "all" ||
    selectedCompany !== "all" ||
    selectedStatus !== "all" ||
    selectedCountry !== "all";

  return (
    <div className="w-full mb-8 space-y-4 font-mono">
      {/* 4-Dropdown Filter Row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
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
            className="!z-40 w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
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

        {/* 2. COMPANY NAME */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            className={`group font-mono text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-none border flex items-center justify-between gap-3 transition-all duration-200 focus:outline-none w-full ${
              selectedCompany !== "all"
                ? "border-blue-500 bg-blue-600 text-white shadow-sm"
                : "border-white/20 bg-black text-white hover:border-white/50 hover:bg-white/5"
            }`}
          >
            <span className="truncate">
              {selectedCompany !== "all" ? selectedCompany : "COMPANY NAME"}
            </span>
            <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={4}
            className="!z-40 w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
          >
            <DropdownMenuItem
              onClick={() => onCompanyChange("all")}
              className="cursor-pointer font-medium uppercase hover:bg-white/10 text-white/80 focus:bg-white/10 focus:text-white rounded-none transition-colors py-2 px-3"
            >
              ALL COMPANIES
            </DropdownMenuItem>
            {availableCompanies.map((comp) => (
              <DropdownMenuItem
                key={comp}
                onClick={() => onCompanyChange(comp)}
                className={`cursor-pointer hover:bg-white/10 focus:bg-white/10 rounded-none transition-colors py-2 px-3 ${
                  selectedCompany === comp ? "font-bold text-blue-400 bg-white/10" : "text-white/90"
                }`}
              >
                {comp}
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
              {selectedStatus !== "all" ? selectedStatus : "PROJECT STATUS"}
            </span>
            <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={4}
            className="!z-40 w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
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
            className="!z-40 w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
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
      </div>

      {/* Action & Status Indicator Bar */}
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
