"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Plus, Star, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { ContentType } from "@/lib/types"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface ContentCardProps {
  content: ContentType
  showProgress?: boolean
  progress?: number
}

export function ContentCard({ content, showProgress = false, progress = 0 }: ContentCardProps) {
  const [isInList, setIsInList] = useState(false)
  const { toast } = useToast()

  const handleAddToList = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsInList(!isInList)

    toast({
      title: isInList ? "Removed from My List" : "Added to My List",
      description: isInList
        ? `${content.title} has been removed from your list`
        : `${content.title} has been added to your list`,
      variant: isInList ? "destructive" : "default",
    })
  }

  return (
    <motion.div whileHover={{ scale: 1.05, zIndex: 10 }} className="content-card w-[180px] md:w-[240px] premium-shadow">
      <Link href={`/watch/${content.id}`} className="block relative aspect-[2/3] rounded-lg overflow-hidden">
        <Image
          src={content.posterUrl}
          alt={content.title}
          fill
          className="object-cover rounded-lg transition-transform duration-500"
          sizes="(max-width: 768px) 180px, 240px"
        />

        <div className="content-card-overlay"></div>

        <div className="content-card-info">
          <div className="flex items-center justify-between mb-2">
            <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
              <Play className="h-4 w-4 fill-secondary-foreground" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8 rounded-full bg-background/20 border-background/30 hover:bg-background/40"
              onClick={handleAddToList}
            >
              {isInList ? <Check className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4" />}
            </Button>
          </div>

          <div className="flex items-center gap-1 text-xs mb-1 text-white">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            <span>{content.rating}</span>
            <span className="w-1 h-1 rounded-full bg-white/50 mx-1"></span>
            <span>{content.year}</span>
          </div>

          <h3 className="font-medium text-sm line-clamp-1 text-white">{content.title}</h3>
        </div>
      </Link>

      {showProgress && progress > 0 && (
        <div className="mt-2 px-0.5">
          <Progress value={progress} className="h-1" />
        </div>
      )}
    </motion.div>
  )
}
