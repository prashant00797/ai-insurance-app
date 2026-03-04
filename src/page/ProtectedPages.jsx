import { Outlet } from "react-router";
import Sidebar from "../ui/Sidebar";

const ProtectedPages = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default ProtectedPages;
