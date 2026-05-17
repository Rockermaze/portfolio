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
    <section id="skills" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-techno-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-techno-magenta/10 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8 sm:mb-10 md:mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 sm:w-12 bg-techno-cyan"></div>
            <span className="text-techno-cyan font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              Tech_Stack
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-heading tracking-tighter leading-none text-enhanced">
            TECHNICAL<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', WebkitTextStrokeWidth: 'clamp(1px, 0.3vw, 2px)' }}>SKILLS</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl text-enhanced leading-relaxed">
            Comprehensive toolkit spanning languages, frameworks, databases, and development tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                  <div className="relative bg-dark-card/50 border border-white/5 p-4 sm:p-5 md:p-6 h-full transition-all duration-500 hover:bg-dark-card group-hover:border-techno-cyan/30">
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="text-xl sm:text-2xl md:text-3xl opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0">
                          {category.icon}
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide text-white text-enhanced font-heading">
                          {category.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.05) }}
                            className={`px-2 sm:px-2.5 py-1 sm:py-1.5 ${colors.bg} border ${colors.border} text-[10px] sm:text-xs font-mono ${colors.text} ${colors.bgHover} ${colors.borderHover} transition-all duration-300 cursor-default whitespace-nowrap`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 border-t border-r ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className={`absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 border-b border-l ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
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
          className="mt-8 sm:mt-10 text-center"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-white/10 font-mono text-[10px] sm:text-xs text-text-muted">
            <span className="text-techno-cyan">[</span> 
            {" "}SYSTEM_STATUS: OPERATIONAL{" "}
            <span className="text-techno-cyan">]</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}