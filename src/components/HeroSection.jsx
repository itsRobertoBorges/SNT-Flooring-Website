import React from "react";

// Background art drawn in SVG (no images, stays crisp)
function DecorativeBackground() {
  const brand = "#b30000";
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
        zIndex: 0, // behind content
      }}
    >
      <defs>
        {/* dark vignette */}
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0b0b0b" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        {/* faint diagonal seams (flooring vibe) */}
        <pattern
          id="seams"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(35)"
        >
          <rect width="24" height="24" fill="transparent" />
          <rect x="0" y="0" width="1" height="24" fill="rgba(255,255,255,0.06)" />
        </pattern>

        {/* subtle brand red glow */}
        <linearGradient id="redGlow" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={brand} stopOpacity="0.0" />
          <stop offset="50%" stopColor={brand} stopOpacity="0.25" />
          <stop offset="100%" stopColor={brand} stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {/* base */}
      <rect width="1200" height="800" fill="url(#vignette)" />

      {/* seam pattern */}
      <rect width="1200" height="800" fill="url(#seams)" opacity="0.35" />

      {/* soft angled panels */}
      <g opacity="0.18">
        <polygon points="0,620 0,800 1200,800 1200,720" fill="#ffffff" />
        <polygon points="0,120 0,0 1200,0 1200,80" fill="#ffffff" />
      </g>

      {/* brand accent lines */}
      <rect x="0" y="160" width="1200" height="2" fill="url(#redGlow)" opacity="0.45" />
      <rect x="0" y="640" width="1200" height="2" fill="url(#redGlow)" opacity="0.45" />

      {/* center readability plate */}
      <rect x="160" y="160" width="880" height="480" rx="24" fill="#000000" opacity="0.22" />
    </svg>
  );
}

export default function HeroSection() {
  const brand = "#b30000";

  return (
    <section
      className="fade-in-element" // keep your fade class if you added it in CSS
      style={{
        position: "relative",
        backgroundColor: "#000000",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        padding: "0 20px",
        borderTop: `4px solid ${brand}`,
        borderBottom: `4px solid ${brand}`,
        overflow: "hidden", // clip the SVG to the section
      }}
    >
      {/* Background */}
      <DecorativeBackground />

      {/* Foreground content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          Create A Space <br />
          <span style={{ color: brand }}>That Reflects You</span>
        </h1>

        <p
          style={{
            maxWidth: 700,
            margin: "0 auto 40px",
            fontSize: "1.2rem",
            color: "#d1d1d1",
            lineHeight: 1.6,
          }}
        >
          From premium hardwood to durable vinyl, SNT Flooring will install spaces that
          reflect your personality, built with precision and care.
        </p>

        <button
          style={{
            backgroundColor: brand,
            color: "#ffffff",
            padding: "14px 32px",
            fontSize: "1.1rem",
            fontWeight: 600,
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#8b0000")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = brand)}
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
}
