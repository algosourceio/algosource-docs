"use client";

import { useState, ReactNode } from "react";
import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Checklist Component
 * ===================
 * Interactive checklist for tutorials and guides
 */

interface ChecklistProps {
  children: ReactNode;
}

export function Checklist({ children }: ChecklistProps) {
  return (
    <div className="my-6 rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

interface ChecklistItemProps {
  children: ReactNode;
  defaultChecked?: boolean;
}

export function ChecklistItem({
  children,
  defaultChecked = false,
}: ChecklistItemProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <button
      onClick={() => setChecked(!checked)}
      className={cn(
        "flex items-center gap-3 p-2 rounded-md text-left transition-colors",
        "hover:bg-white/5",
        checked ? "text-white/40" : "text-white"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center h-5 w-5 rounded-md border transition-colors",
          checked
            ? "bg-emerald-500 border-emerald-500"
            : "border-white/30 hover:border-white/50"
        )}
      >
        {checked && <Check className="h-3 w-3 text-black" />}
      </div>
      <span
        className={cn(
          "font-mono text-sm flex-1",
          checked && "line-through"
        )}
      >
        {children}
      </span>
    </button>
  );
}
