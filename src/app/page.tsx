import Image from "next/image";
import Link from "next/link";
import IslandsDiagram from "@/components/IslandsDiagram";
import JoinForm from "@/components/JoinForm";
import Status from "@/components/Status";
import { GO_URL, STACK } from "@/lib/site";
import MeshField from "@/components/MeshField";
import Shot from "@/components/Shot";

const audiences = [
  { id: "people", title: "People and households", body: "A private network for your own devices, and a way to reach other people without a platform reading along." },
  { id: "organisations", title: "Organisations", body: "A network for your team, sites and machines that you deploy and control, with business data staying on your own hardware." },
  { id: "field", title: "Events and field teams", body: "Coverage you bring with you: a handful of nodes that link a venue, a site or a crew, with or without an internet connection." },
  { id: "operators", title: "Node operators", body: "Run nodes where the network needs them, carry traffic for others and earn for the work your hardware does." },
  { id: "builders", title: "Builders", body: "Services and applications that talk directly between nodes, on a protocol rather than a platform." },
];

// In order: a node comes first, then your own network, then the wider mesh.
const steps = [
  { title: "Start with a node", body: "A node is a small box you own. It is your entry point: plug it in at home, in the office or at an event.", link: { href: "https://www.omegawireless.xyz", label: "Omega Wireless hardware" } },
  { title: "Run your own network", body: "Your devices connect through your node. Traffic between them is encrypted end to end and stays on hardware you control." },
  { title: "Join the mesh", body: "Link your network to others when you choose to. Nodes carry traffic for each other, and that work earns VIBE." },
];

