"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function GlitchText({ text, className = "" }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{text}</span>

      {isHovered && (
        <>
          <motion.span
            className="absolute top-0 left-0 -z-10 text-techno-cyan opacity-70 w-full h-full"
            animate={{
              x: [-2, 2, -1, 0, 2],
              y: [1, -1, 2, 0, -2],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 -z-20 text-techno-magenta opacity-70 w-full h-full"
            animate={{
              x: [2, -2, 1, 0, -2],
              y: [-1, 1, -2, 0, 2],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  )
}
