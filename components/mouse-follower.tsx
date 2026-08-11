"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function MouseFollower() {
  const [isSupported, setIsSupported] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    const updateSupport = () => setIsSupported(mediaQuery.matches)

    updateSupport()
    mediaQuery.addEventListener("change", updateSupport)

    return () => mediaQuery.removeEventListener("change", updateSupport)
  }, [])

  useEffect(() => {
    if (!isSupported) {
      setIsVisible(false)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isSupported])

  if (!isSupported) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
      >
        <div className="w-full h-full rounded-full bg-white opacity-50"></div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 1,
          y: mousePosition.y - 1,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
