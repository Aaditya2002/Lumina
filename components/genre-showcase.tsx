"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function GenreShowcase() {
  const [hoveredGenre, setHoveredGenre] = useState<string | null>(null)

  const genres = [
    { name: "Action", image: "https://v0.blob.com/yx7jm-genre-action.jpg", href: "/movies/genre/action" },
    { name: "Drama", image: "https://v0.blob.com/yx7jm-genre-drama.jpg", href: "/movies/genre/drama" },
    { name: "Sci-Fi", image: "https://v0.blob.com/yx7jm-genre-scifi.jpg", href: "/movies/genre/sci-fi" },
    { name: "Comedy", image: "https://v0.blob.com/yx7jm-genre-comedy.jpg", href: "/movies/genre/comedy" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">Browse by Genre</h2>
        <Link
          href="/genres"
          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          View All
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {genres.map((genre) => (
          <Link
            key={genre.name}
            href={genre.href}
            onMouseEnter={() => setHoveredGenre(genre.name)}
            onMouseLeave={() => setHoveredGenre(null)}
          >
            <motion.div
              className="relative aspect-video rounded-lg overflow-hidden premium-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={genre.image || "/placeholder.svg"} alt={genre.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-glow"
                  animate={{
                    scale: hoveredGenre === genre.name ? 1.1 : 1,
                    y: hoveredGenre === genre.name ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {genre.name}
                </motion.h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
