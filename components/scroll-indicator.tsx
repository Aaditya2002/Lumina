"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="scroll-indicator"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: "0%" }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.1, ease: "linear" }}
    />
  )
}
