import logo from "../assets/logo.svg";
import { Link, Links } from "react-router";
import { ClaimsIcon, ProviderIcon, ProfileIcon } from "../utility/Icons.jsx";

const Sidebar = () => {
  return (
    <div>
      <nav className="hidden lg:block shrink-0 bg-primary-100 shadow-level-1 p-2 w-62 lg:h-full">
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
      <>
        <div className=" absolute lg:hidden mb-5">
          <Link to={"/"}>
            <div className="mb-2 ">
              <img src={logo} alt="" />
            </div>
          </Link>
        </div>

        <nav className="fixed bottom-0 left-0 w-full bg-primary-100 shadow-level-1 flex justify-around py-3 lg:hidden ">
          <Link to={"/claims"}>
            <div className="flex flex-col items-center">
              <ClaimsIcon className="w-6 h-6 text-primary-600" />
              <span className="text-caption text-center text-gray-900">
                Claims
              </span>
            </div>
          </Link>
          <Link to={"/provider"}>
            <div className="flex flex-col items-center">
              <ProviderIcon className="w-6 h-6 text-primary-600" />
              <span className="text-caption text-center text-gray-900">
                Provider
              </span>
            </div>
          </Link>
          <Link to={"/profile"}>
            <div className="flex flex-col items-center">
              <ProfileIcon className="w-6 h-6 text-primary-600" />
              <span className="text-caption text-center text-gray-900">
                Profile
              </span>
            </div>
          </Link>
        </nav>
      </>
    </div>
  );
};

export default Sidebar;
