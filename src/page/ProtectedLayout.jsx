import { Outlet } from "react-router";
import Navbar from "../ui/Navbar";

const ProtectedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
