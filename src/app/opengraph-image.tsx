import { ImageResponse } from "next/og";

export const alt = "Alpha Protocol Network: your own private network, joined to a global mesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          background: "#08090c", color: "#e8eaf0", padding: 72, border: "1px solid #8a6e38",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 4, color: "#c9a95e" }}>ALPHA PROTOCOL NETWORK</div>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.1, maxWidth: 980 }}>
          Your own private network, joined to a global mesh
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9aa0ad" }}>alphaprotocol.network</div>
      </div>
    ),
    size,
  );
}
