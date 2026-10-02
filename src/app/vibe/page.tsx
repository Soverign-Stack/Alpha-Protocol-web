import type { Metadata } from "next";
import Link from "next/link";
import ReceiptDiagram from "@/components/diagrams/ReceiptDiagram";
import MeshField from "@/components/MeshField";
import { GO_URL, OPERATOR, VIBE_CONTRACT, VIBE_EXPLORER } from "@/lib/site";

export const metadata: Metadata = {
  title: "VIBE",
  description: "What VIBE is for, how to earn or buy it, what a purchase is and is not, and where the token stands today.",
};

const facts: [string, React.ReactNode][] = [
  ["Maximum supply", "1 billion VIBE"],
  ["Network", "Aptos testnet, since February 2026"],
  [
    "Contract",
    <a key="c" href={VIBE_EXPLORER} target="_blank" rel="noopener noreferrer" className="link" title={VIBE_CONTRACT}>
      {VIBE_CONTRACT.slice(0, 10)}…{VIBE_CONTRACT.slice(-6)} on the Aptos explorer
    </a>,
  ],
  ["Demo sale price", "$0.01 per VIBE, which is 100 VIBE per $1"],
  ["On sale now", "1,000,000 VIBE, a small first allocation for the TOKEN2049 demo"],
  ["Per person", "From $25 up to 100,000 VIBE ($1,000)"],
  ["Pay with", "Bitcoin, USDT (on Ethereum) or Aptos"],
  ["Sold by", OPERATOR],
  ["Where you hold it", "Your Alpha GO account today. Add an Aptos address and it is sent there on the testnet once on-chain delivery is switched on."],
  ["Allocation and vesting", "Being finalised. Published before mainnet."],
];

const uses = [
  { title: "Earn it", items: ["Relaying traffic for the network with a node you run", "Checking in at events and inviting people in Alpha GO, during the demo"] },
  { title: "Spend it", items: ["Services other nodes offer: relaying, storage, computation", "AI usage in the tools built on the stack"] },
];

export default function VibePage() {
  return (
    <>
      <section className="hero">
        <MeshField seed={131} cols={24} rows={8} lit={6} className="hero-mesh" />
        <div className="wrap pb-16 pt-14 md:pt-20">
          <h1 className="max-w-4xl">VIBE, the token the network runs on</h1>
          <p className="lede mt-6">
            VIBE pays the people whose hardware carries the network, and it is what you spend to use the services on it. It runs on testnet today.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`${GO_URL}/vibe`} className="btn">Buy testnet VIBE</a>
            <a href={GO_URL} className="btn btn-ghost">Earn it in Alpha GO</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2>The facts</h2>
          </div>
          <table className="deftable">
            <tbody>
              {facts.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row" className="!w-52 !whitespace-normal">{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2>What it is for</h2>
            <p className="muted mt-5 max-w-md">
              The network only pays for work that someone else confirms. When your node carries traffic for another party, that party signs a receipt, and rewards are paid on receipts.
            </p>
          </div>
          <div>
            <div className="grid gap-8 sm:grid-cols-2">
              {uses.map((u) => (
                <div key={u.title}>
                  <h3>{u.title}</h3>
                  <ul className="mt-3 border-t border-[var(--line)]">
                    {u.items.map((i) => (
                      <li key={i} className="border-b border-[var(--line)] py-3 text-[0.95rem] text-[#c6cad3]">{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ReceiptDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2>What you are buying</h2>
          </div>
          <div className="max-w-2xl space-y-4 text-[#c6cad3]">
            <p>
              The demo sale is a small, limited sale of testnet VIBE during TOKEN2049 week, ahead of the beta network. A purchase gives you testnet VIBE at $0.01 each, credited to your Alpha GO account once your payment is confirmed on its network. It is a utility token for use inside the Alpha Protocol ecosystem.
            </p>
            <p>
              It is not a share, a security or a claim on any company, and it carries no promise of monetary value, return or future exchange. The network is pre-launch, and how VIBE works may change before mainnet.
            </p>
            <dl className="limits">
              <div>
                <dt>It is transparent for now</dt>
                <dd>While VIBE is on Aptos, balances and payments are public. The design moves it to a form where amounts and parties are private.</dd>
              </div>
              <div>
                <dt>Payments cannot be reversed</dt>
                <dd>Bitcoin, USDT and Aptos payments are final once sent. Send the exact amount shown, on the network shown.</dd>
              </div>
              <div>
                <dt>Know your own rules</dt>
                <dd>Do not buy where buying tokens like this is restricted. Only spend what you can afford to lose entirely.</dd>
              </div>
            </dl>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <a href={`${GO_URL}/vibe`} className="btn">Buy testnet VIBE</a>
              <a href={`${GO_URL}/terms`} className="btn btn-ghost">Read the sale terms</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p>
            <Link href="/network#rewards" className="link">How rewards work</Link>
            <span className="mx-3 text-[var(--faint)]">or</span>
            <a href="https://www.vibe-token.com" target="_blank" rel="noopener noreferrer" className="link">visit vibe-token.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
