import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../page/AuthPage.jsx";
import ProtectedPages from "../page/ProtectedPages.jsx";
import DashboardPage from "../page/DashboardPage.jsx";
import ClaimsPage from "../page/ClaimsPage.jsx";
import ProviderPage from "../page/ProviderPage.jsx";
import ProfilePage from "../page/ProfilePage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";
import { InvalidUrl } from "../module/ErrorBoundary.jsx";

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
