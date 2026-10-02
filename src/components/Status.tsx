export type StatusKind = "working" | "building" | "planned";

const LABEL: Record<StatusKind, string> = {
  working: "Working today",
  building: "Being built",
  planned: "Planned",
};

export default function Status({ kind, label }: { kind: StatusKind; label?: string }) {
  return <span className={`status status-${kind}`}>{label ?? LABEL[kind]}</span>;
}
