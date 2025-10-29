import React, { useEffect, useRef, useState } from "react";
import sntLogo from "../assets/img/sntflooringlogo.png";

export default function Navbar() {
  const LINKS = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" }, // special: opens email
  ];

  const brandRed = "#e50914";
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(96);

  // Measure navbar height for scroll offset (updates on resize)
  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavHeight(navRef.current.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleScrollNav = (e, targetId) => {
    e.preventDefault();
    if (targetId === "contact") {
      window.location.href = "mailto:support@yourfloorco.ca?subject=Quote%20Request";
      setOpen(false);
      return;
    }
    const el = document.getElementById(targetId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${targetId}`);
    setOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", `#home`);
    setOpen(false);
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        inset: "0 auto auto 0",
        right: 0,
        background: "#000000cc",
        backdropFilter: "saturate(140%) blur(6px)",
        color: "#fff",
        padding: "0.75rem 1rem",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          aria-label="Go to top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img src={sntLogo} alt="SNT Flooring" style={{ height: 56, width: "auto", display: "block" }} />
        </button>

        {/* Desktop nav */}
        <ul
          className="navbar-links-desktop"
          style={{
            listStyle: "none",
            display: "none",
            gap: "2rem",
            margin: 0,
            padding: 0,
          }}
        >
          {LINKS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleScrollNav(e, id)}
                style={{
                  color: label === "Contact" ? brandRed : "#ffffff",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = brandRed)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = label === "Contact" ? brandRed : "#ffffff")
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "transparent",
            color: "#fff",
            cursor: "pointer",
          }}
          className="navbar-hamburger"
        >
          {/* Simple hamburger / close icon */}
          <span
            style={{
              position: "relative",
              display: "block",
              width: 20,
              height: 2,
              background: "#fff",
              transition: "transform 200ms ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              width: 20,
              height: 2,
              background: "#fff",
              transform: open ? "translateY(0) rotate(45deg)" : "translateY(-6px)",
              transition: "transform 200ms ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              width: 20,
              height: 2,
              background: "#fff",
              transform: open ? "translateY(0) rotate(-45deg)" : "translateY(6px)",
              transition: "transform 200ms ease",
            }}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          role="menu"
          style={{
            background: "#000",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "0.75rem 1rem 1rem",
              display: "grid",
              gap: "0.5rem",
            }}
          >
            {LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleScrollNav(e, id)}
                  style={{
                    display: "block",
                    padding: "0.75rem 0.5rem",
                    borderRadius: 8,
                    color: label === "Contact" ? brandRed : "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                    letterSpacing: 0.2,
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsive CSS (keep inline for single-file; move to CSS file if preferred) */}
      <style>{`
        @media (min-width: 900px) {
          .navbar-links-desktop { display: flex !important; }
          .navbar-hamburger { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
