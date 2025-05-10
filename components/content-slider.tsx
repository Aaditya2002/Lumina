"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContentCard } from "@/components/content-card"
import type { ContentType } from "@/lib/types"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface ContentSliderProps {
  title: string
  contents: ContentType[]
  showProgress?: boolean
}

export function ContentSlider({ title, contents, showProgress = false }: ContentSliderProps) {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const swiperRef = useRef<any>(null)

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full hover:bg-background/80 hover:text-primary ${isBeginning ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handlePrev}
            disabled={isBeginning}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full hover:bg-background/80 hover:text-primary ${isEnd ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleNext}
            disabled={isEnd}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="relative group">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
          spaceBetween={16}
          slidesPerView="auto"
          modules={[Navigation, Pagination]}
          className="!overflow-visible"
        >
          {contents.map((content) => (
            <SwiperSlide key={content.id} className="!w-auto">
              <ContentCard content={content} showProgress={showProgress} progress={content.progress} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  )
}
