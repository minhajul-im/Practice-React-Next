import links from "@/db/links";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-800">
      <nav
        className="w-4/6 py-1 mx-auto text-sky-500 text-[.9rem]
        capitalize font-semibold flex gap-7 justify-center items-center"
      >
        {links.map((link) => (
          <Link
            className="hover:text-white hover:duration-100 select-none"
            key={link.id}
            href={link.link}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
