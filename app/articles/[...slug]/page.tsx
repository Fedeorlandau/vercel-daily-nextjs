import { ArticleDetail } from "@/components/article-detail";

function ArticlePage() {
  const article = {
    id: "1",
    slug: "flexible-pro-plan",
    title: "A More Flexible Pro Plan for Modern Teams",
    excerpt:
      "We're updating the Pro plan to better align with how modern teams collaborate, scaling from solo developers to large organisations.",
    category: "COMPANY NEWS",
    date: "Sep 9, 2025",
    image: "/images/article-1.jpg",
    author: "Jane Mitchell",
  };
  return (
    <ArticleDetail
      article={article}
      subscribed={false}
      onSubscribe={() => {}}
    />
  );
}

export default ArticlePage;
