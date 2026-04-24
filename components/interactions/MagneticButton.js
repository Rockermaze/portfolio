"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"

export default function MagneticButton({ children, className = "", onClick, href }) {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15 }
  const quickX = useSpring(x, springConfig)
  const quickY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    // If within 100px radius
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    if (distance < 100) {
      x.set(distanceX * 0.3)
      y.set(distanceY * 0.3)
    } else {
      x.set(0)
      y.set(0)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: quickX,
        y: quickY,
      }}
      className={`relative inline-flex items-center justify-center transition-colors ${className}`}
    >
      {children}
    </Component>
  )
}
