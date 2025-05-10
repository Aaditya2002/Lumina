"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import SplitType from "split-type"
import { gsap } from "gsap"

export function PreLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Split text into characters for animation
    const text = new SplitType("#preloader-text", { types: "chars" })
    const chars = text.chars

    // Animate characters
    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power4.out",
        onComplete: () => {
          // Animate out after completion
          gsap.to(chars, {
            y: -100,
            opacity: 0,
            stagger: 0.03,
            delay: 0.5,
            duration: 0.5,
            ease: "power4.in",
          })

          // Hide preloader
          setTimeout(() => {
            setLoading(false)
          }, 1800)
        },
      },
    )
  }, [])

  if (!loading) return null

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="preloader-text" id="preloader-text">
        LUMINA
      </div>
    </motion.div>
  )
}
