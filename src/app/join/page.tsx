import type { Metadata } from "next";
import JoinForm from "@/components/JoinForm";
import Shot from "@/components/Shot";

export const metadata: Metadata = {
  title: "Join",
  description: "Join the Alpha Protocol community before the beta network opens.",
};

const groups = [
  { title: "Node operators", body: "You hear first when node hardware and software ship, and you are first in line for the seed network." },
  { title: "Organisations", body: "We talk through what a private network for your team and sites would look like." },
  { title: "Builders", body: "You get the protocol source and documentation as they are released, and a line to the people writing it." },
  { title: "Investors", body: "You get the plan and a call with the team." },
];

export default async function JoinPage({ searchParams }: { searchParams: Promise<{ as?: string }> }) {
  const as = (await searchParams).as;
  const interest =
    as === "operator" ? "I want to run a node"
    : as === "organisation" ? "I want a private network for my organisation"
    : as === "builder" ? "I want to build on it"
    : as === "investor" ? "I am an investor"
    : undefined;
  return (
    <section className="wrap grid gap-14 pb-24 pt-14 md:pt-20 lg:grid-cols-2">
      <div>
        <h1>Join before the beta opens</h1>
        <p className="lede mt-6">
          Alpha Protocol starts with a small group of people who want to run it, build on it and back it. Tell us which you are.
        </p>
        <dl className="mt-10 border-t border-[var(--line)]">
          {groups.map((g) => (
            <div key={g.title} className="border-b border-[var(--line)] py-5">
              <dt className="font-semibold">{g.title}</dt>
              <dd className="muted mt-1">{g.body}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="space-y-6 self-start">
        <div className="panel">
          <JoinForm source="website-join" interest={interest} />
        </div>
        <Shot
          name="join-community"
          ratio="16/10"
          alt="People around a table setting up network nodes together"
          brief="Four or five people around a table at a meetup, setting up small black nodes and laptops together, candid, warm light, red LEDs."
        />
      </div>
    </section>
  );
}
