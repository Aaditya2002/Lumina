"use client"

import { motion } from "framer-motion"

interface UniqueLoaderProps {
  color?: string
  size?: string
}

export function UniqueLoader({ color = "var(--secondary)", size = "48px" }: UniqueLoaderProps) {
  return (
    <div className="loader" style={{ width: size, height: size }}>
      <motion.div
        className="loader-circle"
        style={{ borderColor: `${color} transparent transparent transparent`, width: size, height: size }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}
