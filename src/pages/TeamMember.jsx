import { Link } from 'react-router-dom'
import { Container, CtaBand, Monogram } from '../components/ui.jsx'
import { team } from '../data/site.js'
import { usePageMeta } from '../lib/meta.js'

export default function TeamMember({ member }) {
  usePageMeta(member.name, `${member.name}, ${member.role} at Credit India NextGen.`)
  const others = team.filter((m) => m.slug !== member.slug)
  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <Link to="/about" className="text-sm font-semibold text-gold-deep underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
            Back to the team
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Monogram name={member.name} className="aspect-[4/5] w-full max-w-sm rounded-sm lg:col-span-4" />
            <div className="lg:col-span-8">
              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">{member.name}</h1>
              <p className="mt-2 text-xl text-steel">{member.role}</p>
              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
                {member.bio.map((p) => (<p key={p}>{p}</p>))}
              </div>
              <h2 className="mt-10 font-display text-2xl">Areas of focus</h2>
              <ul className="mt-4 max-w-xl divide-y divide-navy/10 border-y border-navy/10">
                {member.focus.map((f) => (
                  <li key={f} className="flex gap-4 py-3.5">
                    <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-mist-2 py-14">
        <Container>
          <h2 className="font-display text-2xl">Meet the rest of the team</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((m) => (
              <li key={m.slug}>
                <Link to={`/${m.slug}`} className="flex items-center gap-4 rounded-xl border border-navy/10 bg-mist p-4 transition-colors hover:border-gold">
                  <Monogram name={m.name} className="h-16 w-16 shrink-0 rounded-full [&_span]:text-xl" />
                  <span><span className="block font-display text-xl">{m.name}</span><span className="text-sm text-muted">{m.role}</span></span>
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
