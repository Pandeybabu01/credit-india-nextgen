import { useRef, useState } from 'react'
import { Container, InstagramIcon, MailIcon, PageHeader, WhatsAppIcon } from '../components/ui.jsx'
import { site } from '../data/site.js'
import { buildEnquiryText, gmailUrl, instagramUrl, mailtoUrl, whatsappUrl } from '../lib/contact.js'
import { usePageMeta } from '../lib/meta.js'

const topics = ['Home loan', 'Personal loan', 'Business loan', 'Loan against property', 'Car loan', 'Credit card', 'Not sure yet']
const employment = ['Salaried', 'Self-employed / business owner', 'Professional (doctor, CA, etc.)']
const field =
  'mt-2 w-full rounded-lg border border-navy/25 bg-white/70 px-4 py-3 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-steel focus:ring-2 focus:ring-gold/50'

export default function Contact() {
  usePageMeta('Contact', 'Send an enquiry to Credit India NextGen by email, WhatsApp or Instagram.')
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [draft, setDraft] = useState(null)

  const collect = () => Object.fromEntries(new FormData(formRef.current))

  // Enquiry now: opens the visitor's email app with everything filled in.
  function onEmail(e) {
    e.preventDefault()
    const d = collect()
    const msg = { subject: `Loan enquiry from ${d.name}`, body: buildEnquiryText(d) }
    setDraft(msg)
    setStatus('email')
    window.location.href = mailtoUrl(msg)
  }

  function onWhatsApp() {
    if (!formRef.current.reportValidity()) return
    window.open(whatsappUrl(buildEnquiryText(collect())), '_blank', 'noopener')
    setStatus('whatsapp')
  }

  const channels = [
    { label: 'Email', value: site.email, href: mailtoUrl(), Icon: MailIcon },
    { label: 'WhatsApp', value: site.whatsapp ? `+${site.whatsapp}` : 'Chat with us', href: whatsappUrl(), Icon: WhatsAppIcon, ext: true },
    { label: 'Instagram', value: site.instagram ? `@${site.instagram.replace(/^@/, '')}` : 'Follow and message us', href: instagramUrl(), Icon: InstagramIcon, ext: true },
  ]

  return (
    <>
      <PageHeader
        title="Tell us what you need to finance."
        intro="Send your enquiry by email or WhatsApp. There is no obligation and no fee to enquire."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <form ref={formRef} onSubmit={onEmail} className="min-w-0 space-y-6 lg:col-span-7" aria-describedby="form-status">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-medium">Full name</label>
                <input id="name" name="name" type="text" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="phone" className="font-medium">Mobile number</label>
                <input id="phone" name="phone" type="tel" required inputMode="numeric" autoComplete="tel-national" pattern="(\+91[\- ]?)?[6-9][0-9]{9}" title="Enter a 10-digit Indian mobile number" placeholder="98765 43210" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="font-medium">Email <span className="font-normal text-muted">(optional)</span></label>
                <input id="email" name="email" type="email" autoComplete="email" className={field} />
              </div>
              <div>
                <label htmlFor="city" className="font-medium">City</label>
                <input id="city" name="city" type="text" required autoComplete="address-level2" className={field} />
              </div>
              <div>
                <label htmlFor="topic" className="font-medium">I need a</label>
                <select id="topic" name="topic" className={field} defaultValue={topics[0]}>
                  {topics.map((t) => (<option key={t}>{t}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="amount" className="font-medium">Approximate amount (₹)</label>
                <input id="amount" name="amount" type="text" inputMode="numeric" placeholder="e.g. 10,00,000" className={field} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="employment" className="font-medium">Employment type</label>
                <select id="employment" name="employment" className={field} defaultValue={employment[0]}>
                  {employment.map((t) => (<option key={t}>{t}</option>))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="font-medium">Anything else we should know? <span className="font-normal text-muted">(optional)</span></label>
              <textarea id="message" name="message" rows={4} className={field} placeholder="For example: I already have a home loan and want to move it to a lower rate." />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-3.5 text-[15px] font-semibold text-mist transition-colors hover:bg-steel"
              >
                <MailIcon size={18} /> Enquiry now
              </button>
              <button
                type="button"
                onClick={onWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/30 px-8 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:border-navy hover:bg-navy/5"
              >
                <WhatsAppIcon size={18} /> Send on WhatsApp
              </button>
            </div>

            <p className="text-sm text-muted">
              “Enquiry now” opens your email app with these details ready to send. Your details go only to the channel you choose.
            </p>

            <div id="form-status" role="status" aria-live="polite" className="min-h-6 text-sm">
              {status === 'email' && draft && (
                <p className="font-medium text-steel">
                  Your email app should now be open with your enquiry ready to send. Nothing opened?{' '}
                  <a className="underline underline-offset-4" href={gmailUrl(draft)} target="_blank" rel="noopener noreferrer">Open it in Gmail</a>{' '}
                  or write to <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
              {status === 'whatsapp' && <p className="font-medium text-steel">WhatsApp should now be open with your enquiry ready to send.</p>}
            </div>
          </form>

          <aside className="min-w-0 lg:col-span-5">
            <div className="rounded-2xl bg-navy p-7 text-mist sm:p-9">
              <h2 className="font-display text-2xl font-semibold">Reach us directly</h2>
              <ul className="mt-6 space-y-3">
                {channels.map(({ label, value, href, Icon, ext }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="flex items-center gap-4 rounded-xl border border-mist/15 p-4 transition-colors hover:border-gold"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mist/10 text-gold"><Icon /></span>
                      <span className="min-w-0">
                        <span className="block text-sm text-mist/60">{label}</span>
                        <span className="block truncate font-medium">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <dl className="mt-6 space-y-5 text-mist/85">
                {site.phone && <div><dt className="text-sm text-mist/60">Phone</dt><dd><a className="hover:text-gold" href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></dd></div>}
                {site.address && <div><dt className="text-sm text-mist/60">Office</dt><dd>{site.address}</dd></div>}
                <div><dt className="text-sm text-mist/60">Hours</dt><dd>{site.hours}</dd></div>
              </dl>
            </div>
          </aside>
        </Container>
      </section>
    </>
  )
}
