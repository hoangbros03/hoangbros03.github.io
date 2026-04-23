import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { getDictionary, Locale } from "@/lib/get-dictionary";
import { TravelItem } from "@/lib/types";

export default async function TravelPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <main className="pb-24 px-8 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <section className="pb-24 mb-20 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-on-primary-container mb-6 font-[family-name:var(--font-space-grotesk)]">
          {dict.travel.header.title}
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed mx-auto md:mx-0 font-[family-name:var(--font-manrope)]">
          {dict.travel.header.description}
        </p>
      </section>

      {/* Masonry Grid */}
      <section>
        <div className="masonry-grid">
          {dict.travel.items.map((entry: TravelItem) => (
            <article
              key={entry.title}
              className="masonry-item group relative rounded-xl overflow-hidden border border-outline-variant/20 bg-surface-container-low shadow-sm transition-all duration-300 hover:bg-surface-container-high hover:shadow-md"
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${entry.aspect}`}>
                <Image
                  src={entry.imageUrl}
                  alt={entry.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Tags */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-md bg-sandy-yellow/10 text-sandy-yellow font-[family-name:var(--font-manrope)]">
                    {entry.location}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-on-surface-variant font-[family-name:var(--font-manrope)]">
                    {entry.season}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-4 text-on-primary-container group-hover:text-primary transition-colors leading-tight font-[family-name:var(--font-space-grotesk)]">
                  {entry.title}
                </h2>

                {/* Description */}
                <p className="text-on-surface-variant line-clamp-3 mb-6 font-[family-name:var(--font-manrope)]">
                  {entry.description}
                </p>

                {/* Read Log link */}
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary text-sm font-semibold tracking-tight uppercase font-[family-name:var(--font-manrope)] hover:text-on-primary-container transition-colors"
                >
                  {dict.travel.readLog}
                  <Icon name="arrow_forward" size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Discover More Modules Button */}
        <div className="mt-16 flex justify-center">
          <button className="group flex flex-col items-center gap-4 py-8 px-12 rounded-xl border border-outline-variant/20 bg-surface-container-low shadow-sm hover:shadow-md transition-all font-[family-name:var(--font-manrope)]">
            <span className="text-xs tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors font-bold">
              {dict.travel.discoverMore}
            </span>
            <Icon name="expand_more" size={36} className="text-primary animate-bounce" />
          </button>
        </div>
      </section>
    </main>
  );
}
