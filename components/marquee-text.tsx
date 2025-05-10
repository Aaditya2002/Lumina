"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface MarqueeTextProps {
  children: ReactNode
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function MarqueeText({ children, direction = "left", speed = 50, className = "" }: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], direction === "left" ? [0, -speed * 100] : [-speed * 100, 0])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <div className="flex items-center">{children}</div>
        <div className="flex items-center ml-4">{children}</div>
      </motion.div>
    </div>
  )
}
