import type { Metadata } from "next";
import Link from "next/link";
import IslandsDiagram from "@/components/IslandsDiagram";
import Status from "@/components/Status";

export const metadata: Metadata = {
  title: "How the network works",
  description:
    "How Alpha Protocol Network is designed: local islands, the encrypted overlay between them, identity, private domains, rewards, and what the network does not protect.",
};

const toc = [
  ["overview", "Overview"],
  ["islands", "Islands"],
  ["overlay", "The overlay"],
  ["roles", "Who does what"],
  ["identity", "Identity and membership"],
  ["encryption", "Encryption"],
  ["domains", "Private domains"],
  ["rewards", "Rewards and VIBE"],
  ["protects", "Who it is built to protect"],
  ["limits", "What it does not protect"],
  ["glossary", "Glossary"],
];

const glossary: [string, string][] = [
  ["Island", "A local mesh, such as a home, a building or an event site, that works with no internet connection."],
  ["Overlay", "The encrypted network that links islands over whatever connection exists between them."],
  ["Backhaul", "The connection an overlay link rides on: the internet today, satellite later."],
  ["Client", "A phone or laptop that uses the network. It does not carry other people's traffic unless you opt in."],
  ["Node", "A dedicated box that relays traffic. Nodes are the backbone of an island."],
  ["Anchor", "A higher-capacity node that also offers storage and compute, and can host a private domain."],
  ["Relay", "Any node while it is carrying traffic for someone else."],
  ["Private domain", "An organisation's own scope inside the network, with its own key, members and rules."],
  ["Root key", "Your identity, generated from 12 words on your device. It is never sent over the network."],
  ["Credential", "Proof that you are a valid member, without revealing which member."],
  ["Receipt", "A record of work done, signed by the party the work was done for. Rewards are paid on receipts."],
  ["VIBE", "The network's reward and utility token. It runs on testnet today."],
  ["Seeder", "Someone who runs a node early to help the network grow."],
];

