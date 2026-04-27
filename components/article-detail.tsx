import { Article } from "@/lib/types";
import { PaywallCTA } from "./paywall-cta";
import { TrendingArticles } from "./trending-articles";
import { Suspense } from "react";

interface ArticleDetailProps {
  article: Article;
  subscribed?: boolean;
}

export function ArticleDetail({
  article,
  subscribed = false,
}: ArticleDetailProps) {
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
                  {article.author.name}
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
          <div className="border-2 border-foreground mb-6 scanlines overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-80 object-cover opacity-85"
            />
          </div>

          {/* Article content / paywall */}
          {subscribed ? (
            <div className="font-sans text-base text-foreground leading-relaxed space-y-4">
              {article.content.map((block) => {
                return <div>{block.type}</div>;
              })}
            </div>
          ) : (
            <>
              <p className="font-sans text-base text-foreground leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <PaywallCTA onSubscribe={() => {}} />
            </>
          )}
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <Suspense>
            <TrendingArticles />
          </Suspense>
          {!subscribed && (
            <div className="border-4 border-foreground p-5 bg-card">
              <p className="label-mono text-accent text-xs mb-2">
                DAILY DISPATCH
              </p>
              <p className="font-serif font-bold text-lg text-foreground mb-3">
                Never miss a story.
              </p>
              <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed">
                Subscribe to receive the latest engineering updates, changelogs,
                and deep dives.
              </p>
              <button
                onClick={() => {}}
                className="w-full bg-foreground text-primary-foreground label-mono text-xs py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Subscribe Now
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
