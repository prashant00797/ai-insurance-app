import logo from "../assets/logo.svg";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <nav className="shrink-0 w-62 bg-primary-100  shadow-level-1 p-2 h-full">
      <Link to={"/"}>
        <div className="mb-2">
          <img src={logo} alt="" />
        </div>
      </Link>

      <div className="p-4">
        <ul className="text-section-title">
          <Link to={"/claims"}>
            <li className="w-full p-1 hover:bg-blue-300 hover:text-white cursor-pointer rounded-default transition-colors duration-300">
              Claims
            </li>
          </Link>
          <Link to={"/provider"}>
            <li className="w-full p-1 hover:bg-blue-300 hover:text-white cursor-pointer rounded-default transition-colors duration-300">
              Provider
            </li>
          </Link>
          <Link to={"/profile"}>
            <li className="w-full p-1 hover:bg-blue-300 hover:text-white cursor-pointer rounded-default transition-colors duration-300">
              Profile
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
