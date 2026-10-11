import { Button, Container } from '../components/ui.jsx'
import { usePageMeta } from '../lib/meta.js'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <section className="py-28">
      <Container>
        <h1 className="font-display text-5xl font-semibold sm:text-6xl">We could not find that page.</h1>
        <p className="mt-5 max-w-lg text-lg text-muted">The link may be out of date or mistyped. Head back to the homepage or contact us and we will help.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/">Go to homepage</Button>
          <Button to="/contact" variant="outline">Contact us</Button>
        </div>
      </Container>
    </section>
  )
}
