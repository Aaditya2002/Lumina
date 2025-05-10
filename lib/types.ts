export interface ContentType {
  id: string
  title: string
  type: "movie" | "series"
  description: string
  posterUrl: string
  backdropUrl: string
  logo?: string
  year: number
  duration: string
  rating: string
  genres: string[]
  cast: string[]
  director: string
  progress?: number
}
