"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(prev => !prev)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const actions = [
    { icon: "🏠", label: "Jump to Top", href: "#hero", shortcut: "H" },
    { icon: "👤", label: "Jump to Skills", href: "#skills", shortcut: "S" },
    { icon: "📜", label: "Jump to Experience", href: "#experience", shortcut: "E" },
    { icon: "💻", label: "Jump to Projects", href: "#projects", shortcut: "P" },
    { icon: "📧", label: "Jump to Contact", href: "#contact", shortcut: "C" },
    { icon: "📥", label: "Download Resume", href: "/Rudra-KaPatel.pdf", shortcut: "R" },
    { icon: "🐙", label: "GitHub Profile", href: "https://github.com/Rockermaze", shortcut: "G" },
  ]

  const filteredActions = actions.filter(action =>
    action.label.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10001] flex items-start justify-center pt-[20vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-xl bg-dark-card border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Input Header */}
            <div className="p-4 border-b border-white/5 flex items-center gap-4">
              <span className="text-techno-cyan font-mono text-xl">λ</span>
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-white placeholder:text-text-muted"
              />
              <div className="px-2 py-1 border border-white/10 rounded text-[10px] font-mono text-text-muted uppercase">
                ESC to close
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredActions.length > 0 ? (
                filteredActions.map((action, idx) => (
                  <a
                    key={idx}
                    href={action.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 hover:bg-white/5 group transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{action.icon}</span>
                      <span className="font-mono text-sm text-text-secondary group-hover:text-white transition-colors">
                        {action.label}
                      </span>
                    </div>
                    <div className="px-2 py-0.5 border border-white/10 rounded font-mono text-[10px] text-text-muted group-hover:border-techno-cyan group-hover:text-techno-cyan transition-colors">
                      {action.shortcut}
                    </div>
                  </a>
                ))
              ) : (
                <div className="p-8 text-center font-mono text-sm text-text-muted">
                  No results found for "{query}"
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-white/5 bg-dark-surface/50 flex justify-between items-center px-4">
              <div className="flex gap-4 font-mono text-[10px] text-text-muted uppercase tracking-widest">
                <span>↑↓ Navigate</span>
                <span>Enter Select</span>
              </div>
              <div className="font-mono text-[8px] text-techno-cyan/40">
                COMMAND_PALETTE_v1.0
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
