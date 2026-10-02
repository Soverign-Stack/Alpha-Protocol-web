import type { Metadata } from "next";
import Link from "next/link";
import Status from "@/components/Status";
import MeshField from "@/components/MeshField";

export const metadata: Metadata = {
  title: "Build",
  description: "What exists for developers on Alpha Protocol Network today, what is coming, and how to get involved early.",
};

const modules: [string, string][] = [
  ["Identity", "Keys generated on the device from 12 words, and the storage that keeps them there."],
  ["Encryption", "End-to-end encryption between peers: X25519, ChaCha20-Poly1305 and BLAKE3."],
  ["Mesh", "Discovery on the local network, a distributed lookup table and publish-and-subscribe messaging, built on libp2p with Noise-secured connections."],
  ["Relay", "A fallback path for nodes that cannot reach each other directly."],
  ["Wire format", "The message format nodes use to talk to each other."],
  ["Rewards", "Tracking of the work a node does and the rewards owed for it."],
];

const coming = [
  { title: "A node you can run", body: "Installers for the desktop client: create an identity, run a node, see what it has relayed." },
  { title: "Open source", body: "We intend to publish the protocol source with the beta network, so that anyone can read it, audit it and run it." },
  { title: "An interface for applications", body: "A stable way for an application to send and receive over the mesh, and documentation to go with it." },
  { title: "Services between nodes", body: "A way for nodes to offer computation, data and agents to each other, priced in VIBE." },
];

export default function BuildPage() {
  return (
    <>
      <section className="wrap pb-12 pt-14 md:pt-20">
        <h1>Build on a protocol, not a platform</h1>
        <p className="lede mt-6">
          Alpha Protocol is early. There is a working core and a plan, and there is not yet a public SDK. This page says what you can rely on today and what is coming.
        </p>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2>What exists</h2>
            <p className="muted mt-5 max-w-md">
              The core of the network is a library written in Rust. It is designed to run on desktops, phones and small embedded nodes from one codebase.
            </p>
            <p className="mt-5"><Status kind="working" /></p>
          </div>
          <table className="deftable">
            <tbody>
              {modules.map(([name, text]) => (
                <tr key={name}>
                  <th scope="row">{name}</th>
                  <td>{text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="band">
        <MeshField seed={53} cols={26} rows={5} lit={8} />
        <div className="wrap py-16 text-center md:py-20">
          <p className="display mx-auto max-w-3xl text-[clamp(1.4rem,3vw,2.1rem)] leading-tight">One library, from a phone to a server</p>
        </div>
      </section>

      <section className="section border-t-0">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2>What is not there yet</h2>
          </div>
          <div className="max-w-2xl space-y-4 text-[#c6cad3]">
            <p>
              There is no published SDK, no stable interface for applications and no public test network for the mesh. We would rather say so than show install commands for packages that do not exist.
            </p>
            <p>
              If you want to build on Alpha Protocol, the useful thing to do now is tell us what you are building. Early builders get the source and documentation as they are released, and a say in what the application interface looks like.
            </p>
            <Link href="/join?as=builder" className="btn mt-4">Join as a builder</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>What is coming</h2>
          <div className="rows mt-10">
            {coming.map((c) => (
              <div key={c.title} className="row md:grid-cols-[15rem_1fr]">
                <h3>{c.title}</h3>
                <p className="muted max-w-2xl">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/network" className="link">Read how the network works</Link>
            <span className="mx-3 text-[var(--faint)]">or</span>
            <Link href="/roadmap" className="link">see the roadmap</Link>
          </p>
        </div>
      </section>
    </>
  );
}
