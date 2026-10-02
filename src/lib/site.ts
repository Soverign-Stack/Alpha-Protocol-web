export const GO_URL = process.env.NEXT_PUBLIC_GO_URL || "https://go.alphaprotocol.network";

/** The company that operates the sites, Alpha GO and the VIBE demo sale today. */
export const OPERATOR = "Powerclub Global LLC";
export const CONTACT_EMAIL = "apn@powerclubglobal.com";

/** VIBE on the Aptos testnet. */
export const VIBE_CONTRACT = "0x24cb561c64c32942eb8600d5135f0185c23bcd06cd8cf33422ce2f9b77d65388";
export const VIBE_EXPLORER = `https://explorer.aptoslabs.com/account/${VIBE_CONTRACT}/modules/code/vibe_token?network=testnet`;

export const CALL_URL = "https://powerclubglobal.com/discovery-call";
/** Telegram or other community link. Shown across the site once it is set. */
export const COMMUNITY_URL = process.env.NEXT_PUBLIC_COMMUNITY_URL || "";

export const NAV = [
  { label: "How it works", href: "/network" },
  { label: "Use cases", href: "/use-cases" },
  { label: "VIBE", href: "/vibe" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Investors", href: "/investors" },
];

/** Pages that live in the footer but not the top bar. */
export const MORE = [{ label: "Build", href: "/build" }];

/**
 * The Sovereign Stack, in the order its own site presents it. `url` is omitted
 * where there is no public site to send people to.
 */
export const STACK: { id: string; name: string; role: string; line: string; url?: string; color: string; here?: boolean }[] = [
  { id: "spectrum", name: "Spectrum Galactic", role: "Connectivity", line: "Satellite backhaul between distant parts of the network. An early-stage plan.", url: "https://www.spectrumgalactic.xyz", color: "#8b5cf6" },
  { id: "omega", name: "Omega Wireless", role: "Hardware", line: "The nodes, routers and servers the network runs on.", url: "https://www.omegawireless.xyz", color: "#f97316" },
  { id: "vibertas", name: "Vibertas OS", role: "Operating system", line: "The operating system a node boots into, under its owner's control.", url: "https://www.vibertas.com", color: "#eab308" },
  { id: "alpha", name: "Alpha Protocol Network", role: "Protocol", line: "How nodes find each other, prove who they are and carry traffic.", color: "#dc2626", here: true },
  { id: "vibe", name: "VIBE", role: "Economy", line: "The token that pays the people whose hardware does the work.", url: "https://www.vibe-token.com", color: "#22c55e" },
  { id: "pythia", name: "Pythia", role: "Intelligence", line: "AI that runs on compute supplied by the network.", url: "https://www.pythia-ai.xyz", color: "#6366f1" },
  { id: "vibeland", name: "VIBELAND", role: "World", line: "A shared world for people and agents, built on the layers below.", color: "#3b82f6" },
];
