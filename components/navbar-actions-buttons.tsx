"use client";
import { useFormStatus } from "react-dom";

function NavbarActionSubscribe() {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      disabled={status.pending}
      className="disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer hidden md:block label-mono text-xs bg-foreground text-primary-foreground px-4 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {status.pending ? "Subscribing..." : "Subscribe"}
    </button>
  );
}

function NavbarActionUnsubscribe() {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      disabled={status.pending}
      className="disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer label-mono text-xs border border-foreground px-3 py-1.5 hover:bg-foreground hover:text-primary-foreground transition-colors"
    >
      {status.pending ? "Unsubscribing..." : "Unsubscribe"}
    </button>
  );
}

export { NavbarActionSubscribe, NavbarActionUnsubscribe };
