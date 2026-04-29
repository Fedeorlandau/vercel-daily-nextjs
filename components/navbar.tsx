"use client";
import { Suspense, useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import Link from "next/link";
import NavbarActions from "./navbar-actions";

export function Navbar({ actions }: { actions: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b-4 border-foreground bg-background sticky top-0 z-50">
      {/* Top rule decorative */}
      <div className="h-1 bg-accent" />

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-foreground flex items-center justify-center">
              <span className="text-primary-foreground font-mono text-xs font-bold">
                ▲
              </span>
            </div>
            <span className="font-serif font-bold text-lg tracking-tight text-foreground">
              The Daily Dispatch
            </span>
          </div>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="label-mono text-foreground hover:text-accent transition-colors"
          >
            Home
          </Link>
          <Link
            href="/search"
            className="label-mono text-foreground hover:text-accent transition-colors"
          >
            Search
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="p-1.5 border border-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            <Bell size={14} />
          </button>

          {actions}

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
          <a
            href="#"
            className="label-mono text-foreground py-1 border-b border-border"
          >
            Home
          </a>
          <a
            href="#search-section"
            className="label-mono text-foreground py-1 border-b border-border"
          >
            Search
          </a>
          <a
            href="#articles-section"
            className="label-mono text-foreground py-1 border-b border-border"
          >
            Articles
          </a>
          {actions}
        </div>
      )}
    </header>
  );
}
