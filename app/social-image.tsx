import { ImageResponse } from "next/og";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f6f7f3",
          color: "#121615",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "2px solid #dbe2dc",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "54px",
            width: "100%",
          }}
        >
          <div style={{ color: "#0f766e", display: "flex", fontSize: 24, fontWeight: 700 }}>
            RESEARCH WRITING / PYTHON AUTOMATION / PRACTICAL AI
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.03,
              maxWidth: 940,
            }}
          >
            Researching complex subjects. Automating repetitive work.
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              justifyContent: "space-between",
            }}
          >
            <span>Rongali Chaitanya</span>
            <span style={{ color: "#5d6762" }}>rongalichaitanya.com</span>
          </div>
        </div>
      </div>
    ),
    { height: 630, width: 1200 }
  );
}
