"use client"

import { motion } from "framer-motion"

export function AnimatedShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="animated-shape pastel-gradient-1"
        style={{
          width: "30vw",
          height: "30vw",
          top: "10%",
          left: "5%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="animated-shape pastel-gradient-2"
        style={{
          width: "25vw",
          height: "25vw",
          top: "60%",
          left: "15%",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="animated-shape pastel-gradient-3"
        style={{
          width: "20vw",
          height: "20vw",
          top: "30%",
          right: "10%",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="animated-shape pastel-gradient-4"
        style={{
          width: "35vw",
          height: "35vw",
          bottom: "5%",
          right: "5%",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
