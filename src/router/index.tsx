import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layout/AppLayout";
import CountryDetail from "@/pages/CountryDetail";
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
      {
        path: ProviderRoutePaths.CountryDetails,
        Component: CountryDetail,
      },
    ],
  },
]);
