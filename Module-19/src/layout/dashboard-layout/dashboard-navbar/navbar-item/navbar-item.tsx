"use client";

import Link from "next/link";
import { Tooltip } from "@mui/material";
import { usePathname } from "next/navigation";

type NavbarType = {
  children: React.ReactNode;
  path: string;
  title: string;
  styles?: string;
};

export const NavbarItem = ({ children, styles, path, title }: NavbarType) => {
  const pathname = usePathname();

  return (
    <li className={`pb-4`}>
      <Link href={path}>
        <Tooltip title={title} placement="right" arrow>
          <div
            className={`${
              pathname === path && "scale-150"
            } ${styles} rounded-full w-7 h-7 border border-black flex justify-center items-center bg-black text-white`}>
            <span>{children}</span>
          </div>
        </Tooltip>
      </Link>
    </li>
  );
};
