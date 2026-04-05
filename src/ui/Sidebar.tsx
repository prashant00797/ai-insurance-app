import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { LogoutIcon, IconConfig } from "../utility/Icons.js";
import { MobileNavConfig, SidebarConfig } from "../constant/config.js";
import { Logout } from "../constant/label.js";

const Sidebar = ({ handleSignOut }) => {
  const desktopBaseStyles =
    "w-full p-1 hover:bg-blue-300 hover:text-white cursor-pointer rounded-default transition-colors duration-300 lg:mb-2";

  const desktopActiveStyles = "bg-blue-300 text-white";

  const mobileBaseStyles = `flex flex-col items-center`;

  return (
    <div>
      {/* Desktop Sidebar */}
      <nav className="hidden  lg:flex flex-col justify-between shrink-0 bg-primary-100 shadow-level-1 p-2 w-62 lg:h-full">
        <div id="top">
          <NavLink to="/">
            <div className="mb-2">
              <img src={logo} alt="" />
            </div>
          </NavLink>

          <div className="p-4">
            <ul className="text-section-title space-y-2">
              {SidebarConfig.map((nav) => {
                return (
                  <NavLink key={nav.link} to={nav.link}>
                    {({ isActive }) => (
                      <li
                        className={`${desktopBaseStyles} ${isActive ? desktopActiveStyles : ""}`}
                      >
                        {nav.name}
                      </li>
                    )}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <button
            className={` p-2 rounded-default text-danger w-full hover:brightness-110 text-left text-section-title cursor-pointer`}
            onClick={handleSignOut}
          >
            {`📴${Logout}`}
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-primary-100 shadow-level-1 flex justify-around py-3 z-1 lg:hidden">
        {MobileNavConfig.map((nav) => {
          return (
            <NavLink key={nav.link} to={nav.link}>
              {({ isActive }) => (
                <div
                  className={`${mobileBaseStyles} ${
                    isActive ? "text-primary-500" : "text-gray-900"
                  }`}
                >
                  <IconConfig name={nav.iconName} className="w-6 h-6" />
                  <span className="text-caption">{nav.label}</span>
                </div>
              )}
            </NavLink>
          );
        })}
        <div id="logout">
          <button onClick={handleSignOut} className={`${mobileBaseStyles}`}>
            <LogoutIcon className="w-6 h-6 fill-danger" />
            <span className="text-caption">{Logout}</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
