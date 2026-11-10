import { ImageResponse } from "next/og";

export const alt = "Develoop. Design, delivery and development advisory.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#f5f5f0",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 0, color: "#b8956e" }}>Develoop</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 64, lineHeight: 1.05, letterSpacing: 0 }}>
          <div style={{ display: "flex" }}>Deliver faster, at scale,</div>
          <div style={{ display: "flex" }}>with fewer surprises.</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c8c8c0" }}>
          Design, delivery and development advisory
        </div>
      </div>
    ),
    { ...size },
  );
}
