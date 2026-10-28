'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AtSign, Check, Code2, Mail, MapPin, Send, X } from 'lucide-react'

const ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'
const RECIPIENT = 'ovihasanuzzaman684@gmail.com'

function LinkedinMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM7.93 18.45H4.96V9.1h2.97v9.35ZM6.45 7.82a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.63h-2.96v-4.55c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41v4.63H9.26V9.1h2.84v1.28h.04c.4-.74 1.36-1.52 2.8-1.52 3 0 3.55 1.97 3.55 4.53v5.06Z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Ovi-web', icon: Code2 },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hasanuzzaman-ovi/',
    icon: LinkedinMark,
  },
  { label: 'X (Twitter)', href: 'https://x.com/OviHasanuzzaman', icon: AtSign },
]

interface Web3FormsResponse {
  success?: boolean
  message?: string
}

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [notice, setNotice] = useState<{
    type: 'success' | 'error' | 'info'
    message: string
  } | null>(null)

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    if (ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setNotice({
        type: 'info',
        message: 'Your email app will open with this message ready to send.',
      })
      const formData = new FormData(form)
      const subject = String(formData.get('subject') || 'Portfolio contact')
      const body = [
        `Name: ${String(formData.get('name') || '')}`,
        `Email: ${String(formData.get('email') || '')}`,
        '',
        String(formData.get('message') || ''),
      ].join('\n')
      window.location.href = `mailto:${RECIPIENT}?${new URLSearchParams({
        subject,
        body,
      }).toString()}`
      return
    }

    setSending(true)
    setNotice(null)
    try {
      const formData = new FormData(form)
      const payload = Object.fromEntries(formData.entries())
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          access_key: ACCESS_KEY,
          to_email: RECIPIENT,
        }),
      })

      const result = (await response.json()) as Web3FormsResponse
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || 'Message could not be sent. Please try again.')
      }

      form.reset()
      setNotice({ type: 'success', message: 'Thanks! Your message has been sent.' })
    } catch (error) {
      setNotice({
        type: 'error',
        message: error instanceof Error
          ? error.message
          : 'Message could not be sent. Please try again.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section-wrap section-block contact-section" id="contact">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <p className="eyebrow"><span>06</span>HAVE SOMETHING IN MIND?</p>
          <h2>Let&apos;s make it<br />happen.</h2>
        </div>
        <p className="section-copy">
          Have a project, an opportunity, or just want to talk tech? My inbox is always open.
        </p>
      </motion.div>
      <div className="contact-grid">
        <motion.div
          className="contact-details"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <p className="contact-intro">
            The best things start with a conversation. Tell me what you&apos;re working
            on — I&apos;d love to hear about it.
          </p>
          <a className="email-card" href={`mailto:${RECIPIENT}`}>
            <span className="email-icon"><Mail size={18} /></span>
            <span><small>DROP ME A LINE</small><strong>{RECIPIENT}</strong></span>
            <Send size={17} />
          </a>
          <div className="contact-location">
            <MapPin size={16} /><span>Pabna, Bangladesh</span>
            <span className="location-dot" />Available worldwide
          </div>
          <div className="contact-socials">
            <span>ELSEWHERE ON THE WEB</span>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <form className="contact-form" onSubmit={submitContact}>
            <div className="form-row">
              <label>
                Your name
                <input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
              </label>
              <label>
                Email address
                <input name="email" type="email" placeholder="jane@example.com" autoComplete="email" required />
              </label>
            </div>
            <label>
              Subject
              <input name="subject" type="text" placeholder="What are we talking about?" required />
            </label>
            <label>
              Your message
              <textarea name="message" rows={4} placeholder="A little context goes a long way..." required />
            </label>
            <button className="button button-primary submit-button" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send message'} <Send size={16} />
            </button>
            <AnimatePresence>
              {notice && (
                <motion.p
                  className={`form-note form-note-${notice.type}`}
                  role={notice.type === 'error' ? 'alert' : 'status'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  {notice.type === 'success'
                    ? <Check size={14} />
                    : notice.type === 'info'
                      ? <Mail size={14} />
                      : <X size={14} />}
                  {notice.message}
                </motion.p>
              )}
            </AnimatePresence>
            {ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY' && !notice && (
              <p className="form-note">Submitting opens a prefilled email draft addressed to me.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
