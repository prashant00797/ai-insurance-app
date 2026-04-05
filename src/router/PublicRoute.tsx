import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const user = useSelector((store) => store.user);

  if (user) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};

export default PublicRoute;
