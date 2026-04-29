import SearchControls from "@/components/search-controls";
import SearchSection from "@/components/search-section";
import { Suspense } from "react";

export default async function SearchPage() {
  return (
    <section
      id="search-section"
      className="border-t-4 border-foreground bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="border-b-2 border-foreground pb-4 mb-8">
          <p className="label-mono text-accent text-xs mb-1">
            ◆ SEARCH THE ARCHIVE
          </p>
          <h2 className="font-serif font-bold text-3xl text-foreground">
            Find Articles
          </h2>
        </div>
        {/* Search controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Suspense>
            <SearchControls />
          </Suspense>
        </div>
        <Suspense>
          <SearchSection />
        </Suspense>
      </div>
    </section>
  );
}
