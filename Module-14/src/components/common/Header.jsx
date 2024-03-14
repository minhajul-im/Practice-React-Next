import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Logout from "../auth/Logout";
import AvatarImage from "./AvatarImage";
import { useAuth } from "../../hooks/useAuth";
import searchIcon from "../../assets/icons/search.svg";

const Header = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className=" border-b border-gray-600">
      <nav className="container flex justify-between items-center py-3">
        <div>
          <Link to="/">
            <img
              className="w-32"
              src="https://learnwithsumit.com/_next/static/media/lws-logo-dark.8e393acf.svg"
              alt="logo"
            />
          </Link>
        </div>

        <div>
          <ul className="flex items-center space-x-5">
            {auth?.accessToken ? (
              <li className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                Write
              </li>
            ) : null}
            <li className="flex items-center gap-2 cursor-pointer">
              <img src={searchIcon} alt="Search" />
              <span>Search</span>
            </li>
            <li className="text-white/50 hover:text-white transition-all duration-200 cursor-pointer">
              {auth?.accessToken ? (
                <Logout>Logout</Logout>
              ) : (
                <span onClick={handleLogin}>Login</span>
              )}
            </li>
            {auth?.accessToken ? (
              <Link to={"/author"}>
                <li className="flex items-center">
                  <AvatarImage />
                </li>
              </Link>
            ) : null}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
