"use client";

import { Category } from "@/lib/types";
import { ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

function CategoryFilter({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get("category") ?? "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const onSelect = (value: string) => {
    setSelectedCategory(value);
    const queryString = createQueryString("category", value);
    router.push("/search" + `?${queryString}`);
  };

  return (
    <div className="relative">
      <select
        value={selectedCategory}
        onChange={(event) => onSelect(event.target.value)}
        className="appearance-none border-2 border-foreground bg-background font-sans text-sm text-foreground px-4 py-2.5 pr-10 focus:outline-none focus:border-accent transition-colors min-w-48 cursor-pointer"
      >
        <option value="all">All</option>
        {categories.map((category) => (
          <option value={category.slug} key={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
      />
    </div>
  );
}

export default CategoryFilter;
