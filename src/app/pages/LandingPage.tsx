import { Link } from "react-router";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  ChevronRight,
  Code2,
  Compass,
  Database,
  FlaskConical,
  GraduationCap,
  Hexagon,
  Layers,
  MessageSquare,
  Play,
  Rocket,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Learning Paths",
    description: "Structured roadmaps from fundamentals to deployment with real deliverables.",
    href: "/learning-paths",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
  {
    icon: FlaskConical,
    title: "AI Labs",
    description: "Interactive environments for model experiments and portfolio-ready projects.",
    href: "/lab/ml-fundamentals",
    color: "text-lime-400",
    bg: "bg-lime-400/10",
    border: "border-lime-400/20",
  },
  {
    icon: MessageSquare,
    title: "AI Tutor",
    description: "On-demand feedback, explanations, and debugging support anytime.",
    href: "/tutor",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
  },
  {
    icon: Database,
    title: "Dataset Hub",
    description: "Curate datasets, test prompts, and iterate from research to product.",
    href: "/datasets",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
];

const modules = [
  {
    number: "01",
    title: "Foundation",
    description: "Core concepts, math basics, and Python fundamentals for AI.",
    tags: ["2 weeks", "Beginner"],
  },
  {
    number: "02",
    title: "ML & Deep Learning",
    description: "Neural networks, transformers, and model architectures.",
    tags: ["4 weeks", "Intermediate"],
  },
  {
    number: "03",
    title: "LLM Engineering",
    description: "Prompt engineering, fine-tuning, and production deployment.",
    tags: ["4 weeks", "Advanced"],
  },
  {
    number: "04",
    title: "Applied Projects",
    description: "Build real products: RAG systems, agents, and AI integrations.",
    tags: ["4 weeks", "Advanced"],
  },
];

