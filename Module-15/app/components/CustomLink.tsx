"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
  path: string;
  children: string;
}

const CustomLink = ({ children, path }: CustomLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === path ? "text-green-600" : "";

  return (
    <Link className={isActive} href={path}>
      {children}
    </Link>
  );
};

export default CustomLink;
