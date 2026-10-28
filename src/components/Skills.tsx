'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import type { SkillCategory } from '../types'

interface ToolkitCategory extends SkillCategory {
  icon: LucideIcon
  focus: string
}

const skillCategories: ToolkitCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code2,
    description: 'Interfaces that feel fast, clear, and a little delightful.',
    focus: 'Crafting responsive, accessible interfaces with modern React frameworks.',
    skills: [
      'React.js',
      'Next.js (App Router)',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'DaisyUI',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Systems',
    icon: Braces,
    description: 'Reliable foundations for useful, scalable products.',
    focus: 'Building dependable APIs and exploring efficient service architectures.',
    skills: ['Node.js', 'Express.js', 'Go (Golang APIs)', 'RESTful APIs'],
  },
  {
    id: 'data-auth',
    title: 'Database & Auth',
    icon: Database,
    description: 'Secure flows and practical data persistence.',
    focus: 'Connecting applications to their data with secure, thoughtful auth flows.',
    skills: ['MongoDB', 'BetterAuth', 'JWT', 'LocalStorage APIs'],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    icon: Workflow,
    description: 'A thoughtful process from first commit to deploy.',
    focus: 'Keeping the build, collaboration, and release workflow smooth and reliable.',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'Postman', 'Vercel', 'Netlify'],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)
  const selectedCategory =
    skillCategories.find((category) => category.id === activeCategory) ?? skillCategories[0]
  const ActiveIcon = selectedCategory.icon

  return (
    <section className="section-wrap section-block skills-section" id="skills">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <p className="eyebrow"><span>02</span>MY TOOLKIT</p>
          <h2>A toolkit for turning<br />ideas into software.</h2>
        </div>
        <p className="section-copy">
          The technologies I use to design, build, and ship thoughtful digital experiences.
        </p>
      </motion.div>
      <div className="toolkit">
        <div className="toolkit-tabs" role="tablist" aria-label="Technology categories">
          {skillCategories.map(({ id, title, icon: Icon }, index) => (
            <button
              className={`toolkit-tab ${activeCategory === id ? 'active' : ''}`}
              id={`skill-tab-${id}`}
              type="button"
              role="tab"
              aria-selected={activeCategory === id}
              aria-controls={`skill-panel-${id}`}
              tabIndex={activeCategory === id ? 0 : -1}
              key={id}
              onClick={() => setActiveCategory(id)}
              onKeyDown={(event) => {
                if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
                event.preventDefault()
                const current = skillCategories.findIndex((category) => category.id === id)
                const next = event.key === 'Home'
                  ? 0
                  : event.key === 'End'
                    ? skillCategories.length - 1
                    : (current + (event.key === 'ArrowRight' ? 1 : -1) + skillCategories.length) % skillCategories.length
                setActiveCategory(skillCategories[next].id)
                document.getElementById(`skill-tab-${skillCategories[next].id}`)?.focus()
              }}
            >
              <Icon size={17} />
              <span>{title}</span>
              <small>0{index + 1}</small>
            </button>
          ))}
        </div>
        <motion.div
          className="toolkit-panel"
          key={selectedCategory.id}
          id={`skill-panel-${selectedCategory.id}`}
          role="tabpanel"
          aria-labelledby={`skill-tab-${selectedCategory.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="toolkit-intro">
            <div className="toolkit-icon"><ActiveIcon size={23} /></div>
            <p className="toolkit-kicker">CATEGORY / {String(skillCategories.indexOf(selectedCategory) + 1).padStart(2, '0')}</p>
            <h3>{selectedCategory.title}</h3>
            <p className="toolkit-description">{selectedCategory.focus}</p>
            <div className="toolkit-count">
              <span>TECHNOLOGIES IN MY STACK</span>
              <strong>{String(selectedCategory.skills.length).padStart(2, '0')}</strong>
            </div>
          </div>
          <div className="toolkit-stack">
            <div className="toolkit-stack-heading">
              <span>THE STACK</span>
              <span>TOOLS I REACH FOR <ArrowUpRight size={13} /></span>
            </div>
            <div className="toolkit-skill-grid">
              {selectedCategory.skills.map((skill, index) => (
                <motion.div
                  className="toolkit-skill"
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: index * 0.035 }}
                >
                  <span className="toolkit-skill-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="toolkit-skill-name">{skill}</span>
                  <span className="toolkit-skill-arrow"><ArrowUpRight size={13} /></span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
