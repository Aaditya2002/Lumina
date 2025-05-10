"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Plus, Info, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export function FeaturedShowcase() {
  const [isHovered, setIsHovered] = useState(false)
  const { toast } = useToast()

  const handleAddToList = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    toast({
      title: "Added to My List",
      description: "Oppenheimer has been added to your list",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative rounded-xl overflow-hidden premium-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[21/9] w-full">
        <Image src="https://v0.blob.com/yx7jm-featured.jpg" alt="Oppenheimer" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 premium-border">
              Featured
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair tracking-tight text-glow">
              Oppenheimer
            </h2>

            <div className="flex items-center gap-2 text-sm">
              <span>2023</span>
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
              <span>3h 0m</span>
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                <span>8.4</span>
              </div>
            </div>

            <p className="text-muted-foreground line-clamp-3">
              The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.
            </p>

            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="gap-2 px-8 premium-button">
                  <Link href="/watch/5">
                    <Play className="h-5 w-5 fill-primary-foreground" />
                    Play
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="gap-2 premium-border" onClick={handleAddToList}>
                  <Plus className="h-5 w-5" />
                  My List
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="gap-2 premium-border">
                  <Link href="/watch/5">
                    <Info className="h-5 w-5" />
                    Details
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="hidden md:block relative"
          >
            <div className="premium-card p-1 shadow-2xl">
              <Image
                src="https://v0.blob.com/yx7jm-movie5.jpg"
                alt="Oppenheimer"
                width={300}
                height={450}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
