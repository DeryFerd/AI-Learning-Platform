import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  BookOpen,
  FlaskConical,
  MessageSquare,
  Database,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/learning-paths", label: "Learning Paths", icon: BookOpen },
    { path: "/lab/ml-fundamentals", label: "AI Lab", icon: FlaskConical },
    { path: "/tutor", label: "AI Tutor", icon: MessageSquare },
    { path: "/datasets", label: "Dataset Hub", icon: Database },
    { path: "/playground", label: "Playground", icon: Sparkles },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-card">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center gap-3 border-b border-border px-6 py-5">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
              <GraduationCap className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg leading-none">AI Academy</h1>
              <p className="text-xs text-muted-foreground">Learn. Build. Deploy.</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                    active
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  }`}
                >
                  <Icon className="size-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
                <span className="text-sm text-white">JD</span>
              </div>
              <div className="flex-1">
                <p className="text-sm">John Doe</p>
                <p className="text-xs text-muted-foreground">Pro Member</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
