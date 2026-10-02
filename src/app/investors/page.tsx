import type { Metadata } from "next";
import Link from "next/link";
import JoinForm from "@/components/JoinForm";
import MeshField from "@/components/MeshField";
import Status from "@/components/Status";
import { CALL_URL, CONTACT_EMAIL, GO_URL, OPERATOR, VIBE_EXPLORER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Why Alpha Protocol Network is being built, how it makes money, how it compares, who is behind it and where it stands today.",
};

const why = [
  {
    title: "Computing is moving back onto hardware people own",
    body: "Organisations are bringing AI and sensitive data back in-house, onto machines they control. Those machines still depend on networks they do not control. Alpha Protocol is the network to match.",
  },
  {
    title: "People will run network hardware when it pays",
    body: "Helium showed that individuals will buy and operate network equipment for rewards, at very large scale. Meshtastic showed there is grassroots demand for networks that work without any carrier.",
  },
  {
    title: "Privacy tools still depend on someone in the middle",
    body: "Private networking products route through a company's coordination servers. Privacy overlays need the internet underneath them. Neither gives an organisation a network it actually owns.",
  },
];

const income = [
  {
    title: "Hardware",
    body: "Omega Wireless sells the nodes, routers and servers the network runs on, from a single mesh node to a self-hosting kit for an organisation.",
    proof: "Store live, taking pre-orders",
  },
  {
    title: "Network usage",
    body: "Services on the network, such as relaying, storage, computation and AI, are paid for in VIBE between the parties. The provider keeps most of each payment and the platform takes a fee.",
    proof: "VIBE on testnet; relaying is the first paid service",
  },
  {
    title: "Private networks for organisations",
    body: "Deploying and running private domains for organisations, with the software that manages them, sold as setup, licences and support.",
    proof: "Management software already runs in production for our own operations",
  },
];

const compare = [
  {
    name: "Helium",
    does: "Pays people to run wireless hotspots that provide coverage for devices and phones.",
    differs: "It sells coverage into existing carrier and internet networks. It is not a private network for the people who run it.",
  },
  {
    name: "Meshtastic",
    does: "Open-source radio mesh for short text messages and location, with no carrier and no internet.",
    differs: "Low bandwidth by design, and no incentive for anyone to extend it. A local tool, not a global network.",
  },
  {
    name: "Tailscale and ZeroTier",
    does: "Private networks between your devices across the internet, simple to set up.",
    differs: "They need the internet, and connections are arranged through a company's servers. No local mesh, and operators are not paid.",
  },
  {
    name: "Nym and Tor",
    does: "Overlays that hide who is talking to whom on the internet.",
    differs: "They sit on top of the internet. They do not give you a local network, hardware, or a private domain for an organisation.",
  },
];

const exists = [
  "A working mesh core: nodes on a local network find each other, prove who they are and exchange encrypted traffic",
  "Links across the internet through a relay we operate",
  "VIBE on the Aptos testnet since February 2026, with a public contract anyone can inspect",
  "Alpha GO, a public web demo, live for TOKEN2049 week in Singapore",
  "Alpha GO for Android, in testing, with a signed public release",
  "Omega Wireless hardware catalogue and store",
  "The management software for the stack, in daily production use by the team that builds it",
];

