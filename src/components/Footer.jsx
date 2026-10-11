import { Link } from 'react-router-dom'
import { nav, site, team } from '../data/site.js'
import { Container, Circuit, InstagramIcon, MailIcon, WhatsAppIcon } from './ui.jsx'
import { Logo } from './Header.jsx'
import { instagramUrl, mailtoUrl, whatsappUrl } from '../lib/contact.js'

const col = 'text-sm text-mist/75 transition-colors hover:text-gold'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-mist">
      <Circuit lines={8} seed={3} className="pointer-events-none absolute inset-0 h-full w-full text-sky/10" />
      <Container className="relative pb-10 pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm leading-relaxed text-mist/75">{site.description}</p>
            <p className="mt-5 font-hindi text-lg font-medium text-gold">{site.tagline}</p>
            <ul className="mt-6 flex gap-3" aria-label="Contact us on">
              {[
                { label: 'WhatsApp', href: whatsappUrl(), Icon: WhatsAppIcon, ext: true },
                { label: 'Instagram', href: instagramUrl(), Icon: InstagramIcon, ext: true },
                { label: 'Email', href: mailtoUrl(), Icon: MailIcon },
              ].map(({ label, href, Icon, ext }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="grid h-11 w-11 place-items-center rounded-full border border-mist/25 text-mist transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>

          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            <div>
              <h2 className="font-display text-lg font-semibold">Explore</h2>
              <ul className="mt-4 space-y-3">
                <li><Link className={col} to="/">Home</Link></li>
                {nav.map((n) => (<li key={n.to}><Link className={col} to={n.to}>{n.label}</Link></li>))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold">Our team</h2>
              <ul className="mt-4 space-y-3">
                {team.map((m) => (<li key={m.slug}><Link className={col} to={`/${m.slug}`}>{m.name}</Link></li>))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="font-display text-lg font-semibold">Get in touch</h2>
              <ul className="mt-4 space-y-3 text-sm text-mist/75">
                <li><a className={col} href={`mailto:${site.email}`}>{site.email}</a></li>
                {site.phone && <li><a className={col} href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>}
                {site.address && <li>{site.address}</li>}
                <li>{site.hours}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-mist/15 pt-8 text-xs leading-relaxed text-mist/60">
          {site.registration && <p className="mb-3">{site.registration}</p>}
          <p className="max-w-4xl">{site.disclaimer}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p className="flex gap-6">
              <Link className="hover:text-gold" to="/privacy-policy">Privacy policy</Link>
              <Link className="hover:text-gold" to="/terms-and-conditions">Terms and conditions</Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
