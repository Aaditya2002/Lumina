"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { use } from "react"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  ChevronLeft,
  Plus,
  Check,
  Star,
} from "lucide-react"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { UniqueNavigation } from "@/components/unique-navigation"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedText } from "@/components/animated-text"
import { StaggeredGrid } from "@/components/staggered-grid"
import Link from "next/link"
import { getContentById } from "@/lib/data"

export default function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [isInList, setIsInList] = useState(false)

  const resolvedParams = use(params)
  const content = getContentById(resolvedParams.id)

  if (!content) {
    return <div>Content not found</div>
  }

  // Similar content
  const similarContent = [
    { id: "3", title: "Challengers", image: "https://v0.blob.com/yx7jm-movie3.jpg" },
    { id: "5", title: "Oppenheimer", image: "https://v0.blob.com/yx7jm-movie5.jpg" },
    { id: "7", title: "Kingdom of the Planet of the Apes", image: "https://v0.blob.com/yx7jm-movie7.jpg" },
    { id: "9", title: "The Fall Guy", image: "https://v0.blob.com/yx7jm-movie9.jpg" },
  ]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("ended", handleEnded)

    // Hide controls after 3 seconds of inactivity
    const timer = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("ended", handleEnded)
      clearTimeout(timer)
    }
  }, [isPlaying])

  const handlePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }

    setIsPlaying(!isPlaying)
    setShowControls(true)
  }

  const handleMuteToggle = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleFullscreenToggle = () => {
    const video = videoRef.current
    if (!video) return

    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }

    setIsFullscreen(!isFullscreen)
  }

  const handleMouseMove = () => {
    setShowControls(true)

    // Hide controls after 3 seconds of inactivity
    const timer = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }

  const skipForward = () => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = Math.min(video.currentTime + 10, video.duration)
  }

  const skipBackward = () => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = Math.max(video.currentTime - 10, 0)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const handleAddToList = () => {
    setIsInList(!isInList)
  }

  return (
    <div className="min-h-screen">
      <ScrollIndicator />
      <UniqueNavigation />

      {/* Video Player */}
      <section className="relative h-screen bg-black" onMouseMove={handleMouseMove}>
        <video ref={videoRef} className="w-full h-full object-contain" poster={content.image} onClick={handlePlayPause}>
          <source src="https://v0.blob.com/yx7jm-trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Back Button */}
        <AnimatePresence>
          {showControls && (
            <motion.button
              className="absolute top-8 left-8 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm"
              onClick={() => router.back()}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Video Controls */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute inset-x-0 bottom-0 p-8 video-player-controls"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill bg-secondary"
                    style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="p-3 rounded-full hover:bg-white/10" onClick={handlePlayPause}>
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </button>

                  <button className="p-3 rounded-full hover:bg-white/10" onClick={skipBackward}>
                    <SkipBack className="h-5 w-5" />
                  </button>

                  <button className="p-3 rounded-full hover:bg-white/10" onClick={skipForward}>
                    <SkipForward className="h-5 w-5" />
                  </button>

                  <button className="p-3 rounded-full hover:bg-white/10" onClick={handleMuteToggle}>
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>

                  <div className="text-sm">
                    {formatTime(currentTime)} / {formatTime(duration || 0)}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="p-3 rounded-full hover:bg-white/10" onClick={handleAddToList}>
                    {isInList ? <Check className="h-5 w-5 text-secondary" /> : <Plus className="h-5 w-5" />}
                  </button>

                  <button className="p-3 rounded-full hover:bg-white/10" onClick={handleFullscreenToggle}>
                    {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Content Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <AnimatedText>
                <h1 className="text-4xl md:text-5xl font-bold font-space">{content.title}</h1>
              </AnimatedText>

              <div className="flex flex-wrap gap-2 items-center">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {content.year}
                </span>
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                  {content.duration}
                </span>
                <div className="flex items-center gap-1 px-3 py-1 bg-tertiary text-tertiary-foreground rounded-full text-sm">
                  <Star className="h-3 w-3 fill-current" />
                  <span>{content.rating}</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">{content.description}</p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <button
                    className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full flex items-center gap-2 font-medium"
                    onClick={handlePlayPause}
                  >
                    <Play className="h-5 w-5 fill-current" />
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </MagneticButton>

                <MagneticButton>
                  <button
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center gap-2 font-medium"
                    onClick={handleAddToList}
                  >
                    {isInList ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    {isInList ? "Added to List" : "Add to List"}
                  </button>
                </MagneticButton>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Details</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Genres</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {content.genres.map((genre) => (
                        <span key={genre} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Director</h3>
                    <p className="mt-2">{content.director}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Cast</h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {content.cast.map((actor) => (
                      <div key={actor} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-muted overflow-hidden">
                          <Image
                            src="https://v0.blob.com/yx7jm-avatar.png"
                            alt={actor}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <span>{actor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-8">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image src={content.image || "/placeholder.svg"} alt={content.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedText>
            <h2 className="text-3xl font-bold mb-12 font-space">You May Also Like</h2>
          </AnimatedText>

          <StaggeredGrid columns={4}>
            {similarContent.map((item) => (
              <Link href={`/watch/${item.id}`} key={item.id} className="block">
                <div className="content-card aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="content-card-inner">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="p-2 bg-secondary text-secondary-foreground rounded-full">
                        <Play className="h-4 w-4 fill-current" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Lumina Streaming. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
