"use client"

import { motion } from "framer-motion"
import ProjectCard from "../ui/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 lg:px-16 xl:px-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-techno-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-techno-magenta/10 rounded-full blur-3xl" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-16 bg-techno-cyan"></div>
            <span className="text-techno-cyan font-mono text-sm uppercase tracking-[0.3em]">
              Selected_Works
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl xl:text-9xl font-bold mb-8 font-heading tracking-tighter leading-none text-enhanced">
            FEATURED<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '3px rgba(255,255,255,0.5)' }}>PROJECTS</span>
          </h2>
          
          <p className="text-xl md:text-2xl xl:text-3xl text-text-secondary max-w-3xl text-enhanced leading-relaxed">
            Real-world applications showcasing expertise in AI/ML, full-stack development, and system architecture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Sign Language Recognition System"
            desc="Real-time sign recognition system combining Machine Learning and Web technologies. Flutter streams camera frames to a FastAPI WebSocket server where ML models detect hand landmarks and classify signs."
            tech="ML • FastAPI • WebSockets • Flutter"
            icon="🤟"
            link="https://github.com/Rockermaze"
            isLive={true}
            stars={12}
            forks={5}
            complexity={5}
          />

          <ProjectCard
            title="Smart POS System"
            desc="Concept POS platform for mobile shops including vendor management, inventory tracking, transaction history, due payments and refund handling."
            tech="React • Node.js • MongoDB"
            icon="🏪"
            link="https://github.com/Rockermaze"
            stars={8}
            forks={2}
            complexity={4}
          />

          <ProjectCard
            title="Windows Voice Assistant"
            desc="Voice assistant capable of executing OS commands such as shutdown, volume control and automation tasks."
            tech="Python • Speech Recognition"
            icon="🎤"
            link="https://github.com/Rockermaze"
            stars={15}
            forks={3}
            complexity={3}
          />

          <ProjectCard
            title="Task Manager App"
            desc="Basic Flutter productivity app to manage daily tasks with add, edit and delete functionality."
            tech="Flutter"
            icon="✅"
            link="https://github.com/Rockermaze"
            stars={4}
            forks={1}
            complexity={2}
          />
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 border border-white/10 font-mono text-sm text-text-muted">
            <span className="text-techno-cyan">[</span>
            {" "}MORE_PROJECTS: GITHUB_REPOSITORY{" "}
            <span className="text-techno-cyan">]</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}