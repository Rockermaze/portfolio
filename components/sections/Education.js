"use client"

import { motion } from "framer-motion"
import HolographicCard from "../ui/HolographicCard"

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Madhuben Bhanubhai Institute of Technology",
    location: "Anand, Gujarat",
    period: "June 2024 – Present",
    cgpa: "9.33",
    coursework: ["DSA", "Web Dev", "DBMS", "OS", "ML", "Data Science"]
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Bhailabhai and Bhikhubhai Institute of Technology",
    location: "Anand, Gujarat",
    period: "June 2021 - June 2024",
    cgpa: "9.48",
    coursework: []
  }
]

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-techno-cyan/10 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-[2px] w-12 sm:w-16 bg-techno-cyan"></div>
            <span className="text-techno-cyan font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Academic_Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 font-heading tracking-tighter leading-none text-enhanced">
            EDUCATION<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', WebkitTextStrokeWidth: 'clamp(1px, 0.3vw, 2px)' }}>CREDENTIALS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <HolographicCard>
                  <div className="bg-dark-card/30 border border-white/5 p-5 sm:p-6 md:p-8 h-full hover:bg-dark-card transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl sm:text-4xl">🎓</div>
                      <div className="text-right">
                        <div className="font-mono text-xs text-techno-cyan mb-1">CGPA</div>
                        <div className="text-xl sm:text-2xl font-bold text-white">{edu.cgpa}</div>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading text-enhanced">
                      {edu.degree}
                    </h3>

                    <p className="text-text-secondary mb-1 text-sm">{edu.institution}</p>
                    <p className="text-text-muted text-xs mb-4">{edu.location}</p>

                    <div className="font-mono text-xs text-techno-cyan mb-4">
                      {edu.period}
                    </div>

                    {edu.coursework.length > 0 && (
                      <>
                        <div className="text-xs text-text-muted mb-2 font-mono">COURSEWORK:</div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {edu.coursework.map((course, i) => (
                            <span key={i} className="px-2 py-1 bg-techno-cyan/5 border border-techno-cyan/20 text-xs font-mono text-techno-cyan/80">
                              {course}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </HolographicCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
