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

        {/* Achievement Card */}
        <div className="flex flex-col gap-3 p-4 bg-card border border-border rounded-xl mt-auto">
          <div className="flex flex-col gap-2 items-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">🍿</span>
            </div>
            <h4 className="font-semibold text-sm text-center">Popcorn Addict</h4>
            <p className="text-xs text-muted-foreground text-center">You&apos;re on fire!</p>
          </div>
          <button className="w-full px-4 py-2 text-sm rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
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

        {/* Hero Section */}
        <div className="flex flex-col gap-4 p-8 bg-card border border-border rounded-3xl overflow-hidden relative h-80">
          <img
            src="/witcher-dark-fantasy.png"
            alt="The Witcher"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 flex flex-col gap-4 justify-end h-full">
            <div className="flex flex-row gap-2 items-center">
              <span className="text-xs text-muted-foreground">1M+ / episode</span>
              <div className="flex flex-row gap-1">
                <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-background" />
                <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-background -ml-2" />
              </div>
              <span className="text-xs text-muted-foreground">2 friends are watching</span>
            </div>
            <h2 className="text-5xl font-bold">The Witcher</h2>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-sm text-muted-foreground">1st Season</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">7 episodes</span>
            </div>
            <div className="flex flex-row gap-3">
              <button className="flex flex-row items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Play className="w-4 h-4 fill-current" />
                <span className="font-medium">Watch</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-foreground/20 bg-transparent hover:bg-foreground/10 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Parties Section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-xl font-semibold">Parties</h3>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {[
              { name: "Cadaver", members: "3 friends" },
              { name: "Bladerunner 2049", members: "5 friends" },
              { name: "Monsters Inc.", members: "2 friends" },
              { name: "Friends", members: "8 friends" },
              { name: "More", members: "" },
            ].map((party, i) => (
              <div key={i} className="flex flex-col gap-2 items-center">
                <div className="w-16 h-16 rounded-full border-2 border-border bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {party.name.slice(0, 2)}
                </div>
                <div className="flex flex-col gap-0 items-center">
                  <p className="text-sm font-medium text-center">{party.name}</p>
                  {party.members && <p className="text-xs text-muted-foreground">{party.members}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Watching Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Continue watching</h3>

          <div className="grid grid-cols-4 gap-4">
            {[
              { title: "Haunting of Hill House", progress: 45 },
              { title: "Ratched", progress: 20 },
              { title: "El Camino", progress: 78 },
              { title: "Stranger Things", progress: 60 },
            ].map((show, i) => (
              <div
                key={i}
                className="flex flex-col gap-0 overflow-hidden border border-border rounded-lg group cursor-pointer hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-video bg-muted">
                  <img
                    src={`/.jpg?height=200&width=300&query=${show.title}`}
                    alt={show.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white fill-current" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                    <div className="h-full bg-primary" style={{ width: `${show.progress}%` }} />
                  </div>
                </div>
                <div className="flex flex-col gap-1 p-3">
                  <p className="text-sm font-medium">{show.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar - 2 columns */}
      <aside className="col-span-2 flex flex-col gap-4 p-6 border-l border-border">
        <div className="flex flex-row gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold">
            RP
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-sm font-medium">Ramona P.</p>
            <p className="text-xs text-muted-foreground">Level 12</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold cursor-pointer hover:ring-2 hover:ring-primary transition-all"
            >
              U{i}
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}
