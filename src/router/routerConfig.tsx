import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../page/AuthPage.js";
import ProtectedPages from "../page/ProtectedPages.js";
import DashboardPage from "../page/DashboardPage.js";
import ClaimsPage from "../page/ClaimsPage.js";
import ProviderPage from "../page/ProviderPage.js";
import ProfilePage from "../page/ProfilePage.js";
import ProtectedRoute from "./ProtectedRoute.js";
import PublicRoute from "./PublicRoute.js";
import { InvalidUrl } from "../module/ErrorBoundary.js";

const appRoutes = createBrowserRouter([
  //public routes
  {
    path: "/auth",
    element: (
      <PublicRoute>
        <AuthPage />
      </PublicRoute>
    ),
    errorElement: <InvalidUrl />,
  },
  //protected routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ProtectedPages />
      </ProtectedRoute>
    ),
    errorElement: <InvalidUrl />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "claims",
        element: <ClaimsPage />,
      },
      {
        path: "provider",
        element: <ProviderPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default appRoutes;
