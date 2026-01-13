import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card Components
 * ===============
 * Styled cards for content organization
 */

interface CardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Card({ title, icon, children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-white/5 p-5",
        className
      )}
    >
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-3">
          {icon && (
            <div className="text-emerald-400">{icon}</div>
          )}
          {title && (
            <h3 className="font-mono font-medium text-white">{title}</h3>
          )}
        </div>
      )}
      <div className="font-mono text-sm text-white/70">{children}</div>
    </div>
  );
}

interface CardGridProps {
  children: ReactNode;
  columns?: 2 | 3;
}

export function CardGrid({ children, columns = 2 }: CardGridProps) {
  return (
    <div
      className={cn(
        "my-6 grid gap-4",
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
      )}
    >
      {children}
    </div>
  );
}
