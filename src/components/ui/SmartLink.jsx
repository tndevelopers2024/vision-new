import { Link } from 'react-router-dom'

/**
 * SmartLink — one link element that picks the right behaviour for its href.
 *
 *   "/about", "/#services"   → react-router <Link>  (in-app, no page reload)
 *   "#request-callback"      → plain <a>            (same-page scroll)
 *   "mailto:", "tel:", "http…" → plain <a>          (leaves the site)
 *
 * External hrefs opened in a new tab always carry rel="noopener noreferrer".
 * An empty/missing href renders a <span>, so a link never sits on the page
 * pointing at nothing.
 */
export default function SmartLink({ href, children, target, rel, onClick, ...rest }) {
  if (!href) {
    return <span {...rest}>{children}</span>
  }

  if (href.startsWith('/')) {
    return (
      <Link
        to={href}
        target={target}
        rel={rel}
        onClick={(e) => {
          if (onClick) onClick(e)
          if (href.includes('#')) {
            const [path, hashId] = href.split('#')
            const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
            const targetPath = path.replace(/\/$/, '') || '/'
            if (currentPath === targetPath && hashId) {
              const el = document.getElementById(hashId) || document.querySelector(`#${hashId}`)
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }
          }
        }}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  const isExternal = /^(https?:)?\/\//.test(href)

  return (
    <a
      href={href}
      target={target}
      rel={rel || (target === '_blank' || isExternal ? 'noopener noreferrer' : undefined)}
      {...rest}
    >
      {children}
    </a>
  )
}
