"use client"

import { useEffect, useState } from "react"

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Track mouse position
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <div 
      className="fixed inset-0 z-10 pointer-events-none transition-opacity duration-200"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        mixBlendMode: 'screen',
      }}
    />
  )
}
