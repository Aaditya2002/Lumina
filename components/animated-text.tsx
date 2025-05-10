"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import SplitType from "split-type"
import { gsap } from "gsap"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  once?: boolean
}

export function AnimatedText({ children, className = "", once = true }: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(textRef, { once, amount: 0.5 })

  useEffect(() => {
    if (!textRef.current || !isInView) return

    const text = new SplitType(textRef.current, { types: "chars, words" })
    const chars = text.chars

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.5,
        ease: "power4.out",
      },
    )
  }, [isInView])

  return (
    <motion.div ref={textRef} className={`animated-text ${className}`}>
      {children}
    </motion.div>
  )
}
