import { getArticlesList } from "@/lib/services";
import { CategorySlug } from "@/lib/types";
import type { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  const { searchParams } = new URL(_req.url);
  const search = searchParams.get("search") ?? undefined;
  const category = (searchParams.get("category") as CategorySlug) ?? undefined;

  const articles = await getArticlesList({
    search,
    category,
  });

  console.log({ articles });
  return Response.json({});
}
