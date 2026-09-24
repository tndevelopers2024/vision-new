import { useCallback, useEffect, useState } from 'react'
import useMediaQuery from '../../../hooks/useMediaQuery.js'
import MainNav from './MainNav.jsx'
import MobileMenu from './MobileMenu.jsx'
import './Header.css'

/**
 * Header — `.mainHeader`.
 * Sleek single-row navigation floating over the hero banner with sticky state on scroll.
 *
 * Every page now opens on the shared dark hero band, so the header uses one
 * treatment throughout. The light variant (`.mainHeader--light`, white ground
 * + dark logo) is kept for any future page that opens on white — set
 * `isLight` to enable it.
 */
export default function Header() {
  const mobile = useMediaQuery('(max-width: 1200px)')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const panelOpen = menuOpen && mobile
  const isLight = false

  return (
    <>
      <header
        id="top"
        className={`mainHeader ${isSticky ? 'mainHeader--sticky' : ''} ${mobile ? 'btHideMenu' : ''} ${isLight ? 'mainHeader--light' : ''}`.trim()}
      >
        <div className="mainHeaderInner">
          <MainNav isLight={isLight} mobile={mobile} isSticky={isSticky} onOpenMobile={() => setMenuOpen(true)} />
        </div>
      </header>

      {mobile && <MobileMenu open={panelOpen} onClose={closeMenu} />}
    </>
  )
}
