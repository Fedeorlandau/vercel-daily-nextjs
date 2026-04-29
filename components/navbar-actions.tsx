import { createSubscriptionAction, unsubscribeAction } from "@/app/actions";
import { getSubscription } from "@/lib/services";
import {
  NavbarActionSubscribe,
  NavbarActionUnsubscribe,
} from "./navbar-actions-buttons";

async function NavbarActions() {
  const subscription = await getSubscription();

  return subscription?.status == "active" ? (
    <div className="hidden md:flex items-center gap-2">
      <span className="label-mono bg-accent text-accent-foreground px-3 py-1.5 text-xs">
        ✓ SUBSCRIBED
      </span>
      <form action={unsubscribeAction}>
        <NavbarActionUnsubscribe />
      </form>
    </div>
  ) : (
    <form action={createSubscriptionAction}>
      <NavbarActionSubscribe />
    </form>
  );
}

export default NavbarActions;
