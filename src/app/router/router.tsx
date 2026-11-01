import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { ROUTE_PATH } from "./route-path";

import { Loader } from "@/shared/ui/";

const HomePage = lazy(() => import("@/pages/home-page/home-page"));
const NotFoundPage = lazy(() => import("@/pages/not-found/not-found"));
const CreateWorkspacePage = lazy(() => import("@/pages/create-workspace-page/create-workspace-page"));
const WorkspacePage = lazy(() => import("@/pages/workspace-page/workspace-page"));

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: (
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: ROUTE_PATH.CREATE_WORKSPACE,
    element: (
      <Suspense fallback={<Loader />}>
        <CreateWorkspacePage />
      </Suspense>
    ),
  },
  {
    path: ROUTE_PATH.WORKSPACE,
    element: (
      <Suspense fallback={<Loader />}>
        <WorkspacePage />
      </Suspense>
    ),
  },
  {
    path: ROUTE_PATH.NOT_FOUND,
    element: (
      <Suspense fallback={<Loader />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);
