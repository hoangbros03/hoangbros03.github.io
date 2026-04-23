import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { getDictionary, Locale } from "@/lib/get-dictionary";
import { ProjectItem } from "@/lib/types";

export default async function ProjectsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <main className="pb-24 px-8 max-w-7xl mx-auto">
      <header className="mb-24">
        <div className="inline-block px-3 py-1 bg-surface-container-low text-primary font-label text-xs tracking-widest mb-6 border border-primary/10 rounded-lg uppercase">
          {dict.projects.header.label}
        </div>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl leading-[0.9] text-on-primary-container">
          {dict.projects.header.title}
        </h1>
        <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
          {dict.projects.header.description}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {dict.projects.items.map((project: ProjectItem) => (
          <section key={project.id} id={project.id} className="scroll-mt-24">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group h-full"
            >
              <Card tone="low" className="p-0 overflow-hidden h-full flex flex-col border border-transparent group-hover:border-primary/20 transition-all duration-300">
                <div className="relative h-64 w-full shrink-0">
                  <Image src={project.image || ""} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <span className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="mb-8 flex-grow">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-[family-name:var(--font-manrope)]">
                      {dict.projects.technicalFocus}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t: string) => <Chip key={t} variant="primary" className="bg-primary/5">{t}</Chip>)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                    <span className="text-xs font-bold text-outline uppercase tracking-widest">
                      {project.period}
                    </span>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      {dict.projects.viewSource} <Icon name="north_east" size={18} />
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          </section>
        ))}
      </div>
    </main>
  );
}
