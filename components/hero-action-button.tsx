"use client";
import { useFormStatus } from "react-dom";

function HeroActionButton() {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      disabled={status.pending}
      className="disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 label-mono text-xs hover:bg-foreground hover:text-primary-foreground transition-colors"
    >
      {status.pending ? "Subscribing..." : "Subscribe"}
    </button>
  );
}

export default HeroActionButton;
