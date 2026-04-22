import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

interface PublicationLink {
  label: string;
  icon: string;
  href: string;
}

interface Publication {
  year: string;
  conference?: string;
  conferenceVariant?: "default" | "primary" | "sandy";
  typeLabel: string;
  publisher?: string;
  title: string;
  description: string;
  links: PublicationLink[];
  image?: {
    src: string;
    alt: string;
  };
}

const publications: Publication[] = [
  {
    year: "2025",
    conference: "ACM Multimedia (A*)",
    conferenceVariant: "primary",
    typeLabel: "Conference Paper",
    publisher: "Association for Computing Machinery",
    title:
      "MUDI: A Multimodal Biomedical Dataset for Understanding Pharmacodynamic Drug-Drug Interactions",
    description:
      "Establishing a new Multimodal Biomedical Dataset (MUDI) and proposing diverse multimodal fusion strategies for Drug-Drug Interaction extraction. Presented at the top-tier 33rd ACM International Conference on Multimedia.",
    links: [
      { label: "arXiv", icon: "description", href: "https://arxiv.org/abs/2506.01478" },
      { label: "Paper", icon: "article", href: "https://arxiv.org/abs/2506.01478" },
    ],
    image: {
      src: "/publishers/acm.png",
      alt: "ACM publisher logo",
    },
  },
  {
    year: "2025",
    conference: "JBI (Q1)",
    conferenceVariant: "primary",
    typeLabel: "Journal Article",
    publisher: "Elsevier",
    title:
      "Comprehensive Analysis of Multimodal Drug-Drug Interaction Extraction Using Diverse Fusion Strategies",
    description:
      "Published in the Journal of Biomedical Informatics. A deep dive into attention-based and multimodal fusion techniques for identifying complex pharmacological interactions.",
    links: [
      { label: "DOI", icon: "article", href: "https://doi.org/10.1016/j.jbi.2025.104874" },
    ],
    image: {
      src: "/publishers/elsevier.svg",
      alt: "Elsevier publisher logo",
    },
  },
  {
    year: "2024",
    conference: "BME 2024",
    conferenceVariant: "default",
    typeLabel: "Conference Paper",
    publisher: "Springer Nature",
    title: "Improving Drug-Drug Interaction Extraction from Biomedical Literature using Deep Multimodal Fusion",
    description:
      "Oral presentation at BME 2024. Focused on leveraging deep multimodal fusion to enhance the accuracy of DDI extraction from unstructured scientific text.",
    links: [{ label: "DOI", icon: "description", href: "https://doi.org/10.1007/978-3-031-90194-2_36" }],
    image: {
      src: "/publishers/springer-nature.svg",
      alt: "Springer Nature publisher logo",
    },
  },
];

// Group publications by year
const groupedPublications = publications.reduce(
  (acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  },
  {} as Record<string, Publication[]>
);

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

export default function PublicationsPage() {
  return (
    <main className="pb-20 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="inline-block px-3 py-1 bg-surface-container-low text-primary font-label text-xs tracking-widest mb-6 border border-primary/10 rounded-lg uppercase">
            Scholarly Archive
          </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl font-bold tracking-tight max-w-4xl text-on-surface">
            Publications &amp; Research
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mt-4 leading-relaxed">
            Exploring the intersection of multimodal intelligence and complex biological
            systems through peer-reviewed academic rigor.
          </p>
        </div>
      </section>

      {/* Year-Grouped Publication List */}
      <div className="flex flex-col gap-12">
        {Object.entries(groupedPublications)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, pubs]) => (
            <section key={year}>
            {/* Year heading + divider */}
            <div className="flex items-center gap-6 mb-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-on-surface">{year}</h2>
              <div className="h-[1px] flex-grow bg-surface-container-highest" />
            </div>

            {/* Publication cards */}
            <div className="grid grid-cols-1 gap-6">
              {pubs.map((pub, idx) => (
                <PublicationCard key={idx} pub={pub} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
