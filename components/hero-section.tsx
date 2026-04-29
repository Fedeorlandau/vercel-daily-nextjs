import { Suspense } from "react";
import FeaturedArticleHero from "./featured-article-hero";
import { FeaturedArticleHeroSkeleton } from "./featured-article-hero-skeleton";
import HeroActions from "./hero-actions";
import Link from "next/link";
export function HeroSection() {
  return (
    <section className="border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="label-mono text-accent text-xs mb-3">
              THE DAILY DISPATCH
            </p>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-balance text-foreground mb-5">
              News &amp; Insights for Modern Web Developers.
            </h1>
            <p className="text-muted-foreground leading-relaxed text-base mb-8 max-w-md font-sans">
              Changelogs, engineering deep dives, customer stories, and
              community updates — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/search"
                className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 label-mono text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Browse articles →
              </Link>
              <Suspense>
                <HeroActions />
              </Suspense>
            </div>
          </div>

          <Suspense fallback={<FeaturedArticleHeroSkeleton />}>
            <FeaturedArticleHero />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
