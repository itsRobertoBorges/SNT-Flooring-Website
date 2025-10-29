# 🧱 SNT Flooring — Black & Red Themed Landing Page

A modern, responsive single-page React website built for **SNT Flooring**.  
This site showcases flooring services with a clean, bold **black & red theme**, featuring smooth scroll navigation, interactive image galleries, and a modal-based gallery viewer.

---

## 🚀 Features

- ⚡ **Single Page Layout** — Fast and seamless navigation (no page reloads)
- 🎯 **Smooth Scroll Navigation** — Click a navbar link to scroll to any section
- 🖼️ **Responsive Gallery** — Grid layout with modal lightbox viewer
- 🧭 **Fixed Navbar** — Transparent black bar with brand red accents and mobile menu
- 💬 **Contact CTA** — Opens user’s email app with prefilled subject line
- 🎨 **Custom Code-Art Backgrounds** — Animated backdrop for a modern developer aesthetic
- 📱 **Fully Responsive** — Looks sharp on mobile, tablet, and desktop
- 🧰 **Built with React + Tailwind CSS** (no backend required)

---

## 🧩 Tech Stack

| Tech | Purpose |
|------|----------|
| **React (Vite)** | Frontend framework |
| **Tailwind CSS** | Styling and layout |
| **Vanilla JS Scroll API** | Smooth scroll behavior |
| **Custom SVGs** | Lightweight, scalable icons |
| **Email Links** | Mailto-based contact system |

---

## 🗂️ Project Structure

src/
├── assets/
│ └── img/ # logos, gallery images
├── components/
│ ├── Navbar.jsx # responsive navbar w/ smooth scroll
│ ├── HeroSection.jsx # top banner / intro section
│ ├── ServicesSection.jsx # service cards w/ code-art background
│ ├── GallerySection.jsx # responsive gallery grid + modal lightbox
│ └── ContactSection.jsx # contact CTA / footer
├── App.jsx # main single-page layout
└── index.css # Tailwind + global styles
