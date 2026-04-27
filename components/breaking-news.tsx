import React, { Suspense } from "react";
import { BreakingNewsBanner } from "./breaking-news-banner";
import { BreakingNewsSkeleton } from "./breaking-news-skeleton";

function BreakingNews() {
  return (
    <Suspense fallback={<BreakingNewsSkeleton />}>
      <BreakingNewsBanner />
    </Suspense>
  );
}

export default BreakingNews;
