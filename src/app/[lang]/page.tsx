import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { InquiryForm } from "@/components/pages/home/InquiryForm";
import { getDictionary, Locale } from "@/lib/get-dictionary";
import { Publication, ExperienceItem, HonorItem, ProjectItem } from "@/lib/types";

export default async function HomePage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  const getHref = (href: string) => `/${lang}${href === "/" ? "" : href}`;

  return (
    <div>
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[870px] flex flex-col justify-center px-8 max-w-7xl mx-auto py-24">
        {/* Ambient glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-primary/10 blur-[120px] pointer-events-none" />

        <div className="max-w-3xl relative z-10 pr-[52%] xl:pr-0">
          <span className="font-[family-name:var(--font-manrope)] text-primary tracking-[0.2em] text-xs font-bold uppercase mb-6 block">
            {dict.home.hero.role}
          </span>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-on-surface">
            {dict.home.hero.title} <br />
            <span className="text-primary/60">{dict.home.hero.subtitle}</span>
          </h1>

          <div className="flex flex-col gap-3 mb-12 text-on-surface-variant text-lg md:text-xl font-light leading-snug max-w-xl">
            {dict.home.hero.description.map((line: string, i: number) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href={getHref("/experience")}>
              <Button variant="primary" size="lg">
                {dict.home.hero.viewExperience}
              </Button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" rightIcon="download" className="!bg-sandy-yellow !text-[#281804] !border-none hover:brightness-110 shadow-lg">
                {dict.home.hero.getCV}
              </Button>
            </a>
            <Link href={getHref("/projects")}>
              <Button variant="secondary" size="lg" className="border-outline-variant/20">
                {dict.home.hero.projects}
              </Button>
            </Link>
          </div>

          <div className="flex gap-6 mt-10 ml-1 items-center">
            <a 
              href="https://github.com/hoangbros03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors p-2 -m-2"
              title="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/hoangtranba03/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors p-2 -m-2"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a 
              href="https://scholar.google.com/citations?user=uwK1YzMAAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors p-2 -m-2"
              title="Google Scholar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.599 9.084a1 1 0 0 0-.019 1.838l9.42 4.139a2 2 0 0 0 1.66 0z"/><path d="M6 13v4c0 .852.666 1.622 1.672 2.162l.032.016A7.448 7.448 0 0 0 12 20a7.448 7.448 0 0 0 4.296-.822l.032-.016C17.334 18.622 18 17.852 18 17v-4"/><path d="M22 10v6"/></svg>
            </a>
          </div>
        </div>

        {/* Hero image — right side, desktop only */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[40%] hidden xl:block">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-surface-container-high">
            <Image
              src="/profile.jpg"
              alt={dict.home.hero.alt}
              fill
              className="object-cover hover:scale-105 transition-all duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── Selected Publications Section ─── */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-[family-name:var(--font-manrope)] text-on-tertiary-container tracking-widest text-xs font-bold uppercase mb-2 block">
                {dict.home.publications.label}
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-on-surface">
                {dict.home.publications.title}
              </h2>
            </div>
            <Link
              href={getHref("/publications")}
              className="text-primary font-semibold flex items-center gap-1 hover:underline"
            >
              {dict.home.publications.viewAll}
              <Icon name="open_in_new" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(dict.publications.items as Publication[]).slice(0, 2).map((pub: Publication, i: number) => (
              <a 
                key={i}
                href={pub.links[0].href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card tone="high" hoverLift>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <Chip variant={pub.conferenceVariant || "primary"}>{pub.conference}</Chip>
                      <Icon name="article" size={24} className="text-outline group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-on-surface leading-snug group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-on-surface-variant mb-6 leading-relaxed">
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {pub.year === "2025" && <Chip variant="default">{dict.common.multimodal}</Chip>}
                      <Chip variant="default">{dict.common.research}</Chip>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Work Experience Section ─── */}
      <section className="bg-white py-24 px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-[family-name:var(--font-manrope)] text-on-tertiary-container tracking-widest text-xs font-bold uppercase mb-2 block">
                {dict.home.experience.label}
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-on-surface">
                {dict.home.experience.title}
              </h2>
            </div>
            <Link href={getHref("/experience")}>
              <Button variant="secondary" size="md" rightIcon="arrow_forward">
                {dict.home.experience.viewAll}
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            {dict.experience.work.items.slice(0, 2).map((job: ExperienceItem, i: number) => (
              <Card key={i} tone="low" hoverLift className="p-8 border border-outline-variant/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex flex-1 items-start gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-outline-variant/20 bg-white p-3">
                      <Image
                        src={job.logo}
                        alt={job.logoAlt || job.company}
                        fill
                        className="object-contain p-1"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-on-surface">{job.role}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span className="font-[family-name:var(--font-manrope)] text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      {job.period}
                    </span>
                    <p className="text-sm text-on-surface-variant mt-1">{job.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Honors & Achievements Section ─── */}
      <section className="bg-sand-100 py-24 px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-[family-name:var(--font-manrope)] text-tertiary tracking-widest text-xs font-bold uppercase mb-2 block">
                {dict.home.achievements.label}
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-on-surface">
                {dict.home.achievements.title}
              </h2>
            </div>
            <Link href={getHref("/achievements")}>
              <Button variant="secondary" size="md" rightIcon="emoji_events" className="bg-primary text-on-primary hover:bg-primary-dark border-primary/20">
                {dict.home.achievements.viewAll}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.achievements.honors.items.slice(0, 3).map((honor: HonorItem, i: number) => (
              <Card key={i} tone="lowest" className="p-8 bg-white border border-outline-variant/10 shadow-sm">
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-4 inline-block px-2 py-1 rounded ${i === 0 ? "bg-tertiary-container text-on-tertiary-container" : i === 1 ? "bg-secondary-container text-on-secondary-container" : "bg-primary-container text-on-primary-container"}`}>
                  {honor.date}
                </span>
                <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {honor.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {honor.org}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Personal Projects Section ─── */}
      <section className="bg-surface-container-low py-24 px-8 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-[family-name:var(--font-manrope)] text-on-tertiary-container tracking-widest text-xs font-bold uppercase mb-2 block">
                {dict.home.projects.label}
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-on-surface">
                {dict.home.projects.title}
              </h2>
            </div>
            <Link href={getHref("/projects")}>
              <Button variant="secondary" size="md" rightIcon="arrow_forward">
                {dict.home.projects.viewAll}
              </Button>
            </Link>
          </div>

        <div className="grid grid-cols-12 gap-8 items-stretch">
          {/* Left — AI Voice Chat (col-span-7) */}
          <a 
            href={dict.projects.items[0].github} 
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-12 md:col-span-7 group"
          >
            <Card className="h-full overflow-hidden border border-transparent group-hover:border-primary/20 transition-all duration-300" tone="low">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={dict.projects.items[0].image}
                  alt={dict.projects.items[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 group-hover:text-primary transition-colors">
                  {dict.projects.items[0].title}
                </h3>
                <p className="text-on-surface-variant text-lg mb-6 max-w-xl">
                  {dict.projects.items[0].description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  {dict.home.projects.viewGithub} <Icon name="north_east" size={18} />
                </div>
              </div>
            </Card>
          </a>

          {/* Right — Translation & Compression (col-span-5) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
            {dict.projects.items.slice(1, 3).map((project: ProjectItem, i: number) => (
              <a 
                key={i}
                href={project.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group"
              >
                <Card tone="high" className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 border border-transparent group-hover:border-primary/20">
                  <div className="p-6">
                    <Icon name={i === 0 ? "translate" : "compress"} size={32} className="text-primary mb-4" />
                    <h4 className="text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-primary transition-colors">{project.title}</h4>
                    <p className="text-on-surface-variant text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-6 border-t border-outline-variant/10">
                    <div className="flex items-center gap-2 text-primary font-medium">
                      {dict.home.projects.viewGithub} <Icon name="north_east" size={18} />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* ─── Blog Section (Digital Garden) ─── */}
      <section className="bg-surface-container-lowest py-24 px-8 relative overflow-hidden">
        {/* Subtle backdrop text for "Coming Soon" */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-outline-variant/5 pointer-events-none whitespace-nowrap select-none uppercase tracking-tighter">
          {dict.home.blog.comingSoon}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-[family-name:var(--font-manrope)] text-primary tracking-widest text-xs font-bold uppercase block">
                  {dict.home.blog.label}
                </span>
                <Badge variant="primary" className="bg-tertiary-container text-on-tertiary-container text-[10px] py-0.5">
                  {dict.common.bringingSoon}
                </Badge>
              </div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-on-surface">
                {dict.home.blog.title}
              </h2>
              <p className="text-on-surface-variant mt-4">
                {dict.home.blog.description}
              </p>
            </div>
            <Button variant="secondary" size="md" rightIcon="auto_stories" disabled>
              {dict.home.blog.comingSoon}
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Q&A Inquiry Section ─── */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight mb-4">
            {dict.home.qa.title}
          </h2>
          <p className="text-on-surface-variant">
            {dict.home.qa.description}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card tone="low">
            <div className="p-8">
              <InquiryForm dictionary={dict} />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
