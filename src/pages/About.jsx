import { Link } from 'react-router-dom'
import { Container, CtaBand, Monogram, PageHeader } from '../components/ui.jsx'
import { principles, team } from '../data/site.js'
import { usePageMeta } from '../lib/meta.js'

export default function About() {
  usePageMeta('About us', 'Who we are, how we work, and the team behind Credit India NextGen.')
  return (
    <>
      <PageHeader
        title="Making credit simpler, clearer and fairer."
        intro="Credit India NextGen helps individuals and businesses find, apply for and get approved for loans and credit cards from trusted banks and lenders."
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:col-span-4">Why we started</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
            <p>
              Getting a loan can feel like guesswork. Every bank has different criteria, the paperwork is confusing, and a rejection can quietly lower your credit score.
            </p>
            <p>
              We started Credit India NextGen to change that. We check your eligibility first, match you to lenders you are likely to qualify with, and manage the process until the loan is disbursed. As a Direct Selling Agent we are not the lender, so our job is to represent your profile well and keep you informed.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-mist-2 py-20 sm:py-24">
        <Container>
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">What you can expect from us</h2>
          <dl className="mt-12 grid gap-10 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="border-t-2 border-gold pt-5">
                <dt className="font-display text-2xl">{p.title}</dt>
                <dd className="mt-3 leading-relaxed text-muted">{p.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Our team</h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {team.map((m) => (
              <li key={m.slug}>
                <Monogram name={m.name} className="aspect-[4/3] w-full rounded-sm" />
                <h3 className="mt-5 font-display text-2xl">{m.name}</h3>
                <p className="font-medium text-steel">{m.role}</p>
                <p className="mt-3 leading-relaxed text-muted">{m.summary}</p>
                <Link to={`/${m.slug}`} className="mt-4 inline-block font-semibold text-gold-deep underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
                  Read profile<span className="sr-only"> of {m.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
