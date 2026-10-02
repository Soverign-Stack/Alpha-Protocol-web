import type { Metadata } from "next";
import { Cinzel, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Cinzel({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alphaprotocol.network"),
  title: {
    default: "Alpha Protocol Network: your own private network, joined to a global mesh",
    template: "%s | Alpha Protocol Network",
  },
  description:
    "Alpha Protocol Network lets a person or an organisation run a secure private network on hardware they own, and connect it to a wider mesh with no company in the middle.",
  keywords: ["mesh network", "private network", "peer to peer", "decentralised network", "Sovereign Stack", "Omega Wireless", "VIBE"],
  openGraph: {
    title: "Alpha Protocol Network",
    description: "Your own private network, joined to a global mesh.",
    type: "website",
    siteName: "Alpha Protocol Network",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
