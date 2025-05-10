"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface HoverRevealProps {
  children: ReactNode
  imageUrl: string
  className?: string
}

export function HoverReveal({ children, imageUrl, className = "" }: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const { left, top } = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    })
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      <motion.div
        className="hover-reveal"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="hover-reveal-inner">
          <motion.div
            className="hover-reveal-img"
            animate={{
              transform: isHovered ? "scale(1)" : "scale(1.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Image src={imageUrl || "/placeholder.svg"} alt="Hover image" fill />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
