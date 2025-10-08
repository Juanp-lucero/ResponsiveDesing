import { Search, Bell, Plus, Play } from "lucide-react"

export default function NetflixRedesign() {
  return (
    <div className="grid grid-cols-12 gap-0 h-screen bg-background text-foreground">
      {/* Left Sidebar - 2 columns */}
      <aside className="col-span-2 flex flex-col gap-8 p-6 border-r border-border">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primary">Netflix.</h1>
        </div>

        {/* Navigation */}
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

        {/* Achievement card */}
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

      {/* Main Content - 8 columns */}
      <main className="col-span-8 flex flex-col gap-6 p-6 overflow-y-auto">
        {/* Header with Search */}
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-2 items-center basis-96 px-3 py-2 rounded-lg border border-border">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent border-0 outline-none text-sm text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex flex-row gap-3 items-center ml-auto">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-8 bg-card border border-border rounded-3xl overflow-hidden relative h-80">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/breaking-bad-hero-32j581o8H3cYsuS5iBeTJfPSo3MlVb.jpg"
            alt="Breaking Bad"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="relative z-10 flex flex-col gap-4 justify-end h-full">
            <div className="flex flex-row gap-2 items-center">
              <span className="text-xs text-muted-foreground">5M+ / episode</span>
              <div className="flex flex-row gap-1">
                <div className="w-6 h-6 rounded-full bg-breaking-bad-green/40 border-2 border-background" />
                <div className="w-6 h-6 rounded-full bg-breaking-bad-green/40 border-2 border-background -ml-2" />
                <div className="w-6 h-6 rounded-full bg-breaking-bad-green/40 border-2 border-background -ml-2" />
              </div>
              <span className="text-xs text-muted-foreground">8 friends are watching</span>
            </div>
            <h2 className="text-5xl font-bold text-breaking-bad-green">Breaking Bad</h2>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-sm text-muted-foreground">5 Seasons</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">62 episodes</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-breaking-bad-yellow">⭐ 9.5 IMDb</span>
            </div>
            <div className="flex flex-row gap-3">
              <button className="flex flex-row items-center gap-2 px-6 py-3 rounded-lg bg-breaking-bad-green text-black hover:bg-breaking-bad-green/90 transition-colors font-semibold">
                <Play className="w-4 h-4 fill-current" />
                <span>Watch</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-breaking-bad-green/40 bg-transparent hover:bg-breaking-bad-green/10 transition-colors">
                <Plus className="w-4 h-4 text-breaking-bad-green" />
              </button>
            </div>
          </div>
        </div>

        {/* Watch Parties Section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-xl font-semibold">Watch Parties</h3>
            <div className="w-12 h-1 bg-breaking-bad-green rounded-full" />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {[
              { name: "Better Call Saul", members: "4 friends", emoji: "⚖️" },
              { name: "El Camino", members: "3 friends", emoji: "🚗" },
              { name: "Ozark", members: "6 friends", emoji: "💰" },
              { name: "Narcos", members: "5 friends", emoji: "🌴" },
              { name: "The Wire", members: "7 friends", emoji: "📞" },
              { name: "More", members: "", emoji: "➕" },
            ].map((party, i) => (
              <div key={i} className="flex flex-col gap-2 items-center">
                <div className="w-16 h-16 rounded-full border-2 border-breaking-bad-green/30 bg-breaking-bad-green/10 flex items-center justify-center text-2xl hover:border-breaking-bad-green hover:bg-breaking-bad-green/20 transition-all cursor-pointer">
                  {party.emoji}
                </div>
                <div className="flex flex-col gap-0 items-center">
                  <p className="text-sm font-medium text-center">{party.name}</p>
                  {party.members && <p className="text-xs text-muted-foreground">{party.members}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Continue watching</h3>

          <div className="grid grid-cols-4 gap-4">
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
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                    <div className="h-full bg-breaking-bad-green" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
                <div className="flex flex-col gap-1 p-3">
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar - 2 columns */}
      <aside className="col-span-2 flex flex-col gap-6 p-6 border-l border-border">
        {/* User Profile */}
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

        {/* Friends List */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase text-muted-foreground">Friends Online</h3>
          <div className="flex flex-col gap-2">
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
                  className={`w-8 h-8 rounded-full ${friend.color} flex items-center justify-center text-xs font-bold text-white`}
                >
                  {friend.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex flex-col gap-0 flex-1">
                  <p className="text-xs font-medium">{friend.name}</p>
                  <p className="text-xs text-muted-foreground">{friend.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
