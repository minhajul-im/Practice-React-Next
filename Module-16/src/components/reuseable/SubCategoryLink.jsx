"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SubCategoryLink = ({ url, name }) => {
  const path = usePathname();
  const active = (url) => (path === url ? "text-green-600" : "");

  return (
    <div className="flex gap-5 items-center text-sm font-semibold mb-20">
      <Link className={active("/")} href={"/"}>
        Home
      </Link>
      <p>
        <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 15 }} />
      </p>
      <Link className={active(url)} href={url}>
        {name}
      </Link>
    </div>
  );
};

export default SubCategoryLink;
