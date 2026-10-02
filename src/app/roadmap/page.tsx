import type { Metadata } from "next";

export const metadata: Metadata = { title: "Roadmap" };

// Stages, not dates: each one starts when the one before it works.
const stages = [
  {
    when: "Now",
    title: "Alpha GO demo and community",
    items: [
      "Alpha GO live for TOKEN2049 week in Singapore: a map of the week's events, accounts, check-ins and testnet VIBE",
      "Mesh core running between nodes on local networks",
      "Desktop client in testing",
    ],
  },
  {
    when: "Next",
    title: "Beta network",
    items: [
      "Installers for the desktop client and an open-source release of the protocol",
      "Direct links between networks across the internet",
      "A first group of node operators relaying traffic and earning testnet VIBE",
    ],
  },
  {
    when: "After that",
    title: "Nodes and private networks",
    items: [
      "Omega Wireless nodes that arrive ready to join",
      "Private network controls for households and organisations",
      "Alpha GO as a full mobile app, with wallet and payments",
    ],
  },
  {
    when: "Later",
    title: "A wider mesh",
    items: [
      "Radio links between nodes where there is no internet",
      "Devices and machines on the network, not only people",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Roadmap</h1>
        <p className="text-[var(--text-secondary)] text-lg mt-4">
          The order we are building in. Each stage starts once the one before it works, so these are steps rather than dates.
        </p>

        <ol className="mt-12 space-y-10">
          {stages.map((s) => (
            <li key={s.when} className="border-l-2 border-[var(--alpha-accent)]/60 pl-6">
              <p className="text-sm font-semibold text-[var(--alpha-accent)]">{s.when}</p>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mt-1">{s.title}</h2>
              <ul className="mt-3 space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="text-[var(--text-secondary)] leading-relaxed">{i}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <a href="/#join" className="btn-primary mt-12">Join the community</a>
      </div>
    </div>
  );
}
