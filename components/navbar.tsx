"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Bell, ChevronDown, Menu, X, Film, Tv, Heart, Clock, LogOut, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "TV Shows", href: "/tv-shows" },
    { name: "My List", href: "/my-list" },
    { name: "New & Popular", href: "/new" },
  ]

  const movieGenres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
  ]

  const tvGenres = [
    "Action & Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Kids",
    "Mystery",
    "News",
    "Reality",
    "Sci-Fi & Fantasy",
    "Soap",
    "Talk",
    "War & Politics",
    "Western",
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur" : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-primary font-playfair text-2xl font-bold tracking-tight text-glow"
              >
                LUMINA
              </motion.span>
            </Link>

            {!isMobile && (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                          pathname === "/" ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-primary">
                      Movies
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[500px] grid-cols-2 gap-3 p-4">
                        <div>
                          <Link
                            href="/movies"
                            className="flex items-center gap-2 rounded-md p-2 text-primary font-medium hover:bg-muted"
                          >
                            <Film className="h-4 w-4" />
                            <span>All Movies</span>
                          </Link>
                          <div className="mt-4 grid grid-cols-2 gap-2">
                            {movieGenres.slice(0, 6).map((genre) => (
                              <Link
                                key={genre}
                                href={`/movies/genre/${genre.toLowerCase()}`}
                                className="rounded-md p-2 text-sm hover:bg-muted hover:text-primary"
                              >
                                {genre}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {movieGenres.slice(6).map((genre) => (
                            <Link
                              key={genre}
                              href={`/movies/genre/${genre.toLowerCase()}`}
                              className="rounded-md p-2 text-sm hover:bg-muted hover:text-primary"
                            >
                              {genre}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-primary">
                      TV Shows
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[500px] grid-cols-2 gap-3 p-4">
                        <div>
                          <Link
                            href="/tv-shows"
                            className="flex items-center gap-2 rounded-md p-2 text-primary font-medium hover:bg-muted"
                          >
                            <Tv className="h-4 w-4" />
                            <span>All TV Shows</span>
                          </Link>
                          <div className="mt-4 grid grid-cols-2 gap-2">
                            {tvGenres.slice(0, 8).map((genre) => (
                              <Link
                                key={genre}
                                href={`/tv-shows/genre/${genre.toLowerCase()}`}
                                className="rounded-md p-2 text-sm hover:bg-muted hover:text-primary"
                              >
                                {genre}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {tvGenres.slice(8).map((genre) => (
                            <Link
                              key={genre}
                              href={`/tv-shows/genre/${genre.toLowerCase()}`}
                              className="rounded-md p-2 text-sm hover:bg-muted hover:text-primary"
                            >
                              {genre}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/my-list" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                          pathname === "/my-list" ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        My List
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/new" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                          pathname === "/new" ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        New & Popular
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>

          <div className="flex items-center gap-4">
            {!isMobile ? (
              <>
                <AnimatePresence>
                  {isSearchOpen ? (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "15rem", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <Input
                        type="search"
                        placeholder="Search titles, genres..."
                        className="bg-muted/50 border-muted focus-visible:ring-primary premium-input"
                        autoFocus
                        onBlur={() => setIsSearchOpen(false)}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                        <Search className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 premium-border">
                        <AvatarImage src="https://v0.blob.com/yx7jm-avatar.png" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 glass-effect">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <Link href="/profile" className="w-full">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      <Link href="/my-list" className="w-full">
                        My List
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <Link href="/watch-history" className="w-full">
                        Watch History
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      <Link href="/settings" className="w-full">
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                      <LogOut className="h-4 w-4" />
                      <Link href="/logout" className="w-full">
                        Sign out
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  <Search className="h-5 w-5" />
                </Button>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="glass-effect border-white/10">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-8">
                        <span className="text-primary font-playfair text-xl font-bold tracking-tight text-glow">
                          LUMINA
                        </span>
                        <Avatar className="h-8 w-8 premium-border">
                          <AvatarImage src="https://v0.blob.com/yx7jm-avatar.png" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>

                      <nav className="flex flex-col space-y-6">
                        {navLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className={`text-base font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-muted-foreground"}`}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </nav>

                      <div className="mt-8 pt-8 border-t border-white/10">
                        <div className="text-sm font-medium mb-4">Categories</div>
                        <div className="grid grid-cols-2 gap-3">
                          <Link
                            href="/movies/genre/action"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            Action
                          </Link>
                          <Link
                            href="/movies/genre/comedy"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            Comedy
                          </Link>
                          <Link href="/movies/genre/drama" className="text-sm text-muted-foreground hover:text-primary">
                            Drama
                          </Link>
                          <Link
                            href="/movies/genre/thriller"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            Thriller
                          </Link>
                          <Link
                            href="/movies/genre/sci-fi"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            Sci-Fi
                          </Link>
                          <Link
                            href="/movies/genre/horror"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            Horror
                          </Link>
                        </div>
                      </div>

                      <div className="mt-auto pt-8 border-t border-white/10">
                        <Button variant="outline" className="w-full mb-4 premium-border">
                          <Link href="/settings" className="w-full flex items-center justify-center gap-2">
                            <Settings className="h-4 w-4" />
                            Settings
                          </Link>
                        </Button>
                        <Button variant="default" className="w-full premium-button">
                          <Link href="/logout" className="w-full flex items-center justify-center gap-2">
                            <LogOut className="h-4 w-4" />
                            Sign out
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            )}
          </div>
        </div>

        {isSearchOpen && isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="py-3 px-4"
          >
            <Input
              type="search"
              placeholder="Search titles, genres..."
              className="bg-muted/50 border-muted focus-visible:ring-primary premium-input"
              autoFocus
            />
          </motion.div>
        )}
      </div>
    </header>
  )
}
