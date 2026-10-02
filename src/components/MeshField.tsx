// A field of nodes and links, drawn from a seed so the same seed always gives the same mesh.
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Props = {
  seed?: number;
  cols?: number;
  rows?: number;
  /** How many nodes are lit in the accent colour, joined by a lit route. */
  lit?: number;
  className?: string;
};

export default function MeshField({ seed = 7, cols = 16, rows = 6, lit = 5, className }: Props) {
  const cell = 60;
  const w = cols * cell;
  const h = rows * cell;
  const rand = rng(seed);
  const pts: [number, number][] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rand() < 0.14) continue; // gaps keep it from reading as a grid
      pts.push([(c + 0.5 + (rand() - 0.5) * 0.8) * cell, (r + 0.5 + (rand() - 0.5) * 0.8) * cell]);
    }
  }
  const edges: [number, number][] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1]);
      if (d < cell * 1.18 && rand() < 0.78) edges.push([i, j]);
    }
  }
  // A lit route: walk from a node on the left towards the right along existing links.
  const route: number[] = [];
  if (lit > 0 && pts.length) {
    let cur = pts.reduce((best, p, i) => (p[0] < pts[best][0] ? i : best), 0);
    route.push(cur);
    while (route.length < lit) {
      const next = edges
        .filter(([a, b]) => a === cur || b === cur)
        .map(([a, b]) => (a === cur ? b : a))
        .filter((n) => !route.includes(n) && pts[n][0] > pts[cur][0])
        .sort((a, b) => pts[b][0] - pts[a][0] + (rand() - 0.5) * cell)[0];
      if (next === undefined) break;
      route.push(next);
      cur = next;
    }
  }
  const litEdge = (a: number, b: number) => {
    const i = route.indexOf(a);
    return i >= 0 && (route[i + 1] === b || route[i - 1] === b);
  };

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice" aria-hidden className={className}>
      {edges.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]}
          stroke={litEdge(a, b) ? "var(--accent-hi)" : "rgba(232,234,240,0.13)"}
          strokeWidth={litEdge(a, b) ? 1.6 : 1}
          className={litEdge(a, b) ? "overlay-link" : undefined}
        />
      ))}
      {pts.map((p, i) =>
        route.includes(i) ? (
          <g key={i}>
            <circle cx={p[0]} cy={p[1]} r="9" fill="rgba(239,68,68,0.16)" />
            <circle cx={p[0]} cy={p[1]} r="3.6" fill="var(--accent-hi)" />
          </g>
        ) : (
          <circle key={i} cx={p[0]} cy={p[1]} r="2" fill="rgba(232,234,240,0.38)" />
        ),
      )}
    </svg>
  );
}
