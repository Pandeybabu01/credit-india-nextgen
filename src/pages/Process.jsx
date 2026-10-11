import { Accordion, Container, CtaBand, PageHeader } from '../components/ui.jsx'
import { documents, faqs, steps } from '../data/site.js'
import { usePageMeta } from '../lib/meta.js'

export default function Process() {
  usePageMeta('Our process', 'How getting a loan or credit card through Credit India NextGen works, from first call to disbursal, with a document checklist.')
  return (
    <>
      <PageHeader
        title="A clear process, so you always know what comes next."
        intro="Five stages from your first call to disbursal. You decide at every stage whether to go ahead."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <ol className="relative">
            {steps.map((s, i) => (
              <li key={s.title} className="relative grid gap-4 pb-14 last:pb-0 sm:grid-cols-[88px_1fr] sm:gap-8">
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[27px] top-16 hidden h-[calc(100%-3rem)] w-px bg-gold/60 sm:block" />
                )}
                <span className="grid h-14 w-14 place-items-center rounded-full bg-navy font-display text-2xl font-bold text-gold">{i + 1}</span>
                <div className="max-w-2xl">
                  <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{s.title}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{s.long}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-mist-2 py-20 sm:py-24">
        <Container>
          <h2 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Documents you will typically need</h2>
          <p className="mt-4 max-w-2xl text-muted">The exact list depends on the loan type and the lender. We confirm it with you before you collect anything.</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {documents.map((d) => (
              <div key={d.group} className="rounded-2xl border border-navy/10 bg-mist p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold">{d.group}</h3>
                <ul className="mt-4 divide-y divide-navy/10 border-y border-navy/10">
                  {d.items.map((it) => (
                    <li key={it} className="flex gap-4 py-3">
                      <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:col-span-4">Questions people ask before they apply</h2>
          <div className="lg:col-span-8"><Accordion items={faqs} /></div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
