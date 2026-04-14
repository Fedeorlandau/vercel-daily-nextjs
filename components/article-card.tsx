"use client"

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  author: string
}

interface ArticleCardProps {
  article: Article
  onClick?: (article: Article) => void
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <article
      className="border-2 border-foreground bg-card hover:bg-muted transition-colors cursor-pointer group"
      onClick={() => onClick?.(article)}
    >
      {/* Image */}
      <div className="overflow-hidden border-b-2 border-foreground scanlines">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300 opacity-85"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="label-mono text-accent text-xs">{article.category}</span>
          <span className="label-mono text-muted-foreground text-xs">·</span>
          <span className="label-mono text-muted-foreground text-xs">{article.date}</span>
        </div>
        <h3 className="font-serif font-bold text-base leading-snug text-foreground mb-2 retro-link group-hover:text-accent transition-colors text-balance">
          {article.title}
        </h3>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <p className="label-mono text-xs text-muted-foreground mt-3">By {article.author}</p>
      </div>
    </article>
  )
}
