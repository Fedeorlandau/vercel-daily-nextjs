"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { BreakingNewsBanner } from "@/components/breaking-news-banner"
import { HeroSection } from "@/components/hero-section"
import { FeaturedArticles } from "@/components/featured-articles"
import { ArticleDetail } from "@/components/article-detail"
import { SearchSection } from "@/components/search-section"
import { Footer } from "@/components/footer"
import type { Article } from "@/components/article-card"

type View = "home" | "article"

export default function Page() {
  const [subscribed, setSubscribed] = useState(false)
  const [view, setView] = useState<View>("home")
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  function handleSubscribe() {
    setSubscribed(true)
  }

  function handleUnsubscribe() {
    setSubscribed(false)
  }

  function handleArticleClick(article: Article) {
    setSelectedArticle(article)
    setView("article")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function handleBack() {
    setView("home")
    setSelectedArticle(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        subscribed={subscribed}
        onSubscribe={handleSubscribe}
        onUnsubscribe={handleUnsubscribe}
      />
      <BreakingNewsBanner />

      <main className="flex-1">
        {view === "home" && (
          <>
            <HeroSection onSubscribe={handleSubscribe} />
            <FeaturedArticles onArticleClick={handleArticleClick} />
            <SearchSection onArticleClick={handleArticleClick} />
          </>
        )}

        {view === "article" && selectedArticle && (
          <ArticleDetail
            article={selectedArticle}
            subscribed={subscribed}
            onSubscribe={handleSubscribe}
            onBack={handleBack}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}
