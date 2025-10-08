"use client"

import { Search, Bell, Plus, Play, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function NetflixRedesign() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm border-b border-border">
        <h1 className="text-xl font-bold text-primary">Netflix.</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-16">
          <nav className="flex flex-col gap-6 p-6 overflow-y-auto h-full">
            <div className="flex flex-col gap-1">
              <h3 className="text-xs uppercase text-muted-foreground mb-3">Menu</h3>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-primary bg-primary/10">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Browse</span>
              </button>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Watchlist</span>
              </button>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Coming soon</span>
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-xs uppercase text-muted-foreground mb-3">Social</h3>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Friends</span>
              </button>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Parties</span>
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-xs uppercase text-muted-foreground mb-3">General</h3>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Settings</span>
              </button>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Log out</span>
              </button>
            </div>
          </nav>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-screen">
        {/* Left Sidebar - Desktop Only */}
        <aside className="hidden lg:flex lg:col-span-2 flex-col gap-8 p-6 border-r border-border">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-primary">Netflix.</h1>
          </div>

          <nav className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-xs uppercase text-muted-foreground mb-3">Menu</h3>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Browse</span>
              </button>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Watchlist</span>
              </button>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Coming soon</span>
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-xs uppercase text-muted-foreground mb-3">Social</h3>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Friends</span>
              </button>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Parties</span>
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-xs uppercase text-muted-foreground mb-3">General</h3>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Settings</span>
              </button>
              <button className="flex flex-row items-center justify-start gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <span className="text-sm">Log out</span>
              </button>
            </div>
          </nav>

          <div className="flex flex-col gap-3 p-4 bg-card border border-breaking-bad-green/30 rounded-xl mt-auto">
            <div className="flex flex-col gap-2 items-center">
              <div className="w-16 h-16 rounded-full bg-breaking-bad-green/20 flex items-center justify-center">
                <span className="text-2xl">⚗️</span>
              </div>
              <h4 className="font-semibold text-sm text-center text-breaking-bad-green">Chemistry Expert</h4>
              <p className="text-xs text-muted-foreground text-center">You&apos;re the one who knocks!</p>
            </div>
            <button className="w-full px-4 py-2 text-sm rounded-lg bg-breaking-bad-green/20 text-breaking-bad-green hover:bg-breaking-bad-green/30 transition-colors">
              View challenges
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-1 lg:col-span-8 flex flex-col gap-6 p-4 md:p-6 overflow-y-auto pt-20 lg:pt-6">
          {/* Header with Search */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <div className="flex flex-row gap-2 items-center flex-1 px-3 py-2 rounded-lg border border-border">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent border-0 outline-none text-sm text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-row gap-3 items-center justify-end sm:ml-auto">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col gap-4 p-6 md:p-8 bg-card border border-border rounded-2xl md:rounded-3xl overflow-hidden relative h-64 sm:h-80 md:h-96">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/breaking-bad-hero-32j581o8H3cYsuS5iBeTJfPSo3MlVb.jpg"
              alt="Breaking Bad"
              fill
              className="object-cover opacity-60"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="relative z-10 flex flex-col gap-3 md:gap-4 justify-end h-full">
              <div className="flex flex-row gap-2 items-center flex-wrap">
                <span className="text-xs text-muted-foreground">5M+ / episode</span>
                <div className="flex flex-row gap-1">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-breaking-bad-green/40 border-2 border-background" />
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-breaking-bad-green/40 border-2 border-background -ml-2" />
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-breaking-bad-green/40 border-2 border-background -ml-2" />
                </div>
                <span className="text-xs text-muted-foreground">8 friends are watching</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-breaking-bad-green">Breaking Bad</h2>
              <div className="flex flex-row gap-2 items-center flex-wrap text-xs sm:text-sm">
                <span className="text-muted-foreground">5 Seasons</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">62 episodes</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-breaking-bad-yellow">⭐ 9.5 IMDb</span>
              </div>
              <div className="flex flex-row gap-3">
                <button className="flex flex-row items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-breaking-bad-green text-black hover:bg-breaking-bad-green/90 transition-colors font-semibold text-sm md:text-base">
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch</span>
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg border border-breaking-bad-green/40 bg-transparent hover:bg-breaking-bad-green/10 transition-colors">
                  <Plus className="w-4 h-4 text-breaking-bad-green" />
                </button>
              </div>
            </div>
          </div>

          {/* Watch Parties Section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
              <h3 className="text-lg md:text-xl font-semibold">Watch Parties</h3>
              <div className="w-12 h-1 bg-breaking-bad-green rounded-full" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
              {[
                { name: "Better Call Saul", members: "4 friends", emoji: "⚖️" },
                { name: "El Camino", members: "3 friends", emoji: "🚗" },
                { name: "Ozark", members: "6 friends", emoji: "💰" },
                { name: "Narcos", members: "5 friends", emoji: "🌴" },
                { name: "The Wire", members: "7 friends", emoji: "📞" },
                { name: "More", members: "", emoji: "➕" },
              ].map((party, i) => (
                <div key={i} className="flex flex-col gap-2 items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-breaking-bad-green/30 bg-breaking-bad-green/10 flex items-center justify-center text-xl md:text-2xl hover:border-breaking-bad-green hover:bg-breaking-bad-green/20 transition-all cursor-pointer">
                    {party.emoji}
                  </div>
                  <div className="flex flex-col gap-0 items-center">
                    <p className="text-xs md:text-sm font-medium text-center line-clamp-2">{party.name}</p>
                    {party.members && <p className="text-xs text-muted-foreground hidden sm:block">{party.members}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continue Watching Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-xl font-semibold">Continue watching</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                {
                  title: "Breaking Bad S5 E14",
                  subtitle: "Ozymandias",
                  progress: 67,
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bb-episode-1-haklqnbXYhNm5826Cw8Xok5izG0a9R.jpg",
                },
                {
                  title: "Better Call Saul S6",
                  subtitle: "Final Season",
                  progress: 45,
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bb-episode-2-2IykTRnAK2BXdz1rtYxxrjfqlFLfTI.jpg",
                },
                {
                  title: "El Camino",
                  subtitle: "A Breaking Bad Movie",
                  progress: 23,
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bb-episode-3-vypBiubZj2QOCEXr51pN3T1nuPzS4T.jpg",
                },
                {
                  title: "Breaking Bad S1 E1",
                  subtitle: "Pilot - Rewatch",
                  progress: 89,
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bb-episode-4-wDClaTtliOPbK9ng1dYf0agB6n2zeG.jpg",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-0 rounded-xl overflow-hidden border border-border bg-card hover:border-breaking-bad-green/50 transition-all cursor-pointer group"
                >
                  <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                      <div className="h-full bg-breaking-bad-green" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 p-2 md:p-3">
                    <h4 className="font-semibold text-xs md:text-sm line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar - Desktop Only */}
        <aside className="hidden xl:flex xl:col-span-2 flex-col gap-6 p-6 border-l border-border">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-breaking-bad-green/20 border-2 border-breaking-bad-green flex items-center justify-center">
                <span className="text-sm font-bold text-breaking-bad-green">WW</span>
              </div>
              <div className="flex flex-col gap-0">
                <p className="text-sm font-semibold">Walter W.</p>
                <p className="text-xs text-muted-foreground">Level 52</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase text-muted-foreground">Friends Online</h3>
            <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
              {[
                { name: "Jesse P.", status: "Watching", color: "bg-blue-500" },
                { name: "Skyler W.", status: "Online", color: "bg-green-500" },
                { name: "Hank S.", status: "Away", color: "bg-yellow-500" },
                { name: "Saul G.", status: "Watching", color: "bg-purple-500" },
                { name: "Mike E.", status: "Offline", color: "bg-gray-500" },
                { name: "Gus F.", status: "Online", color: "bg-red-500" },
                { name: "Jane M.", status: "Away", color: "bg-pink-500" },
              ].map((friend, i) => (
                <div
                  key={i}
                  className="flex flex-row gap-2 items-center p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div
                    className={`w-8 h-8 rounded-full ${friend.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                  >
                    {friend.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex flex-col gap-0 flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">{friend.name}</p>
                    <p className="text-xs text-muted-foreground">{friend.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
