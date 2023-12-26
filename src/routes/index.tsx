import { Home } from "pages/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppRoute } from "./AppRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoute page={Home} />,
  },
]);
