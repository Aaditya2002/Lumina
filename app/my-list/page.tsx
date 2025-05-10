"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { trendingNow, newReleases } from "@/lib/data"
import { Filter, Search, Trash2, Play } from "lucide-react"
import Link from "next/link"

export default function MyListPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Simulate a user's watchlist with some sample content
  const myList = [...trendingNow.slice(0, 3), ...newReleases.slice(0, 3)]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h1 className="text-3xl font-bold font-playfair tracking-tight text-glow">My List</h1>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search your list..."
                    className="pl-9 premium-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Button variant="outline" className="gap-2 premium-border" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>

            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 premium-card p-4"
              >
                <div>
                  <label className="text-sm font-medium mb-2 block">Type</label>
                  <Select>
                    <SelectTrigger className="premium-input">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="movies">Movies</SelectItem>
                      <SelectItem value="series">TV Shows</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Genre</label>
                  <Select>
                    <SelectTrigger className="premium-input">
                      <SelectValue placeholder="All Genres" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Genres</SelectItem>
                      <SelectItem value="action">Action</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="comedy">Comedy</SelectItem>
                      <SelectItem value="drama">Drama</SelectItem>
                      <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Sort By</label>
                  <Select>
                    <SelectTrigger className="premium-input">
                      <SelectValue placeholder="Date Added" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date-added">Date Added</SelectItem>
                      <SelectItem value="a-z">A-Z</SelectItem>
                      <SelectItem value="z-a">Z-A</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                      <SelectItem value="year">Release Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 premium-border bg-background/50">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="movies">Movies</TabsTrigger>
                <TabsTrigger value="series">TV Shows</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {myList.map((content) => (
                    <motion.div
                      key={content.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="group relative premium-card rounded-lg overflow-hidden"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={content.posterUrl}
                          alt={content.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button asChild size="lg" className="rounded-full w-12 h-12 premium-button">
                            <Link href={`/watch/${content.id}`}>
                              <Play className="h-6 w-6 fill-primary-foreground" />
                            </Link>
                          </Button>
                        </div>

                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-2 right-2 rounded-full bg-background/30 backdrop-blur-sm border-white/20 hover:bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Trash2 className="h-4 w-4 text-red-400" />
                        </Button>
                      </div>

                      <div className="p-3">
                        <h3 className="font-medium line-clamp-1">{content.title}</h3>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                          <span>
                            {content.year} • {content.type === "movie" ? "Movie" : "Series"}
                          </span>
                          <span>{content.rating} ★</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="movies" className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {myList
                    .filter((content) => content.type === "movie")
                    .map((content) => (
                      <motion.div
                        key={content.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="group relative premium-card rounded-lg overflow-hidden"
                      >
                        <div className="aspect-video relative">
                          <img
                            src={content.posterUrl}
                            alt={content.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button asChild size="lg" className="rounded-full w-12 h-12 premium-button">
                              <Link href={`/watch/${content.id}`}>
                                <Play className="h-6 w-6 fill-primary-foreground" />
                              </Link>
                            </Button>
                          </div>

                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute top-2 right-2 rounded-full bg-background/30 backdrop-blur-sm border-white/20 hover:bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <Trash2 className="h-4 w-4 text-red-400" />
                          </Button>
                        </div>

                        <div className="p-3">
                          <h3 className="font-medium line-clamp-1">{content.title}</h3>
                          <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                            <span>{content.year} • Movie</span>
                            <span>{content.rating} ★</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="series" className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {myList
                    .filter((content) => content.type === "series")
                    .map((content) => (
                      <motion.div
                        key={content.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="group relative premium-card rounded-lg overflow-hidden"
                      >
                        <div className="aspect-video relative">
                          <img
                            src={content.posterUrl}
                            alt={content.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button asChild size="lg" className="rounded-full w-12 h-12 premium-button">
                              <Link href={`/watch/${content.id}`}>
                                <Play className="h-6 w-6 fill-primary-foreground" />
                              </Link>
                            </Button>
                          </div>

                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute top-2 right-2 rounded-full bg-background/30 backdrop-blur-sm border-white/20 hover:bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <Trash2 className="h-4 w-4 text-red-400" />
                          </Button>
                        </div>

                        <div className="p-3">
                          <h3 className="font-medium line-clamp-1">{content.title}</h3>
                          <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                            <span>{content.year} • Series</span>
                            <span>{content.rating} ★</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
