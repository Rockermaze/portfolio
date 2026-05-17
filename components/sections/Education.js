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
  },
  {
    degree: "SSC (10th Standard)",
    institution: "J.P. Takkhar English Medium School",
    location: "Anand, Gujarat",
    period: "2021",
    cgpa: "84%",
    coursework: []
  }
]

export default function Education() {
  return (
    <section id="education" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-techno-cyan/10 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 sm:w-12 bg-techno-cyan"></div>
            <span className="text-techno-cyan font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              Academic_Journey
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-heading tracking-tighter leading-none text-enhanced">
            EDUCATION<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', WebkitTextStrokeWidth: 'clamp(1px, 0.3vw, 2px)' }}>CREDENTIALS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ height: '100%', minHeight: '320px' }}
              >
                <HolographicCard>
                  <div 
                    className="bg-dark-card/30 border border-white/5 p-4 sm:p-5 md:p-6 hover:bg-dark-card transition-all duration-500 flex flex-col"
                    style={{ height: '100%', minHeight: '320px' }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl sm:text-3xl">🎓</div>
                      <div className="text-right">
                        <div className="font-mono text-[10px] text-techno-cyan mb-1">
                          {edu.cgpa.includes('%') ? 'PERCENTAGE' : 'CGPA'}
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-white">{edu.cgpa}</div>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-heading text-enhanced" style={{ minHeight: '48px' }}>
                      {edu.degree}
                    </h3>

                    <p className="text-text-secondary mb-1 text-xs sm:text-sm" style={{ minHeight: '40px' }}>{edu.institution}</p>
                    <p className="text-text-muted text-[10px] sm:text-xs mb-3">{edu.location}</p>

                    <div className="font-mono text-[10px] text-techno-cyan mb-3">
                      {edu.period}
                    </div>

                    <div className="mt-auto" style={{ minHeight: '60px' }}>
                      {edu.coursework.length > 0 && (
                        <>
                          <div className="text-[10px] text-text-muted mb-2 font-mono">COURSEWORK:</div>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.coursework.map((course, i) => (
                              <span key={i} className="px-2 py-1 bg-techno-cyan/5 border border-techno-cyan/20 text-[10px] font-mono text-techno-cyan/80">
                                {course}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
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
