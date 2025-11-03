import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layout/AppLayout";
import Home from "@/pages/Home";
import CountryDetail from "@/pages/CountryDetail";
import NotFound from "@/components/common/NotFound";

import { ProviderRoutePaths } from "./routePaths";

export const ProviderRouter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { path: "*", Component: NotFound },
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
