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

const internship = {
  title: "Summer Intern",
  company: "Infonaya Software",
  period: "June 2022",
  responsibilities: [
    "Developed and customized WordPress websites using Astra and Elementor based on client requirements",
    "Optimized site performance and SEO using Yoast SEO and GTmetrix, improving speed and visibility",
    "Managed content, configured plugins, and enhanced UI/UX while ensuring responsive design and security"
  ],
  technologies: ["WordPress", "Astra", "Elementor", "Yoast SEO", "GTmetrix"]
}

const timeline = [
  {
    year: "2026",
    title: "AI Systems & Automation",
    icon: "🤖",
    color: "from-techno-cyan to-techno-blue",
    skills: ["Python", "OpenAI", "Speech Recognition", "OS Automation"],
    items: [
      "Developing Windows Voice Assistant",
      "OS interaction & speech processing",
      "Focus: Scalable ML applications"
    ]
  },
  {
    year: "2025",
    title: "Real-Time ML Applications",
    icon: "⚡",
    color: "from-techno-blue to-techno-cyan",
    skills: ["FastAPI", "WebSockets", "Flutter", "Mediapipe"],
    items: [
      "Built Sign Language Recognition System",
      "Real-time ML inference with WebSockets",
      "Developed Smart POS System (MERN)",
      "Mobile-to-server ML pipelines"
    ]
  },
  {
    year: "2025",
    title: "Machine Learning Foundations",
    icon: "🧠",
    color: "from-techno-cyan to-techno-purple",
    skills: ["NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Plotly", "TensorFlow", "Keras"],
    items: [
      "Studied ML pipeline: preprocessing → training → inference",
      "Computer vision & hand landmark detection",
      "Feature extraction techniques"
    ]
  },
  {
    year: "2024-2025",
    title: "Mobile Development",
    icon: "📱",
    color: "from-techno-blue to-techno-magenta",
    skills: ["Flutter", "Dart", "Firebase", "State Management"],
    items: [
      "Started Flutter development",
      "Built Task Manager productivity app",
      "Experimented with WebSocket communication"
    ]
  },
  {
    year: "2024",
    title: "Computer Science Foundations",
    icon: "💻",
    color: "from-techno-purple to-techno-blue",
    skills: ["Java", "Data Structures", "Algorithms", "DBMS"],
    items: [
      "Data structures, algorithms & OS concepts",
      "Built Java projects: payroll & file systems",
      "Software engineering & system design principles"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-techno-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-techno-magenta/10 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24 md:mb-32"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-[2px] w-12 sm:w-16 bg-techno-cyan"></div>
            <span className="text-techno-cyan font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Education
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 font-heading tracking-tighter leading-none text-enhanced">
            ACADEMIC<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', WebkitTextStrokeWidth: 'clamp(1px, 0.3vw, 2px)' }}>BACKGROUND</span>
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

        {/* Internship Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24 md:mb-32"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-[2px] w-12 sm:w-16 bg-techno-magenta"></div>
            <span className="text-techno-magenta font-mono text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Internship
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 font-heading tracking-tighter leading-none text-enhanced">
            WORK<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', WebkitTextStrokeWidth: 'clamp(1px, 0.3vw, 2px)' }}>EXPERIENCE</span>
          </h2>

          <HolographicCard>
            <div className="bg-dark-card/30 border border-white/5 p-5 sm:p-6 md:p-8 hover:bg-dark-card transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading text-enhanced">
                    {internship.title}
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary mb-1">{internship.company}</p>
                  <div className="font-mono text-xs text-techno-magenta">
                    {internship.period}
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl">💼</div>
              </div>

              <ul className="space-y-3 mb-6">
                {internship.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm text-text-secondary leading-relaxed group/item">
                    <span className="text-techno-magenta opacity-40 group-hover/item:opacity-100 text-base sm:text-lg mt-0.5 flex-shrink-0">▸</span>
                    <span className="group-hover/item:text-white transition-colors text-enhanced">{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="text-xs text-text-muted mb-2 font-mono">TECHNOLOGIES:</div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {internship.technologies.map((tech, i) => (
                  <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-techno-magenta/5 border border-techno-magenta/20 text-xs font-mono text-techno-magenta/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </HolographicCard>
        </motion.div>
        
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
              Timeline_Log
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 md:mb-8 font-heading tracking-tighter leading-none text-enhanced">
            EXPERIENCE<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)', WebkitTextStrokeWidth: 'clamp(1px, 0.4vw, 3px)' }}>HISTORY</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-text-secondary max-w-3xl text-enhanced leading-relaxed">
            Journey through technology, from foundational CS concepts to advanced AI systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 overflow-hidden">
            {/* Animated data flow along timeline */}
            <motion.div
              className="absolute w-full bg-gradient-to-b from-transparent via-techno-cyan to-transparent h-40"
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative mb-16 sm:mb-20 md:mb-24 last:mb-0 flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              {/* Timeline dot with pulse */}
              <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-dark-bg border border-techno-cyan z-10">
                <motion.div
                  className="absolute inset-0 rounded-full bg-techno-cyan"
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Year - Side indicator */}
              <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? 'text-right pr-12 lg:pr-16' : 'text-left pl-12 lg:pl-16'} font-mono text-2xl lg:text-3xl xl:text-4xl font-black text-white/20`}>
                {item.year}
              </div>

              {/* Content Card */}
              <div className="ml-14 sm:ml-16 md:ml-0 md:w-1/2 flex justify-start items-center w-full">
                <HolographicCard className={`w-full max-w-lg ${idx % 2 === 0 ? 'md:ml-12 lg:ml-16' : 'md:mr-12 lg:mr-16'}`}>
                  <div className="relative bg-dark-card/30 border border-white/5 p-5 sm:p-6 md:p-8 w-full transition-all duration-500 hover:bg-dark-card">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-mono text-xs text-techno-cyan font-bold tracking-widest uppercase">
                        YEAR: {item.year}
                      </div>
                      <div className="text-lg sm:text-xl">{item.icon}</div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-tight font-heading text-enhanced">
                      {item.title}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {item.items.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-text-secondary font-mono leading-relaxed group/item">
                          <span className="text-techno-cyan opacity-40 group-hover/item:opacity-100 text-base sm:text-lg flex-shrink-0">▸</span>
                          <span className="group-hover/item:text-white transition-colors text-enhanced">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-techno-cyan/5 border border-techno-cyan/20 text-xs font-mono text-techno-cyan/80">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </HolographicCard>
              </div>
            </motion.div>
          ))}
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
            {" "}TIMELINE_END: CONTINUOUS_LEARNING{" "}
            <span className="text-techno-cyan">]</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
