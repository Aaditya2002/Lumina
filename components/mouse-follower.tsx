"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseEnter = () => {
      document.addEventListener("mousemove", mouseMove)
    }

    const handleMouseLeave = () => {
      document.removeEventListener("mousemove", mouseMove)
    }

    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousemove", mouseMove)

    // Add event listeners for interactive elements
    const links = document.querySelectorAll("a, button, .interactive")
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => setCursorVariant("hover"))
      link.addEventListener("mouseleave", () => setCursorVariant("default"))
    })

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousemove", mouseMove)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => setCursorVariant("hover"))
        link.removeEventListener("mouseleave", () => setCursorVariant("default"))
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: "#fff",
      height: 24,
      width: 24,
      opacity: 0.5,
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: "#fff",
      height: 64,
      width: 64,
      opacity: 0.4,
    },
  }

  const dotVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      opacity: 0,
    },
  }

  return (
    <>
      <motion.div
        className="cursor hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-dot hidden md:block"
        variants={dotVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  )
}
