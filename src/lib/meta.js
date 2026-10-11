import { useEffect } from 'react'
import { site } from '../data/site.js'

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.name
    const el = document.querySelector('meta[name="description"]')
    if (el) el.setAttribute('content', description || site.description)
  }, [title, description])
}
