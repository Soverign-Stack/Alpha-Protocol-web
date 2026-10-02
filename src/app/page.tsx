import Link from "next/link";
import JoinForm from "@/components/JoinForm";

const GO_URL = process.env.NEXT_PUBLIC_GO_URL || "https://go.alphaprotocol.network";

// In order: you need a node before a network, and a network before you can join the mesh.
const steps = [
  {
    title: "Start with a node",
    body: "A node is a small box you own. Plug it in at home, in the office or at an event and it becomes your entry point to the network.",
    link: { href: "https://omegawireless.xyz", label: "See Omega Wireless nodes" },
  },
  {
    title: "Run your own private network",
    body: "Your devices and your team connect through your node. What passes between them is encrypted, and it stays on hardware you control rather than on someone else's servers.",
  },
  {
    title: "Join the global mesh",
    body: "Link your network to others when you choose to. Nodes carry traffic for each other, and the capacity you contribute earns VIBE.",
  },
];

const audiences = [
  {
    title: "For people",
    body: "A private connection for your household and your devices that does not depend on a single provider, plus rewards for the capacity you share.",
  },
  {
    title: "For organisations",
    body: "A network for your team, sites and machines that you deploy and control yourself, with the option to reach partners over the mesh.",
  },
  {
    title: "For node operators",
    body: "Run nodes where coverage is needed, relay for the network and earn for the work your hardware does.",
  },
];

const status = [
  {
    label: "Working today",
    items: [
      "The mesh core: nodes find each other, prove who they are and exchange encrypted traffic",
      "A desktop client, in testing with our own team",
      "Alpha GO, live as a public demo for TOKEN2049 week in Singapore",
    ],
  },
  {
    label: "Being built now",
    items: [
      "Private network controls, so a person or an organisation decides who is on their network",
      "Direct links between networks across the internet",
      "The software that runs on Omega Wireless nodes",
    ],
  },
  {
    label: "Next",
    items: [
      "A beta network with the first group of node operators",
      "Testnet VIBE rewards for relaying",
      "Alpha GO as a full mobile app",
    ],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-[1.08] tracking-tight">
            Your own private network, joined to a global mesh
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Alpha Protocol lets a person or an organisation run a secure network on hardware they own, then connect it to other networks with no company in the middle.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a href="#join" className="btn-primary text-center">Join the community</a>
            <a href={GO_URL} className="btn-secondary text-center">Open Alpha GO</a>
          </div>
        </div>
      </section>

      {/* TOKEN2049 */}
      <section className="px-4 sm:px-6 pb-16">
        <a
          href={GO_URL}
          className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[var(--gold)]/50 bg-[var(--gold)]/[0.07] p-6 hover:border-[var(--gold)] transition-colors"
        >
          <div>
            <p className="text-lg font-semibold text-[var(--text-primary)]">In Singapore for TOKEN2049?</p>
            <p className="text-[var(--text-secondary)] mt-1">
              Alpha GO puts more than 400 side events on one map and shows what is on right now. Free, 5 to 11 October.
            </p>
          </div>
          <span className="shrink-0 font-semibold text-[var(--gold)]">Open the map</span>
        </a>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">How it works</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="text-sm font-semibold text-[var(--alpha-accent)]">Step {i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{s.title}</h3>
                <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">{s.body}</p>
                {s.link && (
                  <a href={s.link.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-[var(--alpha-accent)] hover:underline">
                    {s.link.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Who it is for</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.title} className="panel">
                <h3 className="font-semibold text-[var(--text-primary)]">{a.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--bg-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Where the project stands</h2>
          <p className="mt-3 text-[var(--text-secondary)] max-w-2xl">
            Alpha Protocol is pre-launch. This is what exists, what is in progress and what comes after.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {status.map((col) => (
              <div key={col.label}>
                <h3 className="font-semibold text-[var(--alpha-accent)]">{col.label}</h3>
                <ul className="mt-3 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--text-secondary)] leading-relaxed border-l-2 border-[var(--border-default)] pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/roadmap" className="mt-8 inline-block text-sm font-semibold text-[var(--alpha-accent)] hover:underline">
            Read the roadmap
          </Link>
        </div>
      </section>

      {/* VIBE */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">VIBE, the network&apos;s token</h2>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              VIBE rewards the people whose hardware carries the network. It runs on testnet today. You can earn it by using Alpha GO, or buy it ahead of the beta network with Bitcoin, Ether or Aptos.
            </p>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
              Testnet VIBE is for use inside the Alpha Protocol ecosystem. It is not a share or a promise of future value.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`${GO_URL}/vibe`} className="px-6 py-3.5 bg-[#22c55e] hover:bg-[#16a34a] rounded-xl font-semibold text-black text-center transition-colors">
              Get testnet VIBE
            </a>
            <a href="https://www.vibe-token.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 border border-[#22c55e]/40 rounded-xl font-semibold text-[#22c55e] text-center hover:bg-[#22c55e]/10 transition-colors">
              About VIBE
            </a>
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--bg-surface)] scroll-mt-16">
        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Join before the beta opens</h2>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              The beta network starts with a small group of node operators, organisations and builders. Tell us which you are and we will bring you in when your part is ready.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="border-l-2 border-[var(--alpha-accent)] pl-3">Node operators hear first when hardware and node software ship.</li>
              <li className="border-l-2 border-[var(--alpha-accent)] pl-3">Organisations get a conversation about their own private network.</li>
              <li className="border-l-2 border-[var(--alpha-accent)] pl-3">Investors get the plan and a call with the team.</li>
            </ul>
          </div>
          <div className="panel">
            <JoinForm />
          </div>
        </div>
      </section>
    </div>
  );
}
