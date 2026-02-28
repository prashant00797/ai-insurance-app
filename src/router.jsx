import { createBrowserRouter, Navigate } from "react-router";
import AuthPage from "./page/AuthPage";
import ProtectedLayout from "./page/ProtectedLayout";
import DashboardPage from "./page/DashboardPage";
import ClaimsPage from "./page/ClaimsPage";

const isAuthenticated = false;
const appRoutes = createBrowserRouter([
  //public routes
  {
    path: "/auth",
    element: isAuthenticated ? <Navigate to={"/"} replace /> : <AuthPage />,
    errorElement: (
      <div>Please check the url. You migght have entered an invalid URL 🚀</div>
    ),
  },
  //protected routes
  {
    path: "/",
    element: isAuthenticated ? (
      <ProtectedLayout />
    ) : (
      <Navigate to={"/auth"} replace />
    ),
    errorElement: (
      <div>Please check the url. You migght have entered an invalid URL 🚀</div>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "claims",
        element: <ClaimsPage />,
      },
      //   todo to add PROVIDER AND PROFILE ROUTE
    ],
  },
]);

export default appRoutes;
