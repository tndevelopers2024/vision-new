import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Icon from '../../ui/Icon.jsx'
import { headerPhone, headerPhones, mainMenu, topBar } from '../../../data/site.js'
import { whatsappLink } from '../../../config/contact.js'
import MenuItem from './MenuItem.jsx'

const logo = `${import.meta.env.BASE_URL}logo-lockup.png`

/**
 * MobileMenu — off-canvas panel behind the hamburger.
 *
 * The original swaps the horizontal menu for a slide-in panel once the nav
 * no longer fits (its JS measures widths and sets `btHideMenu`); we switch
 * at 1200px, which is where the 6 items + 140px logo + tools stop fitting.
 */
export default function MobileMenu({ open, onClose }) {
  const location = useLocation()
  const { pathname, hash } = location

  /* Close the panel once a menu link has navigated — otherwise the drawer
     stays over the new page and the link looks like it did nothing. */
  useEffect(() => {
    if (open) onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <>
      <div
        className={`btMobileScrim ${open ? 'on' : ''}`.trim()}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`btMobilePanel ${open ? 'on' : ''}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="btMobileHead">
          <img className="btMobileLogo" src={logo} alt="Vision Business Setup" width="185" height="122" />
          <button type="button" className="btMobileClose" aria-label="Close menu" onClick={onClose}>
            <Icon name="close" size="large" />
          </button>
        </div>

        {/* Tapping any link closes the panel — including one pointing at the
            page you are already on, where the route never changes. Submenu
            toggles are <button>s, so they keep the panel open. */}
        <nav
          aria-label="Primary (mobile)"
          onClick={(event) => {
            if (event.target.closest('a')) onClose()
          }}
        >
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
                  isMobile={true}
                  onNavigate={onClose}
                />
              )
            })}
          </ul>
        </nav>

        <div className="btMobileFoot">
          {headerPhones && headerPhones.length > 0 ? (
            headerPhones.map((hp, idx) => (
              <a key={idx} href={hp.href} className="bt_button_widget bt_button_widget_accent">
                <span className="bt_bb_button_text">{hp.label}</span>
                <Icon name="phone" size="small" />
              </a>
            ))
          ) : headerPhone ? (
            <a href={headerPhone.href} className="bt_button_widget bt_button_widget_accent">
              <span className="bt_bb_button_text">{headerPhone.label}</span>
              <Icon name="phone" size="small" />
            </a>
          ) : (
            <a
              href={whatsappLink}
              className="bt_button_widget bt_button_widget_accent"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bt_bb_button_text">Chat on WhatsApp</span>
              <Icon name="whatsapp" size="small" />
            </a>
          )}

          <div className="btMobileSocial">
            {topBar.social.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <Icon name={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
