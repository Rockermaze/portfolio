"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
]

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("hero")
  const [hoveredSection, setHoveredSection] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[40] hidden lg:flex flex-col gap-6">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="relative group flex items-center justify-end gap-4"
          onMouseEnter={() => setHoveredSection(section.id)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Label */}
          <AnimatePresence>
            {hoveredSection === section.id && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="font-mono text-[10px] text-techno-cyan uppercase tracking-widest bg-dark-card/80 px-2 py-1 border border-white/5"
              >
                {section.label}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Dot */}
          <div className="relative">
            <motion.div
              animate={{
                scale: activeSection === section.id ? 1.5 : 1,
                backgroundColor: activeSection === section.id ? "#00f3ff" : "rgba(255, 255, 255, 0.2)",
              }}
              className="w-2 h-2 rounded-full transition-colors duration-300"
            />

            {activeSection === section.id && (
              <motion.div
                layoutId="active-dot-glow"
                className="absolute inset-0 rounded-full bg-techno-cyan blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
              />
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
