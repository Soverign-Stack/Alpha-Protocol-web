import type { Metadata } from "next";
import Link from "next/link";
import Shot from "@/components/Shot";
import Status, { type StatusKind } from "@/components/Status";

export const metadata: Metadata = {
  title: "Use cases",
  description:
    "What Alpha Protocol Network is for: private networks for people and organisations, coverage for events and field teams, income for node operators and a protocol for builders.",
};

type Case = {
  id: string;
  title: string;
  summary: string;
  paragraphs: string[];
  need: string[];
  status: { kind: StatusKind; text: string }[];
  join: { as: string; label: string };
  image: { alt: string; brief: string };
};

const cases: Case[] = [
  {
    id: "people",
    title: "People and households",
    summary: "A private network for your own devices, and a way to reach other people without a platform in between.",
    paragraphs: [
      "Your phone, laptop and home devices connect to each other directly. Messages and files move between them without passing through a company that can read or record them, and the network at home keeps working when the internet connection drops.",
      "By design, when you reach someone on another network the two ends are encrypted to each other, and the nodes that carry the traffic cannot read it. Today, long-distance traffic passes through our relay and is not yet encrypted from end to end.",
    ],
    need: ["A phone or computer to use the network", "A node at home if you want to relay for others and earn"],
    status: [
      { kind: "working", text: "Alpha GO web demo" },
      { kind: "building", text: "Desktop client, in testing with our team" },
      { kind: "building", text: "Alpha GO for Android, in testing" },
      { kind: "planned", text: "Alpha GO for iPhone" },
    ],
    join: { as: "updates", label: "Get told when the apps are ready" },
    image: { alt: "A family living room in the evening with a small network node on a shelf", brief: "A lived-in living room in the evening, a phone and laptop in use on the sofa, a small black node with a red LED on the bookshelf behind." },
  },
  {
    id: "organisations",
    title: "Organisations",
    summary: "A network for your team, sites and machines that you deploy and control yourself.",
    paragraphs: [
      "An organisation runs its own private domain: its own members, its own rules and its own hardware. Business data stays inside it. No cloud vendor sits in the path, and nobody outside can list who is in the domain or what it holds.",
      "Two offices join through an encrypted tunnel between their own machines, in place of a conventional site-to-site VPN. The same hardware can host the organisation's files, internal tools and AI agents, so that work stays on machines it owns.",
      "Connecting the domain to the wider mesh, to reach partners or customers, is a choice the organisation makes and controls.",
    ],
    need: ["An anchor: a server-class machine at each site", "A router and nodes for local coverage"],
    status: [
      { kind: "working", text: "Self-hosting hardware, from Omega Wireless" },
      { kind: "building", text: "Private domain controls" },
      { kind: "building", text: "Site-to-site tunnels" },
    ],
    join: { as: "organisation", label: "Talk to us about a private network" },
    image: { alt: "A small server cabinet in an office", brief: "A compact server cabinet in the corner of a small modern office, door open, tidy cabling, one technician's hand on the rack, red status lights." },
  },
  {
    id: "field",
    title: "Events and field teams",
    summary: "Coverage you bring with you, with or without an internet connection.",
    paragraphs: [
      "A handful of nodes can link a conference floor, a festival site, a farm or a crew spread across a few kilometres. The network belongs to the people who set it up and does not depend on the venue's Wi-Fi or on mobile coverage.",
      "The mesh node is designed for event operations, public safety, field teams, community preparedness and off-grid sites, and to work with ATAK, the mapping tool many field teams already use.",
      "Radio can be detected by anyone nearby with the right equipment. It suits teams who need coverage, not people who need to hide that they are communicating.",
    ],
    need: ["Mesh nodes placed around the site", "A router where an internet link is available, to join the overlay"],
    status: [
      { kind: "building", text: "Omega Mesh Node, open for pre-order" },
      { kind: "planned", text: "Long-range radio links between nodes" },
    ],
    join: { as: "organisation", label: "Tell us about your site or event" },
    image: { alt: "A mesh node on a tripod at an outdoor event", brief: "A weatherproof mesh node on a tripod at the edge of an outdoor festival or conference site at dusk, crowd and stage lights soft in the background." },
  },
  {
    id: "operators",
    title: "Node operators",
    summary: "Run nodes where the network needs them and earn for the traffic they carry.",
    paragraphs: [
      "Operators are how the network grows. You run a node, it relays traffic for other people, and each party you carry traffic for signs a receipt. Rewards are paid in VIBE on those receipts.",
      "The network starts with a seed group of independent operators in several countries. At that stage rewards are in testnet VIBE, only relaying earns, and earnings are public on the test network.",
    ],
    need: ["A node, or a spare computer that stays on", "A reasonable internet connection"],
    status: [
      { kind: "working", text: "VIBE on the Aptos testnet" },
      { kind: "building", text: "Receipts for relayed traffic" },
      { kind: "planned", text: "Seed network of independent operators" },
    ],
    join: { as: "operator", label: "Put your name down to run a node" },
    image: { alt: "A person mounting a node on a rooftop", brief: "A person fixing a small solar-powered relay node to a rooftop mast at golden hour, town rooftops behind." },
  },
  {
    id: "builders",
    title: "Builders",
    summary: "Applications and services that talk directly between nodes, on a protocol rather than a platform.",
    paragraphs: [
      "Anything that sends data between people or machines can run on the network without a server in the middle: messaging, file sharing, tools for a team, services for devices.",
      "The design also includes a marketplace where nodes offer services to each other, such as computation, data or AI agents, priced in VIBE and settled between the parties.",
    ],
    need: ["Rust, for now: the core library is written in it"],
    status: [
      { kind: "working", text: "Core library" },
      { kind: "planned", text: "Public SDK and documentation" },
      { kind: "planned", text: "Marketplace for services between nodes" },
    ],
    join: { as: "builder", label: "Join as a builder" },
    image: { alt: "A developer at a desk with two nodes and a laptop", brief: "A developer's desk at night: laptop with code on screen (unreadable), two small black nodes connected beside it, red LEDs lit." },
  },
];

