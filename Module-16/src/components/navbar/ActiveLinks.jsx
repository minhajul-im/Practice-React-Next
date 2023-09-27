"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const ActiveLinks = ({ styles }) => {
  const path = usePathname();

  const active = (url) => (path === url ? "text-green-600" : "");

  return (
    <ul className={styles} tabIndex={0}>
      <Link className={active("/")} href={"/"}>
        Home
      </Link>
      <Link className={active("/team")} href={"/team"}>
        Team
      </Link>
      <Link className={active("/service")} href={"/service"}>
        Service
      </Link>
      <Link className={active("/project")} href={"/project"}>
        Projects
      </Link>
      <Link className={active("/testimonials")} href={"/testimonials"}>
        Testimonials
      </Link>
    </ul>
  );
};

export default ActiveLinks;
