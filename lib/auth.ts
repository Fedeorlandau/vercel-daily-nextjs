import { SubscriptionResponse } from "./types";

export async function getSubscriptionStatus(token: string) {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY as string;

  const reqHeaders = new Headers();
  reqHeaders.set("x-vercel-protection-bypass", apiKey);
  reqHeaders.set("x-subscription-token", token);

  const apiCall = await fetch(`${baseUrl}/subscription`, {
    headers: reqHeaders,
  });

  const response = (await apiCall.json()) as SubscriptionResponse;

  return response.data;
}

export async function createSubscription() {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY as string;

  const reqHeaders = new Headers();
  reqHeaders.set("x-vercel-protection-bypass", apiKey);

  const apiCall = await fetch(`${baseUrl}/subscription/create`, {
    method: "POST",
    headers: reqHeaders,
  });

  const response = (await apiCall.json()) as SubscriptionResponse;

  return response.data;
}

export async function activateSubscription(token: string) {
  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY as string;

  const reqHeaders = new Headers();
  reqHeaders.set("x-vercel-protection-bypass", apiKey);
  reqHeaders.set("x-subscription-token", token);

  const apiCall = await fetch(`${baseUrl}/subscription`, {
    method: "POST",
    headers: reqHeaders,
  });

  const response = (await apiCall.json()) as SubscriptionResponse;

  return response.data;
}
