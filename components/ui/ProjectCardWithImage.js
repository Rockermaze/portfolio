"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import HolographicCard from "./HolographicCard"
import Image from "next/image"

export default function ProjectCardWithImage({
  title,
  desc,
  tech,
  link = "#",
  isLive = false,
  image = null
}) {
  // Generate stable ID based on title
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
        className="group relative bg-dark-card/30 border border-white/5 transition-all duration-500 hover:bg-dark-card overflow-hidden h-full"
      >
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left side - Project Info */}
          <div className="relative z-10 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white font-heading tracking-tight leading-tight">
                {title}
              </h3>

              <div className="flex flex-col items-end gap-2 ml-4">
                <div className="font-mono text-[9px] text-white/20 tracking-widest uppercase whitespace-nowrap">
                  ID: {title.substring(0, 3).toUpperCase()}_0{projectId}
                </div>

                {isLive && (
                  <div className="px-2 py-1 bg-techno-lime/10 border border-techno-lime/30 text-techno-lime text-[8px] font-mono animate-pulse whitespace-nowrap">
                    ● LIVE_NODE
                  </div>
                )}
              </div>
            </div>

            <p className="text-text-secondary mb-6 leading-relaxed text-sm font-light flex-grow">
              {desc}
            </p>

            {/* Technologies label */}
            <div className="mb-4">
              <span className="text-xs font-mono text-techno-cyan uppercase tracking-widest">Technologies:</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {tech.split('•').map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs text-techno-cyan font-mono uppercase tracking-wide bg-techno-cyan/5 border border-techno-cyan/20"
                >
                  {t.trim()}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-auto">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center font-mono text-xs tracking-widest uppercase text-white hover:text-techno-cyan transition-colors"
              >
                EXPLORE_PROJECT()
                <span className="ml-3 group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right side - Project Image */}
          <div className="relative h-64 md:h-full min-h-[250px] overflow-hidden border-2 border-white/10 group-hover:border-techno-cyan/30 transition-all duration-500 bg-dark-surface">
            {image ? (
              <>
                <Image
                  src={image}
                  alt={`${title} screenshot`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                  onError={(e) => {
                    console.error(`Failed to load image: ${image}`)
                    e.currentTarget.style.display = 'none'
                  }}
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-techno-cyan/10 to-techno-blue/10">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-20">📸</div>
                  <p className="text-white/40 text-sm font-mono">PROJECT_PREVIEW</p>
                </div>
              </div>
            )}
            
            {/* Corner markings */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-techno-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-techno-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-techno-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-techno-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
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
