import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Step Component
 * ==============
 * Numbered step indicators for tutorials
 */

interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      {/* Vertical line */}
      <div className="absolute left-5 top-10 bottom-0 w-px bg-white/10 last:hidden" />
      
      {/* Step number */}
      <div className="relative flex items-center justify-center h-10 w-10 rounded-full border border-emerald-500/50 bg-emerald-500/10 shrink-0">
        <span className="font-mono text-sm font-bold text-emerald-400">
          {number}
        </span>
      </div>
      
      {/* Content */}
      <div className="flex-1 pt-1.5">
        <h3 className="font-mono font-medium text-white mb-3">{title}</h3>
        <div className="font-mono text-sm text-white/70 [&>p]:mb-4 [&>ul]:mb-4 [&>pre]:my-4">
          {children}
        </div>
      </div>
    </div>
  );
}

interface StepsProps {
  children: ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <div className="my-8">
      {children}
    </div>
  );
}
