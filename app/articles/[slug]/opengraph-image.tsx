import { getArticleBySlug } from "@/lib/api";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  const title = article.title;
  const category = article.category;
  const mainImage = article.image;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#FFFFFF",
        color: "#000000",
        fontFamily: "sans-serif",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          flex: "0 0 50%",
          height: "100%",
          display: "flex",
        }}
      >
        {mainImage && (
          <img
            src={mainImage}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </div>

      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          padding: "60px",
          justifyContent: "space-between",
          borderLeft: "4px solid #000000",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: 22,
              color: "#71717A",
              marginBottom: 24,
            }}
          >
            {category}
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#000000",
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
