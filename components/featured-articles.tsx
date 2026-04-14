"use client"

import { ArticleCard, type Article } from "./article-card"

const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    slug: "flexible-pro-plan",
    title: "A More Flexible Pro Plan for Modern Teams",
    excerpt: "We're updating the Pro plan to better align with how modern teams collaborate, scaling from solo developers to large organisations.",
    category: "COMPANY NEWS",
    date: "Sep 9, 2025",
    image: "/images/article-1.jpg",
    author: "Jane Mitchell",
  },
  {
    id: "2",
    slug: "domains-overhaul",
    title: "Domains Overhauled With Instant Search and At-Cost Pricing",
    excerpt: "We've rebuilt Domains end to end, making it faster, simpler, and more affordable than ever before for the entire community.",
    category: "CHANGELOG",
    date: "Sep 25, 2025",
    image: "/images/article-2.jpg",
    author: "Carlos Vega",
  },
  {
    id: "3",
    slug: "request-collapsing",
    title: "Preventing the Stampede: Request Collapsing in the CDN",
    excerpt: "The CDN now supports request collapsing for ISR routes. For a given path, only one origin request fires while the rest queue.",
    category: "ENGINEERING",
    date: "Sep 25, 2025",
    image: "/images/article-3.jpg",
    author: "Priya Nair",
  },
  {
    id: "4",
    slug: "edge-config-v2",
    title: "Edge Config v2: Microsecond Latency at the Global Edge",
    excerpt: "The new Edge Config v2 ships with a redesigned SDK, improved consistency guarantees, and reads that clock in under 1 ms.",
    category: "ENGINEERING",
    date: "Oct 3, 2025",
    image: "/images/article-4.jpg",
    author: "Sam Torres",
  },
  {
    id: "5",
    slug: "ai-sdk-milestone",
    title: "AI SDK Reaches 1 Million Weekly Downloads",
    excerpt: "The Vercel AI SDK hit a new milestone this week — a testament to the developer community embracing streaming AI interfaces.",
    category: "COMMUNITY",
    date: "Oct 11, 2025",
    image: "/images/article-5.jpg",
    author: "Lena Okafor",
  },
  {
    id: "6",
    slug: "storage-at-cost",
    title: "Blob Storage is Now Available at Cost — No Markup",
    excerpt: "Vercel Blob pricing now passes through raw S3 costs. We absorb the infrastructure overhead so you only pay what it actually costs.",
    category: "CHANGELOG",
    date: "Oct 15, 2025",
    image: "/images/article-6.jpg",
    author: "Marco Reyes",
  },
]

interface FeaturedArticlesProps {
  onArticleClick?: (article: Article) => void
}

export function FeaturedArticles({ onArticleClick }: FeaturedArticlesProps) {
  return (
    <section id="articles-section" className="max-w-7xl mx-auto px-4 py-12">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8 border-b-2 border-foreground pb-3">
        <div>
          <p className="label-mono text-accent text-xs mb-1">◆ HANDPICKED STORIES FROM THE TEAM</p>
          <h2 className="font-serif font-bold text-3xl text-foreground">Featured</h2>
        </div>
        <a href="#" className="label-mono text-xs text-foreground border-b border-foreground hover:text-accent hover:border-accent transition-colors pb-0.5">
          View all →
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_ARTICLES.map((article) => (
          <ArticleCard key={article.id} article={article} onClick={onArticleClick} />
        ))}
      </div>
    </section>
  )
}

export { MOCK_ARTICLES }
