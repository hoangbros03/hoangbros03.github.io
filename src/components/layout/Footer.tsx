export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 w-full py-12 px-8 mt-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-sky-900 font-[family-name:var(--font-space-grotesk)]">
          Ba-Hoang Tran
        </div>

        {/* Copyright */}
        <p className="font-[family-name:var(--font-manrope)] text-sm tracking-widest uppercase text-sky-600">
          © {year} Ba-Hoang Tran. AI Engineer & Researcher.
        </p>

        {/* Links */}
        <div className="flex gap-8 font-[family-name:var(--font-manrope)] text-sm tracking-widest uppercase">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/hoangtranba03/" },
            { label: "GitHub", href: "https://github.com/hoangbros03" },
            { label: "Scholar", href: "https://scholar.google.com/citations?user=uwK1YzMAAAAJ" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-900 hover:underline decoration-sky-500/30 underline-offset-4 transition-all ease-in-out duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}