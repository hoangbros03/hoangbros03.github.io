import { Card } from "@/components/ui/Card";
import { AskForm } from "@/components/pages/qa/AskForm";
import { getDictionary, Locale } from "@/lib/get-dictionary";

export default async function QAPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      {/* Decorative Backdrop */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary-container/50 blur-[120px] rounded-full" />
      </div>

      <main className="pt-32 pb-24 px-6 md:px-8 max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl font-bold tracking-tight text-on-surface mb-4">
            {dict.qa.header.title}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-[family-name:var(--font-manrope)]">
            {dict.qa.header.description}
          </p>
        </header>

        {/* Ask Anything Form */}
        <section className="mb-20">
          <Card tone="low" className="p-8 rounded-xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] rounded-full" />
            <div className="relative z-10">
              <AskForm dictionary={dict} />
            </div>
          </Card>
        </section>
      </main>
    </>
  );
}
