"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState } from "react"

export default function HolographicCard({ children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position tracking
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for smooth tilt
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  // Transform mouse position to tilt rotation (±10deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  // Transform mouse position to glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Normalize to -0.5 to 0.5
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
      className={`relative group ${className}`}
    >
      {/* Hexagonal pattern background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 w-full h-full" style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}>
        {children}
      </div>

      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`,
        }}
      />

      {/* Border glow */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-techno-cyan/20 via-transparent to-techno-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none z-0" />
    </motion.div>
  )
}
