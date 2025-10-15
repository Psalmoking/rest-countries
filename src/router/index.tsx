import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/components/layout/AppLayout";
import Home from "@/pages/Home";

import { ProviderRoutePaths } from "./routePaths";

export const ProviderRouter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: ProviderRoutePaths.Home,
        Component: Home,
      },
    ],
  },
]);
