"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { AnimatedShapes } from "@/components/animated-shapes"
import { UniqueNavigation } from "@/components/unique-navigation"
import { HorizontalScrollSection } from "@/components/horizontal-scroll-section"
import { MagneticButton } from "@/components/magnetic-button"
import { MarqueeText } from "@/components/marquee-text"
import { StaggeredGrid } from "@/components/staggered-grid"
import { HoverReveal } from "@/components/hover-reveal"
import { AnimatedText } from "@/components/animated-text"
import { Play, Plus, Info, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { trendingNow, newReleases, continueWatching } from "@/lib/data"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const categories = ["all", "trending", "new", "originals", "continue"]

  // Sample content data
  const featuredContent = trendingNow[0]

  const contentItems = [
    ...trendingNow,
    ...newReleases,
    ...continueWatching,
  ]

  const filteredContent =
    activeCategory === "all" ? contentItems : contentItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen">
      <ScrollIndicator />
      <AnimatedShapes />
      <UniqueNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedText>
                <h1 className="text-5xl md:text-7xl font-bold font-space">
                  Reimagine <br /> Your Streaming <br /> Experience
                </h1>
              </AnimatedText>

              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Discover a completely new way to explore and enjoy your favorite content
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <MagneticButton>
                  <Link
                    href="/explore"
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-full flex items-center gap-2 font-medium"
                  >
                    Start Exploring
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <Link
                    href="/about"
                    className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full flex items-center gap-2 font-medium"
                  >
                    Learn More
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src={featuredContent.posterUrl}
                  alt={featuredContent.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-2xl font-bold mb-2">{featuredContent.title}</h2>
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <span>{featuredContent.year}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                    <span>{featuredContent.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{featuredContent.rating}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="p-3 bg-secondary text-secondary-foreground rounded-full">
                      <Play className="h-5 w-5 fill-current" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <Plus className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <Info className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-16">
        <MarqueeText className="py-8 text-6xl font-bold opacity-20">
          <span className="mx-4">MOVIES</span>
          <span className="mx-4">TV SHOWS</span>
          <span className="mx-4">ORIGINALS</span>
          <span className="mx-4">DOCUMENTARIES</span>
          <span className="mx-4">ANIMATIONS</span>
        </MarqueeText>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-space">Discover Content</h2>
          </AnimatedText>

          <div className="unique-tabs mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`unique-tab ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <StaggeredGrid columns={4}>
            {filteredContent.map((item) => (
              <Link href={`/watch/${item.id}`} key={item.id} className="block">
                <div className="content-card aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={item.posterUrl}
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

      {/* Horizontal Scroll Section */}
      <section className="py-16 h-screen">
        <div className="container mx-auto px-4 mb-8">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold font-space">Featured Collections</h2>
          </AnimatedText>
        </div>

        <HorizontalScrollSection className="h-[80vh]">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="horizontal-scroll-item w-screen px-4 flex items-center">
              <div className="w-full max-w-5xl mx-auto">
                <div className="grid grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">Collection {item}</h3>
                    <p className="text-muted-foreground">
                      A curated collection of the best content, handpicked for your enjoyment.
                    </p>
                    <MagneticButton>
                      <Link
                        href={`/collection/${item}`}
                        className="px-6 py-3 bg-tertiary text-tertiary-foreground rounded-full flex items-center gap-2 font-medium"
                      >
                        Explore Collection
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </MagneticButton>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${item + 5}.jpg`}
                      alt={`Collection ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </HorizontalScrollSection>
      </section>

      {/* Interactive Hover Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-space">Trending Now</h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trendingNow.slice(0, 4).map((item) => (
              <HoverReveal
                key={item.id}
                imageUrl={item.posterUrl}
                className="p-8 border border-border rounded-2xl hover:border-secondary transition-colors duration-300"
              >
                <Link href={`/watch/${item.id}`} className="block">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">Hover to preview</p>
                </Link>
              </HoverReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-space">Ready to Experience Lumina?</h2>
          </AnimatedText>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Join us today and discover a completely new way to enjoy your favorite content
          </motion.p>

          <MagneticButton>
            <Link
              href="/signup"
              className="px-12 py-6 bg-quaternary text-quaternary-foreground rounded-full text-xl font-medium inline-block"
            >
              Get Started
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-space">LUMINA</h3>
              <p className="text-muted-foreground">A completely reimagined streaming experience</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/movies" className="text-muted-foreground hover:text-foreground transition-colors">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link href="/tv-shows" className="text-muted-foreground hover:text-foreground transition-colors">
                    TV Shows
                  </Link>
                </li>
                <li>
                  <Link href="/my-list" className="text-muted-foreground hover:text-foreground transition-colors">
                    My List
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-muted-foreground hover:text-foreground transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Lumina Streaming. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
