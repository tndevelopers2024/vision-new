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
  isOpen,
  onMenuEnter,
  onMenuLeave,
  onItemHover,
  onCloseAll,
  onNavigate,
}) {
  const location = useLocation()
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = typeof isOpen === 'boolean'
  const open = isControlled ? isOpen : internalOpen
  const id = useId()
  const hasChildren = Boolean(item.children?.length)
  const isRouterLink = item.href?.startsWith('/')

  const setOpen = (val) => {
    if (!isControlled) {
      setInternalOpen(val)
    }
  }

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

  const handleLinkClick = (e, targetHref) => {
    const href = targetHref || item.href

    // On mobile: tapping an item with children toggles the accordion
    if (isMobile && hasChildren && (!targetHref || targetHref === item.href)) {
      if (e) {
        e.preventDefault()
        e.stopPropagation()
      }
      setOpen((v) => !v)
      return
    }

    if (onNavigate) onNavigate()
    if (onCloseAll) {
      onCloseAll()
    } else {
      setOpen(false)
    }

    if (!href) return

    // Handle hash links on the current page
    if (href.includes('#')) {
      const [targetPath, hashId] = href.split('#')
      const currentPath = location.pathname.replace(/\/$/, '') || '/'
      const cleanTargetPath = targetPath.replace(/\/$/, '') || '/'

      if (currentPath === cleanTargetPath && hashId) {
        const el = document.getElementById(hashId) || document.querySelector(`#${hashId}`)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else if (href === location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleMouseEnter = () => {
    if (isMobile) return
    if (hasChildren) {
      if (onMenuEnter) {
        onMenuEnter()
      } else {
        setOpen(true)
      }
    } else {
      if (onItemHover) {
        onItemHover()
      } else if (onCloseAll) {
        onCloseAll()
      }
    }
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    if (hasChildren) {
      if (onMenuLeave) {
        onMenuLeave()
      } else {
        setOpen(false)
      }
    }
  }

  return (
    <li
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={(e) => {
        if (!isMobile && hasChildren) {
          if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            if (!open) {
              e.preventDefault()
              if (onMenuEnter) onMenuEnter()
              else setOpen(true)
            }
          }
        }
      }}
      onBlur={(e) => {
        if (!isMobile && hasChildren && !e.currentTarget.contains(e.relatedTarget)) {
          if (onCloseAll) onCloseAll()
          else setOpen(false)
        }
      }}
    >
      {isRouterLink ? (
        <Link
          to={item.href}
          aria-current={current ? 'page' : undefined}
          aria-expanded={hasChildren ? open : undefined}
          aria-controls={hasChildren ? id : undefined}
          onClick={(e) => handleLinkClick(e, item.href)}
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
          onClick={(e) => handleLinkClick(e, item.href)}
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
              <Icon name="chevron-down" size="small" />
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
                      onClick={(e) => handleLinkClick(e, group.href)}
                    >
                      <span>{group.label}</span>
                    </Link>
                    <ul className="navMegaCol__list">
                      {group.children?.map((sub) => {
                        const isSubActive = location.pathname === sub.href
                        return (
                          <li key={sub.label} className="navMegaCol__item">
                            <Link
                              to={sub.href}
                              className={`navMegaCol__link ${isSubActive ? 'navMegaCol__link--active' : ''}`}
                              aria-current={isSubActive ? 'page' : undefined}
                              onClick={(e) => handleLinkClick(e, sub.href)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        )
                      })}
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
                  onClick={(e) => handleLinkClick(e, '/services')}
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
            <ul
              id={id}
              className="sub-menu"
            >
              {item.children.map((child) => (
                <MenuItem
                  key={child.label}
                  item={child}
                  depth={depth + 1}
                  isMobile={isMobile}
                  onNavigate={onNavigate}
                  onCloseAll={onCloseAll}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  )
}
