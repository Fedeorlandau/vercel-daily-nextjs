import { Suspense } from "react";
import FeaturedArticleHero from "./featured-article-hero";
import { FeaturedArticleHeroSkeleton } from "./featured-article-hero-skeleton";
import { createSubscriptionAction } from "@/app/actions";
import HeroActions from "./hero-actions";
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
              <a
                href="#articles-section"
                className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 label-mono text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Browse articles →
              </a>
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
