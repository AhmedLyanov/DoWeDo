import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { ROUTE_PATH } from "./route-path";

import DefaultLayout from "../layouts/default/default-layout";
import WorkspaceLayout from "../layouts/workspace/workspace-layout";

import { Loader } from "@/shared/ui";

const HomePage = lazy(() => import("@/pages/home-page/home-page"));
const NotFoundPage = lazy(() => import("@/pages/not-found/not-found"));
const CreateWorkspacePage = lazy(
  () => import("@/pages/create-workspace-page/create-workspace-page"),
);
const WorkspacePage = lazy(
  () => import("@/pages/workspace-page/workspace-page"),
);

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<Loader />}>
    {element}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: withSuspense(<HomePage />),
      },
      {
        path: ROUTE_PATH.CREATE_WORKSPACE,
        element: withSuspense(<CreateWorkspacePage />),
      },
    ],
  },
  {
    path: ROUTE_PATH.WORKSPACE,
    element: <WorkspaceLayout />,
    children: [
      {
        index: true,
        element: withSuspense(<WorkspacePage />),
      },
    ],
  },
  {
    path: ROUTE_PATH.NOT_FOUND,
    element: withSuspense(<NotFoundPage />),
  },
]);