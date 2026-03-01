import { Outlet } from "react-router";
import Sidebar from "../ui/Sidebar";

const ProtectedLayout = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
