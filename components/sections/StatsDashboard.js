"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  {
    icon: "💻",
    value: 15,
    label: "Projects Completed",
    suffix: "+",
    color: "text-techno-cyan",
    glow: "shadow-glow-cyan",
    bar: "bg-techno-cyan"
  },
  {
    icon: "⚡",
    value: 50000,
    label: "Lines of Code",
    suffix: "+",
    color: "text-techno-blue",
    glow: "shadow-glow-blue",
    bar: "bg-techno-blue"
  },
  {
    icon: "🎯",
    value: 10,
    label: "Technologies",
    suffix: "+",
    color: "text-techno-magenta",
    glow: "shadow-glow-magenta",
    bar: "bg-techno-magenta"
  },
  {
    icon: "☕",
    value: 1000,
    label: "Cups of Coffee",
    suffix: "+",
    color: "text-techno-lime",
    glow: "shadow-glow-lime",
    bar: "bg-techno-lime"
  }
]

function StatCard({ icon, value, label, suffix, color, glow, bar, delay }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative p-8 md:p-10 bg-dark-card/30 border-2 border-white/5 group hover:border-techno-cyan/20 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-3 opacity-10 font-mono text-5xl grayscale group-hover:grayscale-0 transition-all">
        {icon}
      </div>

      <div className={`text-5xl md:text-6xl font-bold font-mono mb-3 ${color} ${glow} text-enhanced`}>
        {count.toLocaleString()}{suffix}
      </div>

      <div className="text-sm md:text-base font-mono text-text-muted uppercase tracking-[0.2em]">
        {label}
      </div>

      <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ${bar}`} />
    </motion.div>
  )
}

export default function StatsDashboard() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-6 lg:px-16 xl:px-24 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-techno-blue"></div>
            <span className="text-techno-blue font-mono text-sm uppercase tracking-[0.3em]">
              System_Metrics
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
