import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "error";
  children: React.ReactNode;
  className?: string;
}

const calloutVariants = {
  info: {
    container: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100",
    icon: Info,
  },
  warning: {
    container: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100",
    icon: AlertTriangle,
  },
  success: {
    container: "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100",
    icon: CheckCircle,
  },
  error: {
    container: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100",
    icon: XCircle,
  },
};

export const Callout = ({ type = "info", children, className }: CalloutProps) => {
  const variant = calloutVariants[type];
  const Icon = variant.icon;

  return (
    <div className={cn(
      "flex gap-3 rounded-lg border p-4 my-6",
      variant.container,
      className
    )}>
      <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Callout;