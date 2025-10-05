import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Filter, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
  sortBy: "date" | "alphabetical";
  onSortChange: (value: "date" | "alphabetical") => void;
  projectTypes: string[];
}

export const ProjectFilters = ({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  sortBy,
  onSortChange,
  projectTypes,
}: ProjectFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {/* Desktop - Sticky Filters Bar */}
      <div className="hidden md:block sticky top-[57px] z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-4 sm:px-6 lg:px-12 xl:px-16 py-3 sm:py-4">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search project..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-muted/50 border-0 rounded-full"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <Select value={selectedType} onValueChange={onTypeChange}>
                <SelectTrigger className="w-[200px] bg-muted/50 border-0 rounded-full">
                  <SelectValue placeholder="All project types" />
                </SelectTrigger>
                <SelectContent className="bg-background border shadow-lg">
                  <SelectItem value="all">All project types</SelectItem>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2">
                <Button
                  variant={sortBy === "date" ? "default" : "ghost"}
                  onClick={() => onSortChange("date")}
                  className="rounded-full"
                >
                  Date {sortBy === "date" && <ArrowUp size={16} className="ml-1" />}
                </Button>
                <Button
                  variant={sortBy === "alphabetical" ? "default" : "ghost"}
                  onClick={() => onSortChange("alphabetical")}
                  className="rounded-full"
                >
                  Alphabetical
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile - Non-sticky Filters */}
      <div className="md:hidden px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3 w-full">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          placeholder="Search project..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-muted/50 border-0 rounded-full"
        />
      </div>
      
        
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="rounded-full px-6 border-border">
              <Filter size={18} className="mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto rounded-t-[20px]">
            <div className="space-y-4 py-4">
              <Select value={selectedType} onValueChange={onTypeChange}>
                <SelectTrigger className="w-full bg-muted/50 border-0 rounded-full h-12">
                  <SelectValue placeholder="All project types" />
                </SelectTrigger>
                <SelectContent className="bg-background border shadow-lg">
                  <SelectItem value="all">All project types</SelectItem>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-3 pt-2">
                <Button
                  variant={sortBy === "date" ? "default" : "outline"}
                  onClick={() => onSortChange("date")}
                  className="flex-1 rounded-full"
                >
                  Date {sortBy === "date" && <ArrowUp size={16} className="ml-1" />}
                </Button>
                <Button
                  variant={sortBy === "alphabetical" ? "default" : "outline"}
                  onClick={() => onSortChange("alphabetical")}
                  className="flex-1 rounded-full"
                >
                  Alphabetical
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </>
  );
};
