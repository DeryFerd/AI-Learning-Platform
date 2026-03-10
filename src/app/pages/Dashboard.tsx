import { Link } from "react-router";
import {
  Clock,
  BookOpen,
  Trophy,
  TrendingUp,
  Play,
  FlaskConical,
  FileCode,
  ArrowRight,
  Flame,
  Target,
} from "lucide-react";
import { Progress } from "../components/ui/progress";

export default function Dashboard() {
  const stats = [
    { label: "Learning Hours", value: "127", icon: Clock, trend: "+12 this week" },
    { label: "Completed Modules", value: "23", icon: BookOpen, trend: "8 in progress" },
    { label: "Lab Projects", value: "15", icon: FlaskConical, trend: "5 deployed" },
    { label: "Current Streak", value: "14", icon: Flame, trend: "days" },
  ];

  const courses = [
    {
      title: "Deep Learning Specialization",
      progress: 67,
      lesson: "Neural Networks Basics",
      duration: "2h 30m remaining",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "LLM Engineering",
      progress: 34,
      lesson: "Prompt Engineering",
      duration: "5h 15m remaining",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "MLOps Production Systems",
      progress: 89,
      lesson: "Model Deployment",
      duration: "1h 20m remaining",
      color: "from-orange-500 to-red-500",
    },
  ];

  const recentLabs = [
    {
      title: "Image Classification with CNNs",
      date: "2 hours ago",
      status: "Completed",
      accuracy: "94.5%",
    },
    {
      title: "Sentiment Analysis with Transformers",
      date: "Yesterday",
      status: "In Progress",
      accuracy: "87.2%",
    },
    {
      title: "Time Series Forecasting",
      date: "2 days ago",
      status: "Completed",
      accuracy: "91.8%",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Welcome Banner */}
      <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-3xl">Welcome back, John! 👋</h1>
            <p className="text-indigo-100">
              You're making great progress. Keep up the momentum!
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-4">
              <Link
                to="/learning-paths"
                className="rounded-lg bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
              >
                Browse Courses
              </Link>
              <Link
                to="/lab/ml-fundamentals"
                className="rounded-lg bg-white px-6 py-3 text-indigo-600 transition-all hover:bg-white/90"
              >
                Start Lab
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-accent/10 p-2.5">
                  <Icon className="size-5 text-accent" />
                </div>
                <span className="text-xs text-muted-foreground">{stat.trend}</span>
              </div>
              <h3 className="mb-1 text-3xl">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-8 lg:col-span-2">
          {/* Continue Learning */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl">Continue Learning</h2>
              <Link
                to="/learning-paths"
                className="flex items-center gap-1 text-sm text-accent hover:underline"
              >
                View all <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.lesson}</p>
                    </div>
                    <div
                      className={`rounded-lg bg-gradient-to-br ${course.color} px-3 py-1 text-xs text-white`}
                    >
                      {course.progress}%
                    </div>
                  </div>
                  <Progress value={course.progress} className="mb-3 h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{course.duration}</span>
                    <Link
                      to="/course/deep-learning/lesson/1"
                      className="flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      <Play className="size-4" />
                      Continue
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Labs */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl">Recent Lab Activity</h2>
              <Link
                to="/lab/ml-fundamentals"
                className="flex items-center gap-1 text-sm text-accent hover:underline"
              >
                View all <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {recentLabs.map((lab, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <FlaskConical className="size-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="mb-1">{lab.title}</h4>
                      <p className="text-sm text-muted-foreground">{lab.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mb-1 text-sm text-accent">{lab.accuracy}</div>
                    <div
                      className={`text-xs ${
                        lab.status === "Completed"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {lab.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Daily Streak */}
          <div className="rounded-xl border border-border bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-orange-500/20 p-3">
                <Flame className="size-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl">14 Day Streak!</h3>
                <p className="text-sm text-muted-foreground">Keep it going!</p>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded bg-orange-500/30"
                  title={`Day ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Learning Goals */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <Target className="size-5 text-accent" />
              <h3>Weekly Goals</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm">Study Time</span>
                  <span className="text-sm text-muted-foreground">12h / 15h</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm">Complete Labs</span>
                  <span className="text-sm text-muted-foreground">3 / 5</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm">Projects</span>
                  <span className="text-sm text-muted-foreground">1 / 2</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/course/deep-learning/lesson/1"
                className="flex items-center gap-3 rounded-lg bg-accent/10 p-3 transition-colors hover:bg-accent/20"
              >
                <Play className="size-5 text-accent" />
                <span>Continue Learning</span>
              </Link>
              <Link
                to="/lab/ml-fundamentals"
                className="flex items-center gap-3 rounded-lg bg-accent/10 p-3 transition-colors hover:bg-accent/20"
              >
                <FlaskConical className="size-5 text-accent" />
                <span>Open Lab</span>
              </Link>
              <Link
                to="/playground"
                className="flex items-center gap-3 rounded-lg bg-accent/10 p-3 transition-colors hover:bg-accent/20"
              >
                <FileCode className="size-5 text-accent" />
                <span>Start Notebook</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
