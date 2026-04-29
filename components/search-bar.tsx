"use client";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get("query") ?? "";
  const [inputValue, setInputValue] = useState(queryFromUrl);

  useEffect(() => {
    setInputValue(queryFromUrl);
  }, [queryFromUrl]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const onSearch = (query: string) => {
    if (query.length >= 3) {
      router.push("/search" + "?" + createQueryString("query", query));
    } else if (query.length === 0) {
      router.push("/search");
    }
  };

  const onSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    router.push("/search" + "?" + createQueryString("query", inputValue));
  };

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="flex">
        <div className="relative flex-1">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            value={inputValue}
            onChange={(event) => {
              const val = event.target.value;
              setInputValue(val);
              onSearch(val);
            }}
            placeholder="Search articles..."
            className="w-full pl-9 pr-4 py-2.5 border-2 border-foreground bg-background font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <button
          type="submit"
          className="bg-foreground text-primary-foreground label-mono text-xs px-6 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
