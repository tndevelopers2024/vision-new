import { useCallback, useEffect, useState } from 'react'
import useMediaQuery from '../../../hooks/useMediaQuery.js'
import MainNav from './MainNav.jsx'
import MobileMenu from './MobileMenu.jsx'
import './Header.css'

/**
 * Header — `.mainHeader`.
 * Sleek single-row navigation floating over the hero banner with sticky state on scroll.
 * Consistent luxury navy gradient and light branding across all pages.
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

  return (
    <>
      <header
        id="top"
        className={`mainHeader ${isSticky ? 'mainHeader--sticky' : ''} ${mobile ? 'btHideMenu' : ''}`.trim()}
      >
        <div className="mainHeaderInner">
          <MainNav mobile={mobile} isSticky={isSticky} onOpenMobile={() => setMenuOpen(true)} />
        </div>
      </header>

      {mobile && <MobileMenu open={panelOpen} onClose={closeMenu} />}
    </>
  )
}
