"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useState, useEffect } from "react"
import GlitchText from "../interactions/GlitchText"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['skills', 'experience', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Skills', 'Experience', 'Projects', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/10 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      style={{ height: '80px' }}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-techno-cyan origin-left z-50 shadow-glow-cyan"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 h-full">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-10 h-10 border-2 border-techno-cyan flex items-center justify-center font-mono font-bold text-xl group-hover:bg-techno-cyan group-hover:text-dark-bg transition-all duration-300 shadow-glow-cyan">
            RK
          </div>
          <span className="hidden sm:block font-heading font-bold text-xl tracking-tighter text-white">
            <GlitchText text="RUDRA" /><span className="text-techno-cyan">.DEV</span>
          </span>
        </motion.div>

        <div className="hidden md:flex gap-10">
          {navItems.map((item) => {
            const href = item.toLowerCase()
            const isActive = activeSection === href

            return (
              <a
                key={item}
                href={`#${href}`}
                className={`relative group transition-all font-mono text-sm tracking-widest uppercase ${
                  isActive ? 'text-techno-cyan' : 'text-text-secondary hover:text-white'
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-techno-cyan transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            )
          })}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex flex-col items-center group/btn"
        >
          <div className="px-5 py-2 border border-techno-cyan text-techno-cyan font-mono text-xs tracking-widest uppercase hover:bg-techno-cyan hover:text-dark-bg transition-all duration-300">
            CONNECT_NOW()
          </div>
          <span className="absolute -bottom-6 text-[8px] font-mono text-text-muted opacity-0 group-hover/btn:opacity-100 transition-opacity">
            CMD + K FOR QUICK COMMANDS
          </span>
        </motion.a>
      </div>
    </motion.nav>
  )
}
