import type { Metadata } from "next";
import Link from "next/link";
import MeshField from "@/components/MeshField";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "The order Alpha Protocol Network is being built in, stage by stage.",
};

// Stages, not dates: each one starts when the one before it works.
const stages = [
  {
    when: "Now",
    title: "A working core and a public demo",
    items: [
      "In the core library, nodes on a local network find each other and connect over encrypted links",
      "Links across the internet, through a relay we operate",
      "VIBE on the Aptos testnet",
      "Alpha GO live as a web demo for TOKEN2049 week in Singapore",
      "Alpha GO for Android, in testing and open to download",
    ],
  },
  {
    when: "Next",
    title: "The seed network",
    items: [
      "The packaged node running the local mesh directly, and end-to-end encryption through the relay",
      "Installers for the desktop client",
      "Direct links between networks, with no single relay in the path",
      "Membership that does not reveal who you are",
      "A first group of independent operators, in several countries, earning testnet VIBE for relaying",
    ],
  },
  {
    when: "After that",
    title: "Islands and private domains",
    items: [
      "Omega Wireless nodes that arrive ready to join",
      "Private domains for organisations, and tunnels between their sites",
      "Phone-to-phone links and long-range radio between nodes",
      "Alpha GO running over the mesh, and an iPhone app",
    ],
  },
  {
    when: "Later",
    title: "Public launch and a wider mesh",
    items: [
      "Rewards for storage and computation, alongside relaying",
      "Services offered between nodes",
      "Satellite links for places the internet does not reach",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <section className="hero">
      <MeshField seed={71} cols={24} rows={8} lit={6} className="hero-mesh" />
      <div className="wrap pb-24 pt-14 md:pt-20">
      <h1>Roadmap</h1>
      <p className="lede mt-6">
        The order we are building in. Each stage starts once the one before it works, so these are steps rather than dates.
      </p>

      <ol className="mt-14 max-w-3xl">
        {stages.map((s, i) => (
          <li key={s.when} className="relative border-l border-[var(--line)] pb-12 pl-8 last:pb-0">
            <span
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--accent)] ${i === 0 ? "bg-[var(--accent)]" : "bg-[var(--bg)]"}`}
              aria-hidden
            />
            <p className="text-sm font-medium text-[var(--accent-hi)]">{s.when}</p>
            <h2 className="mt-1 text-[1.5rem]">{s.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {s.items.map((item) => (
                <li key={item} className="text-[#c6cad3]">{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-14 flex flex-col gap-3 sm:flex-row">
        <Link href="/join" className="btn">Join the community</Link>
        <Link href="/network" className="btn btn-ghost">How the network works</Link>
      </div>
      </div>
    </section>
  );
}
