import { getDictionary, Locale } from "@/lib/get-dictionary";

export default async function BlogPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <main className="pb-24 px-8 max-w-7xl mx-auto">
      <header className="relative overflow-hidden rounded-[2rem] border border-outline-variant/15 bg-linear-to-br from-surface-container-lowest via-surface-container-low to-surface-container-high px-8 py-16 md:px-12 md:py-24">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-tertiary/15 blur-3xl" />

        <div className="relative max-w-4xl">
          <div className="inline-block px-3 py-1 bg-white/80 text-primary font-label text-xs tracking-widest mb-6 border border-primary/10 rounded-lg uppercase">
            {dict.blog.header.label}
          </div>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-on-surface mb-6">
            {dict.blog.header.title}
          </h1>
          <p className="text-on-surface-variant text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
            {dict.blog.header.description}
          </p>
        </div>
      </header>
    </main>
  );
}
