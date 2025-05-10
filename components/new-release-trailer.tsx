"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, VolumeX, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NewReleaseTrailer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handleMuteToggle = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-4"
    >
      <h2 className="text-xl font-semibold tracking-tight">New Release Trailer</h2>

      <div className="relative aspect-video rounded-xl overflow-hidden premium-card">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://v0.blob.com/yx7jm-trailer-poster.jpg"
            alt="Dune: Part Two"
            fill
            className={`object-cover transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
          />
        </div>

        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
          poster="https://v0.blob.com/yx7jm-trailer-poster.jpg"
          muted={isMuted}
          onEnded={() => setIsPlaying(false)}
        >
          <source src="https://v0.blob.com/yx7jm-trailer.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="max-w-lg space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src="https://v0.blob.com/yx7jm-logo.png"
                alt="Dune: Part Two"
                width={300}
                height={150}
                className="w-[200px] md:w-[300px] object-contain mb-4"
              />
            </motion.div>

            <p className="text-sm md:text-base text-muted-foreground line-clamp-2 md:line-clamp-3">
              Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who
              destroyed his family.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="gap-2 premium-button">
                <Link href="/watch/1">
                  <Play className="h-5 w-5 fill-primary-foreground" />
                  Watch Now
                </Link>
              </Button>

              <Button variant="outline" className="gap-2 premium-border" onClick={handlePlayPause}>
                {isPlaying ? (
                  <>
                    <Pause className="h-5 w-5" />
                    Pause Trailer
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    Play Trailer
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-16 h-16 bg-background/30 backdrop-blur-sm border-white/20 hover:bg-background/50"
                onClick={handlePlayPause}
              >
                <Play className="h-8 w-8 fill-white" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {isPlaying && (
          <Button
            variant="outline"
            size="icon"
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-background/30 backdrop-blur-sm hover:bg-background/50 premium-border"
            onClick={handleMuteToggle}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        )}
      </div>
    </motion.div>
  )
}
