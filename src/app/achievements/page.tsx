import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";

const HONORS = [
  {
    title: "DAAD Study Scholarship for STEM Disciplines",
    org: "German Academic Exchange Service (DAAD)",
    date: "April 2026",
    description: "Full-ride Master's scholarship for graduate study in Germany. Awarded to a limited number of high-potential students in STEM.",
    highlight: "Full-ride Scholarship"
  },
  {
    title: "University-level Scientific Research Conference",
    org: "Vietnam National University",
    date: "May 2025",
    description: "Awarded Second Prize among top research projects across all faculties for work on multimodal drug-drug interaction prediction.",
    highlight: "Second Prize"
  },
  {
    title: "International Quant Championship",
    org: "WorldQuant",
    date: "July 2024",
    description: "Achieved Top 2 university-level team globally. Developed innovative financial modeling strategies demonstrating strong predictive power.",
    highlight: "Global Top 2 Team"
  },
  {
    title: "Back2school KMS Scholarship",
    org: "KMS Technology",
    date: "October 2024",
    description: "Selected as an outstanding student through a competitive process with a 3.8% acceptance rate.",
    highlight: "Top 3.8%"
  },
  {
    title: "VPBank Hackathon Technology",
    org: "VPBank",
    date: "May 2024",
    description: "Top 5 in the Talent Acquisition Search Application Challenge using RAG and customized LLM pipelines.",
    highlight: "Top 5"
  }
];

const LEADERSHIP = [
  {
    role: "Team Leader / AI Engineer",
    event: "Swin Hackathon 2024",
    date: "Sept 2024",
    description: "Led a team to develop a system generating documents and slides from concepts, reducing workload by 98%. Top 10 finish."
  },
  {
    role: "Lecturer & Team Mentor",
    event: "FACT Program (SUTD & VNU-UET)",
    date: "July 2023",
    description: "Delivered lectures on deep learning concepts to first-year students and mentored soil moisture estimation projects."
  },
  {
    role: "Organizer / Media Lead",
    event: "UET Presentation Club",
    date: "2021 - 2024",
    description: "Managed social media campaigns and organized large-scale student events, boosting reach by 10% annually."
  },
  {
    role: "Delegate",
    event: "National Conference on Science & Innovation",
    date: "Jan 2025",
    description: "Selected as one of 40 excellent students to attend this national-level conference on digital transformation."
  }
];

export default function AchievementsPage() {
  return (
    <main className="pb-24 px-8 max-w-7xl mx-auto">
      <header className="mb-24">
        <div className="inline-block px-3 py-1 bg-surface-container-low text-primary font-label text-xs tracking-widest mb-6 border border-primary/10 rounded-lg uppercase">
          Recognition & Impact
        </div>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl leading-[0.9] text-on-primary-container">
          Honors &amp; Leadership.
        </h1>
        <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
          A track record of academic excellence, competitive success in global hackathons, 
          and leadership within the technical community.
        </p>
      </header>

      {/* Honors Grid */}
      <section className="mb-32">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-outline mb-12 font-[family-name:var(--font-manrope)]">
          Major Awards &amp; Honors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HONORS.map((honor, i) => (
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
          Leadership &amp; Activities
        </h2>
        <div className="space-y-6">
          {LEADERSHIP.map((item, i) => (
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
