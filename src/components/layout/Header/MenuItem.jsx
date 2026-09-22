import { useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../../ui/Icon.jsx'

/**
 * MenuItem — one `<li>` of the navigation menu.
 *
 * Desktop:
 * - Single-column traditional dropdown for flat items (e.g. Business Setup).
 * - Multi-column traditional Mega Menu for categorized items (e.g. Our Services).
 * - Downward chevron indicator for items with children.
 *
 * Mobile:
 * - Vertical accordion with toggle buttons.
 */
export default function MenuItem({
  item,
  depth = 0,
  current = false,
  isMobile = false,
  onNavigate,
}) {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const id = useId()
  const hasChildren = Boolean(item.children?.length)
  const isRouterLink = item.href?.startsWith('/')

  // A mega menu is used on desktop when top-level item's children have their own sub-children (e.g. Our Services)
  const isMegaMenu = !isMobile && depth === 0 && item.children?.some((child) => Boolean(child.children?.length))

  const classes = [
    'menu-item',
    hasChildren ? 'menu-item-has-children' : '',
    isMegaMenu ? 'menu-item-has-mega' : '',
    current ? 'current-menu-item' : '',
    open ? 'on' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const handleLinkClick = () => {
    if (onNavigate) onNavigate()
    setOpen(false)
    if (item.href === location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <li
      className={classes}
      onMouseEnter={() => !isMobile && hasChildren && setOpen(true)}
      onMouseLeave={() => !isMobile && hasChildren && setOpen(false)}
      onFocus={() => !isMobile && hasChildren && setOpen(true)}
      onBlur={(e) => {
        if (!isMobile && hasChildren && !e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false)
        }
      }}
    >
      {isRouterLink ? (
        <Link
          to={item.href}
          aria-current={current ? 'page' : undefined}
          aria-expanded={hasChildren ? open : undefined}
          aria-controls={hasChildren ? id : undefined}
          onClick={handleLinkClick}
        >
          <span>{item.label}</span>
          {!isMobile && hasChildren && depth === 0 && (
            <svg
              className="navChevron"
              viewBox="0 0 10 6"
              width="9"
              height="5"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Link>
      ) : (
        <a
          href={item.href}
          aria-current={current ? 'page' : undefined}
          aria-expanded={hasChildren ? open : undefined}
          aria-controls={hasChildren ? id : undefined}
          onClick={handleLinkClick}
        >
          <span>{item.label}</span>
          {!isMobile && hasChildren && depth === 0 && (
            <svg
              className="navChevron"
              viewBox="0 0 10 6"
              width="9"
              height="5"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </a>
      )}

      {hasChildren && (
        <>
          {/* Mobile Accordion Toggle Button */}
          {isMobile && (
            <button
              type="button"
              className="subToggler"
              aria-label={`Toggle ${item.label} submenu`}
              aria-expanded={open}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setOpen((v) => !v)
              }}
            >
              <Icon name={depth === 0 ? 'chevron-down' : 'chevron-right'} size="small" />
            </button>
          )}

          {/* Desktop Mega Menu for Multi-Category Services */}
          {isMegaMenu ? (
            <div
              id={id}
              className="navMegaPanel"
              role="region"
              aria-label={`${item.label} categories`}
            >
              <div className="navMegaPanel__grid">
                {item.children.map((group) => (
                  <div key={group.label} className="navMegaCol">
                    <Link
                      to={group.href}
                      className="navMegaCol__head"
                      onClick={() => setOpen(false)}
                    >
                      <span>{group.label}</span>
                    </Link>
                    <ul className="navMegaCol__list">
                      {group.children?.map((sub) => (
                        <li key={sub.label} className="navMegaCol__item">
                          <Link
                            to={sub.href}
                            className="navMegaCol__link"
                            onClick={() => setOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="navMegaPanel__bottom">
                <span className="navMegaPanel__bottomText">
                  Need tailored setup guidance or ongoing PRO assistance?
                </span>
                <Link
                  to="/services"
                  className="navMegaPanel__bottomBtn"
                  onClick={() => setOpen(false)}
                >
                  <span>Explore All Services</span>
                  <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ) : (
            /* Traditional Single-Column Dropdown (or Mobile Hierarchical List) */
            <ul id={id} className="sub-menu">
              {item.children.map((child) => (
                <MenuItem
                  key={child.label}
                  item={child}
                  depth={depth + 1}
                  isMobile={isMobile}
                  onNavigate={onNavigate}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  )
}
