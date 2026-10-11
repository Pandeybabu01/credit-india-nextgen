import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site.js'
import { Button, Container, Mark } from './ui.jsx'
import { mailtoUrl } from '../lib/contact.js'

export function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
      <Mark className="h-10 w-10 shrink-0" />
      <span className="leading-none">
        <span className={`block font-display text-xl font-bold tracking-tight ${light ? 'text-mist' : 'text-navy'}`}>
          {site.short}
        </span>
        <span className={`block pt-0.5 font-display text-base font-semibold ${light ? 'text-gold' : 'text-gold-deep'}`}>
          {site.accent}
        </span>
      </span>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const link = ({ isActive }) =>
    `border-b-2 py-1 text-[15px] font-medium transition-colors ${
      isActive ? 'border-gold text-navy' : 'border-transparent text-muted hover:text-navy'
    }`

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 border-b border-navy/10 bg-mist/90 backdrop-blur">
      <Container className="flex h-[68px] items-center justify-between sm:h-[76px]">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={link}>{n.label}</NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {site.phone && (
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-[15px] font-semibold text-navy hover:text-steel">
              {site.phone}
            </a>
          )}
          <Button href={mailtoUrl()} className="!py-2.5">Enquiry now</Button>
        </div>

        <button
          type="button"
          className="-mr-2 grid h-11 w-11 place-items-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-navy/10 bg-mist md:hidden">
          <Container className="flex flex-col py-3">
            {[{ to: '/', label: 'Home' }, ...nav].map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `border-b border-navy/10 py-4 font-display text-2xl font-semibold ${isActive ? 'text-steel' : 'text-navy'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Button href={mailtoUrl()} className="mt-5 w-full">Enquiry now</Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
