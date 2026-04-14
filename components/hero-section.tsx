"use client"

interface HeroSectionProps {
  onSubscribe?: () => void
}

export function HeroSection({ onSubscribe }: HeroSectionProps) {
  return (
    <section className="border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Publication date row */}
        <div className="flex items-center gap-4 mb-6 border-b-2 border-foreground pb-3">
          <div className="h-px flex-1 bg-foreground" />
          <span className="label-mono text-xs text-muted-foreground">
            VOL. XLII · NO. 148 · MONDAY, APRIL 14, 2026
          </span>
          <div className="h-px flex-1 bg-foreground" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: headline + CTA */}
          <div>
            <p className="label-mono text-accent text-xs mb-3">THE DAILY DISPATCH</p>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-balance text-foreground mb-5">
              News &amp; Insights for Modern Web Developers.
            </h1>
            <p className="text-muted-foreground leading-relaxed text-base mb-8 max-w-md font-sans">
              Changelogs, engineering deep dives, customer stories, and community updates — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#articles-section"
                className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 label-mono text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Browse articles →
              </a>
              <button
                onClick={onSubscribe}
                className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 label-mono text-xs hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right: decorative featured story panel */}
          <div className="relative">
            <div className="border-4 border-foreground bg-card overflow-hidden scanlines">
              <img
                src="/images/article-1.jpg"
                alt="Featured story visual"
                className="w-full h-56 md:h-72 object-cover opacity-80"
              />
              <div className="border-t-4 border-foreground p-4 bg-card">
                <p className="label-mono text-accent text-xs mb-1">FEATURED STORY</p>
                <h2 className="font-serif font-bold text-lg text-foreground leading-snug">
                  The Architecture Behind 3M Daily Requests: An Engineer&apos;s Field Notes
                </h2>
                <p className="font-sans text-xs text-muted-foreground mt-1">Sep 25, 2025</p>
              </div>
            </div>
            {/* Corner stamp decoration */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent border-2 border-foreground flex items-center justify-center rotate-12">
              <span className="label-mono text-accent-foreground text-xs leading-none text-center">NEW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
