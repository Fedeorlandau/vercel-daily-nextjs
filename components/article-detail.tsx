"use client"

import type { Article } from "./article-card"
import { MOCK_ARTICLES } from "./featured-articles"
import { PaywallCTA } from "./paywall-cta"
import { TrendingArticles } from "./trending-articles"

interface ArticleDetailProps {
  article: Article
  subscribed?: boolean
  onSubscribe?: () => void
  onBack?: () => void
}

const FULL_BODY = `The internet is no longer a collection of static documents — it is a living, breathing infrastructure serving billions of real-time requests. Our CDN has grown from handling thousands of requests per hour to over three million per day, and that growth has forced us to rethink assumptions baked into the original architecture.

The most significant change in this release is request collapsing. When a cache entry expires and dozens of simultaneous requests arrive for the same resource, only one request is forwarded to the origin. The rest are held in a queue and served from the freshly-populated cache entry the moment it returns. This dramatically reduces the so-called "thundering herd" problem at the origin.

Implementing this correctly required a distributed locking mechanism that operates in microseconds across our globally distributed PoPs. We evaluated several approaches — optimistic concurrency via compare-and-swap, consensus-based locks using a Raft-adjacent protocol, and finally settled on a token-bucket queue with a sidecar process managing expiry. The result is p99 latency under 12 ms at the edge even during cache stampedes.

The second major change is smarter TTL revalidation. Previously, stale-while-revalidate would re-fetch regardless of how stale the content was. Now, we factor in the origin's historical response latency and adaptively delay background revalidation to smooth traffic spikes.

Both features are now generally available for all plans.`

export function ArticleDetail({ article, subscribed = false, onSubscribe, onBack }: ArticleDetailProps) {
  const trending = MOCK_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <button
        onClick={onBack}
        className="label-mono text-xs text-muted-foreground hover:text-accent mb-6 flex items-center gap-1 transition-colors"
      >
        ← Back to Home
      </button>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main article */}
        <article className="lg:col-span-2">
          {/* Article header */}
          <header className="border-b-2 border-foreground pb-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="label-mono text-accent text-xs bg-accent/10 px-2 py-1 border border-accent">
                {article.category}
              </span>
              <span className="label-mono text-muted-foreground text-xs">{article.date}</span>
            </div>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground leading-tight text-balance mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-foreground border-2 border-foreground flex items-center justify-center">
                <span className="text-primary-foreground font-mono text-xs font-bold">
                  {article.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-foreground">By {article.author}</p>
                <p className="label-mono text-xs text-muted-foreground">Staff Writer</p>
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
              {FULL_BODY.trim().split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : (
            <>
              <p className="font-sans text-base text-foreground leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <PaywallCTA onSubscribe={onSubscribe} />
            </>
          )}
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <TrendingArticles articles={trending} />
          {!subscribed && (
            <div className="border-4 border-foreground p-5 bg-card">
              <p className="label-mono text-accent text-xs mb-2">DAILY DISPATCH</p>
              <p className="font-serif font-bold text-lg text-foreground mb-3">
                Never miss a story.
              </p>
              <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed">
                Subscribe to receive the latest engineering updates, changelogs, and deep dives.
              </p>
              <button
                onClick={onSubscribe}
                className="w-full bg-foreground text-primary-foreground label-mono text-xs py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Subscribe Now
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
