import {
  getArticleBySlug,
  getArticles,
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

  const articles = await getArticles();

  return articles;
}

export async function getFeaturedArticles() {
  "use cache";
  const articles = await getTrendingArticles();

  return articles;
}
