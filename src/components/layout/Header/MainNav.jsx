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
            <ul className="menu">
              {mainMenu.map((item) => {
                const isCurrent =
                  item.href === location.pathname ||
                  (item.href === '/' && location.pathname === '/') ||
                  (item.href !== '/' && !item.href.startsWith('/#') && location.pathname.startsWith(item.href)) ||
                  Boolean(item.children?.some((c) => c.href === location.pathname))

                return (
                  <MenuItem
                    key={item.label}
                    item={item}
                    current={isCurrent}
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
