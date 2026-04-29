import "server-only";
import {
  ArticleListResponse,
  ArticleResponse,
  BreakingNewsResponse,
  CategoryListResponse,
  CategorySlug,
  PublicationConfigResponse,
  TrendingArticlesResponse,
} from "./types";

export interface GetArticlesProps {
  featured?: boolean;
  category?: CategorySlug;
  search?: string;
  limit?: number;
}

export async function getArticles({
  featured,
  category,
  search,
  limit,
}: GetArticlesProps) {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY as string;

  const reqHeaders = new Headers();
  reqHeaders.set("x-vercel-protection-bypass", apiKey);

  const params = new URLSearchParams({
    page: "1",
    limit: String(limit) || "20",
  });

  if (featured) {
    params.append("featured", String(featured));
  }

  if (category) {
    params.append("category", category);
  }

  if (search) {
    params.append("search", search);
  }

  const apiCall = await fetch(`${baseUrl}/articles?${params.toString()}`, {
    headers: reqHeaders,
  });

  const response = (await apiCall.json()) as ArticleListResponse;

  return response.data;
}

export async function getArticleBySlug(slug: string) {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY as string;

  const reqHeaders = new Headers();
  reqHeaders.set("x-vercel-protection-bypass", apiKey);

  const apiCall = await fetch(`${baseUrl}/articles/${slug}`, {
    headers: reqHeaders,
  });

  const response = (await apiCall.json()) as ArticleResponse;

  return response.data;
}

export async function getPublicationConfig() {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY as string;

  const reqHeaders = new Headers();
  reqHeaders.set("x-vercel-protection-bypass", apiKey);

  const apiCall = await fetch(`${baseUrl}/publication/config`, {
    headers: reqHeaders,
  });

  const response = (await apiCall.json()) as PublicationConfigResponse;

  return response.data;
}

export async function getTrendingArticles() {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY as string;

  const reqHeaders = new Headers();
  reqHeaders.set("x-vercel-protection-bypass", apiKey);

  const apiCall = await fetch(`${baseUrl}/articles/trending`, {
    headers: reqHeaders,
  });

  const response = (await apiCall.json()) as TrendingArticlesResponse;

  return response.data;
}

export async function getBreakingNews() {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY as string;

  const reqHeaders = new Headers();
  reqHeaders.set("x-vercel-protection-bypass", apiKey);

  const apiCall = await fetch(`${baseUrl}/breaking-news`, {
    headers: reqHeaders,
  });

  const response = (await apiCall.json()) as BreakingNewsResponse;

  return response.data;
}

export async function getCategories() {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY as string;

  const reqHeaders = new Headers();
  reqHeaders.set("x-vercel-protection-bypass", apiKey);

  const apiCall = await fetch(`${baseUrl}/categories`, {
    headers: reqHeaders,
  });

  const response = (await apiCall.json()) as CategoryListResponse;

  return response.data;
}
