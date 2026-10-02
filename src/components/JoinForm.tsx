"use client";

import { useState } from "react";

const GO_URL = process.env.NEXT_PUBLIC_GO_URL || "https://go.alphaprotocol.network";

const INTERESTS = [
  "I want to run a node",
  "I want a private network for my organisation",
  "I want to build on it",
  "I am an investor",
  "I just want updates",
];

export default function JoinForm({ source = "website" }: { source?: string }) {
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
      <div className="join-done" role="status">
        <p className="text-lg font-semibold text-[var(--text-primary)]">You are on the list.</p>
        <p className="text-[var(--text-secondary)] mt-2">
          We will email you when the beta network opens. Until then, Alpha GO is the quickest way to see what we are building.
        </p>
        <a href={GO_URL} className="btn-primary mt-5">Open Alpha GO</a>
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
        <select name="interest" defaultValue={INTERESTS[0]}>
          {INTERESTS.map((i) => <option key={i}>{i}</option>)}
        </select>
      </label>
      <label className="join-field">
        <span>Anything we should know? (optional)</span>
        <textarea name="note" rows={3} maxLength={1000} />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="join-hp" />
      {error && <p className="text-[#f87171] text-sm" role="alert">{error}</p>}
      <button className="btn-primary" disabled={state === "sending"}>
        {state === "sending" ? "Sending" : "Join the community"}
      </button>
      <p className="text-xs text-[var(--text-muted)]">
        We only use your email to send Alpha Protocol updates. No spam, and you can leave at any time.
      </p>
    </form>
  );
}
