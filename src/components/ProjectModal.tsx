'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, ExternalLink, X } from 'lucide-react'
import type { Project } from '../types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const previousFocus = document.activeElement
    dialogRef.current?.querySelector<HTMLButtonElement>('.modal-close')?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [onClose])

  return (
    <motion.div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.section
        className="project-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.24 }}
      >
        <button
          className="modal-close"
          type="button"
          aria-label="Close project details"
          onClick={onClose}
        >
          <X size={19} />
        </button>
        <div className="modal-image">
          <img src={project.image} alt={`${project.title} project preview`} />
        </div>
        <div className="modal-content">
          <p className="eyebrow"><span>PROJECT</span>{project.subtitle}</p>
          <h2 id="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>
          <div className="modal-tags">
            {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <div className="modal-detail-grid">
            <div>
              <h3>Highlights</h3>
              <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
            <div>
              <h3>The challenge</h3>
              <p>{project.challenges}</p>
            </div>
            <div className="roadmap-detail">
              <h3>What&apos;s next</h3>
              <p>{project.future}</p>
            </div>
          </div>
          <div className="modal-actions">
            <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">
              View live site <ExternalLink size={15} />
            </a>
            <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">
              <Code2 size={16} /> Client repository <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}