export default function LandingPage() {
  return (
    <div className="dark min-h-screen bg-[#0c0c0f] text-zinc-100 overflow-x-hidden">
      {/* Geometric Pattern Background */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Noise texture overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bT1vY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC41Ii8+PC9zdmc+')]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0c0c0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
              <Terminal className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-zinc-100">ACADEMY</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
            <Link to="/learning-paths" className="transition-colors hover:text-zinc-100">
              Paths
            </Link>
            <Link to="/lab/ml-fundamentals" className="transition-colors hover:text-zinc-100">
              Labs
            </Link>
            <Link to="/tutor" className="transition-colors hover:text-zinc-100">
              Tutor
            </Link>
            <Link to="/datasets" className="transition-colors hover:text-zinc-100">
              Datasets
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="hidden rounded-lg px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100 sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              to="/learning-paths"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-transform hover:-translate-y-0.5"
            >
              Get started
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
            <div className="max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400">
                <Sparkles className="size-4 text-amber-400" />
                <span>Production-ready AI education</span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-zinc-50 md:text-6xl lg:text-7xl">
                Build AI skills that
                <span className="block text-amber-400">actually matter.</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
                Stop collecting tutorials. Start building real AI products. Learn by doing with hands-on labs, 
                real datasets, and an AI tutor that actually helps.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/learning-paths"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-7 py-4 text-base font-semibold text-zinc-900 transition-transform hover:-translate-y-1 hover:bg-amber-300"
                >
                  Start learning
                  <ChevronRight className="size-5" />
                </Link>
                <Link
                  to="/playground"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 px-7 py-4 text-base font-medium text-zinc-100 backdrop-blur-sm transition-colors hover:bg-zinc-800"
                >
                  <Play className="size-4" />
                  Try playground
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-zinc-500">
                  <div className="flex -space-x-2">
                    <div className="size-8 rounded-full bg-zinc-700 border-2 border-[#0c0c0f]"></div>
                    <div className="size-8 rounded-full bg-zinc-600 border-2 border-[#0c0c0f]"></div>
                    <div className="size-8 rounded-full bg-zinc-500 border-2 border-[#0c0c0f]"></div>
                  </div>
                  <span>2,000+ learners</span>
                </div>
                <div className="h-4 w-px bg-zinc-800"></div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <Zap className="size-4 text-amber-400" />
                  <span>40+ real projects</span>
                </div>
              </div>
            </div>

            {/* Hero Visual - Terminal-style Code Editor */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 opacity-20">
                <svg viewBox="0 0 100 100" fill="none" className="h-full w-full text-amber-400">
                  <path d="M20 80L80 20M80 20H30M80 20V70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
                  <div className="size-3 rounded-full bg-red-500/80"></div>
                  <div className="size-3 rounded-full bg-amber-500/80"></div>
                  <div className="size-3 rounded-full bg-lime-500/80"></div>
                  <div className="ml-4 flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-500">
                    <Terminal className="size-3" />
                    <span>main.py</span>
                  </div>
                </div>
                
                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="text-zinc-500"># Fine-tuning a model for your use case</div>
                  <div><span className="text-violet-400">from</span> transformers <span className="text-violet-400">import</span> AutoModelForCausalLM, AutoTokenizer</div>
                  <br />
                  <div><span className="text-rose-400">model</span> = AutoModelForCausalLM.<span className="text-blue-400">from_pretrained</span>(</div>
                  <div className="pl-4"><span className="text-green-400">"meta-llama/Llama-2-7b"</span>,</div>
                  <div className="pl-4">load_in_8bit=<span className="text-amber-400">True</span>,</div>
                  <div className="pl-4">device_map=<span className="text-violet-400">"auto"</span></div>
                  <div>)</div>
                  <br />
                  <div><span className="text-rose-400">trainer</span> = <span className="text-blue-400">Trainer</span>(</div>
                  <div className="pl-4">model=model,</div>
                  <div className="pl-4">train_dataset=dataset,</div>
                  <div className="pl-4">args=training_args</div>
                  <div>)</div>
                  <br />
                  <div className="text-green-400"># Training started...</div>
                  <div className="text-zinc-600">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 67%</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-lime-400/20 text-lime-400">
                    <Rocket className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-100">Deployment ready</p>
                    <p className="text-xs text-zinc-500">Model optimized for production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards - Asymmetric Grid */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              What you get
            </p>
            <h2 className="text-3xl font-bold text-zinc-50 md:text-4xl">
              Everything you need to go from learner to builder.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  to={feature.href}
                  className={`group relative overflow-hidden rounded-2xl border ${feature.border} bg-zinc-900/50 p-6 transition-all hover:-translate-y-1 hover:bg-zinc-900 ${
                    index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <div className={`mb-4 inline-flex rounded-lg ${feature.bg} p-3 ${feature.color}`}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className={`font-semibold text-zinc-100 ${index === 0 ? "text-2xl" : "text-lg"}`}>
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-zinc-300">
                    <span>Explore</span>
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Learning Modules - Horizontal Timeline Style */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-8">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Curriculum
              </p>
              <h2 className="text-3xl font-bold text-zinc-50 md:text-4xl">
                Four phases.<br />
                <span className="text-amber-400">One complete journey.</span>
              </h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                Each phase builds on the previous. By the end, you'll have built 
                real AI products, not just completed tutorials.
              </p>
            </div>

            <div className="space-y-4">
              {modules.map((module, index) => (
                <div
                  key={module.number}
                  className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:border-zinc-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 group-hover:bg-amber-400/20 group-hover:text-amber-400">
                      <span className="font-mono text-sm font-bold">{module.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-zinc-100">{module.title}</h3>
                        <div className="flex gap-2">
                          {module.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-zinc-400">{module.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats / Social Proof */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/50 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-zinc-50 md:text-5xl">40+</p>
                <p className="mt-2 text-zinc-400">guided modules mapped to skills teams actually hire for</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-zinc-50 md:text-5xl">12</p>
                <p className="mt-2 text-zinc-400">live workflow surfaces across learning, labs, tutor, data</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-amber-400 md:text-5xl">3x</p>
                <p className="mt-2 text-zinc-400">faster learner iteration when everything stays in one flow</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Bold Typography */}
        <section className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-900 p-8 md:p-16">
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 h-64 w-64 opacity-10">
              <Hexagon className="h-full w-full text-amber-400" />
            </div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 opacity-10">
              <Layers className="h-full w-full text-lime-400" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-zinc-50 md:text-6xl">
                Ready to build<br />
                <span className="text-amber-400">something real?</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-zinc-400">
                No more tutorial hell. Join learners who are actually building AI products 
                and landing jobs in AI engineering.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/learning-paths"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-base font-semibold text-zinc-900 transition-transform hover:-translate-y-1 hover:bg-amber-300"
                >
                  Start your path
                  <ArrowRight className="size-5" />
                </Link>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-transparent px-8 py-4 text-base font-medium text-zinc-100 transition-colors hover:bg-zinc-800"
                >
                  <Compass className="size-5" />
                  Explore platform
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 bg-zinc-950 py-12">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900">
                  <Terminal className="size-4" />
                </div>
                <span className="text-sm font-semibold text-zinc-100">ACADEMY</span>
              </div>
              <p className="text-sm text-zinc-500">
                © 2024 AI Academy. Built for builders.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
