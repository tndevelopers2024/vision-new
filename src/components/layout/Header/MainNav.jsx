import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../../ui/Icon.jsx'
import { mainMenu } from '../../../data/site.js'
import { contact } from '../../../config/contact.js'
import MenuItem from './MenuItem.jsx'

const logoLight = `${import.meta.env.BASE_URL}logo-lockup-light.png`
const logoDark = `${import.meta.env.BASE_URL}logo-lockup.png`

/**
 * MainNav — Luxury floating header inspired by Pride & Property Dubai:
 * - Brand logo on the left with tagline
 * - Centered navigation links (active state, hover)
 * - Prominent phone CTA and Enquiry action button on the right
 * - Mobile hamburger trigger on smaller viewports
 */
export default function MainNav({ onOpenMobile, mobile, isLight = false, _isSticky = false }) {
  const location = useLocation()
  const logo = isLight ? logoDark : logoLight
  const [activeMenu, setActiveMenu] = useState(null)
  const openTimerRef = useRef(null)
  const closeTimerRef = useRef(null)
  const activeMenuRef = useRef(null)

  const updateActiveMenu = useCallback((val) => {
    activeMenuRef.current = val
    setActiveMenu(val)
  }, [])

  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)

  const handleImmediateClose = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    updateActiveMenu(null)
  }, [updateActiveMenu])

  const handleMenuEnter = useCallback((label) => {
    if (isScrollingRef.current) return

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    // If another menu is already open, switch immediately
    if (activeMenuRef.current) {
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current)
        openTimerRef.current = null
      }
      updateActiveMenu(label)
      return
    }

    // If opening from closed state, apply a 110ms intent delay
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current)
    }
    openTimerRef.current = setTimeout(() => {
      updateActiveMenu(label)
      openTimerRef.current = null
    }, 110)
  }, [updateActiveMenu])

  const handleMenuLeave = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    closeTimerRef.current = setTimeout(() => {
      updateActiveMenu(null)
      closeTimerRef.current = null
    }, 150)
  }, [updateActiveMenu])

  useEffect(() => {
    const onPopState = () => handleImmediateClose()
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [handleImmediateClose])

  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  // Close menus immediately on scroll, outside click, escape key, or window blur
  useEffect(() => {
    const handleScroll = () => {
      isScrollingRef.current = true
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
        scrollTimeoutRef.current = null
      }, 150)

      handleImmediateClose()
    }

    const onPointerDown = (e) => {
      if (!e.target.closest('.mainNavPort')) {
        handleImmediateClose()
      }
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleImmediateClose()
      }
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        handleImmediateClose()
      }
    }

    const onWindowBlur = () => {
      handleImmediateClose()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('blur', onWindowBlur)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('blur', onWindowBlur)
    }
  }, [handleImmediateClose])

  return (
    <div className="mainNavHolder">
      <div className="mainNavPort">
        {/* Left: Brand Logo */}
        <div className="navBrand" onMouseEnter={handleImmediateClose}>
          <Link to="/" aria-label="Vision Business Setup — home" className="navBrandLink">
            <img className="navLogo" src={logo} alt="Vision Business Setup" />
          </Link>
        </div>

        {/* Center: Navigation Links (desktop) */}
        {!mobile && (
          <nav className="navCenter" aria-label="Primary">
            <ul className="menu" onMouseLeave={handleMenuLeave}>
              {mainMenu.map((item) => {
                const isCurrent =
                  item.href === location.pathname ||
                  (item.href === '/' && location.pathname === '/') ||
                  (item.href !== '/' && !item.href.startsWith('/#') && location.pathname.startsWith(item.href)) ||
                  Boolean(item.children?.some((c) => c.href === location.pathname))

                const hasChildren = Boolean(item.children?.length)
                const isOpen = activeMenu === item.label

                return (
                  <MenuItem
                    key={item.label}
                    item={item}
                    current={isCurrent}
                    isOpen={isOpen}
                    onMenuEnter={hasChildren ? () => handleMenuEnter(item.label) : undefined}
                    onMenuLeave={hasChildren ? handleMenuLeave : undefined}
                    onItemHover={!hasChildren ? handleImmediateClose : undefined}
                    onCloseAll={handleImmediateClose}
                    isMobile={false}
                  />
                )
              })}
            </ul>
          </nav>
        )}

        {/* Right: Phone Number CTAs + Mobile hamburger trigger */}
        <div className="navRight" onMouseEnter={handleImmediateClose}>
          {(contact.phones || [{ display: contact.phoneDisplay, href: contact.phoneHref, shortDisplay: 'Call' }]).map(
            (phone, idx) => (
              <a
                key={phone.href || idx}
                href={phone.href}
                className={`navPhoneBtn ${idx > 0 ? 'navPhoneBtn--secondary' : ''}`}
                title={`Call us: ${phone.display}`}
                aria-label={`Call us: ${phone.display}`}
              >
                <Icon name="phone" size="small" />
                <span className="navPhoneBtn__full">{phone.display}</span>
                <span className="navPhoneBtn__short">{phone.shortDisplay || phone.display}</span>
              </a>
            ),
          )}

          {mobile && (
            <button
              type="button"
              className="btHorizontalMenuTrigger"
              aria-label="Open menu"
              onClick={onOpenMobile}
            >
              <Icon name="bars" size="large" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
