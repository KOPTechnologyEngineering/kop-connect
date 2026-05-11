import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-hero">
      <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent shadow-glow group-hover:scale-110 transition-smooth" />
            <span className="font-bold tracking-tight text-lg">KOP<span className="text-gradient">.Technology</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map(n => (
              <Link key={n.to} to={n.to} className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                activeProps={{ className: "text-foreground font-medium" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-glow transition-smooth">
              Get in touch
            </Link>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/40 px-6 py-4 flex flex-col gap-3">
            {nav.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-border/40 mt-24">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KOP Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/services" className="hover:text-foreground transition-smooth">Services</Link>
            <Link to="/about" className="hover:text-foreground transition-smooth">About</Link>
            <Link to="/contact" className="hover:text-foreground transition-smooth">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
