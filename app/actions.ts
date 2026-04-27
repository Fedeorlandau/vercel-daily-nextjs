import {
  createSubscription,
  activateSubscription,
  deactivateSubscription,
} from "@/lib/auth";
import { getSubscription } from "@/lib/services";
import { cookies } from "next/headers";

export async function createSubscriptionAction(formData: FormData) {
  "use server";
  const existingSubscription = await getSubscription();

  if (existingSubscription) {
    // TODO: Reactivate?
  }

  const newSubscription = await createSubscription();

  const activeSubscription = await activateSubscription(newSubscription.token);

  (await cookies()).set("subscription", JSON.stringify(activeSubscription));
}

export async function unsubscribeAction(formData: FormData) {
  "use server";

  const existingSubscription = await getSubscription();

  if (!existingSubscription) {
    return;
  }

  await deactivateSubscription(existingSubscription.token);

  (await cookies()).set("subscription", "");
}
