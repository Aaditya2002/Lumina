import type { ContentType } from "./types"

// Sample data for the streaming platform
export const featuredContent: ContentType[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    type: "movie",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
    posterUrl: "https://posterspy.com/wp-content/uploads/2024/02/DUNE-2-POSTER.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    logo: "/placeholder.svg?height=200&width=400",
    year: 2024,
    duration: "2h 46m",
    rating: "8.7",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    director: "Denis Villeneuve",
  },
]

export const trendingNow: ContentType[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    type: "movie",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
    posterUrl: "https://posterspy.com/wp-content/uploads/2024/02/DUNE-2-POSTER.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    year: 2024,
    duration: "2h 46m",
    rating: "8.5",
    genres: ["Sci-Fi", "Adventure"],
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    director: "Denis Villeneuve",
  },
  {
    id: "2",
    title: "3 Body Problem",
    type: "series",
    description:
      "A fateful decision made in 1960s China echoes across space and time into the present, forcing a group of brilliant scientists to face humanity's greatest threat.",
    posterUrl: "https://resizing.flixster.com/EJ0GRRvOFD53VZX84N-ND1hnBAs=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vZDkyYWUyMTctYjM3Yy00NmEzLWJkZDQtYjBlZTE1NzkwM2YxLmpwZw==",
    backdropUrl: "https://resizing.flixster.com/EJ0GRRvOFD53VZX84N-ND1hnBAs=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vZDkyYWUyMTctYjM3Yy00NmEzLWJkZDQtYjBlZTE1NzkwM2YxLmpwZw==",
    year: 2024,
    duration: "8 Episodes",
    rating: "7.8",
    genres: ["Drama", "Mystery", "Sci-Fi"],
    cast: ["Jess Hong", "Benedict Wong", "Jovan Adepo"],
    director: "David Benioff",
  },
  {
    id: "3",
    title: "Godzilla x Kong: The New Empire",
    type: "movie",
    description:
      "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    posterUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/dgmztse-c5a1ca5c-d154-40de-9a5f-a58193198725.png/v1/fill/w_1280,h_1897,q_80,strp/godzilla_x_kong_the_new_empire_poster_4k_by_andrewvm_dgmztse-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5NyIsInBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGdtenRzZS1jNWExY2E1Yy1kMTU0LTQwZGUtOWE1Zi1hNTgxOTMxOTg3MjUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UkFVAFZ5INkUyrpq0ezIrBKvMSyb80K2l2TCn0mC7sE",
    backdropUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/dgmztse-c5a1ca5c-d154-40de-9a5f-a58193198725.png/v1/fill/w_1280,h_1897,q_80,strp/godzilla_x_kong_the_new_empire_poster_4k_by_andrewvm_dgmztse-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg5NyIsInBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGdtenRzZS1jNWExY2E1Yy1kMTU0LTQwZGUtOWE1Zi1hNTgxOTMxOTg3MjUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UkFVAFZ5INkUyrpq0ezIrBKvMSyb80K2l2TCn0mC7sE",
    year: 2024,
    duration: "1h 55m",
    rating: "7.2",
    genres: ["Action", "Adventure", "Sci-Fi"],
    cast: ["Rebecca Hall", "Brian Tyree Henry", "Dan Stevens"],
    director: "Adam Wingard",
  },
  {
    id: "4",
    title: "Shōgun",
    type: "series",
    description:
      "In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.",
    posterUrl: "https://image.tmdb.org/t/p/original/wA2c1oRTHWWoQslfHtoeNEkBOok.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/wA2c1oRTHWWoQslfHtoeNEkBOok.jpg",
    year: 2024,
    duration: "10 Episodes",
    rating: "8.7",
    genres: ["Action", "Adventure", "Drama"],
    cast: ["Hiroyuki Sanada", "Anna Sawai", "Tadanobu Asano"],
    director: "Rachel Kondo",
  },
  {
    id: "5",
    title: "The Gentlemen",
    type: "series",
    description:
      "When aristocratic Eddie inherits the family estate, he discovers that it's home to an enormous weed empire, and its proprietors aren't going anywhere.",
    posterUrl: "https://image.tmdb.org/t/p/original/vUYqQFlQx9Tg4jjaWoiW99dk62F.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/vUYqQFlQx9Tg4jjaWoiW99dk62F.jpg",
    year: 2024,
    duration: "8 Episodes",
    rating: "8.1",
    genres: ["Action", "Comedy", "Crime"],
    cast: ["Theo James", "Kaya Scodelario", "Daniel Ings"],
    director: "Guy Ritchie",
  },
]

