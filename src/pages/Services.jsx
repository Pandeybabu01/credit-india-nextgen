import { Container, CtaBand, PageHeader } from '../components/ui.jsx'
import { services } from '../data/site.js'
import { usePageMeta } from '../lib/meta.js'

export default function Services() {
  usePageMeta('Loan and credit card services', 'Home loans, personal loans, business loans, loans against property, car loans and credit cards from Credit India NextGen.')
  return (
    <>
      <PageHeader
        title="Every kind of loan, with one team handling it."
        intro="Tell us what you need to finance. We shortlist lenders that fit your profile and manage the application, so you do not have to chase banks yourself."
      />
      <section>
        <Container>
          {services.map((s) => (
            <article key={s.id} id={s.id} className="grid gap-8 border-b border-navy/15 py-16 last:border-b-0 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{s.detail}</p>
              </div>
              <div className="lg:col-span-7 lg:pl-8">
                <h3 className="font-display text-xl font-semibold">What we help with</h3>
                <ul className="mt-4 divide-y divide-navy/10 border-y border-navy/10">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-4 py-3.5">
                      <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-muted"><span className="font-semibold text-navy">Best for: </span>{s.bestFor}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
