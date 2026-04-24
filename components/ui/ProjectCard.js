"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import HolographicCard from "./HolographicCard"

export default function ProjectCard({
  title,
  desc,
  tech,
  icon = "💡",
  link = "#",
  isLive = false,
  stars = 0,
  forks = 0,
  complexity = 3
}) {
  // Generate stable ID based on title (no Math.random())
  const projectId = useMemo(() => {
    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return hash % 9
  }, [title])

  return (
    <HolographicCard>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative bg-dark-card/30 border border-white/5 p-10 transition-all duration-500 hover:bg-dark-card overflow-hidden h-full"
      >
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-10">
            <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(0,243,255,0.3)]">
              {icon}
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
                ID: {title.substring(0, 3).toUpperCase()}_0{projectId}
              </div>

              {isLive && (
                <div className="px-2 py-1 bg-techno-lime/10 border border-techno-lime/30 text-techno-lime text-[8px] font-mono animate-pulse">
                  ● LIVE_NODE
                </div>
              )}
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white font-heading tracking-tight">
            {title}
          </h3>

          <p className="text-text-secondary mb-8 leading-relaxed text-sm font-light min-h-[60px]">
            {desc}
          </p>

          {/* Complexity indicator */}
          <div className="flex gap-1 mb-4">
            <span className="text-[8px] font-mono text-text-muted uppercase tracking-widest mr-2">Complexity:</span>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-3 h-1 ${i < complexity ? 'bg-techno-cyan' : 'bg-white/5'}`} />
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {tech.split('•').map((t, i) => (
              <span
                key={i}
                className="px-0 py-0 text-[10px] text-techno-cyan/60 font-mono uppercase tracking-[0.2em]"
              >
                {t.trim()} {i < tech.split('•').length - 1 && "/"}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center font-mono text-xs tracking-widest uppercase text-white hover:text-techno-cyan transition-colors"
            >
              EXPLORE_PROJECT()
              <span className="ml-3 group-hover/link:translate-x-1 transition-transform">→</span>
            </a>

            <div className="flex gap-4 text-[10px] font-mono text-text-muted">
              <span className="flex items-center gap-1">⭐ {stars}</span>
              <span className="flex items-center gap-1">🔱 {forks}</span>
            </div>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H100V100H0V0Z" fill="url(#grid-pattern)" />
            <defs>
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M10 0H0V10" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
          </svg>
        </div>
      </motion.div>
    </HolographicCard>
  )
}