export const newReleases: ContentType[] = [
  {
    id: "6",
    title: "The Fall Guy",
    type: "movie",
    description:
      "Colt Seavers, a battle-scarred stuntman who, having left the business a year earlier to focus on both physical and mental health, is drafted back into service when the star of a mega-budget studio movie goes missing.",
    posterUrl: "https://images.squarespace-cdn.com/content/v1/521dec4de4b0912f523f3b56/1715010948227-VBEL9IW1CI9U7XLOKDKV/the-fall-guy-poster.jpg?format=2500w",
    backdropUrl: "https://images.squarespace-cdn.com/content/v1/521dec4de4b0912f523f3b56/1715010948227-VBEL9IW1CI9U7XLOKDKV/the-fall-guy-poster.jpg?format=2500w",
    year: 2024,
    duration: "2h 6m",
    rating: "7.1",
    genres: ["Action", "Comedy"],
    cast: ["Ryan Gosling", "Emily Blunt", "Aaron Taylor-Johnson"],
    director: "David Leitch",
  },
  {
    id: "7",
    title: "Civil War",
    type: "movie",
    description:
      "In a near-future America ravaged by political division, a team of journalists traverse the country during a rapidly escalating civil war.",
    posterUrl: "https://pbs.twimg.com/media/CdNfpHMWwAAkOcz?format=jpg&name=4096x4096",
    backdropUrl: "https://pbs.twimg.com/media/CdNfpHMWwAAkOcz?format=jpg&name=4096x4096",
    year: 2024,
    duration: "1h 49m",
    rating: "6.8",
    genres: ["Action", "Drama", "Thriller"],
    cast: ["Kirsten Dunst", "Wagner Moura", "Cailee Spaeny"],
    director: "Alex Garland",
  },
  {
    id: "8",
    title: "Furiosa: A Mad Max Saga",
    type: "movie",
    description: "The origin story of renegade warrior Furiosa before her encounter with Mad Max.",
    posterUrl: "https://postercinema.eu/cdn/shop/files/furiosa-a-mad-max-saga_qvegvpzz.jpg?v=1715891905&width=1946",
    backdropUrl: "https://postercinema.eu/cdn/shop/files/furiosa-a-mad-max-saga_qvegvpzz.jpg?v=1715891905&width=1946",
    year: 2024,
    duration: "2h 28m",
    rating: "7.5",
    genres: ["Action", "Adventure", "Sci-Fi"],
    cast: ["Anya Taylor-Joy", "Chris Hemsworth", "Tom Burke"],
    director: "George Miller",
  },
  {
    id: "9",
    title: "Fallout",
    type: "series",
    description:
      "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
    posterUrl: "https://image.tmdb.org/t/p/original/cc6vI3DkKeJmcsvrUOIhswkNoW0.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/cc6vI3DkKeJmcsvrUOIhswkNoW0.jpg",
    year: 2024,
    duration: "8 Episodes",
    rating: "8.5",
    genres: ["Adventure", "Sci-Fi", "Action"],
    cast: ["Ella Purnell", "Walton Goggins", "Aaron Moten"],
    director: "Jonathan Nolan",
  },
  {
    id: "10",
    title: "Ripley",
    type: "series",
    description:
      "Tom Ripley, a grifter scraping by in early 1960s New York, is hired by a wealthy man to travel to Italy to try to convince his vagabond son to return home. Tom's acceptance of the job is the first step into a complex life of deceit, fraud and murder.",
    posterUrl: "https://assets.scriptslug.com/live/img/poster/ripley-2024.jpg?v=1727526243",
    backdropUrl: "https://assets.scriptslug.com/live/img/poster/ripley-2024.jpg?v=1727526243",
    year: 2024,
    duration: "8 Episodes",
    rating: "7.9",
    genres: ["Crime", "Drama", "Thriller"],
    cast: ["Andrew Scott", "Dakota Fanning", "Johnny Flynn"],
    director: "Steven Zaillian",
  },
]

