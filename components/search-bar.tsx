"use client";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SearchBar() {
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

  const { data, error, isLoading } = useSWR(
    `/api/search?${searchParams}`,
    fetcher,
  );

  const onSearch = (query: string) => {
    router.push("/search" + "?" + createQueryString("query", query));
  };

  return (
    <>
      <div className="relative flex-1">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          onChange={(event) => {
            onSearch(event.currentTarget.value);
          }}
          placeholder="Search articles..."
          className="w-full pl-9 pr-4 py-2.5 border-2 border-foreground bg-background font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <button className="bg-foreground text-primary-foreground label-mono text-xs px-6 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors">
        Search
      </button>
    </>
  );
}

export default SearchBar;
