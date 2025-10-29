import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import GallerySection from './components/GallerySection.jsx'
import ServicesSection from './components/ServicesSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    <main>

      <section id="home" style={{ scrollMarginTop: "96px"}}>
            <HeroSection />
      </section>

      <section id="gallery" style={{ scrollMarginTop: "96px"}}>
            <GallerySection />
      </section>

      <section id="services" style={{ scrollMarginTop: "96px"}}>
            <ServicesSection />
      </section>

    </main>


  </StrictMode>,
)
