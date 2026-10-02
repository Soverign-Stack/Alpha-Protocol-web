// Three local networks ("islands") joined by an encrypted overlay: the shape of the whole network.
type Island = {
  label: string;
  box: [number, number, number, number];
  nodes: [number, number][];
  devices: [number, number][];
};

const ISLANDS: Island[] = [
  { label: "Home", box: [24, 44, 216, 170], nodes: [[132, 132]], devices: [[70, 96], [78, 176], [192, 100], [198, 172]] },
  { label: "Office", box: [352, 24, 224, 212], nodes: [[432, 112], [512, 156]], devices: [[392, 68], [386, 166], [474, 62], [544, 96], [546, 206], [458, 200]] },
  { label: "Event", box: [176, 316, 268, 176], nodes: [[258, 400], [362, 388], [312, 452]], devices: [[214, 356], [216, 446], [404, 346], [410, 444], [312, 350], [262, 462]] },
];

const OVERLAY = [
  "M132 132 C 230 30, 340 34, 432 112",
  "M132 132 C 110 280, 190 340, 258 400",
  "M512 156 C 524 300, 440 350, 362 388",
];

const nearest = (p: [number, number], nodes: [number, number][]) =>
  nodes.reduce((a, b) => (Math.hypot(b[0] - p[0], b[1] - p[1]) < Math.hypot(a[0] - p[0], a[1] - p[1]) ? b : a));

export default function IslandsDiagram() {
  return (
    <figure>
      <svg viewBox="0 0 600 530" role="img" aria-labelledby="islands-title islands-desc" className="h-auto w-full">
        <title id="islands-title">Local networks joined by an encrypted overlay</title>
        <desc id="islands-desc">
          A home, an office and an event each run their own local network of nodes and devices. Encrypted links between their nodes join the three into one mesh.
        </desc>

        {OVERLAY.map((d) => (
          <path key={d} d={d} className="overlay-link" fill="none" stroke="var(--accent-hi)" strokeWidth="1.6" />
        ))}

        {ISLANDS.map((isl) => {
          const [x, y, w, h] = isl.box;
          return (
            <g key={isl.label}>
              <rect x={x} y={y} width={w} height={h} rx="18" fill="rgba(220, 38, 38,0.045)" stroke="var(--accent-dim)" strokeWidth="1" />
              <text x={x + 4} y={y + h + 20} fill="var(--muted)" fontSize="13" fontWeight="500" style={{ fontFamily: "var(--font-body)" }}>
                {isl.label}
              </text>
              {isl.nodes.map((a, i) =>
                isl.nodes.slice(i + 1).map((b) => (
                  <line key={`${a}-${b}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="var(--accent)" strokeWidth="1.4" />
                )),
              )}
              {isl.devices.map((d) => {
                const n = nearest(d, isl.nodes);
                return <line key={`l${d}`} x1={d[0]} y1={d[1]} x2={n[0]} y2={n[1]} stroke="rgba(232,234,240,0.22)" strokeWidth="1" />;
              })}
              {isl.devices.map((d) => (
                <circle key={`d${d}`} cx={d[0]} cy={d[1]} r="5" fill="var(--bg)" stroke="rgba(232,234,240,0.6)" strokeWidth="1.3" />
              ))}
              {isl.nodes.map((n) => (
                <g key={`n${n}`}>
                  <circle cx={n[0]} cy={n[1]} r="15" fill="rgba(239, 68, 68,0.14)" />
                  <circle cx={n[0]} cy={n[1]} r="8" fill="var(--accent-hi)" stroke="var(--bg)" strokeWidth="2" />
                </g>
              ))}
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[0.8125rem] text-[var(--muted)]">
        <span className="flex items-center gap-2"><i className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent-hi)]" />Node</span>
        <span className="flex items-center gap-2"><i className="inline-block h-2.5 w-2.5 rounded-full border border-[rgba(232,234,240,0.6)]" />Your devices</span>
        <span className="flex items-center gap-2"><i className="inline-block w-6 border-t border-dashed border-[var(--accent-hi)]" />Encrypted link between networks</span>
      </figcaption>
    </figure>
  );
}
