import logo from "../assets/logo.svg";
import { NavLink } from "react-router";
import {
  ClaimsIcon,
  ProviderIcon,
  ProfileIcon,
  DashboardIcon,
} from "../utility/Icons.jsx";

const Sidebar = () => {
  const desktopBaseStyles =
    "w-full p-1 hover:bg-blue-300 hover:text-white cursor-pointer rounded-default transition-colors duration-300 lg:mb-2";

  const desktopActiveStyles = "bg-blue-300 text-white";

  const mobileBaseStyles = `flex flex-col items-center`;

  return (
    <div>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:block shrink-0 bg-primary-100 shadow-level-1 p-2 w-62 lg:h-full">
        <NavLink to="/">
          <div className="mb-2">
            <img src={logo} alt="" />
          </div>
        </NavLink>

        <div className="p-4">
          <ul className="text-section-title space-y-2">
            <NavLink to="/claims">
              {({ isActive }) => (
                <li
                  className={`${desktopBaseStyles} ${isActive ? desktopActiveStyles : ""}`}
                >
                  Claims
                </li>
              )}
            </NavLink>

            <NavLink to="/provider">
              {({ isActive }) => (
                <li
                  className={`${desktopBaseStyles} ${isActive ? desktopActiveStyles : ""}`}
                >
                  Provider
                </li>
              )}
            </NavLink>

            <NavLink to="/profile">
              {({ isActive }) => (
                <li
                  className={`${desktopBaseStyles} ${isActive ? desktopActiveStyles : ""}`}
                >
                  Profile
                </li>
              )}
            </NavLink>
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-primary-100 shadow-level-1 flex justify-around py-3 z-1 lg:hidden">
        <NavLink to="/">
          {({ isActive }) => (
            <div
              className={`${mobileBaseStyles} ${
                isActive ? "text-primary-500" : "text-gray-900"
              }`}
            >
              <DashboardIcon className="w-6 h-6" />
              <span className="text-caption">Dashboard</span>
            </div>
          )}
        </NavLink>
        <NavLink to="/claims">
          {({ isActive }) => (
            <div
              className={`${mobileBaseStyles} ${
                isActive ? "text-primary-500" : "text-gray-900"
              }`}
            >
              <ClaimsIcon className="w-6 h-6" />
              <span className="text-caption">Claims</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/provider">
          {({ isActive }) => (
            <div
              className={`${mobileBaseStyles} ${
                isActive ? "text-primary-500" : "text-gray-900"
              }`}
            >
              <ProviderIcon className="w-6 h-6" />
              <span className="text-caption">Provider</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/profile">
          {({ isActive }) => (
            <div
              className={`${mobileBaseStyles} ${
                isActive ? "text-primary-500" : "text-gray-900"
              }`}
            >
              <ProfileIcon className="w-6 h-6" />
              <span className="text-caption">Profile</span>
            </div>
          )}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
