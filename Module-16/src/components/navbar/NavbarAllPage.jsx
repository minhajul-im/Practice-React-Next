import Link from "next/link";
import ActiveLinks from "./ActiveLinks";
import DarkAndLight from "./Dark&LightMode";

const NavbarAllPage = () => {
  return (
    <nav className=" bg-green-100">
      <div className="navbar py-1 my-0 min-h-0 w-5/6 mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ActiveLinks
              styles={
                "menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52"
              }
            />
          </div>
          <Link href={"/"} className="normal-case text-2xl font-bold">
            Digital<span className="text-yellow-500 uppercase">Agency</span>
          </Link>
        </div>

        <div className="navbar-center hidden  lg:flex items-end">
          <ActiveLinks
            styles={
              "menu menu-horizontal px-1 flex items-center gap-8 font-semibold"
            }
          />
        </div>
        <div className="navbar-end flex items-center gap-5">
          {/* dark mode  */}
          <DarkAndLight />
          <button className="py-2 px-5 border text-green-500 border-green-500 rounded-md hover:bg-green-400 hover:text-white text-xs font-semibold">
            Login
          </button>
          <button className="py-2 px-5 border bg-green-400 text-white border-green-500 hover:border-white-500 rounded-md hover:bg-white hover:text-green-500 text-xs font-semibold">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAllPage;
