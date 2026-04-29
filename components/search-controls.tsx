import { getCategoriesList } from "@/lib/services";
import { Suspense, use } from "react";
import CategoryFilter from "./category-filter";
import SearchBar from "./search-bar";

async function SearchControls() {
  const categories = await getCategoriesList();

  return (
    <>
      <Suspense>
        <SearchBar />
      </Suspense>
      <Suspense>
        <CategoryFilter categories={categories} />
      </Suspense>
    </>
  );
}

export default SearchControls;