export default function NetworkPage() {
  return (
    <>
      <section className="wrap pb-12 pt-14 md:pt-20">
        <h1>How the network works</h1>
        <p className="lede mt-6">
          This page describes Alpha Protocol Network as it is designed, and marks each part as working today, being built or planned. Where something is not private yet, it says so.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Status kind="working" />
          <Status kind="building" />
          <Status kind="planned" />
        </div>
      </section>

      <div className="wrap grid gap-12 border-t border-[var(--line-soft)] pb-24 pt-12 lg:grid-cols-[13rem_1fr]">
        <nav className="hidden lg:block" aria-label="On this page">
          <div className="toc">
            {toc.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </div>
        </nav>

        <article className="doc min-w-0">
          <section id="overview">
            <h2>Overview</h2>
            <div className="prose-w">
              <p>
                The aim of Alpha Protocol is to give any person or organisation the ability to connect devices directly and exchange data without a central party observing who talks to whom, what they exchange, or that they take part.
              </p>
              <p>
                It does this with two things. <strong>Islands</strong> are dense local networks that belong to the people who run them. An <strong>overlay</strong> is the encrypted layer that joins islands together across distance. The public internet becomes optional transport between islands rather than something every message depends on.
              </p>
            </div>
            <div className="mt-8 max-w-xl">
              <IslandsDiagram />
            </div>
          </section>

          <section id="islands">
            <div className="doc-head">
              <h2>Islands</h2>
              <Status kind="working" label="Working on local networks" />
            </div>
            <div className="prose-w">
              <p>
                An island is a group of devices close enough to reach each other directly: a household, an office floor, a venue, a street. Devices on an island find each other without any outside server, confirm each other&apos;s identity and exchange encrypted traffic. If the internet connection goes down, the island keeps working.
              </p>
              <h3>What carries an island</h3>
              <ul>
                <li>Wi-Fi and wired local networks. This works today.</li>
                <li>Bluetooth and direct Wi-Fi between phones. Planned.</li>
                <li>Long-range, low-power radio between nodes: Wi-Fi HaLow for the links that carry real traffic, and LoRa for small messages such as presence and emergency traffic. Planned, with Omega Wireless hardware.</li>
              </ul>
              <p>
                Radio that hops from node to node does not scale beyond a neighbourhood. That is physics, and the design accepts it: islands stay local, and the overlay covers distance.
              </p>
            </div>
          </section>

          <section id="overlay">
            <div className="doc-head">
              <h2>The overlay</h2>
              <Status kind="building" />
            </div>
            <div className="prose-w">
              <p>
                The overlay links islands to each other. Traffic between islands is encrypted from end to end, so whatever carries it sees only that data is moving.
              </p>
              <h3>Today</h3>
              <p>
                Two nodes in different places connect through a relay that we operate. The relay cannot read the traffic, but it is a single point that every long-distance connection passes through. Removing it is the first job of the beta.
              </p>
              <h3>As designed</h3>
              <ul>
                <li>Nodes connect to each other directly across the internet wherever they can.</li>
                <li>Where they cannot, other nodes relay for them, so no single relay sees every connection.</li>
                <li>Overlay traffic is shaped to look like ordinary encrypted web traffic.</li>
                <li>Later, satellite links carry the overlay where there is no internet at all.</li>
              </ul>
            </div>
          </section>

          <section id="roles">
            <h2>Who does what</h2>
            <div className="prose-w">
              <p>Every device on the network plays one of three parts.</p>
            </div>
            <table className="deftable max-w-3xl">
              <tbody>
                <tr>
                  <th scope="row">Client</th>
                  <td>A phone or laptop. It uses the network. It does not relay for others by default, and only does so if you opt in while it is charging and on Wi-Fi.</td>
                </tr>
                <tr>
                  <th scope="row">Node</th>
                  <td>A dedicated, low-cost box that stays on. Nodes relay traffic and form the backbone of an island. This is the part most people run.</td>
                </tr>
                <tr>
                  <th scope="row">Anchor</th>
                  <td>A more capable machine that relays, stores data, offers compute and can host an organisation&apos;s private domain.</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-5 max-w-2xl">
              Node and anchor hardware comes from{" "}
              <a className="link" href="https://www.omegawireless.xyz" target="_blank" rel="noopener noreferrer">Omega Wireless</a>, or you can run the software on a machine you already own.
            </p>
          </section>

          <section id="identity">
            <div className="doc-head">
              <h2>Identity and membership</h2>
              <Status kind="building" />
            </div>
            <div className="prose-w">
              <p>
                Your identity is a key that your own device generates from 12 words. Nobody issues it and nobody can take it away. Today that key also identifies your node on the network, which means your activity can be linked to it. The design separates the two.
              </p>
              <h3>As designed</h3>
              <ul>
                <li>Your root key stays on your device and is never sent over the network.</li>
                <li>You hold a membership credential that proves you are a valid member without revealing which one.</li>
                <li>The address used to route traffic to you changes on a schedule, so it cannot be used to follow you over time.</li>
                <li>Payouts go to a separate address that is not tied to the other three.</li>
              </ul>
              <h3>Joining</h3>
              <p>
                Membership is free. There is no stake to join and no identity check. To stop one person creating thousands of fake members, joining costs a few minutes of computation on your own device, once.
              </p>
            </div>
          </section>

          <section id="encryption">
            <div className="doc-head">
              <h2>Encryption</h2>
              <Status kind="working" />
            </div>
            <div className="prose-w">
              <p>
                Traffic is encrypted between the two ends of a conversation, not just between you and the next hop. Nodes that relay a message cannot read it.
              </p>
              <ul>
                <li>Key exchange uses X25519, encryption uses ChaCha20-Poly1305 and hashing uses BLAKE3.</li>
                <li>Connections between nodes are set up with the Noise protocol.</li>
                <li>Being built: keys that change continually within a session, so that a key stolen later cannot unlock earlier traffic.</li>
              </ul>
            </div>
          </section>

          <section id="domains">
            <div className="doc-head">
              <h2>Private domains</h2>
              <Status kind="building" />
            </div>
            <div className="prose-w">
              <p>
                A private domain is an organisation&apos;s own space inside the network. It has its own key, its own members and its own rules. People outside it cannot list who is in it or what it holds, and an administrator&apos;s view stops at the edge of the domain.
              </p>
              <ul>
                <li>Business data stays on the organisation&apos;s own hardware, with no third party in the path.</li>
                <li>Two sites join through an encrypted tunnel between their anchors, in place of a conventional site-to-site VPN.</li>
                <li>A member&apos;s identity inside the domain cannot be linked to their identity on the wider mesh.</li>
              </ul>
              <p>
                Whether a domain connects to the global mesh, and what crosses that boundary, is the domain owner&apos;s decision.
              </p>
            </div>
          </section>

          <section id="rewards">
            <div className="doc-head">
              <h2>Rewards and VIBE</h2>
              <Status kind="building" />
            </div>
            <div className="prose-w">
              <p>
                The network pays for useful work, and it only counts work that someone else confirms. When your node carries traffic for another party, that party signs a receipt. Rewards are paid on receipts, not on what a node reports about itself.
              </p>
              <ul>
                <li>Relaying traffic is the first kind of work that earns.</li>
                <li>Storing data and running computation for others come later, each with its own proof that the work was done.</li>
                <li>Paying for compute depends on real demand for it. Treat it as a bet, not a yield.</li>
              </ul>
              <h3>VIBE</h3>
              <p>
                VIBE is the token rewards are paid in. It runs on the Aptos testnet today. Testnet VIBE is for use inside the Alpha Protocol ecosystem; it is not a share or a promise of future value. On Aptos, balances and payouts are public. The design moves VIBE to a form where amounts and parties are hidden, with the option to disclose them by choice.
              </p>
            </div>
          </section>

          <section id="protects">
            <h2>Who it is built to protect</h2>
            <table className="deftable max-w-3xl">
              <tbody>
                <tr>
                  <th scope="row">Everyday users</th>
                  <td>People who want to keep their messages and their contacts away from platforms, data brokers and internet providers.</td>
                </tr>
                <tr>
                  <th scope="row">Organisations</th>
                  <td>Teams that need business data to stay inside their own walls, out of reach of competitors, cloud vendors and requests made to third parties.</td>
                </tr>
                <tr>
                  <th scope="row">People at high risk</th>
                  <td>People facing a capable, well-funded adversary. For them the design uses the overlay only and keeps no linkable history on the device. Radio is not recommended.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="limits">
            <h2>What it does not protect</h2>
            <p className="prose-w">
              No network protects against everything. These limits are part of the design, and we would rather you read them here than discover them later.
            </p>
            <dl className="limits max-w-3xl">
              <div>
                <dt>Radio is observable</dt>
                <dd>Encryption hides what you send, not that you are transmitting. Anyone nearby with the right equipment can detect and locate a radio.</dd>
              </div>
              <div>
                <dt>Being online is visible</dt>
                <dd>The overlay hides what you send and to whom. It does not hide that you are online, and your internet provider can see that you run Alpha Protocol.</dd>
              </div>
              <div>
                <dt>Cashing out identifies you</dt>
                <dd>Turning rewards into money goes through services that know who you are.</dd>
              </div>
              <div>
                <dt>Islands need density</dt>
                <dd>A local mesh only works where enough nodes are close together.</dd>
              </div>
              <div>
                <dt>Phones do not relay by default</dt>
                <dd>Phones use the network. They carry traffic for others only if you opt in.</dd>
              </div>
              <div>
                <dt>Early VIBE is transparent</dt>
                <dd>While VIBE is on Aptos, balances and payouts are public.</dd>
              </div>
              <div>
                <dt>Your device is your root of trust</dt>
                <dd>If your device is compromised, the network cannot protect you. If you lose your 12 words, nobody can recover your identity for you.</dd>
              </div>
              <div>
                <dt>A watcher at both ends</dt>
                <dd>An adversary who can observe both ends of a connection at once can match them up by timing.</dd>
              </div>
            </dl>
          </section>

          <section id="glossary">
            <h2>Glossary</h2>
            <table className="deftable max-w-3xl">
              <tbody>
                {glossary.map(([term, def]) => (
                  <tr key={term}>
                    <th scope="row">{term}</th>
                    <td>{def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-10">
              <Link href="/use-cases" className="btn btn-ghost">See what people use it for</Link>
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
