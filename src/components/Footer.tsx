import Link from "next/link";
import { COMMUNITY_URL, CONTACT_EMAIL, GO_URL, MORE, NAV, OPERATOR, STACK } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#050608]">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display text-lg tracking-[0.08em]">Alpha Protocol Network</p>
          <p className="mt-3 max-w-xs text-sm text-[var(--muted)]">
            Private networks on hardware you own, joined to a global mesh. The protocol layer of the Sovereign Stack.
          </p>
          <Link href="/join" className="btn btn-ghost mt-6">Join the community</Link>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--text)]">Alpha Protocol</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...NAV, ...MORE].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-[var(--muted)] no-underline hover:text-[var(--accent-hi)]">{n.label}</Link>
              </li>
            ))}
            <li><a href={GO_URL} className="text-[var(--muted)] no-underline hover:text-[var(--accent-hi)]">Alpha GO</a></li>
            {COMMUNITY_URL && (
              <li><a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] no-underline hover:text-[var(--accent-hi)]">Community</a></li>
            )}
            <li><Link href="/terms" className="text-[var(--muted)] no-underline hover:text-[var(--accent-hi)]">Terms and privacy</Link></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--muted)] no-underline hover:text-[var(--accent-hi)]">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--text)]">Sovereign Stack</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {STACK.filter((s) => s.url).map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] no-underline hover:text-[var(--accent-hi)]">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line-soft)]">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-[var(--faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Alpha Protocol Network. Operated by {OPERATOR}. Part of the Sovereign Stack.</p>
          <p>
            Designed and built by{" "}
            <a href="https://powerclubglobal.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent-hi)]">Powerclub Global</a>
            . Backed by{" "}
            <a href="https://www.okbventures.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent-hi)]">OKB Ventures</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
