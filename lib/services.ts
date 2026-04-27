import {
  getArticleBySlug,
  getArticles,
  getBreakingNews,
  getPublicationConfig,
  getTrendingArticles,
} from "./api";

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

export async function getArticlesList() {
  "use cache";

  const articles = await getArticles({});

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
  });

  return articles;
}

export async function getBreakingNewsContent() {
  "use cache";
  const breakingNews = await getBreakingNews();

  return breakingNews;
}
