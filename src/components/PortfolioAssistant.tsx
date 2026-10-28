'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageCircle, Send, Sparkles, X } from 'lucide-react'

interface ChatMessage {
  id: number
  role: 'assistant' | 'visitor'
  text: string
}

const suggestedQuestions = [
  'What projects has Ovi built?',
  'What technologies does Ovi use?',
  'How can I get in touch?',
]

function getAnswer(question: string): string {
  const text = question.toLowerCase()

  if (/\b(hi|hello|hey|greetings)\b/.test(text)) {
    return 'Hi! I can tell you about Ovi’s projects, skills, education, and how to get in touch. What would you like to know?'
  }
  if (/\b(project|portfolio|work|built|build|bazardor|bazar|fitlog|dev stack)\b/.test(text)) {
    return 'Ovi’s featured projects are BazarDor, a local commodity price tracker; FitLog, a workout planner; and Dev Stack, a developer tooling comparator. Open the Projects section to explore their tech stacks, challenges, and live demos.'
  }
  if (/\b(skill|stack|technology|technologies|tech|language|framework|react|next|golang|go\b)\b/.test(text)) {
    return 'Ovi works with React, Next.js, TypeScript, JavaScript, and Tailwind CSS on the frontend; Node.js, Express, Go, and REST APIs on the backend; plus MongoDB, BetterAuth, Git, and deployment tools.'
  }
  if (/\b(contact|email|reach|hire|message|location|where)\b/.test(text)) {
    return 'You can reach Ovi at ovihasanuzzaman684@gmail.com. He’s based in Pabna, Bangladesh, and is available worldwide. Visit the Contact section to send a message or connect on GitHub, LinkedIn, or X.'
  }
  if (/\b(education|degree|university|study|studies|course|credit)\b/.test(text)) {
    return 'Ovi is a final-year B.Sc. Computer Science & Engineering undergraduate with 139+ credits completed. His core coursework includes algorithms, object-oriented programming, databases, software engineering, and computer networks.'
  }
  if (/\b(experience|journey|years|background|about|personality|hobby|hobbies|interest)\b/.test(text)) {
    return 'Ovi has spent 1.5+ years building full-stack web applications and exploring backend architecture. He enjoys clean, maintainable code, learning Go, robotics and tech gadgets, mobile gaming, and cheering for Argentina and Lionel Messi.'
  }
  if (/\b(resume|cv|download)\b/.test(text)) {
    return 'You can download Ovi’s resume using the Download Resume button in the hero section.'
  }

  return 'I can help with Ovi’s projects, tech stack, education, experience, or contact details. For anything else, try the Contact section and send Ovi a message.'
}

export default function PortfolioAssistant() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    inputRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages])

  const askQuestion = (question: string) => {
    const normalized = question.trim()
    if (!normalized) return

    setMessages((current) => [
      ...current,
      { id: Date.now(), role: 'visitor', text: normalized },
      { id: Date.now() + 1, role: 'assistant', text: getAnswer(normalized) },
    ])
    setDraft('')
  }

  const submitQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    askQuestion(draft)
  }

  return (
    <div className="portfolio-assistant">
      <AnimatePresence>
        {open && (
          <motion.section
            className="assistant-panel"
            aria-label="Portfolio assistant"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <header className="assistant-header">
              <span className="assistant-avatar"><Bot size={19} /></span>
              <span className="assistant-heading">
                <strong>Ovi&apos;s portfolio assistant</strong>
                <small><span /> Here to help</small>
              </span>
              <button
                type="button"
                className="assistant-close"
                aria-label="Close assistant"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>
            </header>

            <div className="assistant-messages" ref={messagesRef} aria-live="polite">
              <div className="assistant-message assistant-reply">
                <span className="assistant-message-icon"><Sparkles size={14} /></span>
                <p>Hi! Ask me about Ovi&apos;s projects, skills, or background.</p>
              </div>
              {messages.map((message) => (
                <div
                  className={`assistant-message ${message.role === 'visitor' ? 'assistant-question' : 'assistant-reply'}`}
                  key={message.id}
                >
                  {message.role === 'assistant' && (
                    <span className="assistant-message-icon"><Sparkles size={14} /></span>
                  )}
                  <p>{message.text}</p>
                </div>
              ))}
              {messages.length === 0 && (
                <div className="assistant-suggestions" aria-label="Suggested questions">
                  {suggestedQuestions.map((question) => (
                    <button
                      type="button"
                      key={question}
                      onClick={() => askQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form className="assistant-form" onSubmit={submitQuestion}>
              <label className="sr-only" htmlFor="assistant-question">Ask a question</label>
              <input
                id="assistant-question"
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask me anything..."
                autoComplete="off"
              />
              <button type="submit" aria-label="Send question" disabled={!draft.trim()}>
                <Send size={16} />
              </button>
            </form>
            <p className="assistant-disclaimer">Portfolio answers · No external AI service</p>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        className="assistant-launcher"
        type="button"
        aria-label={open ? 'Close portfolio assistant' : 'Ask portfolio assistant'}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X size={21} /> : <MessageCircle size={21} />}
        {!open && <span className="assistant-launcher-label">Ask Ovi&apos;s AI</span>}
      </motion.button>
    </div>
  )
}
