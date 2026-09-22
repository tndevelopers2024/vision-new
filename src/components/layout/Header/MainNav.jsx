import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../../ui/Icon.jsx'
import { mainMenu } from '../../../data/site.js'
import MenuItem from './MenuItem.jsx'

const logoLight = `${import.meta.env.BASE_URL}logo-lockup-light.png`
const logoDark = `${import.meta.env.BASE_URL}logo-lockup.png`

/**
 * MainNav — Luxury floating header inspired by Pride & Property Dubai:
 * - Brand logo on the left
 * - Centered navigation links (active state, hover)
 * - Sharp Contact Us action button on the right
 * - Mobile hamburger trigger on smaller viewports
 */
export default function MainNav({ onOpenMobile, mobile, isLight = false }) {
  const location = useLocation()
  const logo = isLight ? logoDark : logoLight
  const [activeMenu, setActiveMenu] = useState(null)
  const closeTimerRef = useRef(null)

  const handleMenuEnter = useCallback((label) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveMenu(label)
  }, [])

  const handleMenuLeave = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 160)
  }, [])

  const handleImmediateClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveMenu(null)
  }, [])

  const currentPathKey = location.pathname + location.hash
  const [prevPathKey, setPrevPathKey] = useState(currentPathKey)
  if (prevPathKey !== currentPathKey) {
    setPrevPathKey(currentPathKey)
    setActiveMenu(null)
  }

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  return (
    <div className="mainNavHolder">
      <div className="mainNavPort">
        {/* Left: Brand Logo */}
        <div className="navBrand">
          <Link to="/" aria-label="Vision Business Setup — home">
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

                const isOpen = activeMenu === item.label

                return (
                  <MenuItem
                    key={item.label}
                    item={item}
                    current={isCurrent}
                    isOpen={isOpen}
                    onMenuEnter={() => handleMenuEnter(item.label)}
                    onMenuLeave={handleMenuLeave}
                    onCloseAll={handleImmediateClose}
                    isMobile={false}
                  />
                )
              })}
            </ul>
          </nav>
        )}

        {/* Right: Enquiry Action Button + Mobile hamburger trigger */}
        <div className="navRight">
          <Link
            to="/contact"
            className="navCtaBtn"
            title="Make an Enquiry"
          >
            Enquiry
          </Link>

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
