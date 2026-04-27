import { createSubscriptionAction } from "@/app/actions";
import { Lock } from "lucide-react";

export function PaywallCTA() {
  return (
    <div className="border-4 border-foreground bg-card relative overflow-hidden">
      {/* Decorative diagonal stripes top */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-foreground) 0, var(--color-foreground) 4px, var(--color-background) 4px, var(--color-background) 12px)",
        }}
      />

      <div className="p-6 md:p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 border-4 border-foreground bg-foreground flex items-center justify-center">
            <Lock size={20} className="text-primary-foreground" />
          </div>
        </div>

        <p className="label-mono text-accent text-xs mb-2">
          SUBSCRIBER CONTENT
        </p>
        <h3 className="font-serif font-bold text-2xl text-foreground mb-3 text-balance">
          This story is behind the paywall.
        </h3>
        <p className="font-sans text-sm text-muted-foreground mb-6 max-w-sm mx-auto leading-relaxed">
          Subscribe to The Daily Dispatch to unlock unlimited access to all
          engineering deep dives, changelogs, and community stories.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <form action={createSubscriptionAction}>
            <button
              type="submit"
              className="bg-foreground text-primary-foreground label-mono text-xs px-8 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Subscribe — It&apos;s Free →
            </button>
          </form>
        </div>

        <p className="font-sans text-xs text-muted-foreground mt-4">
          No credit card required. Unsubscribe any time.
        </p>
      </div>

      {/* Decorative diagonal stripes bottom */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-foreground) 0, var(--color-foreground) 4px, var(--color-background) 4px, var(--color-background) 12px)",
        }}
      />
    </div>
  );
}
