"use client"

import { useEffect, useState } from "react"

export default function ParticleBackground() {
  const [particles, setParticles] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Generate particles
    const particleCount = isMobile ? 10 : 30
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 2, // 2-4px
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 30 + 30, // 30-60s
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.3, // 0.3-0.6
    }))
    setParticles(newParticles)

    return () => window.removeEventListener('resize', checkMobile)
  }, [isMobile])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-glow"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            filter: 'blur(1px)',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }
      `}</style>
    </div>
  )
}
