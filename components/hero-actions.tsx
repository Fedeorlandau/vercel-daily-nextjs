import { createSubscriptionAction } from "@/app/actions";
import { getSubscription } from "@/lib/services";
import React from "react";

async function HeroActions() {
  const subscription = await getSubscription();

  if (!subscription) {
    return (
      <form action={createSubscriptionAction}>
        <button
          type="submit"
          className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 label-mono text-xs hover:bg-foreground hover:text-primary-foreground transition-colors"
        >
          Subscribe
        </button>
      </form>
    );
  }
}

export default HeroActions;
