import React, { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
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
 * Active filter indicators use a clean blue checkmark icon instead of solid blue fills.
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
  const [isMobileOpen, setIsMobileOpen] = useState(true);

  const hasActiveFilters =
    selectedExpertise !== "all" ||
    selectedCompany !== "all" ||
    selectedStatus !== "all" ||
    selectedCountry !== "all";

  return (
    <div className="w-full mb-8 font-mono border-t border-white/20 pt-4">
      {/* Mobile Accordion Header (Visible only on mobile screens < sm) */}
      <div className="sm:hidden mb-3">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between text-left font-mono text-xs uppercase tracking-widest text-white py-1 focus:outline-none"
        >
          <span className="font-semibold">FILTER</span>
          {isMobileOpen ? (
            <ChevronUp size={16} className="text-white/80" />
          ) : (
            <ChevronDown size={16} className="text-white/80" />
          )}
        </button>
      </div>

      {/* Filter Options Grid / Stack (Always visible on desktop, toggleable on mobile) */}
      <div className={`${isMobileOpen ? "block" : "hidden sm:block"}`}>
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {/* 1. EXPERTISE */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger
              className="group font-mono text-[11px] uppercase tracking-widest px-4 py-3 sm:py-2.5 rounded-none border border-white/20 flex items-center justify-between gap-2.5 transition-all duration-200 focus:outline-none w-full bg-black text-white hover:border-white/50 hover:bg-white/5"
            >
              <span className="truncate">
                {selectedExpertise !== "all" ? selectedExpertise : "EXPERTISE"}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {selectedExpertise !== "all" && (
                  <Check size={13} className="text-blue-400 stroke-[2.5]" />
                )}
                <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={4}
              className="!z-40 w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
            >
              <DropdownMenuItem
                onClick={() => onExpertiseChange("all")}
                className="cursor-pointer text-[11px] flex items-center justify-between font-medium uppercase hover:bg-white/10 text-white/80 focus:bg-white/10 focus:text-white rounded-none transition-colors py-2 px-3"
              >
                <span>ALL EXPERTISE</span>
                {selectedExpertise === "all" && <Check size={12} className="text-blue-400 ml-2" />}
              </DropdownMenuItem>
              {availableExpertise.map((exp) => (
                <DropdownMenuItem
                  key={exp}
                  onClick={() => onExpertiseChange(exp)}
                  className={`cursor-pointer text-[11px] flex items-center justify-between hover:bg-white/10 focus:bg-white/10 rounded-none transition-colors py-2 px-3 ${
                    selectedExpertise === exp ? "font-bold text-blue-400 bg-white/10" : "text-white/90"
                  }`}
                >
                  <span>{exp}</span>
                  {selectedExpertise === exp && <Check size={12} className="text-blue-400 ml-2" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 2. COMPANY NAME */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger
              className="group font-mono text-[11px] uppercase tracking-widest px-4 py-3 sm:py-2.5 rounded-none border border-white/20 flex items-center justify-between gap-2.5 transition-all duration-200 focus:outline-none w-full bg-black text-white hover:border-white/50 hover:bg-white/5"
            >
              <span className="truncate">
                {selectedCompany !== "all" ? selectedCompany : "COMPANY NAME"}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {selectedCompany !== "all" && (
                  <Check size={13} className="text-blue-400 stroke-[2.5]" />
                )}
                <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={4}
              className="!z-40 w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
            >
              <DropdownMenuItem
                onClick={() => onCompanyChange("all")}
                className="cursor-pointer text-[11px] flex items-center justify-between font-medium uppercase hover:bg-white/10 text-white/80 focus:bg-white/10 focus:text-white rounded-none transition-colors py-2 px-3"
              >
                <span>ALL COMPANIES</span>
                {selectedCompany === "all" && <Check size={12} className="text-blue-400 ml-2" />}
              </DropdownMenuItem>
              {availableCompanies.map((comp) => (
                <DropdownMenuItem
                  key={comp}
                  onClick={() => onCompanyChange(comp)}
                  className={`cursor-pointer text-[11px] flex items-center justify-between hover:bg-white/10 focus:bg-white/10 rounded-none transition-colors py-2 px-3 ${
                    selectedCompany === comp ? "font-bold text-blue-400 bg-white/10" : "text-white/90"
                  }`}
                >
                  <span>{comp}</span>
                  {selectedCompany === comp && <Check size={12} className="text-blue-400 ml-2" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 3. PROJECT STATUS */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger
              className="group font-mono text-[11px] uppercase tracking-widest px-4 py-3 sm:py-2.5 rounded-none border border-white/20 flex items-center justify-between gap-2.5 transition-all duration-200 focus:outline-none w-full bg-black text-white hover:border-white/50 hover:bg-white/5"
            >
              <span className="truncate">
                {selectedStatus !== "all" ? selectedStatus : "PROJECT STATUS"}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {selectedStatus !== "all" && (
                  <Check size={13} className="text-blue-400 stroke-[2.5]" />
                )}
                <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={4}
              className="!z-40 w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
            >
              <DropdownMenuItem
                onClick={() => onStatusChange("all")}
                className="cursor-pointer text-[11px] flex items-center justify-between font-medium uppercase hover:bg-white/10 text-white/80 focus:bg-white/10 focus:text-white rounded-none transition-colors py-2 px-3"
              >
                <span>ALL STATUSES</span>
                {selectedStatus === "all" && <Check size={12} className="text-blue-400 ml-2" />}
              </DropdownMenuItem>
              {STATUS_OPTIONS.map((status) => (
                <DropdownMenuItem
                  key={status}
                  onClick={() => onStatusChange(status)}
                  className={`cursor-pointer text-[11px] flex items-center justify-between hover:bg-white/10 focus:bg-white/10 rounded-none transition-colors py-2 px-3 ${
                    selectedStatus === status ? "font-bold text-blue-400 bg-white/10" : "text-white/90"
                  }`}
                >
                  <span>{status}</span>
                  {selectedStatus === status && <Check size={12} className="text-blue-400 ml-2" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 4. COUNTRY */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger
              className="group font-mono text-[11px] uppercase tracking-widest px-4 py-3 sm:py-2.5 rounded-none border border-white/20 flex items-center justify-between gap-2.5 transition-all duration-200 focus:outline-none w-full bg-black text-white hover:border-white/50 hover:bg-white/5"
            >
              <span className="truncate">
                {selectedCountry !== "all" ? selectedCountry : "COUNTRY"}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {selectedCountry !== "all" && (
                  <Check size={13} className="text-blue-400 stroke-[2.5]" />
                )}
                <ChevronDown size={12} className="shrink-0 opacity-70 transition-transform duration-250 ease-out group-data-[state=open]:rotate-180" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={4}
              className="!z-40 w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)] bg-[#0a0a0a] text-white border border-white/20 p-1 shadow-2xl rounded-none font-mono text-[11px] uppercase tracking-wider duration-250 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:slide-out-to-top-1"
            >
              <DropdownMenuItem
                onClick={() => onCountryChange("all")}
                className="cursor-pointer text-[11px] flex items-center justify-between font-medium uppercase hover:bg-white/10 text-white/80 focus:bg-white/10 focus:text-white rounded-none transition-colors py-2 px-3"
              >
                <span>ALL COUNTRIES</span>
                {selectedCountry === "all" && <Check size={12} className="text-blue-400 ml-2" />}
              </DropdownMenuItem>
              {COUNTRY_OPTIONS.map((country) => (
                <DropdownMenuItem
                  key={country}
                  onClick={() => onCountryChange(country)}
                  className={`cursor-pointer text-[11px] flex items-center justify-between hover:bg-white/10 focus:bg-white/10 rounded-none transition-colors py-2 px-3 ${
                    selectedCountry === country ? "font-bold text-blue-400 bg-white/10" : "text-white/90"
                  }`}
                >
                  <span>{country}</span>
                  {selectedCountry === country && <Check size={12} className="text-blue-400 ml-2" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* ZHA Bottom Divider & Readout Row (CLEAR ALL on left, X PROJECTS on right) */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/20 font-mono text-[11px] uppercase tracking-widest">
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={onClearAll}
            className="underline underline-offset-4 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer font-medium"
          >
            CLEAR ALL
          </button>
        ) : (
          <span className="text-white/40 border-b border-white/20 pb-0.5">
            CLEAR ALL
          </span>
        )}

        <span className="text-white/90">
          <strong className="text-blue-500 font-bold mr-1">{totalCount}</strong>
          PROJECTS
        </span>
      </div>
    </div>
  );
};

export default ProjectFiltersBar;
