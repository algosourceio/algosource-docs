import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Next Steps Component
 * ====================
 * Navigation cards for guiding users to related content
 */

interface NextStepItem {
  title: string;
  description?: string;
  href: string;
}

interface NextStepsProps {
  items: NextStepItem[];
  className?: string;
}

export function NextSteps({ items, className }: NextStepsProps) {
  return (
    <div className={cn("my-8 grid gap-4 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex flex-col p-4 rounded-lg border border-white/10 bg-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono font-medium text-white group-hover:text-emerald-400 transition-colors">
              {item.title}
            </span>
            <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
          </div>
          {item.description && (
            <p className="font-mono text-sm text-white/50">
              {item.description}
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}

/**
 * Single Next Step Link
 */
interface NextStepProps {
  title: string;
  description?: string;
  href: string;
}

export function NextStep({ title, description, href }: NextStepProps) {
  return (
    <NextSteps items={[{ title, description, href }]} className="sm:grid-cols-1" />
  );
}
