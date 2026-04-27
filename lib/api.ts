import "server-only";
import {
  ArticleListResponse,
  ArticleResponse,
  PublicationConfig,
  PublicationConfigResponse,
} from "./types";

export async function getArticles() {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY as string;

  const reqHeaders = new Headers();
  reqHeaders.set("x-vercel-protection-bypass", apiKey);

  const apiCall = await fetch(`${baseUrl}/articles?page=1&limit=20`, {
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
