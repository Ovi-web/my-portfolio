export type Theme = 'dark' | 'light'

export interface Project {
  id: string
  title: string
  subtitle: string
  image: string
  tech: string[]
  description: string
  highlights: string[]
  github: string
  live: string
  challenges: string
  future: string
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  skills: string[]
}
