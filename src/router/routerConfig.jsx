import { createBrowserRouter } from "react-router";
import AuthPage from "../page/AuthPage.jsx";
import ProtectedPages from "../page/ProtectedPages.jsx";
import DashboardPage from "../page/DashboardPage.jsx";
import ClaimsPage from "../page/ClaimsPage.jsx";
import ProviderPage from "../page/ProviderPage.jsx";
import ProfilePage from "../page/ProfilePage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";

const appRoutes = createBrowserRouter([
  //public routes
  {
    path: "/auth",
    element: (
      <PublicRoute>
        <AuthPage />
      </PublicRoute>
    ),
    errorElement: <h1>..oops page not found 🚀🚀🚀🚀</h1>,
  },
  //protected routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ProtectedPages />
      </ProtectedRoute>
    ),
    errorElement: <h1>..oops page not found 🚀🚀🚀🚀</h1>,
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
