import { Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { footerColumns } from "@/data/site";
import { ButtonLink } from "./Button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-x-0 top-0 h-px gold-rule" aria-hidden="true" />
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-sm">
            <span className="flex items-center gap-2">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-gold/60 bg-gold/10 font-display font-bold text-gold">
                F
              </span>
              <span className="font-display text-lg font-bold">
                Fredacorpal<span className="text-gold">™</span>
              </span>
            </span>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Integrated digital infrastructure, performance marketing, technical
              services and elite remote talent for enterprises operating globally.
            </p>
            <p className="mt-5 font-display text-sm text-gold">
              Connecting Talents, Building the Future.
            </p>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase">
                {col.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition-colors duration-300 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-gold/30 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <div className="flex min-w-0 items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-gold/50 text-gold">
                <Lock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="font-display text-base font-bold">
                  Fredacorpal™ Staff Portal
                </h2>
                <p className="mt-1 text-sm text-white/60">
                  Restricted access for authenticated team members.
                </p>
              </div>
            </div>
            <ButtonLink to="/staff-portal" variant="outline" className="text-white">
              Staff Login
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Fredacorpal™ Integrated Services. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-gold">
              Terms
            </Link>
            <Link to="/contact" className="transition-colors hover:text-gold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
