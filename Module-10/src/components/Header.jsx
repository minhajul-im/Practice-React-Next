"use client";

import Link from "next/link";
import links from "@/db/links";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <header className="bg-slate-800">
      <nav
        className="w-4/6 py-1 mx-auto text-sky-500 text-[.9rem]
        capitalize font-semibold flex gap-7 justify-center items-center"
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.link}
            className={`${
              path == link.link ? "text-white" : "text-sky-500"
            } select-none`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
