// Shared pieces so every diagram on the site speaks the same visual language.
export const INK = "rgba(232,234,240,0.62)";
export const FAINT = "rgba(232,234,240,0.24)";

export function Device({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r="5.5" fill="var(--panel)" stroke={INK} strokeWidth="1.4" />;
}

export function Node({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="15" fill="rgba(239,68,68,0.15)" />
      <circle cx={x} cy={y} r="8" fill="var(--accent-hi)" stroke="var(--panel)" strokeWidth="2" />
    </g>
  );
}

export function Anchor({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="19" fill="rgba(239,68,68,0.12)" />
      <circle cx={x} cy={y} r="13" fill="none" stroke="var(--accent-hi)" strokeWidth="1.6" />
      <circle cx={x} cy={y} r="7" fill="var(--accent-hi)" />
    </g>
  );
}

export function Label({ x, y, children, anchor = "middle", strong }: { x: number; y: number; children: React.ReactNode; anchor?: "start" | "middle" | "end"; strong?: boolean }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize="14" fontWeight={strong ? 600 : 400} fill={strong ? "var(--text)" : "var(--muted)"}>
      {children}
    </text>
  );
}

export function Arrowhead({ id, color = "var(--accent-hi)" }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 10 5 0 10z" fill={color} />
    </marker>
  );
}
