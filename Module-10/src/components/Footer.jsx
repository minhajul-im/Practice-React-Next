import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "@/db/social";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-center pt-6 text-white">
      <h1 className="text-2xl font-semibold text-sky-600 capitalize font-mono">
        Follow me
      </h1>
      <div className="flex items-center justify-center gap-6 py-6 select-none">
        {icons.map((icon) => (
          <a key={icon.id} href={icon.link} target="_blank">
            <FontAwesomeIcon
              className="hover:text-sky-500 hover:duration-100"
              icon={icon.name}
              style={{ fontSize: 25 }}
            />
          </a>
        ))}
        <a href="https://leetcode.com/minhajul-im/" target="_blank">
          <Image
            src="/LeetCode_logo_rvs.png"
            alt="leet code"
            height={28}
            width={28}
          />
        </a>
      </div>
      <i className="py-4 select-none">&copy;copyright by minhaj</i>
    </div>
  );
};

export default Footer;
