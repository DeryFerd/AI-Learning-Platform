import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import LearningPaths from "./pages/LearningPaths";
import CourseLesson from "./pages/CourseLesson";
import AILab from "./pages/AILab";
import AITutor from "./pages/AITutor";
import DatasetHub from "./pages/DatasetHub";
import ModelPlayground from "./pages/ModelPlayground";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "dashboard", Component: Dashboard },
      { path: "learning-paths", Component: LearningPaths },
      { path: "course/:courseId/lesson/:lessonId", Component: CourseLesson },
      { path: "lab/:labId", Component: AILab },
      { path: "tutor", Component: AITutor },
      { path: "datasets", Component: DatasetHub },
      { path: "playground", Component: ModelPlayground },
    ],
  },
]);
