import React, { useEffect, useMemo, useRef, useState } from "react";
import snt1 from "../assets/img/snt1.png";
import snt2 from "../assets/img/snt2.png";
import snt3 from "../assets/img/snt3.png";
import snt4 from "../assets/img/snt4.png";
import snt5 from "../assets/img/snt5.jpg";
import snt6 from "../assets/img/snt6.jpg";
import snt7 from "../assets/img/snt7.jpg";
import snt8 from "../assets/img/snt8.png";
import snt9 from "../assets/img/snt9.jpg";
import snt10 from "../assets/img/snt10.jpg";
import snt11 from "../assets/img/snt11.jpeg";

export default function GallerySection() {
  const images = useMemo(
    () => [
      { src: snt1, alt: "gallery1" },
      { src: snt2, alt: "gallery2" },
      { src: snt3, alt: "gallery3" },
      { src: snt4, alt: "gallery4" },
      { src: snt5, alt: "gallery5" },
      { src: snt6, alt: "gallery6" },
      { src: snt7, alt: "gallery7" },
      { src: snt8, alt: "gallery8" },
      { src: snt9, alt: "gallery9" },
      { src: snt10, alt: "gallery10" },
      { src: snt11, alt: "gallery11" },
    ],
    []
  );

  const columns = 4;

  const [openIdx, setOpenIdx] = useState(null); // number | null
  const closeButtonRef = useRef(null);

  // Group images into N columns
  const grouped = useMemo(() => {
    const cols = Array.from({ length: columns }, () => []);
    images.forEach((img, i) => {
      cols[i % columns].push({ ...img, flatIndex: i });
    });
    return cols;
  }, [images]);

  // Keyboard controls / scroll lock while modal open
  useEffect(() => {
    if (openIdx === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setOpenIdx((i) => (i - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIdx, images.length]);

  return (
    <>
      {/* Full-width black background for the gallery section */}
      <div id ="gallery"className="w-full bg-black py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {grouped.map((col, colIdx) => (
            <div key={colIdx} className="grid gap-4">
              {col.map((img) => (
                <button
                  key={img.src}
                  type="button"
                  className="group block bg-black rounded-lg overflow-hidden"
                  onClick={() => setOpenIdx(img.flatIndex)}
                  aria-label={`Open ${img.alt}`}
                >
                  <img
                    className="block w-full h-auto object-cover object-center transition-transform duration-200 group-hover:scale-[1.02]"
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpenIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center">
              <img
                src={images[openIdx].src}
                alt={images[openIdx].alt}
                className="max-h-[80vh] w-auto rounded-lg object-contain"
                loading="eager"
              />
            </div>

            <button
              ref={closeButtonRef}
              onClick={() => setOpenIdx(null)}
              className="absolute right-2 top-5 rounded-full bg-black/90 px-4 py-2 text-sm font-medium text-white shadow hover:bg-black"
            >
              Close
            </button>

            <button
              onClick={() =>
                setOpenIdx((i) => (i - 1 + images.length) % images.length)
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/90 px-3 py-1 text-sm font-medium text-white shadow hover:bg-black"
              aria-label="Previous image"
            >
              ◀
            </button>

            <button
              onClick={() => setOpenIdx((i) => (i + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/90 px-3 py-1 text-sm font-medium text-white shadow hover:bg-black"
              aria-label="Next image"
            >
              ▶
            </button>

            <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded bg-black/60 px-2 py-1 text-xs text-white">
              {openIdx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
