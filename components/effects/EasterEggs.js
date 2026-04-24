"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EasterEggs() {
  const [konamiIdx, setKonamiIdx] = useState(0)
  const [showMatrix, setShowMatrix] = useState(false)
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIdx]) {
        const nextIdx = konamiIdx + 1
        if (nextIdx === konamiCode.length) {
          setShowMatrix(true)
          setKonamiIdx(0)
          setTimeout(() => setShowMatrix(false), 5000)
        } else {
          setKonamiIdx(nextIdx)
        }
      } else {
        setKonamiIdx(0)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konamiIdx])

  return (
    <AnimatePresence>
      {showMatrix && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10002] bg-black pointer-events-none flex items-center justify-center overflow-hidden"
        >
          <div className="text-techno-matrix font-mono text-xl grid grid-cols-20 gap-2">
            {[...Array(200)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-20, 1000],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="relative z-10 text-4xl font-mono text-techno-matrix tracking-[0.5em] animate-pulse">
            MATRIX_RELOADED
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
