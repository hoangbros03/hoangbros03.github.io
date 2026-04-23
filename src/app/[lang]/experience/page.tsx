import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { getDictionary, Locale } from "@/lib/get-dictionary";
import { ExperienceItem, EducationItem } from "@/lib/types";

export default async function ExperiencePage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <main className="pb-24 px-8 max-w-7xl mx-auto">
      <header className="mb-24">
        <div className="inline-block px-3 py-1 bg-surface-container-low text-primary font-label text-xs tracking-widest mb-6 border border-primary/10 rounded-lg uppercase">
          {dict.experience.header.label}
        </div>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl leading-[0.9] text-on-primary-container">
          {dict.experience.header.title}
        </h1>
        <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
          {dict.experience.header.description}
        </p>
      </header>

      {/* Experience Section */}
      <section className="mb-24">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-outline mb-12 font-[family-name:var(--font-manrope)]">
          {dict.experience.work.title}
        </h2>
        <div className="space-y-12">
          {dict.experience.work.items.map((exp: ExperienceItem, index: number) => (
            <div key={index} className="relative pl-8 border-l-2 border-outline-variant/30">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_4px_rgba(var(--primary-rgb),0.1)]" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-outline-variant/20 bg-white p-3">
                    <Image
                      src={exp.logo}
                      alt={exp.logoAlt || exp.company}
                      fill
                      className="object-contain p-2"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-on-surface">
                      {exp.role}
                    </h2>
                    <div className="text-xl text-primary font-medium mt-1">
                      {exp.company}
                    </div>
                  </div>
                </div>
                <div className="font-[family-name:var(--font-manrope)] text-sm font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10">
                  {exp.period}
                </div>
              </div>

              <Card tone="low" className="p-8">
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-[family-name:var(--font-manrope)]">
                    {dict.experience.work.achievementsLabel}
                  </h3>
                  <ul className="space-y-3">
                    {exp.achievements.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-on-surface/80">
                        <Icon name="check_circle" size={20} className="text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-outline mb-12 font-[family-name:var(--font-manrope)]">
          {dict.experience.education.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.experience.education.items.map((edu: EducationItem, i: number) => (
            <Card key={i} tone="high" className="p-8">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
                {edu.period}
              </span>
              <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                {edu.school}
              </h3>
              <p className="text-lg font-medium text-on-surface/80 mb-4">
                {edu.degree}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {edu.details}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
