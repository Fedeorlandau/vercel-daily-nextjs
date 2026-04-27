import { createSubscriptionAction } from "@/app/actions";
import { getSubscription } from "@/lib/services";

async function NavbarActions() {
  const subscription = await getSubscription();

  return subscription?.status == "active" ? (
    <div className="hidden md:flex items-center gap-2">
      <span className="label-mono bg-accent text-accent-foreground px-3 py-1.5 text-xs">
        ✓ SUBSCRIBED
      </span>
      <button className="label-mono text-xs border border-foreground px-3 py-1.5 hover:bg-foreground hover:text-primary-foreground transition-colors">
        Unsubscribe
      </button>
    </div>
  ) : (
    <form action={createSubscriptionAction}>
      <button
        type="submit"
        className="hidden md:block label-mono text-xs bg-foreground text-primary-foreground px-4 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}

export default NavbarActions;
