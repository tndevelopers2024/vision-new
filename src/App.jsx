import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Footer from './components/layout/Footer/Footer.jsx'
import Header from './components/layout/Header/Header.jsx'
import WhatsApp from './components/layout/WhatsApp/WhatsApp.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Jurisdiction from './pages/Jurisdiction.jsx'
import Legal from './pages/Legal.jsx'
import { jurisdictions } from './data/jurisdictions.js'
import heroMainland from './assets/images/banner-night.jpg'
import heroFreeZone from './assets/images/banner-atlantis.webp'
import heroOffshore from './assets/images/banner-palm-jumeirah.jpg'

/**
 * RouteScrollHandler — Smoothly handles scrolling on route changes
 * and hash navigation (e.g. `/#services` or `/#business-setup`).
 */
function RouteScrollHandler() {
  const { pathname, hash } = useLocation()
  const prevPathRef = useRef(pathname)

  useEffect(() => {
    const isNewPage = prevPathRef.current !== pathname
    prevPathRef.current = pathname

    if (hash) {
      const scrollToHash = () => {
        const id = hash.replace(/^#/, '')
        const el = document.getElementById(id) || document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          return true
        }
        return false
      }

      if (!scrollToHash()) {
        const t1 = setTimeout(scrollToHash, 60)
        const t2 = setTimeout(scrollToHash, 180)
        const t3 = setTimeout(scrollToHash, 350)
        return () => {
          clearTimeout(t1)
          clearTimeout(t2)
          clearTimeout(t3)
        }
      }
    } else if (isNewPage) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteScrollHandler />
      {/* Header overlays the hero banner and scrolls with the page. */}
      <Header />
      <div className="btPageWrap">
        <div className="btContentWrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Legal type="privacy" />} />
            <Route path="/terms-conditions" element={<Legal type="terms" />} />
            <Route path="/disclaimer" element={<Legal type="disclaimer" />} />
            {/* Business Setup — one page per jurisdiction, content verbatim
                from "Website Content_Vision.docx". */}
            <Route
              path="/business-setup/uae-mainland"
              element={<Jurisdiction data={jurisdictions.mainland} heroImage={heroMainland} />}
            />
            <Route
              path="/business-setup/uae-free-zone"
              element={<Jurisdiction data={jurisdictions.freeZone} heroImage={heroFreeZone} />}
            />
            <Route
              path="/business-setup/uae-offshore"
              element={<Jurisdiction data={jurisdictions.offshore} heroImage={heroOffshore} />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <WhatsApp />
    </BrowserRouter>
  )
}
