import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { InquiryForm } from "@/components/pages/home/InquiryForm";

export default function HomePage() {
  return (
    <div>
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[870px] flex flex-col justify-center px-8 max-w-7xl mx-auto py-24">
        {/* Ambient glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-primary/10 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl relative z-10 pr-[52%] xl:pr-0">
          <span className="font-[family-name:var(--font-manrope)] text-primary tracking-[0.2em] text-xs font-bold uppercase mb-6 block">
            AI Engineer &amp; Researcher
          </span>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-on-surface">
            I&apos;m Ba-Hoang Tran. <br />
            <span className="text-primary/60">Advancing Multimodal Intelligence.</span>
          </h1>

          <div className="flex flex-col gap-3 mb-12 text-on-surface-variant text-lg md:text-xl font-light leading-snug max-w-xl">
            <p>AI Engineer at <span className="text-on-surface font-medium">VinSmart Future</span> (Speech &amp; AI Agents)</p>
            <p>Incoming M2 at <span className="text-on-surface font-medium">Université Paris-Saclay</span>. B.S. in Computer Science (High Distinction), <span className="text-on-surface font-medium">VNU-UET</span>.</p>
            <p>Specializing in <span className="text-on-surface font-medium">Agentic Systems, GraphRAG, and On-Device SLM</span></p>
            <p>Researching <span className="text-on-surface font-medium">Multimodal Learning for Healthcare AI</span></p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/experience">
              <Button variant="primary" size="lg">
                View Experience
              </Button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" rightIcon="download" className="!bg-sandy-yellow !text-[#281804] !border-none hover:brightness-110 shadow-lg">
                Get CV
              </Button>
            </a>
            <Link href="/projects">
              <Button variant="secondary" size="lg" className="border-outline-variant/20">
                Projects
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
              alt="Tran Ba Hoang - AI Engineer & Researcher"
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
                Curated Works
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-on-surface">
                Selected Publications
              </h2>
            </div>
            <Link
              href="/publications"
              className="text-primary font-semibold flex items-center gap-1 hover:underline"
            >
              View All Papers
              <Icon name="open_in_new" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Publication 1 */}
            <a 
              href="https://dl.acm.org/doi/10.1145/3746027.3758281" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card tone="high" hoverLift>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <Chip variant="primary">ACM Multimedia (A*)</Chip>
                    <Icon name="article" size={24} className="text-outline group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-on-surface leading-snug group-hover:text-primary transition-colors">
                    MUDI: A Multimodal Biomedical Dataset for Understanding Pharmacodynamic Drug-Drug Interactions
                  </h3>
                  <p className="text-on-surface-variant mb-6 leading-relaxed">
                    Establishing a new Multimodal Biomedical Dataset (MUDI) and proposing diverse multimodal fusion strategies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="default">Multimodal</Chip>
                    <Chip variant="default">Bio-AI</Chip>
                  </div>
                </div>
              </Card>
            </a>

            {/* Publication 2 */}
            <a 
              href="https://doi.org/10.1016/j.jbi.2025.104874" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card tone="high" hoverLift>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <Chip variant="primary">JBI (Q1)</Chip>
                    <Icon name="article" size={24} className="text-outline group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-on-surface leading-snug group-hover:text-primary transition-colors">
                    Comprehensive Analysis of Multimodal Drug-Drug Interaction Extraction Using Diverse Fusion Strategies
                  </h3>
                  <p className="text-on-surface-variant mb-6 leading-relaxed">
                    A deep dive into attention-based and multimodal fusion techniques for identifying complex pharmacological interactions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="default">Fusion</Chip>
                    <Chip variant="default">Research</Chip>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Work Experience Section ─── */}
      <section className="bg-white py-24 px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-[family-name:var(--font-manrope)] text-on-tertiary-container tracking-widest text-xs font-bold uppercase mb-2 block">
                Professional Journey
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-on-surface">
                Work Experience
              </h2>
            </div>
            <Link href="/experience">
              <Button variant="secondary" size="md" rightIcon="arrow_forward">
                Full Career Path
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            {[
              {
                company: "Vin Smart Future",
                logo: "/companies/vin-logo.svg",
                logoAlt: "Vin logo",
                role: "AI Engineer",
                period: "Feb 2026 — Present",
                desc: "Optimizing speech & AI agent components and deploying offline SLMs on vehicle hardware.",
              },
              {
                company: "Sun* Inc.",
                logo: "/companies/sun-asterisk.png",
                logoAlt: "Sun Asterisk logo",
                role: "AI Engineer",
                period: "June 2025 — Jan 2026",
                desc: "Built GraphRAG assistants and automated high-throughput insight pipelines.",
              },
            ].map((job, i) => (
              <Card key={i} tone="low" hoverLift className="p-8 border border-outline-variant/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex flex-1 items-start gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-outline-variant/20 bg-white p-3">
                      <Image
                        src={job.logo}
                        alt={job.logoAlt}
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
                    <p className="text-sm text-on-surface-variant mt-1">{job.desc}</p>
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
                Recognition &amp; Impact
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-on-surface">
                Honors &amp; Awards
              </h2>
            </div>
            <Link href="/achievements">
              <Button variant="secondary" size="md" rightIcon="emoji_events" className="bg-primary text-on-primary hover:bg-primary-dark border-primary/20">
                All Achievements
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "DAAD Study Scholarship for STEM Disciplines",
                org: "German Academic Exchange Service",
                date: "April 2026",
                variant: "bg-tertiary-container text-on-tertiary-container"
              },
              {
                title: "Second Prize, Undergraduate Scientific Research Conference",
                org: "Vietnam National University",
                date: "May 2025",
                variant: "bg-secondary-container text-on-secondary-container"
              },
              {
                title: "First Prize, UET-FIT Research Conference",
                org: "VNU-UET Faculty of Information Technology",
                date: "March 2025",
                variant: "bg-primary-container text-on-primary-container"
              },
            ].map((honor, i) => (
              <Card key={i} tone="lowest" className="p-8 bg-white border border-outline-variant/10 shadow-sm">
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-4 inline-block px-2 py-1 rounded ${honor.variant}`}>
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
                Featured Explorations
              </span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-on-surface">
                Personal Projects
              </h2>
            </div>
            <Link href="/projects">
              <Button variant="secondary" size="md" rightIcon="arrow_forward">
                View All Projects
              </Button>
            </Link>
          </div>

        <div className="grid grid-cols-12 gap-8 items-stretch">
          {/* Left — AI Voice Chat (col-span-7) */}
          <a 
            href="https://github.com/hoangbros03/voice-chat-demo" 
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-12 md:col-span-7 group"
          >
            <Card className="h-full overflow-hidden border border-transparent group-hover:border-primary/20 transition-all duration-300" tone="low">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByCe2y1APIjcA5woQcQBjyc1HNQwhjwbNjDpZNgma0umEFwoPk63ocCQM7dP-LQ8zNjZ9euvctLC7B5SkZyR55a22WObmybY2c4GsZ8jn38kksXF2fF4UYy7YvDMqZgQ6SViizIqFcIHCoUTVMpPO-hRoMzrLYzUj_xn7YqAvkH8CTP69Wr-11vyIPR-W1mShQRh2xyfB7ZQCFkxiU-rT6sBmFv7w7s2H_H8zkuILS4zyX9MPgNrrtNVAKOazXE9H80dhs0uVSKJY"
                  alt="AI Voice Chat Assistant"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 group-hover:text-primary transition-colors">
                  AI Voice Chat Assistant
                </h3>
                <p className="text-on-surface-variant text-lg mb-6 max-w-xl">
                  Low-latency conversational AI featuring real-time voice synthesis and 
                  multi-agent workflows using LangGraph and MCP.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  View on GitHub <Icon name="north_east" size={18} />
                </div>
              </div>
            </Card>
          </a>

          {/* Right — Translation & Compression (col-span-5) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
            <a 
              href="https://github.com/hoangbros03/Translation_Model_10" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group"
            >
              <Card tone="high" className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 border border-transparent group-hover:border-primary/20">
                <div className="p-6">
                  <Icon name="translate" size={32} className="text-primary mb-4" />
                  <h4 className="text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-primary transition-colors">Laos-Viet Translation</h4>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    Transformer-based translation model awarded Best NLP Class Project 
                    with a 36% BLEU score improvement.
                  </p>
                </div>
                <div className="p-6 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    View on GitHub <Icon name="north_east" size={18} />
                  </div>
                </div>
              </Card>
            </a>

            <a 
              href="https://github.com/hoangbros03/pytorch-cifar100" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group"
            >
              <Card tone="high" className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 border border-transparent group-hover:border-primary/20">
                <div className="p-6">
                  <Icon name="compress" size={32} className="text-primary mb-4" />
                  <h4 className="text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-primary transition-colors">Model Compression</h4>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    Reducing VGG16 size by 76% using quantization and pruning 
                    for efficient edge inference.
                  </p>
                </div>
                <div className="p-6 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    View on GitHub <Icon name="north_east" size={18} />
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>

      {/* ─── Blog Section (Digital Garden) ─── */}
      <section className="bg-surface-container-lowest py-24 px-8 relative overflow-hidden">
        {/* Subtle backdrop text for "Coming Soon" */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-outline-variant/5 pointer-events-none whitespace-nowrap select-none uppercase tracking-tighter">
          Coming Soon
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-[family-name:var(--font-manrope)] text-primary tracking-widest text-xs font-bold uppercase block">
                  Digital Garden
                </span>
                <Badge variant="primary" className="bg-tertiary-container text-on-tertiary-container text-[10px] py-0.5">
                  Bringing it soon
                </Badge>
              </div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-on-surface">
                Writings &amp; Insights
              </h2>
              <p className="text-on-surface-variant mt-4">
                Thoughts on AI architecture, research breakthroughs, and the 
                intersection of technology and human experience.
              </p>
            </div>
            <Button variant="secondary" size="md" rightIcon="auto_stories" disabled>
              Coming Soon
            </Button>
          </div>


        </div>
      </section>

      {/* ─── Q&A Inquiry Section ─── */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight mb-4">
            Direct Inquiry
          </h2>
          <p className="text-on-surface-variant">
            Ask a question for me. Alternatively, you can also reach out via email at hoangtb203@gmail.com
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card tone="low">
            <div className="p-8">
              <InquiryForm />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
