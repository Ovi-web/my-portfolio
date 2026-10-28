'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import PortfolioAssistant from './components/PortfolioAssistant'
import Skills from './components/Skills'
import { ThemeProvider, useTheme } from './context/ThemeContext'

function Milestones() {
  const milestones = [
    [
      '01',
      'Building end to end',
      'Designed and shipped full-stack applications, connecting polished interfaces to practical data and auth flows.',
    ],
    [
      '02',
      'Learning in the open',
      'Kept a consistent practice of experimenting with modern frameworks, exploring open-source initiatives, and refining the craft through real builds.',
    ],
    [
      '03',
      'Thinking beyond the UI',
      'Explored backend architecture and Go APIs, with a growing focus on performant, maintainable services.',
    ],
  ]

  return (
    <section className="section-wrap section-block milestones-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <p className="eyebrow"><span>04</span>THE JOURNEY SO FAR</p>
          <h2>Engineering highlights<br />&amp; milestones.</h2>
        </div>
        <p className="section-copy">
          No titles for the sake of titles — just the work, the learning, and the progress behind it.
        </p>
      </motion.div>
      <div className="milestone-list">
        {milestones.map(([number, title, copy], index) => (
          <motion.article
            className="milestone-item"
            key={number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span className="milestone-number">{number}</span>
            <div><h3>{title}</h3><p>{copy}</p></div>
            <ArrowUpRight size={18} />
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function ThemedPortfolio() {
  const { theme } = useTheme()

  return (
    <main className="site-shell" data-theme={theme}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Milestones />
      <Projects />
      <Contact />
      <Footer />
      <PortfolioAssistant />
    </main>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedPortfolio />
    </ThemeProvider>
  )
}
