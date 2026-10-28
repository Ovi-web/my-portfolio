'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Systems',
  'Software Engineering',
  'Computer Networks',
]

export default function Education() {
  return (
    <section className="section-wrap section-block education-section" id="education">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <p className="eyebrow"><span>03</span>THE FOUNDATION</p>
          <h2>Learning never<br />really stops.</h2>
        </div>
      </motion.div>
      <motion.article
        className="education-card"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        <div className="education-icon"><GraduationCap size={24} /></div>
        <div className="education-main">
          <p className="eyebrow">UNDERGRADUATE · FINAL YEAR</p>
          <h3>Bachelor of Science in Computer Science &amp; Engineering (B.Sc. in CSE)</h3>
          <p>Final-year undergraduate building a strong foundation in the theory and practice behind great software.</p>
          <div className="course-tags">
            {coursework.map((course) => <span key={course}>{course}</span>)}
          </div>
        </div>
        <div className="credits-badge"><strong>139+</strong><span>CREDITS<br />COMPLETED</span></div>
      </motion.article>
    </section>
  )
}
