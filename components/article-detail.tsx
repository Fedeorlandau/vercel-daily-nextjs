import { Article } from "@/lib/types";
import { TrendingArticles } from "./trending-articles";
import { Suspense } from "react";
import ArticleContent from "./article-content";
import Image from "next/image";

interface ArticleDetailProps {
  article: Article;
  subscribed?: boolean;
}

export function ArticleDetail({ article, subscribed }: ArticleDetailProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main article */}
        <article className="lg:col-span-2">
          {/* Article header */}
          <header className="border-b-2 border-foreground pb-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="label-mono text-accent text-xs bg-accent/10 px-2 py-1 border border-accent">
                {article.category}
              </span>
              <span className="label-mono text-muted-foreground text-xs">
                {article.publishedAt}
              </span>
            </div>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground leading-tight text-balance mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-foreground border-2 border-foreground flex items-center justify-center">
                <span className="text-primary-foreground font-mono text-xs font-bold">
                  {article.author.avatar || article.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-foreground">
                  By {article.author.name}
                </p>
              </div>
            </div>
          </header>

          {/* Featured image */}
          <div className="border-2 border-foreground mb-6 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              height={400}
              width={600}
              className="w-full h-64 md:h-80 object-cover opacity-85"
            />
          </div>

          <Suspense>
            <ArticleContent article={article} />
          </Suspense>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <Suspense>
            <TrendingArticles />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
