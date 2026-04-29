"use client";

import { Category } from "@/lib/types";
import { ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

function CategoryFilter({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const onSelect = (query: string) => {
    router.push("/search" + "?" + createQueryString("category", query));
  };

  return (
    <div className="relative">
      <select
        onChange={(event) => onSelect(event.currentTarget.value)}
        className="appearance-none border-2 border-foreground bg-background font-sans text-sm text-foreground px-4 py-2.5 pr-10 focus:outline-none focus:border-accent transition-colors min-w-48 cursor-pointer"
      >
        {categories.map((category) => {
          return <option value={category.name}>{category.name}</option>;
        })}
      </select>
      <ChevronDown
        size={14}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
      />
    </div>
  );
}

export default CategoryFilter;
