import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import { logOutUserService } from "../service/firebaseApi";
import { useState } from "react";
import { ServiceFailure } from "../module/ErrorBoundary";

const ProtectedPages = () => {
  const [error, setError] = useState(false);
  //signout
  const handleSignOut = async () => {
    try {
      await logOutUserService();
    } catch {
      setError(true);
    }
  };

  return error ? (
    <>
      <ServiceFailure />
    </>
  ) : (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
      <Sidebar handleSignOut={handleSignOut} />
      <Outlet />
    </div>
  );
};

export default ProtectedPages;
