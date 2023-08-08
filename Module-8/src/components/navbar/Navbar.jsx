import Link from "next/link";

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
  return (
    <div className="bg-green-700">
      <div className="w-3/5 m-auto">
        <div>
          <p>Assignment</p>
        </div>
        <div className="flex gap-4 justify-end">
          {links.map((link) => (
            <Link key={link.id} href={link.path}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
