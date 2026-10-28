'use client'

import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer section-wrap">
      <a className="footer-brand" href="#home"><span className="brand-initial">H</span>asanuzzaman Ovi</a>
      <p>© 2026 Hasanuzzaman Ovi. Built with React &amp; Tailwind CSS.</p>
      <button className="back-top" type="button" onClick={scrollToTop}>
        Back to top <ArrowUp size={14} />
      </button>
    </footer>
  )
}
