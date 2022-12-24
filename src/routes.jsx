import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Profil from "./pages/profil";
import Register from "./pages/register";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profil",
      element: <Profil />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/landing",
      element: <Landing />,
    },
  ]);
}
