import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Nithin K, backend developer. I build the backend that has to keep working.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [bold, regular] = await Promise.all([
    readFile(join(process.cwd(), "assets/og/archivo-700.woff")),
    readFile(join(process.cwd(), "assets/og/archivo-400.woff")),
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
          background: "#15181d",
          color: "#e9ebef",
          padding: "72px 80px",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700 }}>Nithin K</div>
        <div
          style={{
            fontSize: 112,
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            maxWidth: 980,
          }}
        >
          I build the backend that has to keep working.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#b0b7c2", fontWeight: 400 }}>
          <span>Backend-leaning full-stack developer, Bangalore</span>
          <span>nithin.me</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: bold, weight: 700, style: "normal" },
        { name: "Archivo", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
