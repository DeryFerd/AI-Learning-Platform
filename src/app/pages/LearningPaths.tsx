import { Link } from "react-router";
import { Clock, BarChart3, Star, TrendingUp } from "lucide-react";
import { Progress } from "../components/ui/progress";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function LearningPaths() {
  const learningPaths = [
    {
      title: "AI Foundations",
      description: "Start your AI journey with core concepts and fundamentals",
      difficulty: "Beginner",
      hours: 40,
      progress: 0,
      modules: 12,
      image: "https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc3MzA2Njc4OHww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Machine Learning",
      description: "Master supervised and unsupervised learning algorithms",
      difficulty: "Intermediate",
      hours: 60,
      progress: 45,
      modules: 18,
      image: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzMwNzk5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Deep Learning",
      description: "Build neural networks and advance your AI skills",
      difficulty: "Advanced",
      hours: 80,
      progress: 67,
      modules: 24,
      image: "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzMxMTg2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "LLM Engineering",
      description: "Work with large language models and transformers",
      difficulty: "Advanced",
      hours: 50,
      progress: 34,
      modules: 15,
      image: "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwbGVhcm5pbmclMjBjb21wdXRlciUyMGNvZGV8ZW58MXx8fHwxNzczMTI2NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "AI Production Systems",
      description: "Deploy and scale AI models in production environments",
      difficulty: "Advanced",
      hours: 70,
      progress: 89,
      modules: 20,
      image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzczMDcwOTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Personalized Path",
      description: "AI-curated learning path based on your goals and experience",
      difficulty: "Custom",
      hours: 0,
      progress: 0,
      modules: 0,
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzMxMTE3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-500 bg-green-500/10";
      case "Intermediate":
        return "text-yellow-500 bg-yellow-500/10";
      case "Advanced":
        return "text-red-500 bg-red-500/10";
      default:
        return "text-purple-500 bg-purple-500/10";
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl">Learning Paths</h1>
        <p className="text-muted-foreground">
          Choose your path and start building AI expertise with hands-on projects
        </p>
      </div>

      {/* Stats Bar */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-1 flex items-center gap-2">
            <Star className="size-4 text-yellow-500" />
            <span className="text-sm text-muted-foreground">In Progress</span>
          </div>
          <p className="text-2xl">4</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-1 flex items-center gap-2">
            <BarChart3 className="size-4 text-green-500" />
            <span className="text-sm text-muted-foreground">Completed</span>
          </div>
          <p className="text-2xl">2</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-1 flex items-center gap-2">
            <Clock className="size-4 text-blue-500" />
            <span className="text-sm text-muted-foreground">Total Hours</span>
          </div>
          <p className="text-2xl">127</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-1 flex items-center gap-2">
            <TrendingUp className="size-4 text-purple-500" />
            <span className="text-sm text-muted-foreground">Avg. Progress</span>
          </div>
          <p className="text-2xl">56%</p>
        </div>
      </div>

      {/* Learning Paths Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {learningPaths.map((path, idx) => (
          <Link
            key={idx}
            to="/course/deep-learning/lesson/1"
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src={path.image}
                alt={path.title}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-20`}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs ${getDifficultyColor(
                    path.difficulty
                  )}`}
                >
                  {path.difficulty}
                </span>
                {path.progress > 0 && (
                  <span className="text-sm text-accent">{path.progress}%</span>
                )}
              </div>

              <h3 className="mb-2">{path.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{path.description}</p>

              {path.progress > 0 && (
                <Progress value={path.progress} className="mb-4 h-2" />
              )}

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="size-4" />
                  <span>{path.hours}h</span>
                </div>
                {path.modules > 0 && (
                  <div className="flex items-center gap-1">
                    <BarChart3 className="size-4" />
                    <span>{path.modules} modules</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
