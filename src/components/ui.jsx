import { Link } from 'react-router-dom'
import { mailtoUrl } from '../lib/contact.js'
import { useId, useState } from 'react'

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
)

const variants = {
  primary: 'bg-navy text-mist hover:bg-steel',
  gold: 'bg-gold text-navy hover:bg-[#c9a45f]',
  outline: 'border border-navy/30 text-navy hover:border-navy hover:bg-navy/5',
  outlineLight: 'border border-mist/40 text-mist hover:border-mist hover:bg-mist/10',
}

export function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-semibold transition-colors ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}

export function PageHeader({ title, intro, children }) {
  return (
    <section className="border-b border-navy/10">
      <Container className="py-16 sm:py-24">
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        {children}
      </Container>
    </section>
  )
}

/** Decorative circuit traces, echoing the India-map circuit pattern in the logo. */
function rng(seed) {
  let a = seed
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function Circuit({ lines = 10, seed = 7, className = '' }) {
  const traces = []
  const rand = rng(seed)
  for (let i = 0; i < lines * 2; i++) {
    const y = Math.round((20 + rand() * 360) / 20) * 20
    let x = Math.round((rand() * 900) / 20) * 20
    const dir = rand() > 0.5 ? 1 : -1
    let d = `M${x} ${y}`
    let cy = y
    const segs = 2 + Math.floor(rand() * 2)
    for (let k = 0; k < segs; k++) {
      const run = 40 + Math.round(rand() * 6) * 20
      x += run
      d += `H${x}`
      const bend = 20 + Math.round(rand() * 2) * 20
      x += bend
      cy += dir * bend
      d += `L${x} ${cy}`
    }
    const tail = 40 + Math.round(rand() * 5) * 20
    x += tail
    d += `H${x}`
    traces.push({ d, x, y: cy })
  }
  return (
    <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
        {traces.map((t, i) => (
          <g key={i}>
            <path d={t.d} vectorEffect="non-scaling-stroke" />
            <circle cx={t.x + 5} cy={t.y} r="4" vectorEffect="non-scaling-stroke" />
          </g>
        ))}
      </g>
    </svg>
  )
}

/** The NG monogram from the Credit India NextGen logo. */
export function Mark({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <rect width="40" height="40" rx="10" fill="#0B1B2E" />
      <g fill="none" stroke="#D4A545" strokeWidth="3.2" strokeLinejoin="miter" strokeLinecap="butt">
        <path d="M8 28V12l9 16V12" />
        <path d="M32.5 15.2A7.5 7.5 0 1 0 33 22v-2.2h-5.5" />
      </g>
      <g fill="none" stroke="#7FA6D6" strokeWidth="1.2" strokeLinecap="round">
        <path d="M3 34h8l3 3h6" />
        <path d="M37 6h-7l-3-3h-5" />
      </g>
      <circle cx="21.5" cy="37" r="1.4" fill="#7FA6D6" />
      <circle cx="17.5" cy="3" r="1.4" fill="#7FA6D6" />
    </svg>
  )
}

export function Monogram({ name, className = '' }) {
  const initials = name.split(' ').map((p) => p[0]).join('')
  return (
    <div className={`relative grid place-items-center overflow-hidden bg-steel text-mist ${className}`} role="img" aria-label={`Portrait placeholder for ${name}`}>
      <Circuit lines={7} seed={11} className="absolute inset-0 h-full w-full text-sky/35" />
      <span className="relative font-display text-5xl font-semibold tracking-wide">{initials}</span>
    </div>
  )
}


export function WhatsAppIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.1c-.2.7-1.4 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1a14 14 0 0 1-5.2-3.1c-1.7-1.6-2.7-3.4-2.9-3.8-.2-.4-.6-1.4-.6-2.6s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.3.5-.4.4c-.2.2-.3.4-.1.7.2.4.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.4.2.6.1.8-.1l.9-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.4.1.2.1.9-.1 1.7Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MailIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 6 8-6" />
    </svg>
  )
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  const base = useId()
  return (
    <div className="divide-y divide-navy/15 border-y border-navy/15">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${base}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-xl sm:text-2xl"
              >
                {it.q}
                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-navy/25 text-lg leading-none transition-transform ${isOpen ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div id={`${base}-${i}`} role="region" hidden={!isOpen} className="max-w-prose pb-6 pr-12 leading-relaxed text-muted">
              {it.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function CtaBand({ title = 'Find out which loan you are likely to get.', text = 'Share a few details and we will check your eligibility and shortlist suitable lenders. No obligation.' }) {
  return (
    <section className="relative overflow-hidden bg-steel text-mist">
      <Circuit lines={9} seed={5} className="absolute inset-0 h-full w-full text-sky/25" />
      <Container className="relative flex flex-col items-start justify-between gap-8 py-16 sm:py-20 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-mist/80">{text}</p>
        </div>
        <Button href={mailtoUrl()} variant="gold" className="shrink-0">Enquiry now</Button>
      </Container>
    </section>
  )
}
