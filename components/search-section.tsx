"use client"

import { useState } from "react"
import { Search, ChevronDown, Loader2 } from "lucide-react"
import { MOCK_ARTICLES } from "./featured-articles"
import type { Article } from "./article-card"

const CATEGORIES = ["All Categories", "Company News", "Engineering", "Changelog", "Community"]

interface SearchSectionProps {
  onArticleClick?: (article: Article) => void
}

export function SearchSection({ onArticleClick }: SearchSectionProps) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All Categories")
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [results, setResults] = useState<Article[]>([])

  function performSearch(q: string, cat: string) {
    setLoading(true)
    setSearched(true)
    // Simulate async search
    setTimeout(() => {
      const filtered = MOCK_ARTICLES.filter((a) => {
        const matchesQuery =
          q.trim() === "" ||
          a.title.toLowerCase().includes(q.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(q.toLowerCase())
        const matchesCat =
          cat === "All Categories" || a.category.toLowerCase() === cat.toLowerCase()
        return matchesQuery && matchesCat
      })
      setResults(filtered)
      setLoading(false)
    }, 600)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") performSearch(query, category)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
    if (e.target.value.length >= 3) {
      performSearch(e.target.value, category)
    }
  }

  const displayArticles = searched ? results : MOCK_ARTICLES.slice(0, 5)

  return (
    <section id="search-section" className="border-t-4 border-foreground bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="border-b-2 border-foreground pb-4 mb-8">
          <p className="label-mono text-accent text-xs mb-1">◆ SEARCH THE ARCHIVE</p>
          <h2 className="font-serif font-bold text-3xl text-foreground">Find Articles</h2>
        </div>

        {/* Search controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {/* Input */}
          <div className="relative flex-1">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="w-full pl-9 pr-4 py-2.5 border-2 border-foreground bg-background font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Category select */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                if (searched) performSearch(query, e.target.value)
              }}
              className="appearance-none border-2 border-foreground bg-background font-sans text-sm text-foreground px-4 py-2.5 pr-10 focus:outline-none focus:border-accent transition-colors min-w-48 cursor-pointer"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
          </div>

          {/* Search button */}
          <button
            onClick={() => performSearch(query, category)}
            className="bg-foreground text-primary-foreground label-mono text-xs px-6 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Search
          </button>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center py-16 gap-3">
            <Loader2 size={20} className="animate-spin text-accent" />
            <span className="label-mono text-sm text-muted-foreground">Searching the archive...</span>
          </div>
        )}

        {/* Empty state */}
        {!loading && searched && results.length === 0 && (
          <div className="border-4 border-foreground p-10 text-center bg-card">
            <div className="font-mono text-5xl text-muted-foreground/20 mb-4 select-none">¿?</div>
            <p className="label-mono text-accent text-xs mb-2">NO RESULTS FOUND</p>
            <p className="font-serif font-bold text-xl text-foreground mb-2">
              Nothing matched &ldquo;{query}&rdquo;
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              Try a different query or change the category filter.
            </p>
          </div>
        )}

        {/* Results / default articles */}
        {!loading && displayArticles.length > 0 && (
          <>
            <p className="label-mono text-xs text-muted-foreground mb-4">
              {searched
                ? `${results.length} result${results.length !== 1 ? "s" : ""} found`
                : "Recent articles"}
            </p>
            <div className="space-y-0">
              {displayArticles.map((article, idx) => (
                <div
                  key={article.id}
                  onClick={() => onArticleClick?.(article)}
                  className="flex gap-4 py-4 border-b-2 border-border last:border-b-0 cursor-pointer group hover:bg-muted/50 px-2 -mx-2 transition-colors"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-20 h-16 object-cover border-2 border-foreground shrink-0 opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="label-mono text-accent text-xs">{article.category}</span>
                      <span className="label-mono text-muted-foreground text-xs">·</span>
                      <span className="label-mono text-muted-foreground text-xs">{article.date}</span>
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
        )}
      </div>
    </section>
  )
}
