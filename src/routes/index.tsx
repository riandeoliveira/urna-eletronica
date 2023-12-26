import { Home } from "pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { AppRoute } from "./AppRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoute page={Home} />,
  },
]);
