'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  Check,
  ChevronDown,
  Moon,
  Palette,
  Sun,
  X,
  Menu,
  ArrowUpRight,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import type { Theme } from '../types'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
] as const

const themes: { id: Theme; label: string; icon: typeof Moon }[] = [
  { id: 'dark', label: 'Dark', icon: Moon },
  { id: 'light', label: 'Light', icon: Sun },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [themeOpen, setThemeOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const themePickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!themePickerRef.current?.contains(event.target as Node)) {
        setThemeOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setThemeOpen(false)
        setMobileOpen(false)
      }
    }

    if (themeOpen) document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [themeOpen])

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <header className="navbar sticky top-0 z-20 backdrop-blur-md">
      <a className="brand" href="#home" aria-label="Hasanuzzaman Ovi, back to home">
        <span className="brand-mark"><span className="brand-initial">H</span>asanuzzaman Ovi</span>
      </a>

      <nav
        className={`nav-links ${mobileOpen ? 'nav-open' : ''}`}
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMobileMenu}>
            {label}
          </a>
        ))}
        <a className="mobile-contact" href="#contact" onClick={closeMobileMenu}>
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <div className="nav-actions">
        <div className="theme-picker" ref={themePickerRef}>
          <button
            className="theme-trigger"
            type="button"
            aria-expanded={themeOpen}
            aria-haspopup="menu"
            aria-label="Choose color theme"
            onClick={() => setThemeOpen((open) => !open)}
          >
            <Palette size={16} />
            <span>{themes.find((item) => item.id === theme)?.label}</span>
            <ChevronDown
              size={14}
              className={themeOpen ? 'chevron-up' : ''}
              aria-hidden="true"
            />
          </button>
          <AnimatePresence>
            {themeOpen && (
              <motion.div
                className="theme-menu"
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.16 }}
                role="menu"
                aria-label="Color themes"
              >
                {themes.map(({ id, label, icon: Icon }) => (
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={theme === id}
                    className={theme === id ? 'theme-option selected' : 'theme-option'}
                    key={id}
                    onClick={() => {
                      setTheme(id)
                      setThemeOpen(false)
                    }}
                  >
                    <Icon size={15} />
                    {label}
                    {theme === id && <Check size={14} />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
        <button
          className="mobile-toggle"
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  )
}
