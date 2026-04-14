export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-foreground text-primary-foreground">
      <div className="h-1 bg-accent" />
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-mono text-xs">▲</span>
          </div>
          <span className="label-mono text-xs text-primary-foreground/80">The Daily Dispatch</span>
        </div>

        <p className="label-mono text-xs text-primary-foreground/50">
          © 2026 The Daily Dispatch. All rights reserved.
        </p>

        <nav className="flex items-center gap-4">
          <a href="#" className="label-mono text-xs text-primary-foreground/60 hover:text-accent transition-colors">
            Privacy
          </a>
          <a href="#" className="label-mono text-xs text-primary-foreground/60 hover:text-accent transition-colors">
            Terms
          </a>
          <a href="#" className="label-mono text-xs text-primary-foreground/60 hover:text-accent transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
