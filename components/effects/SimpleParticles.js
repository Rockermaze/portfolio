"use client"

import { useEffect, useRef, useState } from "react"

export default function SimpleParticles() {
  const canvasRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationId
    let particles = []

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.4 + 0.2,
        hue: 180 + Math.random() * 30
      }
    }

    const count = window.innerWidth < 768 ? 30 : 50
    for (let i = 0; i < count; i++) {
      particles.push(createParticle())
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.y > canvas.height) {
          p.y = -5
          p.x = Math.random() * canvas.width
        }
        if (p.x > canvas.width) p.x = 0
        if (p.x < 0) p.x = canvas.width

        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.opacity * 0.3})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    function handleResize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  )
}
