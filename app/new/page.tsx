"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContentSlider } from "@/components/content-slider"
import { NewReleaseTrailer } from "@/components/new-release-trailer"
import { FeaturedShowcase } from "@/components/featured-showcase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { trendingNow, newReleases } from "@/lib/data"
import { Filter, Search, Calendar } from "lucide-react"

export default function NewAndPopularPage() {
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
              <h1 className="text-3xl font-bold font-playfair tracking-tight text-glow">New & Popular</h1>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search new releases..."
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

            <Tabs defaultValue="new" className="w-full">
              <TabsList className="grid w-full grid-cols-3 premium-border bg-background/50">
                <TabsTrigger value="new">New Releases</TabsTrigger>
                <TabsTrigger value="trending">Trending Now</TabsTrigger>
                <TabsTrigger value="coming">Coming Soon</TabsTrigger>
              </TabsList>

              <TabsContent value="new" className="pt-6 space-y-10">
                <NewReleaseTrailer />

                <div className="grid grid-cols-1 gap-8">
                  <FeaturedShowcase />

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-semibold tracking-tight">This Week</h2>
                    </div>
                    <ContentSlider title="" contents={newReleases.slice(0, 5)} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-semibold tracking-tight">Last Week</h2>
                    </div>
                    <ContentSlider title="" contents={newReleases.slice(5, 10)} />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="trending" className="pt-6 space-y-10">
                <div className="grid grid-cols-1 gap-8">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-tight">Trending Movies</h2>
                    <ContentSlider title="" contents={trendingNow.filter((c) => c.type === "movie")} />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-tight">Trending TV Shows</h2>
                    <ContentSlider title="" contents={trendingNow.filter((c) => c.type === "series")} />
                  </div>

                  <div className="premium-card p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4">Top 10 This Week</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {trendingNow.slice(0, 10).map((content, index) => (
                        <motion.div
                          key={content.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-card/50 transition-colors"
                        >
                          <div className="text-4xl font-bold text-primary/70 w-10 text-center">{index + 1}</div>
                          <div className="w-16 h-24 relative flex-shrink-0">
                            <img
                              src={`https://v0.blob.com/yx7jm-movie${content.id}.jpg`}
                              alt={content.title}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-medium line-clamp-1">{content.title}</h3>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <span>{content.year}</span>
                              <span className="w-1 h-1 rounded-full bg-muted-foreground mx-1"></span>
                              <span>{content.type === "movie" ? "Movie" : "Series"}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs mt-1">
                              <span className="text-yellow-500">★</span>
                              <span>{content.rating}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="coming" className="pt-6 space-y-10">
                <div className="grid grid-cols-1 gap-8">
                  <div className="premium-card p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4">Coming Next Month</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="group relative premium-card rounded-lg overflow-hidden"
                        >
                          <div className="absolute top-2 right-2 z-10">
                            <div className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">
                              June {i + 10}
                            </div>
                          </div>

                          <div className="aspect-[2/3] relative">
                            <img
                              src={`https://v0.blob.com/yx7jm-coming${i}.jpg`}
                              alt={`Coming Soon ${i}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
                          </div>

                          <div className="p-3">
                            <h3 className="font-medium line-clamp-1">Upcoming Title {i}</h3>
                            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                              A brief description of this upcoming movie or TV show that will be released next month.
                            </p>

                            <Button variant="outline" size="sm" className="w-full mt-3 premium-border">
                              Remind Me
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="premium-card p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4">Coming Later This Year</h2>

                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex flex-col md:flex-row gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors"
                        >
                          <div className="w-full md:w-48 h-28 relative flex-shrink-0">
                            <img
                              src={`https://v0.blob.com/yx7jm-coming${i + 4}.jpg`}
                              alt={`Coming Soon ${i}`}
                              className="w-full h-full object-cover rounded-md"
                            />
                            <div className="absolute top-2 right-2">
                              <div className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">
                                Q{i + 1} 2024
                              </div>
                            </div>
                          </div>

                          <div className="flex-grow">
                            <h3 className="font-medium">Future Release Title {i}</h3>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <span>2024</span>
                              <span className="w-1 h-1 rounded-full bg-muted-foreground mx-1"></span>
                              <span>{i % 2 === 0 ? "Movie" : "Series"}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                              A more detailed description of this upcoming title that will be released later this year.
                              This content is highly anticipated and will feature amazing talent.
                            </p>

                            <div className="flex gap-2 mt-3">
                              <Button variant="outline" size="sm" className="premium-border">
                                Remind Me
                              </Button>
                              <Button variant="outline" size="sm" className="premium-border">
                                More Info
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
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
