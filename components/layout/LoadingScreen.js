"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const BOOT_SEQUENCES = [
  "CORE_OS v2.0.4 INITIALIZING...",
  "CHECKING HARDWARE ENCRYPTION... OK",
  "ESTABLISHING NEURAL LINK... OK",
  "LOADING ASSETS.PACK... 4.2MB",
  "VERIFYING SYSTEM PROTOCOLS... OK",
  "INITIALIZING GRAPHICS_ENGINE... OK",
  "SYNCING TEMPORAL DATA... OK",
  "SYSTEM STATUS: OPTIMAL"
]

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [bootIndex, setBootIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const duration = 2500 // 2.5s total load time
    const interval = 20
    const steps = duration / interval
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsComplete(true), 500)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const sequenceInterval = setInterval(() => {
      setBootIndex(prev => (prev < BOOT_SEQUENCES.length - 1 ? prev + 1 : prev))
    }, 300)

    return () => clearInterval(sequenceInterval)
  }, [])

  if (isComplete) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed inset-0 z-[10000] bg-dark-bg flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-md">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-8 opacity-40">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
          <div className="ml-2 font-mono text-[10px] tracking-widest text-text-muted uppercase">
            RUDRA_OS_LOADER.SH
          </div>
        </div>

        {/* Boot Sequence Text */}
        <div className="font-mono text-[10px] md:text-xs text-techno-cyan/60 mb-12 h-24 overflow-hidden">
          {BOOT_SEQUENCES.slice(0, bootIndex + 1).map((line, i) => (
            <div key={i} className="mb-1">
              <span className="text-white/20">[{mounted ? new Date().toLocaleTimeString() : '00:00:00'}]</span> {line}
            </div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1.5 h-3 bg-techno-cyan ml-1 align-middle"
          />
        </div>

        {/* Progress System */}
        <div className="space-y-4">
          <div className="flex justify-between font-mono text-[10px] tracking-widest uppercase">
            <span className="text-text-muted">System.Load()</span>
            <span className="text-techno-cyan">{Math.round(progress)}%</span>
          </div>

          <div className="relative h-[2px] w-full bg-white/5 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-techno-cyan shadow-[0_0_10px_rgba(0,243,255,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="flex justify-center">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[8px] font-mono text-text-muted uppercase tracking-[0.4em]"
            >
              Establishing connection to portfolio node...
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-[-1]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </motion.div>
  )
}
