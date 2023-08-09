"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    path: "/home",
    title: "home",
  },
  {
    id: 2,
    path: "/about",
    title: "about",
  },
  {
    id: 3,
    path: "/register",
    title: "register",
  },
  {
    id: 4,
    path: "/login",
    title: "login",
  },
  {
    id: 5,
    path: "/settings",
    title: "settings",
  },
];

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="bg-green-700">
      <div className="w-3/5 m-auto">
        <div>
          <p>Next App</p>
        </div>
        <div className="flex gap-4 justify-end">
          {links.map((link) => (
            <Link
              key={link.id}
              href={{
                pathname: link.path,
                query: { id: link.id, title: link.title, name: "minhaj" },
              }}
              className={path === link.path ? "text-red-600" : "text-white"}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
