import { Outlet } from "react-router";
import Sidebar from "../ui/Sidebar";

const ProtectedLayout = () => {
  return (
    <div className="h-screen flex ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