const status = [
  {
    kind: "working" as const,
    items: [
      "Nodes on the same local network find each other, prove who they are and exchange encrypted traffic",
      "Links across the internet, through a relay we operate",
      "VIBE on the Aptos testnet",
      "Alpha GO, live as a public demo for TOKEN2049 week",
    ],
  },
  {
    kind: "building" as const,
    items: [
      "Direct links across the internet, with no single relay in the path",
      "Membership that proves you belong without saying who you are",
      "Private domains for organisations",
      "The software that runs on Omega Wireless nodes",
      "Alpha GO for Android, in testing and open to download",
    ],
  },
  {
    kind: "planned" as const,
    items: [
      "A seed network of independent node operators earning testnet VIBE for relaying",
      "Radio links between nodes where there is no internet",
      "Alpha GO for iPhone, and Alpha GO running over the mesh",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <MeshField seed={11} cols={24} rows={9} lit={7} className="hero-mesh" />
        <div className="wrap pb-16 pt-12 md:pb-24 md:pt-20">
        <h1 className="max-w-5xl">Your own private network, joined to a global mesh</h1>
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="lede">
              Alpha Protocol Network connects your devices directly to each other on hardware you own. Networks then link into a wider mesh, so people and organisations can reach one another with no company in the middle.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/join" className="btn">Join the community</Link>
              <Link href="/network" className="btn btn-ghost">See how it works</Link>
            </div>
            <p className="mt-6 text-sm text-[var(--faint)]">
              Pre-launch. <Link href="#status" className="link">See what works today</Link>.
            </p>
          </div>
          <IslandsDiagram />
        </div>
        </div>
      </section>

      {/* The idea */}
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <h2>The internet runs through a few companies. This does not.</h2>
            <Shot
              className="mt-8"
              name="home-idea"
              ratio="4/3"
              alt="A small network node on a windowsill at dusk, with a city behind it"
              brief="A small black network node with one red status light on a windowsill at dusk, an out-of-focus city skyline behind it."
            />
          </div>
          <div className="space-y-5 text-[#c6cad3]">
            <p>
              Almost everything you send passes through a provider who can see who you talk to, when, and often what you say. Alpha Protocol is built so that any person or organisation can connect devices directly and exchange data without a central party observing who talks to whom, what they exchange, or that they take part at all.
            </p>
            <p>
              The network is made of <strong className="font-semibold text-[var(--text)]">islands</strong>: a home, an office or an event running its own local mesh, which keeps working when the internet does not. Islands reach each other over an <strong className="font-semibold text-[var(--text)]">encrypted overlay</strong> that rides on whatever connection exists. As islands grow and multiply, less traffic touches the public internet, and what does is unreadable to it.
            </p>
            <p>
              The people who run nodes carry traffic for everyone else, and the network pays them for it in VIBE.
            </p>
            <Link href="/network" className="link inline-block">Read how the network works</Link>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="band">
        <MeshField seed={29} cols={26} rows={6} lit={9} />
        <div className="wrap py-20 text-center md:py-28">
          <p className="display mx-auto max-w-3xl text-[clamp(1.5rem,3.2vw,2.4rem)] leading-tight">
            A network that belongs to the people who run it
          </p>
        </div>
      </section>

      {/* Who it is for */}
      <section className="section">
        <div className="wrap">
          <h2>Who it is for</h2>
          <div className="rows mt-10">
            {audiences.map((a) => (
              <Link key={a.id} href={`/use-cases#${a.id}`} className="row">
                <h3>{a.title}</h3>
                <p className="muted max-w-2xl">{a.body}</p>
                <span className="row-go">Read more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How you get on */}
      <section className="section">
        <div className="wrap">
          <h2>How you get on it</h2>
          <Shot
            className="mt-10"
            name="home-node"
            ratio="21/9"
            alt="An Omega Wireless node being plugged in on a desk"
            brief="Hands plugging in a compact matte-black mesh node with two short antennas on a wooden desk, warm lamp light, one red LED lit."
          />
          <ol className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-[var(--line)] pt-5">
                <p className="text-sm font-medium text-[var(--accent-hi)]">Step {i + 1}</p>
                <h3 className="mt-2">{s.title}</h3>
                <p className="muted mt-2">{s.body}</p>
                {s.link && (
                  <a href={s.link.href} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-block text-sm">{s.link.label}</a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Alpha GO */}
      <section className="section">
        <div className="wrap grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <h2>Alpha GO, live in Singapore this week</h2>
            <p className="lede mt-5">
              Alpha GO is the app for the network. For TOKEN2049 week it runs as a free web demo: more than 400 side events on one map, showing what is on right now and what starts next.
            </p>
            <ul className="mt-6 space-y-2.5 text-[#c6cad3]">
              <li className="border-l border-[var(--accent-dim)] pl-4">Move the clock to see where the city will be busy tonight.</li>
              <li className="border-l border-[var(--accent-dim)] pl-4">Register for events without leaving the app.</li>
              <li className="border-l border-[var(--accent-dim)] pl-4">Check in at venues to earn testnet VIBE.</li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={GO_URL} className="btn">Open Alpha GO</a>
              <a href={`${GO_URL}/vibe`} className="btn btn-ghost">Get testnet VIBE</a>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[26rem] items-start gap-4">
            <div className="phone w-1/2">
              <Image src="/alpha-go-map.png" alt="Alpha GO map of Singapore with clusters of events that are on now" width={780} height={1600} />
            </div>
            <div className="phone mt-10 w-1/2">
              <Image src="/alpha-go-list.png" alt="Alpha GO list of events grouped by on now, starting soon and later" width={780} height={1600} />
            </div>
          </div>
        </div>
      </section>

      {/* Status */}
      <section id="status" className="section">
        <div className="wrap">
          <h2>What works today</h2>
          <p className="lede mt-4">
            Alpha Protocol is pre-launch. We would rather tell you exactly where it stands than let you guess.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {status.map((col) => (
              <div key={col.kind}>
                <Status kind={col.kind} />
                <ul className="mt-4 space-y-3.5">
                  {col.items.map((item) => (
                    <li key={item} className="border-t border-[var(--line-soft)] pt-3.5 text-[0.95rem] text-[#c6cad3]">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/roadmap" className="link">Read the roadmap</Link>
            <span className="mx-3 text-[var(--faint)]">or</span>
            <Link href="/network#limits" className="link">see what the network does not protect</Link>
          </p>
        </div>
      </section>

      {/* The stack */}
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2>One layer of the Sovereign Stack</h2>
            <p className="muted mt-5 max-w-md">
              The Sovereign Stack is a set of layers, from hardware to intelligence, that no single company owns and that you can run yourself. Alpha Protocol is the layer that connects them.
            </p>
            <a href="https://sovereign-stack-web.vercel.app" target="_blank" rel="noopener noreferrer" className="link mt-5 inline-block">About the Sovereign Stack</a>
          </div>
          <ul className="border-t border-[var(--line)]">
            {STACK.map((s) => (
              <li
                key={s.id}
                className={`grid gap-1 border-b border-[var(--line)] py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 ${s.here ? "bg-[rgba(220, 38, 38,0.07)] px-4 -mx-4" : ""}`}
              >
                <div>
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold no-underline hover:text-[var(--accent-hi)]">{s.name}</a>
                  ) : (
                    <span className={`font-semibold ${s.here ? "text-[var(--accent-hi)]" : ""}`}>{s.name}</span>
                  )}
                  <span className="block text-sm text-[var(--faint)]">{s.role}</span>
                </div>
                <p className="muted text-[0.95rem]">{s.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VIBE and join */}
      <section id="join" className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <h2>Join before the beta opens</h2>
            <p className="lede mt-5">
              The network starts with a small group of node operators, organisations and builders. Tell us which you are and we will bring you in when your part is ready.
            </p>
            <div className="mt-10 border-t border-[var(--line)] pt-6">
              <h3>VIBE, the network&apos;s token</h3>
              <p className="muted mt-2 max-w-md">
                VIBE pays the people whose hardware carries the network. It runs on testnet today, for use inside the Alpha Protocol ecosystem. It is not a share or a promise of future value.
              </p>
              <Link href="/vibe" className="link mt-3 inline-block">What VIBE is and how to get it</Link>
            </div>
          </div>
          <div className="panel">
            <JoinForm />
          </div>
        </div>
      </section>
    </>
  );
}
