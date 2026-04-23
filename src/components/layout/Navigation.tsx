"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Locale } from "@/lib/get-dictionary";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/publications", label: "publications" },
  { href: "/achievements", label: "achievements" },
  { href: "/blog", label: "blog" },
  { href: "/qa", label: "qa" },
];

export function Navigation({ lang }: { lang: Locale }) {
  const pathname = usePathname();

  // Dictionary for navigation labels
  const labels: Record<string, string> = lang === "ru" ? {
    home: "Главная",
    experience: "Опыт",
    projects: "Проекты",
    publications: "Публикации",
    achievements: "Достижения",
    blog: "Блог",
    qa: "Вопросы",
    connect: "Связаться"
  } : lang === "de" ? {
    home: "Startseite",
    experience: "Erfahrung",
    projects: "Projekte",
    publications: "Publikationen",
    achievements: "Erfolge",
    blog: "Blog",
    qa: "Q&A",
    connect: "Kontakt"
  } : {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    publications: "Publications",
    achievements: "Achievements",
    blog: "Blog",
    qa: "Q&A",
    connect: "Connect"
  };

  const getHref = (href: string) => `/${lang}${href === "/" ? "" : href}`;

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href={getHref("/")}
          className="text-2xl font-bold tracking-tighter text-sky-900 font-[family-name:var(--font-space-grotesk)] hover:opacity-80 transition-opacity"
        >
          Ba-Hoang Tran
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => {
            const fullHref = getHref(href);
            const isActive =
              href === "/" ? pathname === `/${lang}` || pathname === `/${lang}/` : pathname.startsWith(fullHref);
            return (
              <Link
                key={href}
                href={fullHref}
                className={clsx(
                  "font-[family-name:var(--font-space-grotesk)] tracking-tight font-bold px-3 py-1 rounded-lg transition-colors",
                  isActive
                    ? "text-sky-900 border-b-2 border-sky-600 pb-1"
                    : "text-sky-700/70 hover:text-sky-900 hover:bg-sky-100/50"
                )}
              >
                {labels[label]}
              </Link>
            );
          })}
        </div>

        {/* Right Section: Language Switcher + CTA */}
        <div className="flex items-center gap-4">
          <div className="flex bg-sky-100/50 rounded-lg p-1 border border-sky-200/50">
            <Link 
              href={pathname.replace(`/${lang}`, "/en")}
              className={clsx(
                "px-2 py-1 text-xs font-bold rounded-md transition-all",
                lang === "en" ? "bg-white text-sky-900 shadow-sm" : "text-sky-700/50 hover:text-sky-900"
              )}
            >
              EN
            </Link>
            <Link 
              href={pathname.replace(`/${lang}`, "/ru")}
              className={clsx(
                "px-2 py-1 text-xs font-bold rounded-md transition-all",
                lang === "ru" ? "bg-white text-sky-900 shadow-sm" : "text-sky-700/50 hover:text-sky-900"
              )}
            >
              RU
            </Link>
            <Link 
              href={pathname.replace(`/${lang}`, "/de")}
              className={clsx(
                "px-2 py-1 text-xs font-bold rounded-md transition-all",
                lang === "de" ? "bg-white text-sky-900 shadow-sm" : "text-sky-700/50 hover:text-sky-900"
              )}
            >
              DE
            </Link>
          </div>

          <a 
            href="https://www.linkedin.com/in/hoangtranba03/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-4 py-2 font-[family-name:var(--font-manrope)] font-bold text-sm tracking-tight rounded-lg hover:scale-[0.97] transition-transform duration-300 active:scale-[0.95]"
          >
            {labels.connect}
          </a>
        </div>
      </div>
    </nav>
  );
}