import { getFeaturedArticles, getTrendingArticlesList } from "@/lib/services";

export async function TrendingArticles() {
  const articles = await getTrendingArticlesList();
  return (
    <aside>
      <div className="border-b-2 border-foreground pb-2 mb-4">
        <p className="label-mono text-accent text-xs mb-0.5">◆ TRENDING</p>
        <h3 className="font-serif font-bold text-lg text-foreground">
          You May Also Like
        </h3>
      </div>

      <ol className="space-y-4">
        {articles.map((article, idx) => (
          <li
            key={article.id}
            className="flex gap-3 cursor-pointer group border-b border-border pb-4 last:border-0"
          >
            <span className="font-sans font-black text-3xl text-muted-foreground/30 leading-none w-8 shrink-0 select-none">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <div>
              <span className="label-mono text-accent text-xs">
                {article.category}
              </span>
              <h4 className="font-serif font-bold text-sm text-foreground leading-snug mt-0.5 group-hover:text-accent transition-colors retro-link">
                {article.title}
              </h4>
              <p className="label-mono text-xs text-muted-foreground mt-1">
                {article.publishedAt}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
