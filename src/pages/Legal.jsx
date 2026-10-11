import { Container, PageHeader } from '../components/ui.jsx'
import { site } from '../data/site.js'
import { usePageMeta } from '../lib/meta.js'

function Doc({ title, intro, sections }) {
  return (
    <>
      <PageHeader title={title} intro={intro} />
      <section className="py-16">
        <Container>
          <div className="max-w-3xl space-y-10">
            {sections.map(([h, body]) => (
              <div key={h}>
                <h2 className="font-display text-2xl">{h}</h2>
                <p className="mt-3 leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

// NOTE: starter text only. Have it reviewed by a legal professional before launch.
export function Privacy() {
  usePageMeta('Privacy policy')
  return (
    <Doc
      title="Privacy policy"
      intro={`How ${site.name} handles the information you share with us.`}
      sections={[
        ['What we collect', 'We collect the details you give us when you make an enquiry: your name, mobile number, email, city, loan type, approximate amount, employment type and any message you write. We may also collect basic, anonymous usage data about how the website is used.'],
        ['How we use it', 'We use your details to contact you, to assess which lenders may suit your profile, and to meet our legal and regulatory obligations. We do not sell your personal information.'],
        ['Sharing', 'When you choose to apply, we share your details and documents with the banks and lenders you apply to, so they can assess your application. We also share information with service providers who help us run our business, or where the law requires us to. We ask all recipients to protect your information.'],
        ['Keeping your data safe', 'We take reasonable steps to protect your information from loss, misuse and unauthorised access. No method of transmission over the internet is completely secure.'],
        ['Your choices', `You can ask to see, correct or delete the personal information we hold about you by writing to ${site.email}.`],
        ['Changes', 'We may update this policy from time to time. The latest version will always be on this page.'],
      ]}
    />
  )
}

export function Terms() {
  usePageMeta('Terms and conditions')
  return (
    <Doc
      title="Terms and conditions"
      intro={`The terms for using the ${site.name} website.`}
      sections={[
        ['Information only', 'Content on this website is general information. It is not an offer or commitment to lend. We are a loan facilitation service, and every loan or card is approved, priced and issued by the lender at its sole discretion.'],
        ['Our role and lender decisions', site.disclaimer],
        ['EMI calculator', 'Figures produced by the calculator on this website are illustrations based on the inputs you choose. Actual interest rates, fees and EMIs are set by the lender.'],
        ['Intellectual property', 'The text, design and logos on this website belong to us or our licensors. You may not copy or reuse them without written permission.'],
        ['Limitation of liability', 'We make reasonable efforts to keep the website accurate and available, but provide it as is. To the extent permitted by law, we are not liable for loss arising from reliance on its content.'],
        ['Governing law', 'These terms are governed by the laws of India. Courts in India have jurisdiction over any dispute.'],
      ]}
    />
  )
}
