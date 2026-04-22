"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/achievements", label: "Achievements" },
  { href: "/blog", label: "Blog" },
  { href: "/qa", label: "Q&A" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-sky-900 font-[family-name:var(--font-space-grotesk)] hover:opacity-80 transition-opacity"
        >
          Ba-Hoang Tran
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "font-[family-name:var(--font-space-grotesk)] tracking-tight font-bold px-3 py-1 rounded-lg transition-colors",
                  isActive
                    ? "text-sky-900 border-b-2 border-sky-600 pb-1"
                    : "text-sky-700/70 hover:text-sky-900 hover:bg-sky-100/50"
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <a 
          href="https://www.linkedin.com/in/hoangtranba03/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-on-primary px-4 py-2 font-[family-name:var(--font-manrope)] font-bold text-sm tracking-tight rounded-lg hover:scale-[0.97] transition-transform duration-300 active:scale-[0.95]"
        >
          Connect
        </a>
      </div>
    </nav>
  );
}