export default function UseCasesPage() {
  return (
    <>
      <section className="wrap pb-12 pt-14 md:pt-20">
        <h1>What it is for</h1>
        <p className="lede mt-6">
          One network, used in different ways. Each use below says what you would need and how much of it exists today.
        </p>
        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Use cases">
          {cases.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="link">{c.title}</a>
          ))}
        </nav>
      </section>

      {cases.map((c) => (
        <section key={c.id} id={c.id} className="section py-16">
          <div className="wrap grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2>{c.title}</h2>
              <p className="lede mt-4">{c.summary}</p>
              <div className="mt-6 max-w-2xl space-y-4 text-[#c6cad3]">
                {c.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <Link href={c.join.as === "updates" ? "/join" : `/join?as=${c.join.as}`} className="btn btn-ghost mt-8">{c.join.label}</Link>
            </div>
            <aside className="space-y-8 lg:pt-2">
              <Shot name={`use-${c.id}`} ratio="4/3" alt={c.image.alt} brief={c.image.brief} />
              <div>
                <h3>What you need</h3>
                <ul className="mt-3 border-t border-[var(--line)]">
                  {c.need.map((n) => (
                    <li key={n} className="muted border-b border-[var(--line)] py-3 text-[0.95rem]">{n}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Where it stands</h3>
                <ul className="mt-3 border-t border-[var(--line)]">
                  {c.status.map((s) => (
                    <li key={s.text} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-[var(--line)] py-3 text-[0.95rem]">
                      <span className="text-[#c6cad3]">{s.text}</span>
                      <Status kind={s.kind} />
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      ))}
    </>
  );
}
