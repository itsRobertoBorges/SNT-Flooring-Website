import React from "react";

/**
 * Black + Red themed Services page
 * - Brand red via a single const for easy tweaks
 * - Subtle red "code art" background
 * - Foreground cards with red accents and hover glow
 */
export default function ServicesSection() {
  const brand = "#b30000"; // <-- your red

  const services = [
    {
      title: "Hardwood",
      blurb:
        "Precision install for solid & engineered hardwood: nail, glue, or floating systems. Acclimation and moisture checks included.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M3 7h18M3 12h18M3 17h18M5 4v16M19 4v16" className="stroke-current" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Carpet Tile",
      blurb:
        "Modular carpet tile for offices and retail. Clean cuts, tight seams, and future-proof replaceability.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" className="fill-current"/>
        </svg>
      ),
    },
    {
      title: "Luxury Vinyl Plank (LVP)",
      blurb:
        "Durable, water-resistant planks for homes and commercial spaces. Click or glue-down with exacting tolerances.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M3 8l8-5 10 6v10l-8 5-10-6V8z" className="stroke-current" strokeWidth="1.5" fill="none"/>
          <path d="M11 3v18M21 9L3 19" className="stroke-current" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Roll Carpet (Broadloom)",
      blurb:
        "Wall-to-wall comfort with professional stretching, seaming, and transitions for a wrinkle-free finish.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M4 7a3 3 0 1 1 6 0v10a3 3 0 1 1-6 0V7z" className="fill-current"/>
          <path d="M10 7h10v10H10" className="stroke-current" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      title: "VCT (Vinyl Composition Tile)",
      blurb:
        "Classic, economical tile with durable finishes. Layouts, cuts, and high-gloss polish for a clean, even look.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" className="stroke-current" fill="none" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      title: "Subfloor Prep & Self-Leveling",
      blurb:
        "Grinding, patching, and pour-downs for flat, sound substrates—critical for premium installs.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M4 16h16M6 12l6-8 6 8" className="stroke-current" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Stair Nosing & Transitions",
      blurb:
        "Safe, clean transitions and nosings that protect edges and tie flooring together seamlessly.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M4 18h8v-4h4v-4h4V6" className="stroke-current" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Demo & Disposal",
      blurb:
        "Old floor removal, responsible disposal, and site protection—so you start from a clean slate.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14" className="stroke-current" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Moisture Testing",
      blurb:
        "On-site RH/moisture checks to prevent failures and protect warranties before installation.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" className="stroke-current" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background gradient (black to deeper black) with red glow vignette */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black via-neutral-950 to-black" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background: `radial-gradient(60% 50% at 50% 0%, ${brand}20, transparent 60%)`,
        }}
      />

      {/* Animated “code art” layer in red */}
      <CodeArtBackground brand={brand} />

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="mx-auto max-w-3xl text-center">
          <h1
            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: brand }}
          >
            Flooring Services, Done Right.
          </h1>
          <p className="mt-4 text-base text-neutral-300 sm:text-lg">
            Hardwood • Carpet Tile • Luxury Vinyl Plank • Roll Carpet • VCT • and more.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#mailto:support@yourfloorco.ca?subject=Service%20Inquiry"
              className="rounded-xl px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:opacity-90"
              style={{ backgroundColor: `${brand}cc` }}
            >
              Get a Free Quote
            </a>
            <a
              href="mailto:support@yourfloorco.ca?subject=Service%20Inquiry"
              className="rounded-xl px-5 py-2 text-sm font-semibold text-black transition hover:brightness-110"
              style={{ backgroundColor: brand }}
            >
              Email Us
            </a>
          </div>
        </header>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border bg-white/5 p-5 text-white transition hover:-translate-y-0.5"
              style={{
                borderColor: `${brand}33`,
                boxShadow: `0 0 0 1px rgba(255,255,255,0.03)`,
              }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: `${brand}1a`, color: brand }}
              >
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{s.blurb}</p>

              {/* red sweep on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div
                  className="absolute -right-8 top-0 h-full w-1/2 rotate-12 blur-2xl"
                  style={{
                    background:
                      "linear-gradient(to bottom right, transparent, rgba(179,0,0,0.08), transparent)",
                  }}
                />
              </div>
            </article>
          ))}
        </div>

        {/* CTA Bar */}
        <div
          id="quote"
          className="mt-14 overflow-hidden rounded-2xl border p-6 text-white"
          style={{ borderColor: `${brand}33`, background: "rgba(255,255,255,0.04)" }}
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-lg font-semibold" style={{ color: brand }}>
                Need help choosing materials?
              </h4>
              <p className="mt-1 text-sm text-neutral-300">
                We’ll walk you through durability, budget, and maintenance—then provide a clear, itemized quote.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+1-000-000-0000"
                className="rounded-xl px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: `${brand}cc` }}
              >
                Call Now
              </a>
              <a
                href="mailto:support@yourfloorco.ca?subject=Quote%20Request"
                className="rounded-xl px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
                style={{ backgroundColor: brand }}
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Footer microcopy */}
        <p className="mt-6 text-center text-xs text-neutral-400">
           Workmanship warranty • Professional cleanup
        </p>
      </div>
    </section>
  );
}

//background
function CodeArtBackground({ brand = "#b30000" }) {
  const code = `
  // install specs
  const substrate = 'concrete';
  const moistureOK = checkMoisture(substrate);
  const pattern = layout(herringbone, room);
  for (const plank of boxes) {
    cut(plank, tightFit);
    roll(plank, 100);
  }
  seam(carpetTile, 'tight');
  level(subfloor, { feather: true });
  transition('LVP', 'Tile', reducer);
  `;

  return (
    <>
      <style>{`
        @keyframes floatRows {
          0% { transform: translateY(0); }
          100% { transform: translateY(-40%); }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 select-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      >
        <CodeLayer code={code} className="opacity-[0.08]" duration={48} blur brand={brand} />
        <CodeLayer code={code} className="opacity-[0.04]" duration={90} brand={brand} />
      </div>
    </>
  );
}

function CodeLayer({ code, className = "", duration = 60, blur = false, brand = "#b30000" }) {
  const blocks = Array.from({ length: 10 }).map((_, i) => (
    <pre
      key={i}
      className={`whitespace-pre-wrap font-mono text-[12px] leading-6 ${blur ? "blur-[1px]" : ""}`}
      style={{ color: `${brand}cc` }}
    >
      {code}
    </pre>
  ));
  return (
    <div
      className={`absolute inset-0 grid grid-cols-1 content-start gap-6 p-6 sm:p-10 ${className}`}
      style={{ animation: `floatRows ${duration}s linear infinite` }}
    >
      {blocks}
    </div>
  );
}
