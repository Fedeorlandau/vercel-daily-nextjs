export function FeaturedArticleHeroSkeleton() {
  return (
    <div className="relative">
      <div className="border-4 border-foreground bg-card overflow-hidden">
        {/* Image skeleton */}
        <div className="w-full h-56 md:h-72 bg-muted animate-pulse" />
        <div className="border-t-4 border-foreground p-4 bg-card">
          {/* Label skeleton */}
          <div className="h-3 w-24 bg-muted animate-pulse rounded mb-2" />
          {/* Title skeleton - two lines */}
          <div className="space-y-2">
            <div className="h-5 w-full bg-muted animate-pulse rounded" />
            <div className="h-5 w-3/4 bg-muted animate-pulse rounded" />
          </div>
          {/* Date skeleton */}
          <div className="h-3 w-20 bg-muted animate-pulse rounded mt-2" />
        </div>
      </div>
      {/* Corner stamp decoration skeleton */}
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-muted border-2 border-foreground flex items-center justify-center rotate-12 animate-pulse" />
    </div>
  );
}
