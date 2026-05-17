"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="about" 
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden px-4 lg:px-8 xl:px-12 py-16"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-techno-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-techno-magenta/10 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading">
              ABOUT_ME()
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-techno-cyan/50 to-transparent ml-4"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-12 items-center">
          {/* Left side - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Description */}
            <div className="space-y-3 text-text-secondary text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I'm <span className="text-techno-cyan font-semibold">Rudra Ka.Patel</span>, 
                a Full Stack Developer and AI/ML Engineer passionate about building intelligent 
                systems that solve real-world problems.
              </p>
              
              <p>
                I specialize in combining <span className="text-techno-cyan">Machine Learning</span>, 
                <span className="text-techno-cyan"> Backend Development</span>, and 
                <span className="text-techno-cyan"> Modern Web Technologies</span> to create 
                scalable applications—from real-time sign language recognition systems to 
                full-stack web platforms.
              </p>

              <p>
                When I'm not coding, I'm exploring new technologies and contributing to 
                open-source projects.
              </p>
            </div>

            {/* Tech Highlights */}
            <div className="pt-6">
              <p className="text-sm font-mono text-techno-cyan mb-4 tracking-wider">
                CORE_TECHNOLOGIES:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Python & FastAPI",
                  "React & Next.js",
                  "Node.js & Express",
                  "MongoDB & SQL",
                  "TensorFlow & PyTorch",
                  "Docker & AWS"
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-text-secondary"
                  >
                    <span className="text-techno-cyan text-xs">▹</span>
                    <span className="text-sm">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Quote Container */}
            <div className="relative group">
              {/* Corner markings */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-techno-cyan z-10"></div>
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-techno-cyan z-10"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-techno-cyan z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-techno-cyan z-10"></div>

              {/* Glowing background */}
              <div className="absolute inset-0 bg-techno-cyan/5 blur-2xl rounded-lg"></div>

              {/* Quote Card */}
              <div className="relative bg-dark-card border-2 border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 group-hover:border-techno-cyan/30 transition-all duration-500 shadow-2xl">
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-4xl sm:text-5xl md:text-6xl text-techno-cyan/20 font-serif leading-none">
                  "
                </div>

                {/* Quote Text */}
                <div className="relative z-10 pt-6 sm:pt-8">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white font-light leading-relaxed mb-4 sm:mb-6 italic">
                    Any fool can write code that a computer can understand. 
                    Good programmers write code that humans can understand.
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-techno-cyan/50 to-transparent"></div>
                    <p className="text-techno-cyan font-mono text-xs sm:text-sm tracking-wider">
                      MARTIN FOWLER
                    </p>
                  </div>

                  {/* Additional decorative element */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                    <p className="text-text-secondary text-xs sm:text-sm font-mono">
                      <span className="text-techno-cyan">PHILOSOPHY:</span> Clean code, scalable architecture, meaningful impact
                    </p>
                  </div>
                </div>

                {/* Closing Quote Icon */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-4xl sm:text-5xl md:text-6xl text-techno-cyan/20 font-serif leading-none">
                  "
                </div>

                {/* Animated scanning line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-techno-cyan/50 shadow-glow-cyan opacity-0 group-hover:opacity-100 group-hover:animate-scanline transition-opacity"></div>
              </div>

              {/* Data overlay */}
              <div className="absolute top-6 right-6 font-mono text-[9px] text-techno-cyan/50 bg-dark-bg/90 px-2 py-1 border border-techno-cyan/20 z-20">
                QUOTE.LOADED
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4"
            >
              {[
                { label: "Projects", value: "15+" },
                { label: "Technologies", value: "20+" },
                { label: "Experience", value: "2+ Yrs" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-dark-card border border-white/10 p-3 sm:p-4 text-center hover:border-techno-cyan/30 transition-all duration-300"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-techno-cyan mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-text-secondary font-mono tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
