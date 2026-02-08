import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/app-layout";
import Dashboard from "../pages/dashboard/dashboard";
import SkillDetail from "../pages/skills/skill-detail";
import Journey from "../pages/journey/journey";
import Achievement from "../pages/acheivements/achievement";
import Activity from "../pages/activity/activity";
import NotFound from "../components/not-found/not-found";
import Profile from "../pages/user/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {path:"profile",element:<Profile/>},
      { path: "skills/:skillId", element: <SkillDetail /> },
      { path: "journey", element: <Journey /> },
      { path: "activities", element: <Activity /> },
      { path: "achievements", element: <Achievement /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
