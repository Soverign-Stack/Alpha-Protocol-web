import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import MeshField from "./MeshField";

type Props = {
  /** File name without extension. Drop public/images/<name>.webp (or .jpg/.png) in and it replaces the placeholder. */
  name: string;
  alt: string;
  /** What the picture should show, for whoever generates it. Mirrors IMAGES.md. */
  brief: string;
  ratio?: "16/10" | "4/3" | "21/9" | "1/1" | "3/4";
  className?: string;
};

const SIZE: Record<NonNullable<Props["ratio"]>, [number, number]> = {
  "16/10": [1600, 1000], "4/3": [1600, 1200], "21/9": [2100, 900], "1/1": [1200, 1200], "3/4": [1200, 1600],
};

function find(name: string): string | null {
  for (const ext of ["webp", "jpg", "png"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", `${name}.${ext}`))) return `/images/${name}.${ext}`;
  }
  return null;
}

export default function Shot({ name, alt, brief, ratio = "16/10", className = "" }: Props) {
  const src = find(name);
  const [w, h] = SIZE[ratio];
  if (src) {
    return (
      <div className={`shot ${className}`} style={{ aspectRatio: ratio }}>
        <Image src={src} alt={alt} width={w} height={h} className="h-full w-full object-cover" />
      </div>
    );
  }
  let n = 0;
  for (const ch of name) n = (n * 31 + ch.charCodeAt(0)) >>> 0;
  return (
    <div className={`shot shot-empty ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={alt}>
      <MeshField seed={n} cols={10} rows={7} lit={4} className="absolute inset-0 h-full w-full opacity-70" />
      <div className="shot-note">
        <span>Image to come</span>
        <p>{brief}</p>
        <code>{name}</code>
      </div>
    </div>
  );
}
