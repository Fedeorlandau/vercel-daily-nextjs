"use client"

import { useState } from "react"
import { Bell, Menu, X } from "lucide-react"

interface NavbarProps {
  subscribed?: boolean
  onSubscribe?: () => void
  onUnsubscribe?: () => void
}

export function Navbar({ subscribed = false, onSubscribe, onUnsubscribe }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b-4 border-foreground bg-background sticky top-0 z-50">
      {/* Top rule decorative */}
      <div className="h-1 bg-accent" />

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-foreground flex items-center justify-center">
            <span className="text-primary-foreground font-mono text-xs font-bold">▲</span>
          </div>
          <span className="font-serif font-bold text-lg tracking-tight text-foreground">
            The Daily Dispatch
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="label-mono text-foreground hover:text-accent transition-colors">
            Home
          </a>
          <a href="#search-section" className="label-mono text-foreground hover:text-accent transition-colors">
            Search
          </a>
          <a href="#articles-section" className="label-mono text-foreground hover:text-accent transition-colors">
            Articles
          </a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="p-1.5 border border-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            <Bell size={14} />
          </button>

          {subscribed ? (
            <div className="hidden md:flex items-center gap-2">
              <span className="label-mono bg-accent text-accent-foreground px-3 py-1.5 text-xs">
                ✓ SUBSCRIBED
              </span>
              <button
                onClick={onUnsubscribe}
                className="label-mono text-xs border border-foreground px-3 py-1.5 hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                Unsubscribe
              </button>
            </div>
          ) : (
            <button
              onClick={onSubscribe}
              className="hidden md:block label-mono text-xs bg-foreground text-primary-foreground px-4 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Subscribe
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 border border-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-foreground bg-background px-4 py-4 flex flex-col gap-3">
          <a href="#" className="label-mono text-foreground py-1 border-b border-border">Home</a>
          <a href="#search-section" className="label-mono text-foreground py-1 border-b border-border">Search</a>
          <a href="#articles-section" className="label-mono text-foreground py-1 border-b border-border">Articles</a>
          {subscribed ? (
            <button onClick={onUnsubscribe} className="label-mono text-xs border border-foreground px-3 py-2 text-left">
              Unsubscribe
            </button>
          ) : (
            <button onClick={onSubscribe} className="label-mono text-xs bg-foreground text-primary-foreground px-3 py-2 text-left">
              Subscribe
            </button>
          )}
        </div>
      )}
    </header>
  )
}
