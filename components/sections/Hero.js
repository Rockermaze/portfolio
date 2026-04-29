"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import ParticleBackground from "../effects/ParticleBackground"
import MagneticButton from "../interactions/MagneticButton"
import GlitchText from "../interactions/GlitchText"
import { portfolioData } from "@/data/portfolio"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const [typedSpec, setTypedSpec] = useState("")
  const [specIndex, setSpecIndex] = useState(0)

  const fullName = portfolioData.name
  const specializations = portfolioData.specializations

  // Type name once on mount
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setTypedText(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  // Type and rotate specializations
  useEffect(() => {
    let currentIndex = 0
    let isDeleting = false
    let currentSpec = specializations[specIndex]

    const typeSpec = () => {
      if (!isDeleting && currentIndex <= currentSpec.length) {
        setTypedSpec(currentSpec.slice(0, currentIndex))
        currentIndex++
      } else if (!isDeleting && currentIndex > currentSpec.length) {
        // Wait before deleting
        setTimeout(() => {
          isDeleting = true
        }, 2000)
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--
        setTypedSpec(currentSpec.slice(0, currentIndex))
      } else if (isDeleting && currentIndex === 0) {
        // Move to next specialization
        isDeleting = false
        setSpecIndex((prev) => (prev + 1) % specializations.length)
      }
    }

    const interval = setInterval(typeSpec, isDeleting ? 50 : 100)
    return () => clearInterval(interval)
  }, [specIndex])

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden px-6 lg:px-16 xl:px-24 pt-20">
      <ParticleBackground />

      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-techno-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-techno-magenta/10 rounded-full blur-3xl" />

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-heading mb-8 leading-[0.9] tracking-tighter"
            >
              <span className="text-text-primary block text-xl md:text-2xl mb-4 font-mono opacity-50 uppercase tracking-[0.3em] text-enhanced">
                System.Initialize()
              </span>
              <span className="text-text-primary text-enhanced">I AM </span>
              <span className="block mt-4 text-white glow-text-cyan text-enhanced">
                <GlitchText text={typedText} />
              </span>
            </motion.h1>

            {/* Typing Specialization */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-10 font-mono border-l-4 border-techno-cyan/50 pl-6 py-3 bg-techno-cyan/5"
            >
              <p className="text-2xl md:text-3xl xl:text-4xl font-light tracking-tight">
                <span className="text-techno-cyan opacity-50 mr-3 text-base uppercase tracking-wider">FUNCTION:</span>
                <span className="text-text-secondary text-enhanced">
                  {typedSpec}
                  <span className="animate-pulse inline-block w-1.5 h-8 bg-techno-cyan ml-2 align-middle"></span>
                </span>
              </p>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "250px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-techno-cyan via-techno-blue to-transparent mb-8"
            />

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-10"
            >
              <p className="text-xl md:text-2xl xl:text-3xl text-text-secondary leading-relaxed max-w-2xl text-enhanced">
                {portfolioData.heroDescription}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <MagneticButton
                href="#projects"
                aria-label="View portfolio projects"
                className="group relative px-10 py-5 font-mono font-bold tracking-widest text-sm transition-all duration-300 overflow-hidden border-2 border-techno-cyan text-techno-cyan shadow-glow-cyan"
              >
                <div className="absolute inset-0 bg-techno-cyan translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative z-10 group-hover:text-dark-bg flex items-center">
                  VIEW_PORTFOLIO()
                  <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </MagneticButton>

              <MagneticButton
                href="#contact"
                aria-label="Get in touch"
                className="group relative px-10 py-5 font-mono font-bold tracking-widest text-sm transition-all duration-300 overflow-hidden border-2 border-white/30 text-white"
              >
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative z-10 group-hover:text-dark-bg flex items-center">
                  GET_IN_TOUCH()
                </div>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-techno-cyan/50 to-transparent"></div>

              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center border-2 border-white/10 hover:border-techno-cyan transition-all duration-300 hover:shadow-glow-cyan"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6 text-text-secondary group-hover:text-techno-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center border-2 border-white/10 hover:border-techno-cyan transition-all duration-300 hover:shadow-glow-cyan"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6 text-text-secondary group-hover:text-techno-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href={`mailto:${portfolioData.email}`}
                className="group relative w-14 h-14 flex items-center justify-center border-2 border-white/10 hover:border-techno-cyan transition-all duration-300 hover:shadow-glow-cyan"
                aria-label="Email Contact"
              >
                <svg className="w-6 h-6 text-text-secondary group-hover:text-techno-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              <div className="h-px w-16 bg-gradient-to-l from-techno-cyan/50 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Animated scanning bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-techno-cyan/50 shadow-glow-cyan z-20 animate-scanline opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Corner markings - Enhanced */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-techno-cyan z-20"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-techno-cyan z-20"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-techno-cyan z-20"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-techno-cyan z-20"></div>

              {/* Glowing background */}
              <div className="absolute inset-0 bg-techno-cyan/5 blur-3xl rounded-lg animate-pulse-slow"></div>

              {/* Profile image container */}
              <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] xl:w-[550px] xl:h-[550px] overflow-hidden border-2 border-white/10 bg-dark-card shadow-2xl transition-all duration-700 group-hover:border-techno-cyan/30 group-hover:shadow-glow-cyan">
                {/* Profile Image */}
                <Image
                  src="/profile.jpg"
                  alt="Rudra Ka.Patel"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />

                {/* Overlay Grid */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>

                {/* Data stream overlays - Enhanced */}
                <div className="absolute top-8 left-8 font-mono text-xs text-techno-cyan opacity-50 leading-relaxed tracking-widest bg-dark-bg/80 p-3 border border-techno-cyan/20">
                  CORE.OS_v2.0<br/>
                  STATUS.READY<br/>
                  LATENCY.0.02ms
                </div>

                <div className="absolute bottom-8 right-8 font-mono text-xs text-white/30 leading-relaxed tracking-widest text-right bg-dark-bg/80 p-3 border border-white/10">
                  AUTH_TOKEN: RK_8829<br/>
                  ENCRYPTION: AES-256
                </div>

                {/* Status Indicators */}
                <div className="absolute top-8 right-8 flex flex-col gap-2">
                  <div className="flex items-center gap-2 bg-dark-bg/80 px-3 py-2 border border-techno-lime/30">
                    <div className="w-2 h-2 bg-techno-lime rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-mono text-techno-lime">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
