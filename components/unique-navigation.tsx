"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Film, Tv, Heart, Search, User } from "lucide-react"

export function UniqueNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Calculate radius based on screen size
  const getRadius = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 600 ? 60 : 100;
    }
    return 100;
  };
  const [radius, setRadius] = useState(getRadius());

  // Update radius on resize
  useEffect(() => {
    const handleResize = () => setRadius(getRadius());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { icon: <Home className="h-5 w-5" />, label: "Home", href: "/" },
    { icon: <Film className="h-5 w-5" />, label: "Movies", href: "/movies" },
    { icon: <Tv className="h-5 w-5" />, label: "Shows", href: "/tv-shows" },
    { icon: <Heart className="h-5 w-5" />, label: "My List", href: "/my-list" },
    { icon: <Search className="h-5 w-5" />, label: "Search", href: "/search" },
    { icon: <User className="h-5 w-5" />, label: "Profile", href: "/profile" },
  ]

  return (
    <div className="circular-nav fixed right-10 bottom-10 z-50 relative">
      <motion.div
        className="circular-nav-toggle bg-primary text-primary-foreground"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="circular-nav-menu absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {navItems.map((item, index) => {
              // Calculate position in a circle
              const angle = (index * (2 * Math.PI)) / navItems.length
              const x = radius * Math.cos(angle)
              const y = radius * Math.sin(angle)

              return (
                <motion.div
                  key={index}
                  className="circular-nav-item"
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, x, y }}
                  exit={{ opacity: 0, x: 0, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{ left: "50%", top: "50%" }}
                >
                  <Link
                    href={item.href}
                    className="w-full h-full flex flex-col items-center justify-center bg-white text-primary rounded-full"
                  >
                    {item.icon}
                    <span className="text-xs mt-1">{item.label}</span>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
