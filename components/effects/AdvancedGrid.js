"use client"

import { useEffect, useRef, useState } from "react"

export default function AdvancedGrid() {
  const canvasRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const nodesRef = useRef([])
  const animationRef = useRef(null)

  useEffect(() => {
    // Delay initialization to not block initial render
    const initTimeout = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(initTimeout)
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    
    // Reduce DPR for better performance
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Set canvas size
    const resize = () => {
      const width = window.innerWidth
      // Only render visible viewport height, not full scroll height
      const height = window.innerHeight
      
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)

      // Recreate nodes on resize
      createNodes()
    }

    // Grid configuration - optimized
    const gridSize = window.innerWidth < 768 ? 80 : 60 // Larger spacing on mobile
    const nodeRadius = 2
    const connectionDistance = 120 // Reduced from 150
    const glowDistance = 150 // Reduced from 200
    const repelForce = 8 // Reduced from 10

    // Create grid nodes - only for visible area
    const createNodes = () => {
      nodesRef.current = []
      const width = window.innerWidth
      const height = window.innerHeight // Only visible area

      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          nodesRef.current.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0
          })
        }
      }
    }

    resize()
    
    // Debounced resize
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resize, 250)
    }
    window.addEventListener('resize', handleResize)

    // Throttled mouse tracking
    let mouseTimeout
    const handleMouseMove = (e) => {
      if (mouseTimeout) return
      mouseTimeout = setTimeout(() => {
        setMousePos({ x: e.clientX, y: e.clientY })
        mouseTimeout = null
      }, 16) // ~60fps
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Throttled scroll tracking
    let scrollTimeout
    const handleScroll = () => {
      if (scrollTimeout) return
      scrollTimeout = setTimeout(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
        setScrollProgress(progress)
        scrollTimeout = null
      }, 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // Animation loop with performance optimization
    let lastFrameTime = 0
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime) => {
      // Throttle to target FPS
      if (currentTime - lastFrameTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastFrameTime = currentTime

      const width = window.innerWidth
      const height = window.innerHeight
      
      ctx.clearRect(0, 0, width, height)

      const nodes = nodesRef.current

      // Calculate color based on scroll (cyan → blue → magenta)
      const hue = 180 + (scrollProgress * 60)
      const baseColor = `hsla(${hue}, 100%, 50%, 0.1)`
      const glowColor = `hsla(${hue}, 100%, 50%, 0.3)`

      // Only draw connections for nodes near mouse (performance optimization)
      // DISABLED: Connection lines removed
      /*
      const nearbyNodes = nodes.filter(node => {
        const dx = mousePos.x - node.x
        const dy = mousePos.y - node.y
        return Math.sqrt(dx * dx + dy * dy) < connectionDistance * 2
      })

      nearbyNodes.forEach((node, i) => {
        nearbyNodes.slice(i + 1).forEach(otherNode => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.1
            ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })
      })
      */

      // Draw and update nodes
      nodes.forEach(node => {
        // Mouse interaction - repel from cursor
        const dx = mousePos.x - node.x
        const dy = mousePos.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < glowDistance && distance > 0) {
          // Repel from mouse
          const force = (1 - distance / glowDistance) * repelForce
          node.vx -= (dx / distance) * force * 0.1
          node.vy -= (dy / distance) * force * 0.1
        }

        // Apply velocity
        node.x += node.vx
        node.y += node.vy

        // Spring back to base position
        node.vx += (node.baseX - node.x) * 0.05
        node.vy += (node.baseY - node.y) * 0.05

        // Damping
        node.vx *= 0.9
        node.vy *= 0.9

        // Calculate distance from mouse for glow
        const nodeDistance = Math.sqrt(
          Math.pow(mousePos.x - node.x, 2) + 
          Math.pow(mousePos.y - node.y, 2)
        )

        // Draw glow if near mouse
        if (nodeDistance < glowDistance) {
          const glowIntensity = 1 - nodeDistance / glowDistance
          
          // Outer glow
          ctx.fillStyle = glowColor
          ctx.globalAlpha = glowIntensity * 0.3
          ctx.beginPath()
          ctx.arc(node.x, node.y, nodeRadius * 4 * glowIntensity, 0, Math.PI * 2)
          ctx.fill()
          ctx.globalAlpha = 1
        }

        // Draw node
        ctx.fillStyle = baseColor
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      clearTimeout(resizeTimeout)
      clearTimeout(mouseTimeout)
      clearTimeout(scrollTimeout)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isLoaded, mousePos.x, mousePos.y, scrollProgress])

  if (!isLoaded) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.5, willChange: 'transform' }}
    />
  )
}
