import { Link } from "react-router";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Database,
  FlaskConical,
  GraduationCap,
  LineChart,
  MessageSquare,
  Play,
  Sparkles,
  Target,
} from "lucide-react";

const featureCards = [
  {
    icon: BookOpen,
    title: "Structured learning paths",
    description:
      "Roadmaps that take learners from fundamentals to deployment with clear milestones and real deliverables.",
    href: "/learning-paths",
    accent: "from-sky-500/20 to-cyan-400/10",
  },
  {
    icon: FlaskConical,
    title: "Hands-on AI labs",
    description:
      "Interactive lab environments for model experiments, guided practice, and portfolio-ready project work.",
    href: "/lab/ml-fundamentals",
    accent: "from-amber-500/20 to-orange-400/10",
  },
  {
    icon: MessageSquare,
    title: "Always-on AI tutor",
    description:
      "On-demand feedback, explanations, and debugging support to keep learning momentum high.",
    href: "/tutor",
    accent: "from-emerald-500/20 to-teal-400/10",
  },
  {
    icon: Database,
    title: "Dataset and model workspace",
    description:
      "Curate datasets, test prompt and model behavior, and iterate from research to usable product workflows.",
    href: "/datasets",
    accent: "from-fuchsia-500/20 to-pink-400/10",
  },
];

const stats = [
  { value: "40+", label: "guided modules mapped to skills teams actually hire for" },
  { value: "12", label: "live workflow surfaces across learning, labs, tutor, data, and playground" },
  { value: "3x", label: "faster learner iteration when practice, support, and experiments stay in one flow" },
];

const pillars = [
  {
    title: "Learn with context",
    text: "Lessons, tutor guidance, and labs line up so concepts turn into action immediately instead of getting stuck in theory.",
  },
  {
    title: "Build like a practitioner",
    text: "Move from foundation work into datasets, playground experiments, and production-shaped projects without changing tools.",
  },
  {
    title: "Track meaningful progress",
    text: "Dashboards and milestones make growth visible for learners, mentors, and teams building capability programs.",
  },
];

const workflow = [
  "Choose a learning path that matches your current level and target role.",
  "Practice inside labs and the playground with guided experiments.",
  "Use the AI tutor to unblock questions, review logic, and refine output.",
  "Track progress in the dashboard and keep momentum through visible milestones.",
];

