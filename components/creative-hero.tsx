"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let devicePixelRatio: number
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    let supportsFinePointer = true
    let pointerActive = false

    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    const updatePointerSupport = () => {
      supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches
      pointerActive = supportsFinePointer
      if (supportsFinePointer) {
        const rect = canvas.getBoundingClientRect()
        targetX = rect.width / 2
        targetY = rect.height / 2
      }
    }

    updatePointerSupport()
    setCanvasDimensions()
    const handleResize = () => {
      updatePointerSupport()
      setCanvasDimensions()
    }
    window.addEventListener("resize", handleResize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    }

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const touch = e.touches[0]
      if (touch) {
        targetX = touch.clientX - rect.left
        targetY = touch.clientY - rect.top
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      pointerActive = true
      handleTouchMove(e)
    }

    const handleTouchEnd = () => {
      pointerActive = false
      const rect = canvas.getBoundingClientRect()
      targetX = rect.width / 2
      targetY = rect.height / 2
      mouseX = targetX
      mouseY = targetY
    }

    if (supportsFinePointer) {
      window.addEventListener("mousemove", handleMouseMove)
    } else {
      canvas.addEventListener("touchstart", handleTouchStart, { passive: true })
      canvas.addEventListener("touchmove", handleTouchMove, { passive: true })
      canvas.addEventListener("touchend", handleTouchEnd)
      canvas.addEventListener("touchcancel", handleTouchEnd)
    }

    const defaultCenter = () => {
      const rect = canvas.getBoundingClientRect()
      targetX = rect.width / 2
      targetY = rect.height / 2
    }

    if (!supportsFinePointer) {
      pointerActive = false
      defaultCenter()
    }

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      distance: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 5 + 2
        this.density = Math.random() * 30 + 1
        this.distance = 0

        // Create a gradient from purple to pink
        const hue = Math.random() * 60 + 270 // 270-330 range for purples and pinks
        this.color = `hsl(${hue}, 70%, 60%)`
      }

      update() {
        if (!pointerActive && !supportsFinePointer) {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 10
          }
          return
        }

        // Calculate distance between mouse/touch and particle
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        const forceDirectionX = dx / this.distance
        const forceDirectionY = dy / this.distance

        const maxDistance = 100
        const force = (maxDistance - this.distance) / maxDistance

        if (this.distance < maxDistance) {
          const directionX = forceDirectionX * force * this.density
          const directionY = forceDirectionY * force * this.density

          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 10
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    // Create particle grid
    const particlesArray: Particle[] = []
    const particleCount = 1000
    const gridSize = 30

    function init() {
      particlesArray.length = 0

      const canvasWidth = canvas.width / devicePixelRatio
      const canvasHeight = canvas.height / devicePixelRatio

      const numX = Math.floor(canvasWidth / gridSize)
      const numY = Math.floor(canvasHeight / gridSize)

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2
          const posY = y * gridSize + gridSize / 2
          particlesArray.push(new Particle(posX, posY))
        }
      }
    }

    init()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (!pointerActive && !supportsFinePointer) {
        const rect = canvas.getBoundingClientRect()
        targetX = rect.width / 2
        targetY = rect.height / 2
      }

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1
      mouseY += (targetY - mouseY) * 0.1

      // Draw connections
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()

        // Draw connections
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 30) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(180, 120, 255, ${0.2 - distance / 150})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)

      if (supportsFinePointer) {
        window.removeEventListener("mousemove", handleMouseMove)
      } else {
        canvas.removeEventListener("touchstart", handleTouchStart)
        canvas.removeEventListener("touchmove", handleTouchMove)
        canvas.removeEventListener("touchend", handleTouchEnd)
        canvas.removeEventListener("touchcancel", handleTouchEnd)
      }
    }
  }, [])

  return (
    <motion.div
      className="hidden md:block w-full h-[400px] md:h-[500px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
