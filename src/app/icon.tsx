import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#005840",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#D1F843",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            fontFamily: "serif",
          }}
        >
          KM
        </span>
      </div>
    ),
    { ...size }
  );
}
