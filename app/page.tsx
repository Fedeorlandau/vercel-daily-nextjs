import { HeroSection } from "@/components/hero-section";
import { FeaturedArticlesSection } from "@/components/featured-articles-section";
import { Suspense } from "react";
// import { SearchSection } from "@/components/search-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturedArticlesSection />
      {/* <SearchSection /> */}
    </>
  );
}
