import { getArticlesList } from "@/lib/services";
import { CategorySlug } from "@/lib/types";
import type { NextRequest } from "next/server";

type UnionCategorySlug = CategorySlug & "all";
export async function GET(_req: NextRequest) {
  const { searchParams } = new URL(_req.url);
  const search = searchParams.get("query") ?? undefined;
  let category: UnionCategorySlug | undefined =
    (searchParams.get("category") as UnionCategorySlug) ?? undefined;

  if (category === "all") {
    category = undefined;
  }

  const articles = await getArticlesList({
    search,
    category,
  });

  return Response.json({ articles });
}
