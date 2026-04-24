"use client"

import { useEffect, useRef } from "react"

export default function SnowAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height - canvas.height
        this.size = Math.random() * 2 + 1
        this.speedY = Math.random() * 0.5 + 0.2
        this.speedX = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        this.y += this.speedY
        this.x += this.speedX

        // Reset particle when it goes off screen
        if (this.y > canvas.height) {
          this.y = -10
          this.x = Math.random() * canvas.width
        }
        if (this.x > canvas.width || this.x < 0) {
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})` // Cyan color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = 100
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}
