import { ReactNode } from "react";
import { AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Warning Component
 * =================
 * Prominent warning callout for critical information
 */

interface WarningProps {
  title?: string;
  critical?: boolean;
  children: ReactNode;
}

export function Warning({ title, critical = false, children }: WarningProps) {
  const Icon = critical ? XCircle : AlertTriangle;

  return (
    <div
      className={cn(
        "my-6 rounded-lg border-2 p-5",
        critical
          ? "border-red-500/50 bg-red-500/10"
          : "border-amber-500/50 bg-amber-500/10"
      )}
    >
      <div className="flex gap-4">
        <Icon
          className={cn(
            "h-6 w-6 shrink-0",
            critical ? "text-red-400" : "text-amber-400"
          )}
        />
        <div className="flex-1">
          <p
            className={cn(
              "font-mono font-bold mb-2",
              critical ? "text-red-400" : "text-amber-400"
            )}
          >
            {title || (critical ? "Critical Warning" : "Warning")}
          </p>
          <div className="font-mono text-sm text-white/80 [&>p]:m-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
