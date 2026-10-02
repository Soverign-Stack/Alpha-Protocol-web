import { Anchor, Device, FAINT, Label, Node } from "./parts";

// Devices hang off nodes, nodes off an anchor, and anchors reach other islands.
export default function RolesDiagram() {
  const clients: [number, number][] = [[40, 40], [34, 100], [44, 160], [150, 30], [156, 172]];
  return (
    <figure className="diagram max-w-2xl">
      <svg viewBox="0 0 520 240" role="img" aria-label="Clients connect to nodes, nodes to an anchor, and the anchor links to other islands over the overlay">
        {clients.slice(0, 3).map(([x, y]) => <line key={y} x1={x} y1={y} x2="120" y2="100" stroke={FAINT} strokeWidth="1.2" />)}
        {clients.slice(3).map(([x, y]) => <line key={y} x1={x} y1={y} x2="210" y2="100" stroke={FAINT} strokeWidth="1.2" />)}
        <line x1="120" y1="100" x2="210" y2="100" stroke="var(--accent)" strokeWidth="1.6" />
        <line x1="210" y1="100" x2="320" y2="100" stroke="var(--accent)" strokeWidth="1.6" />
        <path d="M320 100 C 380 60, 430 60, 500 80" fill="none" stroke="var(--accent-hi)" strokeWidth="1.6" className="overlay-link" />
        <path d="M320 100 C 380 140, 430 150, 500 130" fill="none" stroke="var(--accent-hi)" strokeWidth="1.6" className="overlay-link" />
        {clients.map(([x, y]) => <Device key={`c${x}${y}`} x={x} y={y} />)}
        <Node x={120} y={100} />
        <Node x={210} y={100} />
        <Anchor x={320} y={100} />
        <Label x={70} y={214} strong>Clients</Label>
        <Label x={165} y={214} strong>Nodes</Label>
        <Label x={320} y={214} strong>Anchor</Label>
        <Label x={452} y={214}>other islands</Label>
        <Label x={70} y={232}>use the network</Label>
        <Label x={165} y={232}>relay</Label>
        <Label x={320} y={232}>relay, store, compute</Label>
      </svg>
    </figure>
  );
}
