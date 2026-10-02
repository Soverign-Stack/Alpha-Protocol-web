"use client";

import { useState } from "react";
import { GO_URL } from "@/lib/site";

const INTERESTS = [
  "I want to run a node",
  "I want a private network for my organisation",
  "I want to build on it",
  "I am an investor",
  "I just want updates",
];

export default function JoinForm({ source = "website", interest }: { source?: string; interest?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    setError("");
    const body = { ...Object.fromEntries(new FormData(e.currentTarget)), source };
    const res = await fetch(`${GO_URL}/api/lead`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }).catch(() => null);
    if (res?.ok) return setState("done");
    const j = await res?.json().catch(() => null);
    setError(j?.error || "That did not go through. Check your connection and try again.");
    setState("idle");
  };

  if (state === "done") {
    return (
      <div role="status">
        <p className="text-lg font-semibold">You are on the list.</p>
        <p className="muted mt-2">
          We will email you when the beta network opens. Until then, Alpha GO is the quickest way to see what we are building.
        </p>
        <a href={GO_URL} className="btn mt-5">Open Alpha GO</a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="join-form">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="join-field">
          <span>Name</span>
          <input name="name" autoComplete="name" maxLength={80} />
        </label>
        <label className="join-field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label className="join-field">
        <span>What are you here for?</span>
        <select name="interest" defaultValue={interest && INTERESTS.includes(interest) ? interest : INTERESTS[0]}>
          {INTERESTS.map((i) => <option key={i}>{i}</option>)}
        </select>
      </label>
      <label className="join-field">
        <span>Anything we should know? (optional)</span>
        <textarea name="note" rows={3} maxLength={1000} />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="join-hp" />
      {error && <p className="text-sm text-[var(--danger)]" role="alert">{error}</p>}
      <button className="btn" disabled={state === "sending"}>
        {state === "sending" ? "Sending" : "Join the community"}
      </button>
      <p className="text-xs text-[var(--faint)]">
        We only use your email to send Alpha Protocol updates. No spam, and you can leave at any time.
      </p>
    </form>
  );
}
