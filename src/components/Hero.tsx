'use client'

import { motion } from 'framer-motion'
import {
  AtSign,
  ArrowDownToLine,
  ArrowUpRight,
  Building2,
  Code2,
} from 'lucide-react'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Ovi-web',
    icon: Code2,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hasanuzzaman-ovi/',
    icon: Building2,
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/OviHasanuzzaman',
    icon: AtSign,
  },
]

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="availability">
            <span className="status-dot" />
            FULL-STACK WEB DEVELOPER <span className="hero-role-separator">·</span>
            SOFTWARE ENTHUSIAST
          </p>
          <h1>
            Crafting scalable,
            <br />
            <span>interactive web</span>
            <br />
            experiences.
          </h1>
          <p className="hero-description">
            Crafting scalable, interactive web experiences with Next.js, React,
            modern JavaScript, and Go.
          </p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#contact">
              Contact Me <ArrowUpRight size={17} />
            </a>
            <a className="button button-secondary" href="/Resume.pdf.pdf" download="Resume.pdf">
              <ArrowDownToLine size={16} /> Download Resume
            </a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <span>FIND ME ON</span>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.16, ease: 'easeOut' }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="avatar-frame">
            <img
              src="https://github.com/Ovi-web.png"
              alt="Hasanuzzaman Ovi"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="floating-card floating-code">
            <Code2 size={17} />
            <span>
              Clean code
              <br />
              <b>always</b>
            </span>
          </div>
          <span className="visual-caption">DESIGN · DEVELOP · DELIVER</span>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDownToLine size={15} />
      </a>
    </section>
  )
}
