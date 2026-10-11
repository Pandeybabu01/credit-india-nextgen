import { Link } from 'react-router-dom'
import EmiCalculator from '../components/EmiCalculator.jsx'
import { Button, Circuit, Container, CtaBand, Monogram } from '../components/ui.jsx'
import { lenders, principles, safetyTips, services, site, steps, team } from '../data/site.js'
import { usePageMeta } from '../lib/meta.js'
import { mailtoUrl } from '../lib/contact.js'
import sign from '../assets/brand-sign.webp'

const textLink = 'font-semibold text-gold-deep underline decoration-gold/50 underline-offset-4 hover:decoration-gold'

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-navy/10">
      <Circuit lines={8} seed={21} className="pointer-events-none absolute inset-0 h-full w-full text-steel/10" />
      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
        <div className="lg:col-span-6">
          <p className="font-hindi text-xl font-semibold text-gold-deep">{site.tagline}</p>
          <h1 className="mt-4 font-display text-[2.6rem] font-bold leading-[1.04] tracking-tight sm:text-6xl xl:text-[4.25rem]">
            The right loan from the right bank, matched to your profile.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Home, personal, business and car loans, loans against property and credit cards. We check your eligibility, shortlist lenders and handle the paperwork until disbursal.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={mailtoUrl()}>Enquiry now</Button>
            <Button to="/process" variant="outline">How it works</Button>
          </div>
          <p className="mt-6 max-w-md text-sm text-muted">
            We are a loan facilitator, not a lender. Approval and terms are decided by the bank.
          </p>
        </div>
        <div className="lg:col-span-6">
          <EmiCalculator />
        </div>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Loans and cards for every stage</h2>
          <p className="mt-5 text-lg text-muted">
            Whatever you are financing, we compare lenders for you and guide the application from start to finish.
          </p>
        </div>
        <ul className="mt-12 border-t border-navy/20">
          {services.map((s) => (
            <li key={s.id} className="grid gap-3 border-b border-navy/15 py-7 md:grid-cols-12 md:items-center md:gap-8">
              <h3 className="font-display text-2xl font-semibold md:col-span-4">{s.title}</h3>
              <p className="leading-relaxed text-muted md:col-span-6">{s.summary}</p>
              <p className="md:col-span-2 md:text-right">
                <Link to="/services" className={textLink}>
                  Learn more<span className="sr-only"> about {s.title.toLowerCase()}</span>
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function Brand() {
  return (
    <section className="border-y border-navy/10 bg-mist-2 py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:col-span-5 lg:max-w-md">
          <img
            src={sign}
            width="640"
            height="640"
            alt="Credit India NextGen logo: an India map made of circuit lines with the NG monogram"
            className="w-full rounded-full shadow-[0_30px_60px_-30px_rgba(11,27,46,.6)]"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Borrowing that is clear, connected and built for India.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline} means “{site.taglineEn.toLowerCase()}”. We bring modern thinking to an old problem: getting the right credit, without the runaround.
          </p>
          <dl className="mt-9 space-y-7">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-gold pl-6">
                <dt className="font-display text-xl font-semibold sm:text-2xl">{p.title}</dt>
                <dd className="mt-1.5 max-w-lg leading-relaxed text-muted">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

function Method() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-mist sm:py-28">
      <Circuit lines={10} seed={9} className="pointer-events-none absolute inset-0 h-full w-full text-sky/15" />
      <Container className="relative">
        <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          From first call to funds in your account, in five steps.
        </h2>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-gold/60 pt-6">
              <span className="font-display text-4xl font-bold text-gold">{i + 1}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-mist/75">{s.short}</p>
            </li>
          ))}
        </ol>
        <Button to="/process" variant="outlineLight" className="mt-14">See the full process</Button>
      </Container>
    </section>
  )
}

function Lenders() {
  if (!lenders.length) return null
  return (
    <section className="border-b border-navy/10 py-14">
      <Container>
        <h2 className="font-display text-2xl font-semibold">Lenders we work with</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {lenders.map((l) => (
            <li key={l} className="rounded-full border border-navy/15 bg-white/60 px-5 py-2.5 font-medium">{l}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function Safety() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-14">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:col-span-4">Borrow safely</h2>
        <ul className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
          {safetyTips.map((t) => (
            <li key={t} className="rounded-xl border border-navy/10 bg-white/60 p-5 leading-relaxed text-muted">{t}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function TeamPreview() {
  return (
    <section className="border-t border-navy/10 bg-mist-2 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">The people you will work with</h2>
          <Link to="/about" className={textLink}>About the firm</Link>
        </div>
        <ul className="mt-12 grid gap-8 sm:grid-cols-3">
          {team.map((m) => (
            <li key={m.slug}>
              <Link to={`/${m.slug}`} className="group block">
                <Monogram name={m.name} className="aspect-[4/5] w-full rounded-sm transition-transform duration-300 group-hover:-translate-y-1" />
                <h3 className="mt-5 font-display text-2xl font-semibold">{m.name}</h3>
                <p className="text-muted">{m.role}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default function Home() {
  usePageMeta('', site.description)
  return (
    <>
      <Hero />
      <Lenders />
      <Services />
      <Brand />
      <Method />
      <Safety />
      <TeamPreview />
      <CtaBand />
    </>
  )
}
