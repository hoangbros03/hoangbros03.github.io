import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

const travelEntries = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGTBmpOsBs80FgXyq9BipDu829ThXCdCokZIwKHrj8pu4thShUAXyLOfkHHZkK4viag_aGAPP5ML4wgIS-34RIQwnGAdJuko2IrN23miR5e5Xucif4JDEnrKJ-AcT0kDsES_O4zREJsK-DwFn6rFgsEkvDcvkSHs6t-vnfm7rpaRUS9DprwNCLf90h92xVZVaYP4_bVBv_CGNOd0kIQ_dvooye_hBZLtOKOazaTVemAiHF4kB_xC7D6aTeJa3Aj9FgM9j-T_lhW7k",
    location: "Kyoto, Japan",
    season: "Autumn 2024",
    title: "Synthesizing Tradition & Silicon",
    description:
      "Exploring the intersection of ancient craftsmanship and modern tech infrastructure in the heart of Japan's cultural capital.",
    aspect: "aspect-[3/4]" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQjkfSuea5HlCHINXTtWD3FUYtFmYon3llpjRn22y897EJZ15mWncEbu79MNXPkb1Q5yWxF_ajxZeVHTSD3b1v5zxf67PwJ65cR_XtHcG51y8Y9bMD3lJcEKXFW-GWS38N7RMpLNu9IWgcpw3kWqjNjDs5ac8MHiIc0wDEbuqXjzoSOqETK16neXJJNC4DNom6orA-Zt_IPdnfpp4qStaFYaEXiW-PSkJ4Mt5qIPECcdaLLqGePQN3c8m7ZlNcUsuYhjYG8k-EAhE",
    location: "Switzerland",
    season: "Winter 2023",
    title: "Peak Focus",
    description:
      "Isolating the noise. A deep-work retreat among the high-altitude landscapes of the Bernese Oberland.",
    aspect: "aspect-video" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTaCmPeO9Mf1zmogUPN7lwHVcOXQY4a4eL37VvJSYYJuzpU5fEt8ovDCj9c2FXCD8CJFf3okCMC8KHTqn-G9iv83YbcGhAQs0UQRPV113955RknnYeogehkHnRQVFvT3PhgOE1VxOjMP3zslhBYglK4_r5jGwFh7AxArCImC84PRbdYVPEQce-9K7nvNxl_D4gMutC7l4jE5JsNk_BI1ekTAwLF7VMsNx2FfVx5x75uitXdUhvHDt3fBhgt4Mf6rOVKHc6d10-vY",
    location: "San Francisco",
    season: "Spring 2024",
    title: "Urban Nodes",
    description:
      "A photographic study of the physical infrastructure powering the generative AI boom.",
    aspect: "aspect-square" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWh3dUXUPwoIu7So0bdNET49T4o1AORnHCF1eMMan5arYAc_uMn5HrcS52t1QWNuqG1DXWtd0YXn5kBNUASZr63M9a73rWNgpdtY3jxh6lyuYe9aWODpqIo9VX2ceyLFfER1NL4sC33v1goeqTTms1jmMKBjTJTcPrr5YknPG5VfV_dM0_xm19uVRYIEYbIVPv7z-ssNRfxE6_fXootKN5RcGQSzM9IOgte7NyXqkHYOdbir70vtDY9sJPN-n04e3E-VKUlUXgARg",
    location: "Denmark",
    season: "Summer 2024",
    title: "The Logic of Design",
    description:
      "Systematic aesthetics and functional minimalism in the Nordic urban landscape.",
    aspect: "aspect-[4/5]" as const,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Trh8aPyp6w24b3sSiaS-x3n6PqbPliAHADPFdg0_4cM2M5XXMH631edQqtjgpAxl5T8zWQwXFCIlgb5R9IL9yMKP-ynpe41Bk2TQEo1SP2cw3ym55cnumVhancb4HJH-2syyz1ckUbSAawZ9AUfOyE2-9B8jpRc8-j88pXsjL62F5v8hjpDc4mLra1HhtJJl_E1pFrAosrd1WD2kRDnFSQPq66QFujThds2wQmoGKUX9PfamuRPda_tnqsIu5wTsr2551Yi0YyI",
    location: "Atacama, Chile",
    season: "Winter 2024",
    title: "Observing the Void",
    description:
      "Stargazing from the driest place on Earth — where atmospheric noise is at its theoretical minimum.",
    aspect: "aspect-video" as const,
  },
];

export default function TravelPage() {
  return (
    <main className="pb-24 px-8 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <section className="pb-24 mb-20 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-on-primary-container mb-6 font-[family-name:var(--font-space-grotesk)]">
          Travel Log
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed mx-auto md:mx-0 font-[family-name:var(--font-manrope)]">
          The highly visual masonry grid of my trips, natively supporting
          multi-language markdown files.
        </p>
      </section>

      {/* Masonry Grid */}
      <section>
        <div className="masonry-grid">
          {travelEntries.map((entry) => (
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
                  READ LOG
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
              Discover More Modules
            </span>
            <Icon name="expand_more" size={36} className="text-primary animate-bounce" />
          </button>
        </div>
      </section>
    </main>
  );
}
