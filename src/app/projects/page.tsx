import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";

const PROJECTS = [
  {
    id: "voice-chat",
    title: "AI Voice Chat Assistant",
    category: "LLMs & Agentic Systems",
    period: "Jan 2026",
    description: "Low-latency conversational AI featuring real-time voice synthesis and multi-agent workflows using LangGraph and MCP.",
    achievements: [
      "Integrated Superlinked for high-dimensional vector embeddings.",
      "Architected multi-turn dialogue handling with persistent memory.",
      "Optimized for real-time interactive response rates."
    ],
    tech: ["LangGraph", "MCP", "Superlinked", "Python"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByCe2y1APIjcA5woQcQBjyc1HNQwhjwbNjDpZNgma0umEFwoPk63ocCQM7dP-LQ8zNjZ9euvctLC7B5SkZyR55a22WObmybY2c4GsZ8jn38kksXF2fF4UYy7YvDMqZgQ6SViizIqFcIHCoUTVMpPO-hRoMzrLYzUj_xn7YqAvkH8CTP69Wr-11vyIPR-W1mShQRh2xyfB7ZQCFkxiU-rT6sBmFv7w7s2H_H8zkuILS4zyX9MPgNrrtNVAKOazXE9H80dhs0uVSKJY",
    github: "https://github.com/hoangbros03/voice-chat-demo"
  },
  {
    id: "translation-model",
    title: "Laos-Viet Translation Model",
    category: "NLP",
    period: "Dec 2023",
    description: "High-accuracy translation system improving BLEU score by 36% from baseline. Awarded Best NLP Class Project.",
    achievements: [
      "Customized Transformer architecture for low-resource language pairs.",
      "Crawled and processed public data to expand the training corpus.",
      "Implemented advanced decoding strategies to improve translation quality."
    ],
    tech: ["PyTorch", "Transformers", "BLEU", "NLP"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8DdKa62FjJqGfIqCB6xO_1oEtCVH3j9u1BEGBZL63JyvGxXarAL-SvenDr5DdR7HaWuzYkwspGSqPz3AhpRJMpHwgodQnMQWeTxRKovtgU6H4Y0vfKSf12s7kAJyblkCgNuKEuMIRN7a3RdkCnVLJ69YnMatkVuv4HUQ9Xw7yITHUZMiT6r6G9bK5PKWZaNKyDjs_-NCCCScGKavC9dt6V0p9aPn-016EM99gRkCX3e_0LkQeBEYTgPOkcaa7RgCjd7gsH1uVhns",
    github: "https://github.com/hoangbros03/Translation_Model_10"
  },
  {
    id: "gan-implement",
    title: "Image Generation using GAN",
    category: "Generative AI",
    period: "Nov 2023",
    description: "Re-implemented GAN from scratch with advanced training methods, achieving 20% faster convergence.",
    achievements: [
      "Reduced training epochs by 20% using advanced optimization.",
      "Achieved FID score of 0.0285.",
      "Conducted thorough ablation studies on architecture components."
    ],
    tech: ["PyTorch", "GANs", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    github: "https://github.com/hoangbros03/GAN-implement"
  },
  {
    id: "model-compression",
    title: "Model Compression",
    category: "Efficiency",
    period: "July 2023",
    description: "Reduced VGG16 model size by 76% with minimal error increase using quantization and pruning.",
    achievements: [
      "Achieved significant size reduction for edge deployment.",
      "Maintained top-5 error within 0.0586 margin.",
      "Evaluated performance across various pruning ratios."
    ],
    tech: ["PyTorch", "Quantization", "Pruning", "Distillation"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop",
    github: "https://github.com/hoangbros03/pytorch-cifar100"
  }
];

export default function ProjectsPage() {
  return (
    <main className="pb-24 px-8 max-w-7xl mx-auto">
      <header className="mb-24">
        <div className="inline-block px-3 py-1 bg-surface-container-low text-primary font-label text-xs tracking-widest mb-6 border border-primary/10 rounded-lg uppercase">
          Project Portfolio
        </div>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl leading-[0.9] text-on-primary-container">
          Featured Projects.
        </h1>
        <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
          A selection of technical projects ranging from real-time agentic systems 
          to specialized model optimization and translation.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
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
                      Technical Focus
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => <Chip key={t} variant="primary" className="bg-primary/5">{t}</Chip>)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                    <span className="text-xs font-bold text-outline uppercase tracking-widest">
                      {project.period}
                    </span>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      View Source <Icon name="north_east" size={18} />
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
