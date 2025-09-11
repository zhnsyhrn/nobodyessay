import { cn } from "@/lib/utils";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

interface TableCellProps {
  children: React.ReactNode;
  isHeader?: boolean;
  className?: string;
}

export const EnhancedTable = ({ children, className }: TableProps) => (
  <div className="my-6 overflow-x-auto">
    <table className={cn(
      "w-full border-collapse border border-border rounded-lg",
      className
    )}>
      {children}
    </table>
  </div>
);

export const TableHeader = ({ children, className }: TableHeaderProps) => (
  <thead className={cn("bg-muted", className)}>
    {children}
  </thead>
);

export const TableRow = ({ children, className }: TableRowProps) => (
  <tr className={cn("border-b border-border hover:bg-muted/50", className)}>
    {children}
  </tr>
);

export const TableCell = ({ children, isHeader = false, className }: TableCellProps) => {
  const Component = isHeader ? "th" : "td";
  
  return (
    <Component className={cn(
      "px-4 py-3 text-left text-sm",
      isHeader && "font-medium text-foreground",
      !isHeader && "text-muted-foreground",
      className
    )}>
      {children}
    </Component>
  );
};

export default EnhancedTable;