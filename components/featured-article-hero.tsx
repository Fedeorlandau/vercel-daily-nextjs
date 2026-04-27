import { getFeaturedArticles } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedArticleHero() {
  const featuredArticles = await getFeaturedArticles();
  const firstArticle = featuredArticles[0];

  return (
    <div className="relative">
      <Link href={`/articles/${firstArticle.slug}`} prefetch>
        <div className="border-4 border-foreground bg-card overflow-hidden focus:ring-8  focus:ring-orange-500">
          <Image
            src={firstArticle.image}
            width="500"
            height="300"
            loading="eager"
            alt="Featured story visual"
            className="w-full h-56 md:h-72 object-cover opacity-80"
          />
          <div className="border-t-4 border-foreground p-4 bg-card">
            <p className="label-mono text-accent text-xs mb-1">
              FEATURED STORY
            </p>
            <h2 className="font-serif font-bold text-lg text-foreground leading-snug">
              {firstArticle.title}
            </h2>
            <p className="font-sans text-xs text-muted-foreground mt-1">
              {firstArticle.publishedAt}
            </p>
          </div>
        </div>
        {/* Corner stamp decoration */}
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent border-2 border-foreground flex items-center justify-center rotate-12">
          <span className="label-mono text-accent-foreground text-xs leading-none text-center">
            NEW
          </span>
        </div>
      </Link>
    </div>
  );
}
