import { FeaturedArticleHeroSkeleton } from "./featured-article-hero-skeleton";

function FeaturedArticlesSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeaturedArticleHeroSkeleton />
      <FeaturedArticleHeroSkeleton />
      <FeaturedArticleHeroSkeleton />
    </div>
  );
}

export default FeaturedArticlesSkeleton;
