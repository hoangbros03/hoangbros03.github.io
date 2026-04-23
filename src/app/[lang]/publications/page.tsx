import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { getDictionary, Locale } from "@/lib/get-dictionary";
import { Publication } from "@/lib/types";

function PublicationCard({ pub }: { pub: Publication }) {
  const primaryLink = pub.links[0]?.href;

  return (
    <a 
      href={primaryLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block group"
    >
      <Card tone="high" hoverLift className="p-8 transition-all duration-300 hover:shadow-md border border-transparent hover:border-primary/20">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: Content */}
          <div className="flex-grow flex flex-col gap-4">
            {/* Badges row */}
            <div className="flex flex-wrap gap-2">
              {pub.conference && (
                <Chip variant={pub.conferenceVariant ?? "default"}>
                  {pub.conference}
                </Chip>
              )}
              <Badge variant="ghost" className="text-on-surface-variant">
                {pub.typeLabel}
              </Badge>
            </div>

            {/* Title */}
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-on-surface leading-snug group-hover:text-primary transition-colors">
              {pub.title}
            </h3>

            {/* Description */}
            <p className="text-on-surface-variant leading-relaxed">{pub.description}</p>

            {/* Action links */}
            <div className="flex flex-wrap gap-6 mt-1">
              {pub.links.map((link) => (
                <div
                  key={link.label}
                  className="flex items-center gap-2 text-sm font-medium text-on-surface-variant group-hover:text-primary/80 transition-colors"
                >
                  <Icon name={link.icon} size={18} />
                  {link.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Thumbnail */}
          {pub.image && (
            <div className="md:w-48 shrink-0">
              <div className="flex flex-col gap-3 rounded-2xl border border-outline-variant/20 bg-white p-5">
                {pub.publisher && (
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                    {pub.publisher}
                  </span>
                )}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-container-lowest">
                  <Image
                    src={pub.image.src}
                    alt={pub.image.alt}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="192px"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </a>
  );
}

export default async function PublicationsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  // Group publications by year
  const groupedPublications = (dict.publications.items as Publication[]).reduce(
    (acc: Record<string, Publication[]>, pub: Publication) => {
      if (!acc[pub.year]) acc[pub.year] = [];
      acc[pub.year].push(pub);
      return acc;
    },
    {} as Record<string, Publication[]>
  );

  return (
    <main className="pb-20 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="inline-block px-3 py-1 bg-surface-container-low text-primary font-label text-xs tracking-widest mb-6 border border-primary/10 rounded-lg uppercase">
            {dict.publications.header.label}
          </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl font-bold tracking-tight max-w-4xl text-on-surface">
            {dict.publications.header.title}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mt-4 leading-relaxed">
            {dict.publications.header.description}
          </p>
        </div>
      </section>

      {/* Year-Grouped Publication List */}
      <div className="flex flex-col gap-12">
        {Object.entries(groupedPublications)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, pubs]: [string, Publication[]]) => (
            <section key={year}>
            {/* Year heading + divider */}
            <div className="flex items-center gap-6 mb-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-on-surface">{year}</h2>
              <div className="h-[1px] flex-grow bg-surface-container-highest" />
            </div>

            {/* Publication cards */}
            <div className="grid grid-cols-1 gap-6">
              {pubs.map((pub: Publication, idx: number) => (
                <PublicationCard key={idx} pub={pub} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
