"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion } from "framer-motion"

interface HorizontalScrollSectionProps {
  children: ReactNode
  className?: string
}

export function HorizontalScrollSection({ children, className = "" }: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (!containerRef.current) return
      setContainerWidth(containerRef.current.scrollWidth)
      setScrollWidth(containerRef.current.scrollWidth - window.innerWidth)
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollPosition = window.scrollY
      const sectionTop = containerRef.current.offsetTop
      const sectionHeight = containerRef.current.offsetHeight
      const sectionBottom = sectionTop + sectionHeight

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        const scrollPercentage = (scrollPosition - sectionTop) / (sectionHeight - window.innerHeight)
        const translateX = -scrollWidth * scrollPercentage

        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(${translateX}px)`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollWidth])

  return (
    <div className={`horizontal-scroll-section ${className}`}>
      <motion.div ref={containerRef} className="horizontal-scroll-container">
        {children}
      </motion.div>
    </div>
  )
}
