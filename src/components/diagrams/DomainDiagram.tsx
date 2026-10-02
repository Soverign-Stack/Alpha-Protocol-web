import { Anchor, Device, FAINT, Label, Node } from "./parts";

// One organisation, two sites, one boundary; the wider mesh sits outside it.
export default function DomainDiagram() {
  const siteA: [number, number][] = [[52, 76], [48, 150], [120, 52], [126, 176]];
  const siteB: [number, number][] = [[330, 60], [344, 172], [272, 180], [262, 54]];
  const mesh: [number, number][] = [[452, 44], [498, 110], [450, 180]];
  return (
    <figure className="diagram max-w-2xl">
      <svg viewBox="0 0 520 250" role="img" aria-label="Two sites inside one private domain, joined by an encrypted tunnel, with an optional link from the domain to the global mesh">
        <rect x="14" y="16" width="372" height="196" rx="20" fill="rgba(220,38,38,0.05)" stroke="var(--accent)" strokeWidth="1.4" strokeDasharray="7 6" />
        {siteA.map(([x, y]) => <line key={`a${x}`} x1={x} y1={y} x2="100" y2="114" stroke={FAINT} strokeWidth="1.2" />)}
        {siteB.map(([x, y]) => <line key={`b${x}`} x1={x} y1={y} x2="296" y2="114" stroke={FAINT} strokeWidth="1.2" />)}
        <line x1="100" y1="114" x2="296" y2="114" stroke="var(--accent-hi)" strokeWidth="3" />
        <path d="M296 114 C 350 114, 400 112, 452 44" fill="none" stroke="var(--accent-hi)" strokeWidth="1.5" className="overlay-link" />
        <line x1="452" y1="44" x2="498" y2="110" stroke={FAINT} strokeWidth="1.2" />
        <line x1="498" y1="110" x2="450" y2="180" stroke={FAINT} strokeWidth="1.2" />
        {siteA.map(([x, y]) => <Device key={`da${x}`} x={x} y={y} />)}
        {siteB.map(([x, y]) => <Device key={`db${x}`} x={x} y={y} />)}
        <Anchor x={100} y={114} />
        <Anchor x={296} y={114} />
        {mesh.map(([x, y]) => <Node key={`m${x}${y}`} x={x} y={y} />)}
        <Label x={198} y={104}>encrypted tunnel</Label>
        <Label x={100} y={200} strong>Site A</Label>
        <Label x={296} y={200} strong>Site B</Label>
        <Label x={200} y={238} strong>Your organisation&apos;s private domain</Label>
        <Label x={470} y={238}>global mesh</Label>
      </svg>
      <figcaption>Everything inside the dashed line belongs to the organisation. The link out to the wider mesh is optional and under its control.</figcaption>
    </figure>
  );
}
