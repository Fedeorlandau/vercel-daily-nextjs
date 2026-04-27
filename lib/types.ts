// https://v0.app/chat/yaml-to-typescript-qhgnnYiEv7z

// ============== Core Types ==============

export type CategorySlug =
  | "changelog"
  | "engineering"
  | "customers"
  | "company-news"
  | "community";

export interface Author {
  name: string;
  avatar: string;
}

// ============== Content Blocks ==============

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface HeadingBlock {
  type: "heading";
  level: 2 | 3;
  text: string;
}

export interface BlockquoteBlock {
  type: "blockquote";
  text: string;
}

export interface UnorderedListBlock {
  type: "unordered-list";
  items: string[];
}

export interface OrderedListBlock {
  type: "ordered-list";
  items: string[];
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | BlockquoteBlock
  | UnorderedListBlock
  | OrderedListBlock
  | ImageBlock;

// ============== Main Entities ==============

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentBlock[];
  category: CategorySlug;
  author: Author;
  image: string;
  publishedAt: string;
  featured: boolean;
  tags: string[];
}

export interface Category {
  slug: CategorySlug;
  name: string;
  articleCount: number;
}

export interface BreakingNews {
  id: string;
  headline: string;
  summary: string;
  articleId: string;
  category: CategorySlug;
  publishedAt: string;
  urgent: boolean;
}

export interface Subscription {
  token: string;
  status: "active" | "inactive";
  subscribedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// ============== Pagination ==============

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// ============== API Responses ==============

export interface ArticleListResponse {
  success: true;
  data: Article[];
  meta: {
    pagination: PaginationMeta;
  };
}

export interface ArticleResponse {
  success: true;
  data: Article;
}

export interface TrendingArticlesResponse {
  success: true;
  data: Article[];
}

export interface CategoryListResponse {
  success: true;
  data: Category[];
}

export interface BreakingNewsResponse {
  success: true;
  data: BreakingNews;
}

export interface SubscriptionResponse {
  success: true;
  data: Subscription;
}

export interface ErrorResponse {
  success: false;
  error: {
    code:
      | "VALIDATION_ERROR"
      | "BAD_REQUEST"
      | "NOT_FOUND"
      | "INTERNAL_SERVER_ERROR";
    message: string;
    details?: unknown;
  };
}

// ============== Publication Config ==============

export interface PublicationFeatures {
  newsletter: boolean;
  bookmarks: boolean;
  comments: boolean;
  darkMode: boolean;
  searchSuggestions: boolean;
}

export interface PublicationSocialLinks {
  twitter: string;
  github: string;
  discord: string;
}

export interface PublicationSEO {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
}

export interface PublicationConfig {
  publicationName: string;
  language: string;
  features: PublicationFeatures;
  socialLinks: PublicationSocialLinks;
  seo: PublicationSEO;
}

export interface PublicationConfigResponse {
  success: true;
  data: PublicationConfig;
}

// ============== Health Check ==============

export interface HealthCheckResponse {
  success: true;
  data: {
    status: "ok";
    timestamp: string;
    services: {
      redis: "connected" | "error";
    };
  };
}

// ============== Query Parameters ==============

export interface ListArticlesParams {
  page?: number;
  limit?: number;
  category?: CategorySlug;
  search?: string;
  featured?: "true" | "false";
}

export interface TrendingArticlesParams {
  exclude?: string; // comma-separated article IDs
}