export default function LandingPage() {
  return (
    <div className="dark min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.24),_transparent_48%),radial-gradient(circle_at_18%_22%,_rgba(14,165,233,0.18),_transparent_25%),linear-gradient(180deg,_rgba(8,8,14,1)_0%,_rgba(10,10,15,1)_54%,_rgba(10,10,15,0.98)_100%)]" />
      <div className="absolute right-[-10rem] top-32 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-[-8rem] top-[28rem] -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 shadow-[0_18px_45px_rgba(56,189,248,0.25)]">
            <GraduationCap className="size-6 text-white" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">AI Academy</p>
            <p className="text-sm text-muted-foreground">Production-level AI learning platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link to="/learning-paths" className="transition-colors hover:text-foreground">
            Paths
          </Link>
          <Link to="/lab/ml-fundamentals" className="transition-colors hover:text-foreground">
            Labs
          </Link>
          <Link to="/tutor" className="transition-colors hover:text-foreground">
            Tutor
          </Link>
          <Link to="/datasets" className="transition-colors hover:text-foreground">
            Datasets
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground transition-colors hover:bg-white/10 sm:inline-flex"
          >
            Open dashboard
          </Link>
          <Link
            to="/learning-paths"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            Start learning
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-28 lg:pt-14">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles className="size-4" />
              One platform for learning, experimenting, and shipping AI skills
            </div>

            <h1 className="max-w-4xl text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Build AI capability that feels practical from day one.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              This landing page introduces a full learning environment where courses,
              experiments, tutoring, and progress tracking work together instead of living
              in separate tools.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/learning-paths"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-base font-medium text-slate-950 shadow-[0_16px_40px_rgba(34,211,238,0.35)] transition-transform hover:-translate-y-0.5"
              >
                Explore learning paths
                <ChevronRight className="size-5" />
              </Link>
              <Link
                to="/playground"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Play className="size-4" />
                Open model playground
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-3xl text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0d1320] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/70">
                      Live capability map
                    </p>
                    <h2 className="mt-2 text-2xl text-white">From learner to builder</h2>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Cohort ready
                  </div>
                </div>

                <div className="space-y-4">
                  {pillars.map((pillar, index) => (
                    <div
                      key={pillar.title}
                      className="rounded-2xl border border-white/8 bg-white/[0.04] p-4"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm text-white">
                          0{index + 1}
                        </div>
                        <h3 className="text-lg text-white">{pillar.title}</h3>
                      </div>
                      <p className="text-sm leading-6 text-slate-400">{pillar.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/8 p-4">
                  <div className="mb-3 flex items-center gap-2 text-cyan-200">
                    <LineChart className="size-4" />
                    Momentum snapshot
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="rounded-xl bg-slate-950/30 p-3">
                      <p className="text-slate-400">Weekly focus</p>
                      <p className="mt-1 text-lg text-white">LLM Engineering</p>
                    </div>
                    <div className="rounded-xl bg-slate-950/30 p-3">
                      <p className="text-slate-400">Lab completion</p>
                      <p className="mt-1 text-lg text-white">67%</p>
                    </div>
                    <div className="rounded-xl bg-slate-950/30 p-3">
                      <p className="text-slate-400">Tutor usage</p>
                      <p className="mt-1 text-lg text-white">Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/70">
                Platform surfaces
              </p>
              <h2 className="mt-3 text-4xl text-white">Everything points back to applied progress.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              The landing page now frames the existing product pages as one coherent system,
              so users understand where to start and why each area matters.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  to={feature.href}
                  className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${feature.accent} p-[1px] transition-transform hover:-translate-y-1`}
                >
                  <div className="h-full rounded-[1.7rem] bg-[#0d111a] p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-2xl bg-white/6 p-3 text-cyan-200">
                        <Icon className="size-6" />
                      </div>
                      <ChevronRight className="size-5 text-slate-500 transition-transform group-hover:translate-x-1" />
                    </div>
                    <h3 className="mt-8 text-2xl text-white">{feature.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-[#0c1018] p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/70">Workflow</p>
            <h2 className="mt-3 text-4xl text-white">A smoother path from curiosity to execution.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The homepage now explains the operational loop clearly, which helps this product
              feel like a platform instead of a loose set of pages.
            </p>
          </div>

          <div className="grid gap-4">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm text-white">
                  0{index + 1}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-200">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
          <div className="overflow-hidden rounded-[2.5rem] border border-cyan-400/15 bg-[linear-gradient(135deg,_rgba(20,28,46,0.98),_rgba(8,12,20,0.98))] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">
                  Ready to explore
                </p>
                <h2 className="mt-4 text-4xl text-white lg:text-5xl">
                  Start with the path, then let the platform pull users deeper.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  Use this homepage as the front door for your AI education product, with clear
                  routes into the dashboard, lessons, labs, tutor, and experimentation tools.
                </p>
              </div>

              <div className="grid gap-4">
                <Link
                  to="/dashboard"
                  className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-4 text-white transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Target className="size-5 text-cyan-300" />
                    <span>View learner dashboard</span>
                  </div>
                  <ArrowRight className="size-5" />
                </Link>
                <Link
                  to="/tutor"
                  className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-4 text-white transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <BrainCircuit className="size-5 text-cyan-300" />
                    <span>Open AI tutor</span>
                  </div>
                  <ArrowRight className="size-5" />
                </Link>
                <div className="rounded-[1.5rem] border border-emerald-400/15 bg-emerald-400/8 px-5 py-4 text-sm leading-7 text-emerald-100">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="size-4" />
                    Landing page foundation is now in place
                  </div>
                  The new homepage connects the existing routes into a stronger first impression
                  and fixes the missing root page file at the same time.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
