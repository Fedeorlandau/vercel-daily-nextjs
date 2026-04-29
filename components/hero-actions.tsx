import { createSubscriptionAction } from "@/app/actions";
import { getSubscription } from "@/lib/services";
import React from "react";
import HeroActionButton from "./hero-action-button";

async function HeroActions() {
  const subscription = await getSubscription();

  if (!subscription) {
    return (
      <form action={createSubscriptionAction}>
        <HeroActionButton />
      </form>
    );
  }
}

export default HeroActions;
