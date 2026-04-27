import { getFeaturedArticles } from "@/lib/services";
import { ArticleCard } from "./article-card";

export default async function FeaturedArticles() {
  const articles = await getFeaturedArticles();
  const withoutFirst = articles.slice(1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {withoutFirst.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
