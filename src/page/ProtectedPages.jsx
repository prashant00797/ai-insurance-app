import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import { logOutUserService } from "../service/firebaseApi";

const ProtectedPages = () => {
  //signout
  const handleSignOut = async () => {
    try {
      const res = await logOutUserService();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
      <Sidebar handleSignOut={handleSignOut} />
      <Outlet />
    </div>
  );
};

export default ProtectedPages;
