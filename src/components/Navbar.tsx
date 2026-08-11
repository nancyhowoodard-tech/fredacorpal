import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/site";
import { ButtonLink } from "./Button";
import { Logo } from "./Primitives";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300 glass",
        scrolled ? "border-border shadow-elevate" : "border-transparent",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" aria-label="Fredacorpal Integrated Services home" className="min-w-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-gold" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <ButtonLink to="/careers" variant="outline" size="sm">
            Join Our Team
          </ButtonLink>
          <ButtonLink to="/contact" size="sm">
            Work With Us
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-5">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-gold border-gold" }}
              className="rounded-md border-l-2 border-transparent px-4 py-3 text-base font-medium transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-2">
            <ButtonLink to="/contact" size="lg">
              Work With Us
            </ButtonLink>
            <ButtonLink to="/careers" variant="outline" size="lg">
              Join Our Team
            </ButtonLink>
            <ButtonLink to="/staff-portal" variant="ghost" size="sm">
              Staff Portal
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
