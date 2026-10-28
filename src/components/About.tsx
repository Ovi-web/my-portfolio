'use client'

import { motion } from 'framer-motion'
import { Heart, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section className="section-wrap section-block about-section" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <p className="eyebrow"><span>01</span>A LITTLE ABOUT ME</p>
          <h2>Curious by nature.<br />Engineer by choice.</h2>
        </div>
      </motion.div>
      <div className="about-grid">
        <motion.div
          className="about-story"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <p className="lead-copy">
            For the last <span className="accent-text">1.5+ years</span>, I&apos;ve been
            turning curiosity into code — building full-stack web applications,
            exploring backend architectures, and mastering modern frameworks.
          </p>
          <p>
            I care about writing clean, maintainable code and solving the UI/UX and
            architectural challenges that make products intuitive and reliable.
            Recently, I&apos;ve been exploring Go (Golang) and its potential for
            scalable backend microservices.
          </p>
        </motion.div>
        <motion.aside
          className="about-aside"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="aside-topline"><Heart size={16} /><span>OUTSIDE THE EDITOR</span></div>
          <p>
            Exploring tech gadgets and robotics, unwinding with mobile games, and
            following international football. Argentina supporter and Lionel Messi fan.
          </p>
          <div className="aside-location"><MapPin size={15} /> Pabna, Bangladesh</div>
        </motion.aside>
      </div>
      <div className="stats-row">
        {[
          ['1.5+', 'years building'],
          ['03', 'featured projects'],
          ['139+', 'credits completed'],
        ].map(([value, label], index) => (
          <motion.div
            className="stat"
            key={label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <strong>{value}</strong><span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
