import { ArticleDetail } from "@/components/article-detail";
import { getArticle, getArticlesList, getSiteConfig } from "@/lib/services";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;

  const article = await getArticle(slug);
  const siteConfig = await getSiteConfig();

  return {
    title: siteConfig.seo.titleTemplate.replace("%", article.title),
    description: article.excerpt ?? siteConfig.seo.defaultDescription,
    authors: { name: article.author.name },
  };
}

/**
 *
 * I realized that the API for listing the articles is paginated so I will only render at build time the first page.
 */
export async function generateStaticParams() {
  const articles = await getArticlesList({
    limit: 20,
  });

  const slugs = articles.map((article) => {
    return {
      slug: article.slug,
    };
  });

  return slugs;
}

export default async function ArticlesPage(
  props: PageProps<"/articles/[slug]">,
) {
  const { slug } = await props.params;
  const article = await getArticle(slug);

  return <ArticleDetail article={article} />;
}
