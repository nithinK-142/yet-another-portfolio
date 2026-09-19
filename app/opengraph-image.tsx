import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Nithin K, backend developer. I build the backend that has to keep working.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [bold, regular] = await Promise.all([
    readFile(join(process.cwd(), "assets/og/schibsted-800.woff")),
    readFile(join(process.cwd(), "assets/og/schibsted-400.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#0c0c0c",
          padding: "64px 72px",
          fontFamily: "Schibsted",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em" }}>Nithin K</div>
        <div
          style={{
            fontSize: 118,
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: "-0.055em",
            maxWidth: 1020,
          }}
        >
          I build the backend that has to keep working.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#66686b", fontWeight: 400 }}>
          <span>Backend-leaning full-stack developer, Bangalore</span>
          <span>nithin.me</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Schibsted", data: bold, weight: 800, style: "normal" },
        { name: "Schibsted", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
