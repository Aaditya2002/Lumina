"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, Info, VolumeX, Volume2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { ContentType } from "@/lib/types"

interface HeroBannerProps {
  content: ContentType
}

export function HeroBanner({ content }: HeroBannerProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Simulate video loading after 2 seconds
    const timer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <Image
          src="https://v0.blob.com/yx7jm-hero.jpg"
          alt={content.title}
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0" : "opacity-100"}`}
        />

        {isVideoLoaded && (
          <video autoPlay loop muted={isMuted} className="absolute inset-0 w-full h-full object-cover">
            <source src="https://v0.blob.com/yx7jm-hero-video.mp4" type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background"></div>

        {/* Animated particles overlay */}
        <div className="absolute inset-0 bg-[url('https://v0.blob.com/yx7jm-noise.png')] opacity-[0.02] mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-32 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl space-y-4"
        >
          {content.logo ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image
                src="https://v0.blob.com/yx7jm-logo.png"
                alt={content.title}
                width={400}
                height={200}
                className="w-[300px] md:w-[400px] object-contain mb-6"
              />
            </motion.div>
          ) : (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold font-playfair tracking-tight text-glow"
            >
              {content.title}
            </motion.h1>
          )}

          <div className="flex flex-wrap gap-2 items-center text-sm">
            <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 premium-border">
              {content.type === "movie" ? "Movie" : "Series"}
            </Badge>
            <span>{content.year}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
            <span>{content.duration}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
              <span>{content.rating}</span>
            </div>
          </div>

          <p className="text-base md:text-lg text-muted-foreground line-clamp-3 md:line-clamp-4">
            {content.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="gap-2 px-8 premium-button">
                <Play className="h-5 w-5 fill-primary-foreground" />
                Play
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="gap-2 premium-border">
                <Info className="h-5 w-5" />
                More Info
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Video Controls */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-32 right-4 md:right-12 bg-background/30 backdrop-blur-sm hover:bg-background/50 premium-border"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
      </motion.div>
    </div>
  )
}
