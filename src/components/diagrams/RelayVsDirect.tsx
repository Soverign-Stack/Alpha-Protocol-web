import { FAINT, Label, Node } from "./parts";

const PTS: [number, number][] = [[60, 60], [240, 46], [272, 150], [150, 196], [44, 152]];

// The same five nodes twice: through one relay today, and directly as designed.
export default function RelayVsDirect() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <figure className="diagram">
        <svg viewBox="0 0 320 250" role="img" aria-label="Today, every long-distance link passes through one relay">
          {PTS.map(([x, y]) => (
            <line key={`${x}`} x1={x} y1={y} x2="158" y2="116" stroke="var(--amber)" strokeWidth="1.4" strokeDasharray="4 5" />
          ))}
          <rect x="140" y="98" width="36" height="36" rx="6" fill="var(--panel)" stroke="var(--amber)" strokeWidth="1.8" />
          {PTS.map(([x, y]) => <Node key={`n${x}`} x={x} y={y} />)}
          <Label x={186} y={112} anchor="start">relay</Label>
          <Label x={160} y={240} strong>Today</Label>
        </svg>
        <figcaption>Nodes in different places meet at a relay we operate. It cannot read the traffic, but every connection passes through it.</figcaption>
      </figure>
      <figure className="diagram">
        <svg viewBox="0 0 320 250" role="img" aria-label="As designed, nodes link directly and relay for each other">
          {[[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 3], [1, 3]].map(([a, b]) => (
            <line key={`${a}${b}`} x1={PTS[a][0]} y1={PTS[a][1]} x2={PTS[b][0]} y2={PTS[b][1]} stroke={a === 0 && b === 3 || a === 2 && b === 3 ? "var(--accent-hi)" : FAINT} strokeWidth={a === 0 && b === 3 || a === 2 && b === 3 ? 1.8 : 1.2} className={a === 0 && b === 3 || a === 2 && b === 3 ? "overlay-link" : undefined} />
          ))}
          {PTS.map(([x, y]) => <Node key={`n${x}`} x={x} y={y} />)}
          <Label x={160} y={240} strong>As designed</Label>
        </svg>
        <figcaption>Nodes connect directly where they can. Where they cannot, another node carries the traffic, so no single point sees every connection.</figcaption>
      </figure>
    </div>
  );
}
