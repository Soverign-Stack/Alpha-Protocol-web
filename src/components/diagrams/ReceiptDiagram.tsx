import { Arrowhead, Device, INK, Label, Node } from "./parts";

// Traffic goes out through a relaying node; a signed receipt comes back and is what gets paid.
export default function ReceiptDiagram() {
  return (
    <figure className="diagram max-w-2xl">
      <svg viewBox="0 0 520 220" role="img" aria-label="A node relays traffic from one party to another, receives a signed receipt, and is paid in VIBE on that receipt">
        <defs>
          <Arrowhead id="rc-a" />
          <Arrowhead id="rc-b" color="var(--ok)" />
          <Arrowhead id="rc-c" color="var(--amber)" />
        </defs>
        <line x1="62" y1="70" x2="238" y2="70" stroke="var(--accent-hi)" strokeWidth="1.6" markerEnd="url(#rc-a)" />
        <line x1="282" y1="70" x2="452" y2="70" stroke="var(--accent-hi)" strokeWidth="1.6" markerEnd="url(#rc-a)" />
        <path d="M458 90 C 400 132, 330 132, 274 92" fill="none" stroke="var(--ok)" strokeWidth="1.6" strokeDasharray="5 5" markerEnd="url(#rc-b)" />
        <line x1="260" y1="96" x2="260" y2="156" stroke="var(--amber)" strokeWidth="1.6" markerEnd="url(#rc-c)" />
        <Device x={50} y={70} />
        <Node x={260} y={70} />
        <Device x={470} y={70} />
        <rect x="214" y="162" width="92" height="34" rx="17" fill="var(--panel)" stroke="var(--amber)" strokeWidth="1.4" />
        <text x="260" y="184" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--amber)">VIBE</text>
        <Label x={50} y={42} strong>Sender</Label>
        <Label x={260} y={36} strong>Your node</Label>
        <Label x={470} y={42} strong>Receiver</Label>
        <Label x={150} y={60}>encrypted traffic</Label>
        <text x="372" y="140" textAnchor="middle" fontSize="14" fill={INK}>signed receipt</text>
      </svg>
      <figcaption>The party you carried traffic for signs a receipt. Rewards are paid on receipts, not on what a node says about itself.</figcaption>
    </figure>
  );
}
