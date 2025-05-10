"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContentCard } from "@/components/content-card"
import type { ContentType } from "@/lib/types"

interface ContentRowProps {
  title: string
  contents: ContentType[]
  showProgress?: boolean
}

export function ContentRow({ title, contents, showProgress = false }: ContentRowProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef
      const scrollAmount =
        direction === "left"
          ? current.scrollLeft - current.offsetWidth * 0.75
          : current.scrollLeft + current.offsetWidth * 0.75

      current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="space-y-4">
      {title && <h2 className="text-xl font-semibold tracking-tight">{title}</h2>}

      <div className="relative group">
        <div
          ref={carouselRef}
          className="flex space-x-4 py-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {contents.map((content) => (
            <ContentCard key={content.id} content={content} showProgress={showProgress} progress={content.progress} />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </div>
  )
}
