import { Suspense } from "react";
import FeaturedArticles from "./featured-articles";
import FeaturedArticlesSkeleton from "./featured-articles-skeleton";

export async function FeaturedArticlesSection() {
  return (
    <section id="articles-section" className="max-w-7xl mx-auto px-4 py-12">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8 border-b-2 border-foreground pb-3">
        <div>
          <p className="label-mono text-accent text-xs mb-1">
            ◆ HANDPICKED STORIES FROM THE TEAM
          </p>
          <h2 className="font-serif font-bold text-3xl text-foreground">
            Featured
          </h2>
        </div>
        <a
          href="#"
          className="label-mono text-xs text-foreground border-b border-foreground hover:text-accent hover:border-accent transition-colors pb-0.5"
        >
          View all →
        </a>
      </div>

      <Suspense fallback={<FeaturedArticlesSkeleton />}>
        <FeaturedArticles />
      </Suspense>
    </section>
  );
}
