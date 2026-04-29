"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function PaywallButton() {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      disabled={status.pending}
      className="disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer bg-foreground text-primary-foreground label-mono text-xs px-8 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {status.pending ? "Subscribing..." : " Subscribe — It's Free →"}
    </button>
  );
}

export default PaywallButton;
