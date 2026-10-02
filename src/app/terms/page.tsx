import type { Metadata } from "next";
import { CONTACT_EMAIL, GO_URL, OPERATOR } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and privacy",
  description: "Who operates Alpha Protocol Network's sites, what this site is and is not, and how your details are used.",
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap max-w-3xl space-y-10 text-[#c6cad3]">
        <div>
          <h1>Terms and privacy</h1>
          <p className="lede mt-6">The short, plain version. Alpha GO and the VIBE demo sale have their own fuller terms, linked below.</p>
        </div>

        <div className="space-y-3">
          <h2>Who runs this</h2>
          <p>
            This site, Alpha GO and the testnet VIBE demo sale are operated by {OPERATOR}, a company based in the United States. Dedicated entities for the protocol and for the hardware business are being set up, and this page will name them when they exist.
          </p>
          <p>
            Contact: <a href={`mailto:${CONTACT_EMAIL}`} className="link">{CONTACT_EMAIL}</a>
          </p>
        </div>

        <div className="space-y-3">
          <h2>What this site is</h2>
          <p>
            Alpha Protocol Network is pre-launch. This site describes what works today, what is being built and what is planned, and those labels can change as the work goes on. Nothing here is a promise of a date or a feature.
          </p>
          <p>
            Nothing on this site is an offer to sell securities or a solicitation to buy them, and nothing here is financial, legal or tax advice.
          </p>
        </div>

        <div className="space-y-3">
          <h2>Testnet VIBE</h2>
          <p>
            Testnet VIBE is a utility token for use inside the Alpha Protocol ecosystem. It is not a share, a security or a claim on any company, and it carries no promise of monetary value, return or future exchange. It is sold only inside Alpha GO, by {OPERATOR}, under the{" "}
            <a href={`${GO_URL}/terms`} className="link">Alpha GO and sale terms</a>. Do not buy where buying tokens like this is restricted.
          </p>
        </div>

        <div className="space-y-3">
          <h2>Your details</h2>
          <p>
            When you fill in a form here we store your name, email, what you told us you are interested in and any note you add. We use them to reply to you and to tell you about Alpha Protocol. We do not sell them. Email us and we will remove them.
          </p>
          <p>
            An Alpha GO account holds more, such as saved events and check-ins. That is covered in the{" "}
            <a href={`${GO_URL}/terms`} className="link">Alpha GO terms</a>.
          </p>
        </div>

        <div className="space-y-3" id="corrections">
          <h2>Corrections</h2>
          <p>
            We would rather say when we got something wrong. Until 2 October 2026, some of our sister sites made claims that were not true at the time: the Spectrum Galactic site described satellites as in orbit, the VIBE site offered the token at $0.001 with staking returns and governance, the Pythia site described a running network with Bitcoin mining revenue, and the Vibertas site said its operating system was available. None of those things existed. All of those pages were rewritten on 2 October 2026 to say what exists today, and the older versions remain in our public code history. Where this site described the mesh core as working, it has been corrected to say which parts work in the core library and which do not yet run in the packaged node.
          </p>
        </div>

        <div className="space-y-3">
          <h2>Other sites</h2>
          <p>
            We link to the other layers of the Sovereign Stack and to third-party sites. Each has its own terms. Alpha GO lists public events and is not affiliated with TOKEN2049 or the events shown.
          </p>
        </div>
      </div>
    </section>
  );
}
