// ============== Content Blocks ==============

import Image from "next/image";
interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

interface HeadingBlock {
  type: "heading";
  level: 2 | 3;
  text: string;
}

interface BlockquoteBlock {
  type: "blockquote";
  text: string;
}

interface UnorderedListBlock {
  type: "unordered-list";
  items: string[];
}

interface OrderedListBlock {
  type: "ordered-list";
  items: string[];
}

interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | BlockquoteBlock
  | UnorderedListBlock
  | OrderedListBlock
  | ImageBlock;

// ============== Block Components ==============

function ParagraphRenderer({ block }: { block: ParagraphBlock }) {
  return (
    <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
      {block.text}
    </p>
  );
}

function HeadingRenderer({ block }: { block: HeadingBlock }) {
  if (block.level === 2) {
    return (
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
        {block.text}
      </h2>
    );
  }

  return (
    <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-6 mb-3">
      {block.text}
    </h3>
  );
}

function BlockquoteRenderer({ block }: { block: BlockquoteBlock }) {
  return (
    <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-muted/50 rounded-r-lg">
      <p className="text-foreground/90 italic text-base md:text-lg leading-relaxed">
        {block.text}
      </p>
    </blockquote>
  );
}

function UnorderedListRenderer({ block }: { block: UnorderedListBlock }) {
  return (
    <ul className="list-disc list-outside ml-6 space-y-2 text-foreground/80">
      {block.items.map((item, index) => (
        <li key={index} className="text-base md:text-lg leading-relaxed pl-2">
          {item}
        </li>
      ))}
    </ul>
  );
}

function OrderedListRenderer({ block }: { block: OrderedListBlock }) {
  return (
    <ol className="list-decimal list-outside ml-6 space-y-2 text-foreground/80">
      {block.items.map((item, index) => (
        <li key={index} className="text-base md:text-lg leading-relaxed pl-2">
          {item}
        </li>
      ))}
    </ol>
  );
}

function ImageRenderer({ block }: { block: ImageBlock }) {
  return block.src ? (
    <figure className="my-8">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
        <Image
          src={block.src}
          alt={block.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
      {block.caption && (
        <figcaption className="text-center text-sm text-muted-foreground mt-3">
          {block.caption}
        </figcaption>
      )}
    </figure>
  ) : null;
}

// ============== Block Router ==============

export function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <ParagraphRenderer block={block} />;
    case "heading":
      return <HeadingRenderer block={block} />;
    case "blockquote":
      return <BlockquoteRenderer block={block} />;
    case "unordered-list":
      return <UnorderedListRenderer block={block} />;
    case "ordered-list":
      return <OrderedListRenderer block={block} />;
    case "image":
      return <ImageRenderer block={block} />;
    default:
      return null;
  }
}
