"use client"

import { motion } from "framer-motion"
import HolographicCard from "../ui/HolographicCard"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C/C++", "Java", "Python", "JavaScript"],
    icon: "💻",
    color: "techno-cyan"
  },
  {
    title: "Web & Frameworks",
    skills: ["HTML", "CSS", "WordPress", "REST APIs", "React", "Node.js", "Express.js"],
    icon: "🌐",
    color: "techno-blue"
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "XAMPP"],
    icon: "🗄️",
    color: "techno-magenta"
  },
  {
    title: "Libraries/ML",
    skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "TensorFlow", "Keras"],
    icon: "🤖",
    color: "techno-purple"
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Figma"],
    icon: "🛠️",
    color: "techno-cyan"
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Fast Learner", "Communication"],
    icon: "💡",
    color: "techno-blue"
  }
]

export default function Skills() {
  const getColorClasses = (color) => {
    const colorMap = {
      'techno-cyan': {
        bg: 'bg-techno-cyan/5',
        bgHover: 'hover:bg-techno-cyan/10',
        border: 'border-techno-cyan/20',
        borderHover: 'hover:border-techno-cyan/40',
        text: 'text-techno-cyan/90',
        accent: 'border-techno-cyan/20'
      },
      'techno-blue': {
        bg: 'bg-techno-blue/5',
        bgHover: 'hover:bg-techno-blue/10',
        border: 'border-techno-blue/20',
        borderHover: 'hover:border-techno-blue/40',
        text: 'text-techno-blue/90',
        accent: 'border-techno-blue/20'
      },
      'techno-magenta': {
        bg: 'bg-techno-magenta/5',
        bgHover: 'hover:bg-techno-magenta/10',
        border: 'border-techno-magenta/20',
        borderHover: 'hover:border-techno-magenta/40',
        text: 'text-techno-magenta/90',
        accent: 'border-techno-magenta/20'
      },
      'techno-purple': {
        bg: 'bg-techno-purple/5',
        bgHover: 'hover:bg-techno-purple/10',
        border: 'border-techno-purple/20',
        borderHover: 'hover:border-techno-purple/40',
        text: 'text-techno-purple/90',
        accent: 'border-techno-purple/20'
      }
    }
    return colorMap[color] || colorMap['techno-cyan']
  }

  return (
    <section id="skills" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-techno-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-techno-magenta/10 rounded-full blur-3xl" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12 sm:mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-[2px] w-12 sm:w-16 bg-techno-cyan"></div>
            <span className="text-techno-cyan font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Tech_Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 font-heading tracking-tighter leading-none text-enhanced">
            TECHNICAL<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', WebkitTextStrokeWidth: 'clamp(1px, 0.3vw, 2px)' }}>SKILLS</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-text-secondary max-w-3xl text-enhanced leading-relaxed">
            Comprehensive toolkit spanning languages, frameworks, databases, and development tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {skillCategories.map((category, idx) => {
            const colors = getColorClasses(category.color)
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group"
              >
                <HolographicCard className="h-full">
                  <div className="relative bg-dark-card/50 border border-white/5 p-5 sm:p-6 md:p-8 h-full transition-all duration-500 hover:bg-dark-card group-hover:border-techno-cyan/30">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                        <div className="text-2xl sm:text-3xl md:text-4xl opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0">
                          {category.icon}
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide sm:tracking-wider text-white text-enhanced font-heading">
                          {category.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {category.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.05) }}
                            className={`px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 ${colors.bg} border ${colors.border} text-xs sm:text-sm font-mono ${colors.text} ${colors.bgHover} ${colors.borderHover} transition-all duration-300 cursor-default whitespace-nowrap`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-t border-r ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className={`absolute bottom-0 left-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-b border-l ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  </div>
                </HolographicCard>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 border border-white/10 font-mono text-xs sm:text-sm text-text-muted">
            <span className="text-techno-cyan">[</span> 
            {" "}SYSTEM_STATUS: OPERATIONAL{" "}
            <span className="text-techno-cyan">]</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}