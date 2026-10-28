'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react'
import type { Theme } from '../types'

interface ThemeContextValue {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
const THEME_STORAGE_KEY = 'ovi-portfolio-theme'
function isTheme(value: string | null): value is Theme {
  return value === 'dark' || value === 'light'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove('dark', 'theme-dark', 'theme-light', 'theme-neon')
  root.classList.add(`theme-${theme}`)
  if (theme === 'dark') root.classList.add('dark')
  root.dataset.theme = theme
  document.body.dataset.theme = theme
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    const restoredTheme = savedTheme === 'neon'
      ? 'dark'
      : isTheme(savedTheme)
        ? savedTheme
        : 'dark'
    if (restoredTheme !== theme) {
      setTheme(restoredTheme)
      applyTheme(restoredTheme)
    } else {
      applyTheme(restoredTheme)
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    applyTheme(theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [ready, theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
