import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { getDictionary, Locale } from "@/lib/get-dictionary";
import { HonorItem, LeadershipItem } from "@/lib/types";

export default async function AchievementsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <main className="pb-24 px-8 max-w-7xl mx-auto">
      <header className="mb-24">
        <div className="inline-block px-3 py-1 bg-surface-container-low text-primary font-label text-xs tracking-widest mb-6 border border-primary/10 rounded-lg uppercase">
          {dict.achievements.header.label}
        </div>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl leading-[0.9] text-on-primary-container">
          {dict.achievements.header.title}
        </h1>
        <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
          {dict.achievements.header.description}
        </p>
      </header>

      {/* Honors Grid */}
      <section className="mb-32">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-outline mb-12 font-[family-name:var(--font-manrope)]">
          {dict.achievements.honors.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.achievements.honors.items.map((honor: HonorItem, i: number) => (
            <Card key={i} tone="low" className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="primary">{honor.highlight}</Badge>
                  <span className="text-xs font-bold text-on-surface-variant font-[family-name:var(--font-manrope)]">
                    {honor.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)] leading-tight">
                  {honor.title}
                </h3>
                <p className="text-primary text-sm font-semibold mb-4">{honor.org}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {honor.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-outline mb-12 font-[family-name:var(--font-manrope)]">
          {dict.achievements.leadership.title}
        </h2>
        <div className="space-y-6">
          {dict.achievements.leadership.items.map((item: LeadershipItem, i: number) => (
            <Card key={i} tone="high" className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">
                      {item.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant" />
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                      {item.event}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                    {item.role}
                  </h3>
                  <p className="text-on-surface-variant mt-2 max-w-3xl">
                    {item.description}
                  </p>
                </div>
                <Icon name="groups" size={40} className="text-primary/20 hidden md:block" />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
