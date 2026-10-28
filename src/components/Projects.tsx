'use client'

import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { projectsData } from '../data/projectsData'
import type { Project } from '../types'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const closeProject = useCallback(() => setActiveProject(null), [])

  return (
    <>
      <section className="section-wrap section-block projects-section" id="projects">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <p className="eyebrow"><span>05</span>SELECTED WORK</p>
            <h2>A few things I&apos;ve<br />put into the world.</h2>
          </div>
          <p className="section-copy">
            Each project is a little different. Every one taught me something worth carrying forward.
          </p>
        </motion.div>
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <motion.article
              className={`project-card project-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                />
                <span className="project-number">0{index + 1}</span>
                <button
                  type="button"
                  className="project-open"
                  onClick={() => setActiveProject(project)}
                  aria-label={`View ${project.title} details`}
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>
              <div className="project-info">
                <div className="project-category">
                  PROJECT 0{index + 1}<span>{project.subtitle}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className="details-link"
                  onClick={() => setActiveProject(project)}
                >
                  View Details <ArrowRight size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="more-work">
          <span>More experiments are always in progress.</span>
          <a href="https://github.com/Ovi-web" target="_blank" rel="noreferrer">
            More on GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>
    </>
  )
}
