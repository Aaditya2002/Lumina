"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { ContentSlider } from "@/components/content-slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { trendingNow, newReleases, topRated } from "@/lib/data"
import { Filter, Search } from "lucide-react"

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  
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
              <h1 className="text-3xl font-bold font-playfair tracking-tight text-glow">Movies</h1>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search movies..." 
                    className="pl-9 premium-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Button 
                  variant="outline" 
                  className="gap-2 premium-border"
                  onClick={() => setShowFilters(!showFilters)}
                >
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
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 premium-card p-4"
              >
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
                      <SelectItem value="horror">Horror</SelectItem>
                      <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                      <SelectItem value="thriller">Thriller</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Year</label>
                  <Select>
                    <SelectTrigger className="premium-input">
                      <SelectValue placeholder="All Years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                      <SelectItem value="older">2019 & Older</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  <Select>
                    <SelectTrigger className="premium-input">
                      <SelectValue placeholder="All Ratings" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="9+">9+ Stars</SelectItem>
                      <SelectItem value="8+">8+ Stars</SelectItem>
                      <SelectItem value="7+">7+ Stars</SelectItem>
                      <SelectItem value="6+">6+ Stars</SelectItem>
                      <SelectItem value="5+">5+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Sort By</label>
                  <Select>
                    <SelectTrigger className="premium-input">
                      <SelectValue placeholder="Popularity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Popularity</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="a-z">A-Z</SelectItem>
                      <SelectItem value="z-a">Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 premium-border bg-background/50">
                <TabsTrigger value="all">All Movies</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="new">New Releases</TabsTrigger>
                <TabsTrigger value="top">Top Rated</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="pt-6 space-y-10">
                <ContentSlider title="Trending Now" contents={trendingNow.filter(c => c.type === "movie")} />
                <ContentSlider title="New Releases" contents={newReleases.filter(c => c.type === "movie")} />
                <ContentSlider title="Top Rated" contents={topRated.filter(c => c.type === "movie")} />
              </TabsContent>
              <TabsContent value="trending" className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {trendingNow
                    .filter(c => c.type === "movie")
                    .map(content => (
                      <motion.div 
                        key={content.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="content-card"
                      >
                        <div className="aspect-[2/3] rounded-lg overflow-hidden">
                          <img 
                            src={content.posterUrl}
                            alt={content.title} 
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="mt-2">
                          <h3 className="font-medium text-sm line-clamp-1">{content.title}</h3>
                          <p className="text-xs text-muted-foreground">{content.year}</p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="new" className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {newReleases
                    .filter(c => c.type === "movie")
                    .map(content => (
                      <motion.div 
                        key={content.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="content-card"
                      >
                        <div className="aspect-[2/3] rounded-lg overflow-hidden">
                          <img 
                            src={content.posterUrl}
                            alt={content.title} 
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="mt-2">
                          <h3 className="font-medium text-sm line-clamp-1">{content.title}</h3>
                          <p className="text-xs text-muted-foreground">{content.year}</p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="top" className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {topRated
                    .filter(c => c.type === "movie")
                    .map(content => (
                      <motion.div 
                        key={content.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="content-card"
                      >
                        <div className="aspect-[2/3] rounded-lg overflow-hidden">
                          <img 
                            src={content.posterUrl}
                            alt={content.title} 
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="mt-2">
                          <h3 className="font-medium text-sm line-clamp-1">{content.title}</h3>
                          <p className="text-xs text-muted-foreground">{content.year}</p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 