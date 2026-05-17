"use client"

import { motion } from "framer-motion"
import ProjectCard from "../ui/ProjectCard"
import ProjectCardWithImage from "../ui/ProjectCardWithImage"

export default function Projects() {
  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-techno-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-techno-magenta/10 rounded-full blur-3xl" />

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
              Selected_Works
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-heading tracking-tighter leading-none text-enhanced">
            FEATURED<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', WebkitTextStrokeWidth: 'clamp(1px, 0.3vw, 2px)' }}>PROJECTS</span>
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-text-secondary max-w-3xl text-enhanced leading-relaxed">
            Real-world applications showcasing expertise in AI/ML, full-stack development, and system architecture
          </p>
        </motion.div>

        {/* Projects with Images - Full Width */}
        <div className="space-y-6 mb-6">
          <ProjectCardWithImage
            title="Smart POS System"
            desc="Concept POS platform for mobile shops including vendor management, inventory tracking, transaction history, due payments and refund handling."
            tech="React • Node.js • MongoDB"
            link="https://github.com/Rockermaze"
            image="/pos-system.png"
          />

          <ProjectCardWithImage
            title="Windows Voice Assistant"
            desc="Voice assistant capable of executing OS commands such as shutdown, volume control and automation tasks."
            tech="Python • Speech Recognition"
            link="https://github.com/Rockermaze"
            image="/voice-assistant.png"
          />
        </div>

        {/* Regular Projects - Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Task Manager App"
            desc="Basic Flutter productivity app to manage daily tasks with add, edit and delete functionality."
            tech="Flutter"
            link="https://github.com/Rockermaze"
          />

          <ProjectCard
            title="Sign Language Recognition System"
            desc="Real-time sign recognition system combining Machine Learning and Web technologies. Flutter streams camera frames to a FastAPI WebSocket server where ML models detect hand landmarks and classify signs."
            tech="ML • FastAPI • WebSockets • Flutter"
            link="https://github.com/Rockermaze"
            isLive={true}
          />
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="inline-block px-4 py-2 border border-white/10 font-mono text-[10px] sm:text-xs text-text-muted">
            <span className="text-techno-cyan">[</span>
            {" "}MORE_PROJECTS: GITHUB_REPOSITORY{" "}
            <span className="text-techno-cyan">]</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}