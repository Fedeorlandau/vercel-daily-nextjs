import { cookies } from "next/headers";
import {
  getArticleBySlug,
  getArticles,
  GetArticlesProps,
  getBreakingNews,
  getCategories,
  getPublicationConfig,
  getTrendingArticles,
} from "./api";
import { Subscription } from "./types";

export async function getSiteConfig() {
  "use cache";

  const config = await getPublicationConfig();

  return config;
}

export async function getArticle(slug: string) {
  "use cache";
  const article = await getArticleBySlug(slug);
  return article;
}

export async function getArticlesList(options: GetArticlesProps) {
  "use cache";

  const articles = await getArticles(options);

  return articles;
}

export async function getTrendingArticlesList() {
  "use cache";

  const trendingArticles = await getTrendingArticles();

  return trendingArticles;
}

export async function getFeaturedArticles() {
  "use cache";
  const articles = await getArticles({
    featured: true,
    limit: 6,
  });

  return articles;
}

export async function getBreakingNewsContent() {
  "use cache";
  const breakingNews = await getBreakingNews();

  return breakingNews;
}

export async function getSubscription() {
  const cookie = (await cookies()).get("subscription")
    ?.value as unknown as string;

  if (cookie) {
    const subscription = JSON.parse(cookie) as Subscription;
    return subscription;
  }
  return undefined;
}

export async function getCategoriesList() {
  "use cache";
  const categories = await getCategories();

  return categories;
}
