"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GO_URL, NAV, STACK } from "@/lib/site";

function Mark() {
  return (
    <svg viewBox="0 0 40 40" width="34" height="34" aria-hidden>
      <circle cx="20" cy="20" r="19" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
      <path d="M20 9 11 30h3.6l1.9-4.6h7l1.9 4.6H29L20 9Zm0 7.4 2.3 5.9h-4.6l2.3-5.9Z" fill="var(--gold-hi)" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [stack, setStack] = useState(false);

  useEffect(() => {
    setMenu(false);
    setStack(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="wrap flex h-[4.25rem] items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Alpha Protocol Network, home">
            <Mark />
            <span className="display text-[1.05rem] tracking-[0.08em] text-[var(--text)]">Alpha Protocol</span>
          </Link>

          <div className="relative hidden sm:block">
            <button
              onClick={() => setStack((v) => !v)}
              aria-expanded={stack}
              className="ml-2 flex items-center gap-1.5 rounded-md border border-[var(--line-soft)] px-2.5 py-1.5 text-xs text-[var(--muted)] hover:border-[var(--line)] hover:text-[var(--text)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--alpha-red)]" />
              Sovereign Stack
              <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden className={stack ? "rotate-180" : ""}>
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {stack && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setStack(false)} />
                <div className="absolute left-2 top-full z-50 mt-2 w-80 rounded-xl border border-[var(--line)] bg-[var(--panel)] p-2 shadow-2xl">
                  {STACK.map((s) => {
                    const inner = (
                      <>
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: s.color }} />
                        <span>
                          <span className="block text-sm font-medium text-[var(--text)]">
                            {s.name}
                            {s.here && <span className="ml-2 text-xs font-normal text-[var(--gold-hi)]">You are here</span>}
                          </span>
                          <span className="block text-xs text-[var(--muted)]">{s.role}</span>
                        </span>
                      </>
                    );
                    return s.url ? (
                      <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="flex gap-3 rounded-lg px-3 py-2 no-underline hover:bg-[var(--raised)]">
                        {inner}
                      </a>
                    ) : (
                      <div key={s.id} className="flex gap-3 rounded-lg px-3 py-2">{inner}</div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : undefined}
              className={`text-sm no-underline transition-colors hover:text-[var(--gold-hi)] ${pathname === n.href ? "text-[var(--gold-hi)]" : "text-[var(--muted)]"}`}
            >
              {n.label}
            </Link>
          ))}
          <a href={GO_URL} className="text-sm text-[var(--muted)] no-underline transition-colors hover:text-[var(--gold-hi)]">Alpha GO</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/join" className="btn hidden min-h-[2.4rem] px-4 text-sm sm:inline-flex">Join</Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line-soft)] lg:hidden"
            onClick={() => setMenu((v) => !v)}
            aria-expanded={menu}
            aria-label={menu ? "Close menu" : "Open menu"}
          >
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden>
              {menu ? (
                <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menu && (
        <nav className="border-t border-[var(--line-soft)] bg-[var(--bg)] lg:hidden" aria-label="Main">
          <div className="wrap flex flex-col py-3">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="border-b border-[var(--line-soft)] py-3.5 text-[var(--text)] no-underline">
                {n.label}
              </Link>
            ))}
            <a href={GO_URL} className="border-b border-[var(--line-soft)] py-3.5 text-[var(--text)] no-underline">Alpha GO</a>
            <Link href="/join" className="btn mt-4">Join the community</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
