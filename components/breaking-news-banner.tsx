"use client"

import { AlertTriangle } from "lucide-react"

interface BreakingNewsBannerProps {
  headline?: string
}

export function BreakingNewsBanner({
  headline = "VERCEL CDN NOW HANDLES OVER 3M REQUESTS PER DAY — ENGINEERS WARN OF CASCADING FAILURES",
}: BreakingNewsBannerProps) {
  return (
    <div className="bg-foreground text-primary-foreground border-b-2 border-accent">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3 overflow-hidden">
        <AlertTriangle size={14} className="text-accent shrink-0" />
        <span className="label-mono text-accent text-xs shrink-0">⚡ BREAKING</span>
        <div className="h-4 w-px bg-muted-foreground shrink-0 opacity-40" />
        <p className="label-mono text-xs text-primary-foreground/80 truncate">{headline}</p>
      </div>
    </div>
  )
}
