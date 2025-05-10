"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface StaggeredGridProps {
  children: ReactNode[]
  className?: string
  columns?: number
}

export function StaggeredGrid({ children, className = "", columns = 3 }: StaggeredGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
