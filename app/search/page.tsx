import CategoryFilter from "@/components/category-filter";
import SearchBar from "@/components/search-bar";
import { getArticlesList, getCategoriesList } from "@/lib/services";
import { ChevronDown, Loader2, Search } from "lucide-react";
import { Suspense } from "react";

export default async function SearchPage() {
  const articles = await getArticlesList({});
  const categories = await getCategoriesList();
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
          {/* Input */}
          <Suspense>
            <SearchBar />
          </Suspense>
          <Suspense>
            <CategoryFilter categories={categories} />
          </Suspense>
        </div>
        {/* Loading state */}
        <div className="flex items-center justify-center py-16 gap-3">
          <Loader2 size={20} className="animate-spin text-accent" />
          <span className="label-mono text-sm text-muted-foreground">
            Searching the archive...
          </span>
        </div>
        ){/* Empty state */}
        <div className="border-4 border-foreground p-10 text-center bg-card">
          <div className="font-mono text-5xl text-muted-foreground/20 mb-4 select-none">
            ¿?
          </div>
          <p className="label-mono text-accent text-xs mb-2">
            NO RESULTS FOUND
          </p>
          <p className="font-serif font-bold text-xl text-foreground mb-2">
            Nothing matched &ldquo;&rdquo;
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            Try a different query or change the category filter.
          </p>
        </div>
        {/* Results / default articles */}
        <>
          <p className="label-mono text-xs text-muted-foreground mb-4">
            "Recent articles"
          </p>
          <div className="space-y-0">
            {articles.map((article, idx) => (
              <div
                key={article.id}
                className="flex gap-4 py-4 border-b-2 border-border last:border-b-0 cursor-pointer group hover:bg-muted/50 px-2 -mx-2 transition-colors"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-20 h-16 object-cover border-2 border-foreground shrink-0 opacity-85 group-hover:opacity-100 transition-opacity"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="label-mono text-accent text-xs">
                      {article.category}
                    </span>
                    <span className="label-mono text-muted-foreground text-xs">
                      ·
                    </span>
                    <span className="label-mono text-muted-foreground text-xs">
                      {article.publishedAt}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-foreground leading-snug group-hover:text-accent transition-colors text-balance">
                    {article.title}
                  </h4>
                  <p className="font-sans text-xs text-muted-foreground mt-1 line-clamp-1">
                    {article.excerpt}
                  </p>
                </div>
                <span className="font-mono text-xl text-muted-foreground/20 font-black select-none hidden sm:block leading-none pt-1">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </>
      </div>
    </section>
  );
}
