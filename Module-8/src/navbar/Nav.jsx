import Link from "next/link";

const data = [
  {
    id: 1,
    path: "/",
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
];

const Nav = () => {
  return (
    <div className="bg-cyan-700">
      <div className="w-3/5 mx-auto flex justify-between items-center">
        <h4 className="text-white uppercase space-x-1">assignment</h4>
        <div className="flex gap-4 text-white font-normal text-xs space-x-1 uppercase">
          {data.map((item) => (
            <Link key={item.id} href={item?.path}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
