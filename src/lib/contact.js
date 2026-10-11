// All enquiries go through the visitor's own email app, WhatsApp or Instagram.
// There is no backend, database or form service involved.
import { site } from '../data/site.js'

export function buildEnquiryText(d = {}) {
  const line = (label, v) => `${label}: ${v && String(v).trim() ? v : ''}`
  return [
    `Hello ${site.name},`,
    '',
    'I would like to enquire about a loan / credit card.',
    '',
    line('Name', d.name),
    line('Mobile', d.phone),
    line('Email', d.email),
    line('City', d.city),
    line('Loan type', d.topic),
    line('Approximate amount', d.amount),
    line('Employment', d.employment),
    d.message ? `\n${d.message}` : '',
  ].join('\n')
}

export function mailtoUrl({ subject = 'Loan enquiry', body = buildEnquiryText() } = {}) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

// For visitors who use Gmail in the browser instead of a mail app.
export function gmailUrl({ subject = 'Loan enquiry', body = buildEnquiryText() } = {}) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function whatsappUrl(text = 'Hi, I would like to enquire about a loan.') {
  const n = (site.whatsapp || '').replace(/\D/g, '')
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`
}

export function instagramUrl() {
  const handle = (site.instagram || '').replace(/^@/, '').trim()
  return `https://www.instagram.com/${handle}`
}
