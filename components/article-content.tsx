import { getSubscription } from "@/lib/services";
import { Article } from "@/lib/types";
import React from "react";
import { PaywallCTA } from "./paywall-cta";
import { ContentBlockRenderer } from "./content-block-renderer";

async function ArticleContent({ article }: { article: Article }) {
  const subscription = await getSubscription();
  return subscription?.status == "active" ? (
    <div className="font-sans text-base text-foreground leading-relaxed space-y-4">
      {article.content.map((block, index) => (
        <ContentBlockRenderer key={index} block={block} />
      ))}
    </div>
  ) : (
    <>
      <p className="font-sans text-base text-foreground leading-relaxed mb-6">
        {article.excerpt}
      </p>
      <PaywallCTA />
    </>
  );
}

export default ArticleContent;
