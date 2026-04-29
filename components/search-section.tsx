"use client";
import { Article } from "@/lib/types";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SearchSection() {
  const searchParams = useSearchParams();
  const { data, isLoading } = useSWR(`/api/search?${searchParams}`, fetcher);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center py-16 gap-3">
          <Loader2 size={20} className="animate-spin text-accent" />
          <span className="label-mono text-sm text-muted-foreground">
            Searching the archive...
          </span>
        </div>
      ) : null}
      {!isLoading && data.articles?.length === 0 ? (
        <div className="border-4 border-foreground p-10 text-center bg-card">
          <div className="font-mono text-5xl text-muted-foreground/20 mb-4 select-none">
            ¿?
          </div>
          <p className="label-mono text-accent text-xs mb-2">
            NO RESULTS FOUND
          </p>
          <p className="font-serif font-bold text-xl text-foreground mb-2">
            Nothing matched &ldquo;&rdquo;
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            Try a different query or change the category filter.
          </p>
        </div>
      ) : null}
      {!isLoading && data.articles?.length > 0 ? (
        <div className="space-y-0">
          {data.articles.map((article: Article, idx: number) => (
            <Link href={`/articles/${article.slug}`} key={article.id}>
              <div
                key={article.id}
                className="flex gap-4 py-4 border-b-2 border-border last:border-b-0 cursor-pointer group hover:bg-muted/50 px-2 -mx-2 transition-colors"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={200}
                  height={100}
                  className="w-20 h-16 object-cover border-2 border-foreground shrink-0 opacity-85 group-hover:opacity-100 transition-opacity"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="label-mono text-accent text-xs">
                      {article.category}
                    </span>
                    <span className="label-mono text-muted-foreground text-xs">
                      ·
                    </span>
                    <span className="label-mono text-muted-foreground text-xs">
                      {article.publishedAt}
                    </span>
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
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchSection;
