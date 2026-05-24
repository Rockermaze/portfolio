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

const freelance = {
  title: "Freelance Developer / Product Developer",
  company: "YourPOS",
  period: "Jan 2024 – Present",
  responsibilities: [
    "Developed and maintained a web-based POS (Point of Sale) system tailored for small businesses and retail operations",
    "Implemented core features including billing, inventory management, and transaction tracking for real-time business insights",
    "Integrated backend APIs and optimized database queries to ensure fast and reliable performance",
    "Designed responsive and user-friendly UI to enhance usability across desktop and mobile platforms",
    "Customized modules based on client requirements, improving workflow automation and operational efficiency"
  ],
  technologies: ["React", "Node.js", "MongoDB", "REST APIs", "JavaScript"]
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
    <section id="experience" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 right-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-techno-magenta/10 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 sm:w-12 bg-techno-magenta"></div>
            <span className="text-techno-magenta font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              Professional_Exp
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-heading tracking-tighter leading-none text-enhanced">
            WORK<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', WebkitTextStrokeWidth: 'clamp(1px, 0.3vw, 2px)' }}>EXPERIENCE</span>
          </h2>

          <div className="flex flex-col gap-6 md:gap-8">
            {/* Freelance - YourPOS */}
            <HolographicCard>
              <div className="bg-dark-card/30 border border-white/5 p-4 sm:p-5 md:p-6 hover:bg-dark-card transition-all duration-500 border-l-4 border-l-techno-cyan">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading text-enhanced">
                      {freelance.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary mb-1">{freelance.company}</p>
                    <div className="font-mono text-[10px] text-techno-cyan">
                      {freelance.period}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl">💼</div>
                </div>

                <ul className="space-y-2 mb-4">
                  {freelance.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary leading-relaxed group/item">
                      <span className="text-techno-cyan opacity-40 group-hover/item:opacity-100 text-sm sm:text-base mt-0.5 flex-shrink-0">▸</span>
                      <span className="group-hover/item:text-white transition-colors text-enhanced">{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-[10px] text-text-muted mb-2 font-mono">TECHNOLOGIES:</div>
                <div className="flex flex-wrap gap-1.5">
                  {freelance.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-techno-cyan/5 border border-techno-cyan/20 text-[10px] font-mono text-techno-cyan/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </HolographicCard>

            {/* Internship - Infonaya */}
            <HolographicCard>
              <div className="bg-dark-card/30 border border-white/5 p-4 sm:p-5 md:p-6 hover:bg-dark-card transition-all duration-500 border-l-4 border-l-techno-magenta">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading text-enhanced">
                      {internship.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary mb-1">{internship.company}</p>
                    <div className="font-mono text-[10px] text-techno-magenta">
                      {internship.period}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl">💼</div>
                </div>

                <ul className="space-y-2 mb-4">
                  {internship.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary leading-relaxed group/item">
                      <span className="text-techno-magenta opacity-40 group-hover/item:opacity-100 text-sm sm:text-base mt-0.5 flex-shrink-0">▸</span>
                      <span className="group-hover/item:text-white transition-colors text-enhanced">{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-[10px] text-text-muted mb-2 font-mono">TECHNOLOGIES:</div>
                <div className="flex flex-wrap gap-1.5">
                  {internship.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-techno-magenta/5 border border-techno-magenta/20 text-[10px] font-mono text-techno-magenta/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </HolographicCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
