import { ArticleDetail } from "@/components/article-detail";
import { getArticles, getArticleBySlug } from "@/lib/api";

/**
 *
 * I realized that the API for listing the articles is paginated so I will only render at build time the first page.
 */
export async function generateStaticParams() {
  const articles = await getArticles();

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

  return <Content slug={slug} />;
}
async function Content({ slug }: { slug: string }) {
  const article = await getArticle(slug);
  return <ArticleDetail article={article} subscribed={true} />;
}

async function getArticle(slug: string) {
  "use cache";
  const article = getArticleBySlug(slug);
  return article;
}
