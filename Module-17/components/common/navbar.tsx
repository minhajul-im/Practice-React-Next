import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <header className="border-b">
      <nav className="container flex justify-between py-2">
        <div className="flex gap-8 items-center">
          <Link className="text-xl font-semibold" href={"/"}>
            Hello Blog
          </Link>
          <Link href={"/posts"}>posts</Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
