import { AlertTriangle } from "lucide-react";

export function BreakingNewsSkeleton() {
  return (
    <div className="bg-foreground text-primary-foreground border-b-2 border-accent">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3 overflow-hidden">
        <AlertTriangle size={14} className="text-accent shrink-0" />
        <span className="label-mono text-accent text-xs shrink-0">
          ⚡ BREAKING
        </span>
        <div className="h-4 w-px bg-muted-foreground shrink-0 opacity-40" />
        <div className="h-3 w-20 bg-primary-foreground/80  animate-pulse rounded" />
      </div>
    </div>
  );
}