export const continueWatching: ContentType[] = [
  {
    id: "11",
    title: "Severance",
    type: "series",
    description:
      "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives; when a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
    posterUrl: "https://image.tmdb.org/t/p/original/w5O3VVeG3jIR62IVbNMvFKY0p1Q.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/w5O3VVeG3jIR62IVbNMvFKY0p1Q.jpg",
    year: 2022,
    duration: "1 Season",
    rating: "8.7",
    genres: ["Drama", "Mystery", "Sci-Fi"],
    cast: ["Adam Scott", "Zach Cherry", "Britt Lower"],
    director: "Ben Stiller",
    progress: 65,
  },
  {
    id: "12",
    title: "The Last of Us",
    type: "series",
    description:
      "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    posterUrl: "https://image.tmdb.org/t/p/original/2OGtqsyHQK2tPwYxqxBtN8mmQ0V.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/2OGtqsyHQK2tPwYxqxBtN8mmQ0V.jpg",
    year: 2023,
    duration: "1 Season",
    rating: "8.8",
    genres: ["Action", "Adventure", "Drama"],
    cast: ["Pedro Pascal", "Bella Ramsey", "Gabriel Luna"],
    director: "Craig Mazin",
    progress: 42,
  },
  {
    id: "13",
    title: "Poor Things",
    type: "movie",
    description:
      "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    posterUrl: "https://artofthemovies.co.uk/cdn/shop/files/IMG_4171_0604c06a-bff0-4a16-9d50-f714ac5f9e4f_1024x1024@2x.jpg?v=1715168547",
    backdropUrl: "https://artofthemovies.co.uk/cdn/shop/files/IMG_4171_0604c06a-bff0-4a16-9d50-f714ac5f9e4f_1024x1024@2x.jpg?v=1715168547",
    year: 2023,
    duration: "2h 21m",
    rating: "8.0",
    genres: ["Comedy", "Drama", "Romance"],
    cast: ["Emma Stone", "Mark Ruffalo", "Willem Dafoe"],
    director: "Yorgos Lanthimos",
    progress: 78,
  },
  {
    id: "14",
    title: "Ripley",
    type: "series",
    description:
      "Tom Ripley, a grifter scraping by in early 1960s New York, is hired by a wealthy man to travel to Italy to try to convince his vagabond son to return home. Tom's acceptance of the job is the first step into a complex life of deceit, fraud and murder.",
    posterUrl: "https://assets.scriptslug.com/live/img/poster/ripley-2024.jpg?v=1727526243",
    backdropUrl: "https://assets.scriptslug.com/live/img/poster/ripley-2024.jpg?v=1727526243",
    year: 2024,
    duration: "8 Episodes",
    rating: "7.9",
    genres: ["Crime", "Drama", "Thriller"],
    cast: ["Andrew Scott", "Dakota Fanning", "Johnny Flynn"],
    director: "Steven Zaillian",
    progress: 25,
  },
]

export const topRated: ContentType[] = [
  {
    id: "15",
    title: "Breaking Bad",
    type: "series",
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    posterUrl: "https://image.tmdb.org/t/p/original/ineLOBPG8AZsluYwnkMpHRyu7L.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/ineLOBPG8AZsluYwnkMpHRyu7L.jpg",
    year: 2008,
    duration: "5 Seasons",
    rating: "9.5",
    genres: ["Crime", "Drama", "Thriller"],
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    director: "Vince Gilligan",
  },
  {
    id: "16",
    title: "The Wire",
    type: "series",
    description:
      "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
    posterUrl: "https://i.ebayimg.com/images/g/yYwAAOSwML9i7Guh/s-l1600.jpg",
    backdropUrl: "https://i.ebayimg.com/images/g/yYwAAOSwML9i7Guh/s-l1600.jpg",
    year: 2002,
    duration: "5 Seasons",
    rating: "9.3",
    genres: ["Crime", "Drama", "Thriller"],
    cast: ["Dominic West", "Lance Reddick", "Sonja Sohn"],
    director: "David Simon",
  },
  {
    id: "17",
    title: "The Sopranos",
    type: "series",
    description:
      "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
    posterUrl: "https://image.tmdb.org/t/p/original/3NsJzafk0Sp7yE9yShzQsybHw4x.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/3NsJzafk0Sp7yE9yShzQsybHw4x.jpg",
    year: 1999,
    duration: "6 Seasons",
    rating: "9.2",
    genres: ["Crime", "Drama"],
    cast: ["James Gandolfini", "Lorraine Bracco", "Edie Falco"],
    director: "David Chase",
  },
  {
    id: "18",
    title: "The Godfather",
    type: "movie",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl: "https://artofthemovies.co.uk/cdn/shop/files/godfather_R22_EB28134_B_1024x1024@2x.jpg?v=1729705839",
    backdropUrl: "https://artofthemovies.co.uk/cdn/shop/files/godfather_R22_EB28134_B_1024x1024@2x.jpg?v=1729705839",
    year: 1972,
    duration: "2h 55m",
    rating: "9.2",
    genres: ["Crime", "Drama"],
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    director: "Francis Ford Coppola",
  },
  {
    id: "19",
    title: "The Dark Knight",
    type: "movie",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterUrl: "https://www.postergully.com/cdn/shop/products/pg1006.jpg?v=1578633270",
    backdropUrl: "https://www.postergully.com/cdn/shop/products/pg1006.jpg?v=1578633270",
    year: 2008,
    duration: "2h 32m",
    rating: "9.0",
    genres: ["Action", "Crime", "Drama"],
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: "Christopher Nolan",
  },
]

// Helper functions to get content
export function getContentById(id: string): ContentType | null {
  const allContent = [...featuredContent, ...trendingNow, ...newReleases, ...continueWatching, ...topRated]

  return allContent.find((content) => content.id === id) || null
}

export function getSimilarContent(id: string, genres: string[]): ContentType[] {
  const allContent = [...featuredContent, ...trendingNow, ...newReleases, ...continueWatching, ...topRated]

  // Filter out the current content and find similar by genres
  return allContent
    .filter((content) => content.id !== id)
    .filter((content) => content.genres.some((genre) => genres.includes(genre)))
    .slice(0, 6)
}