export default function InvestorsPage() {
  return (
    <>
      <section className="hero">
        <MeshField seed={97} cols={24} rows={8} lit={7} className="hero-mesh" />
        <div className="wrap pb-16 pt-14 md:pt-20">
          <h1 className="max-w-4xl">The network layer for infrastructure people own</h1>
          <p className="lede mt-6">
            Alpha Protocol Network lets people and organisations run private networks on their own hardware and join them into a global mesh. This page is the short version of why we are building it, how it earns, and where it stands.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn">Book a 20-minute call</a>
            <a href="#deck" className="btn btn-ghost">Request the deck</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Why now</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {why.map((w) => (
              <div key={w.title} className="border-t border-[var(--line)] pt-5">
                <h3>{w.title}</h3>
                <p className="muted mt-2">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2>What is different</h2>
          </div>
          <div className="max-w-2xl space-y-4 text-[#c6cad3]">
            <p>
              Most projects in this space build one piece: a token, a radio, a VPN or a privacy overlay. Alpha Protocol is one layer of a stack built by one team, from the hardware and its operating system up to the network, its token and the applications on it. That is what lets a single box arrive ready to join.
            </p>
            <p>
              The network is useful before it is large. A household or an organisation gets a private network on day one, with or without anyone else. The global mesh and the rewards grow on top of something people already have a reason to run.
            </p>
            <p>
              We publish what works and what does not. The <Link href="/network#limits" className="link">limits of the design</Link> and the <Link href="/#status" className="link">current status</Link> are on this site, not in a footnote.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>How it makes money</h2>
          <div className="rows mt-10">
            {income.map((i) => (
              <div key={i.title} className="row">
                <h3>{i.title}</h3>
                <p className="muted max-w-2xl">{i.body}</p>
                <span className="text-sm text-[var(--faint)] md:max-w-[14rem] md:text-right">{i.proof}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>How it compares</h2>
          <p className="lede mt-4">Each of these does one part well. Our bet is that the parts belong together.</p>
          <div className="mt-10 overflow-x-auto">
            <table className="deftable min-w-[40rem]">
              <thead>
                <tr>
                  <th scope="col" className="!w-44"> </th>
                  <th scope="col" className="!w-auto text-[var(--muted)]">What it does</th>
                  <th scope="col" className="!w-auto text-[var(--muted)]">Where Alpha Protocol differs</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((c) => (
                  <tr key={c.name}>
                    <th scope="row">{c.name}</th>
                    <td>{c.does}</td>
                    <td>{c.differs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted mt-6 max-w-2xl text-sm">
            These products are live and proven. Alpha Protocol is pre-launch, and that is the risk an investor takes at this stage.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2>What exists today</h2>
            <p className="mt-5"><Status kind="working" /></p>
          </div>
          <div>
            <ul className="border-t border-[var(--line)]">
              {exists.map((e) => (
                <li key={e} className="border-b border-[var(--line)] py-3.5 text-[#c6cad3]">{e}</li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/roadmap" className="link">What comes next</Link>
              <span className="mx-3 text-[var(--faint)]">or</span>
              <a href={GO_URL} className="link">try Alpha GO</a>
              <span className="mx-3 text-[var(--faint)]">or</span>
              <a href={VIBE_EXPLORER} target="_blank" rel="noopener noreferrer" className="link">see VIBE on chain</a>
              <span className="mx-3 text-[var(--faint)]">or</span>
              <a href="https://github.com/AlphaProtocolLabs/alpha-go" target="_blank" rel="noopener noreferrer" className="link">read the Alpha GO code</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2>Who is behind it</h2>
          </div>
          <div className="max-w-2xl space-y-4 text-[#c6cad3]">
            <p>
              Alpha Protocol was founded by <strong className="font-semibold text-[var(--text)]">Jessy Artman</strong>, founder of Powerclub Global and managing partner of OKB Ventures.
            </p>
            <p>
              <strong className="font-semibold text-[var(--text)]">Madhav Gupta</strong> is the engineer behind the Alpha GO mobile app.
            </p>
            <p>
              <a href="https://powerclubglobal.com" target="_blank" rel="noopener noreferrer" className="link">Powerclub Global</a> designs, builds and operates the software with a core engineering team.{" "}
              <a href="https://okb-ventures.vercel.app" target="_blank" rel="noopener noreferrer" className="link">OKB Ventures</a> is the investment arm behind the Sovereign Stack.
            </p>
            <p>
              Today all business is transacted by {OPERATOR}, including these sites, Alpha GO and the VIBE demo sale. Dedicated entities for the protocol and for the hardware business are being set up. We will tell you exactly where that stands on a call.
            </p>
          </div>
        </div>
      </section>

      <section id="deck" className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <h2>Talk to us</h2>
            <p className="lede mt-5">
              We are looking for investors who want to back infrastructure for the long term. The quickest way to find out whether that is you is a short call.
            </p>
            <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className="btn mt-8">Book a 20-minute call</a>
            <p className="muted mt-4 max-w-md text-sm">
              The booking page is Powerclub Global&apos;s. Pick any time and say it is about Alpha Protocol. Or email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="link">{CONTACT_EMAIL}</a>.
            </p>
            <p className="mt-10 max-w-md text-sm text-[var(--faint)]">
              Nothing on this site is an offer to sell securities or a solicitation to buy them. Testnet VIBE is a utility token for use inside the Alpha Protocol ecosystem and is not a share in any company.
            </p>
          </div>
          <div className="panel self-start">
            <p className="mb-5 font-semibold">Request the deck</p>
            <JoinForm source="website-investors" interest="I am an investor" cta="Request the deck" note="We answer deck requests ourselves, by email. We also send occasional Alpha Protocol updates, and you can leave at any time." />
          </div>
        </div>
      </section>
    </>
  );
}
