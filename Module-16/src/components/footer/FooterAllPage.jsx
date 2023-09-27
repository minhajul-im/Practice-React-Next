import Link from "next/link";
import SocialIcon from "./SocialIcon";

const FooterAllPage = () => {
  return (
    <footer className=" bg-gray-900 ">
      <div className="footer py-10 text-base-content flex justify-around">
        <aside>
          <h1 className="text-6xl text-green-600 font-extrabold py-5">
            Heyoooo!
          </h1>
          <p className="mb-8 text-white">
            ACME Industries Ltd.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Providing reliable tech since 1992
          </p>

          <SocialIcon />
        </aside>

        <nav className="text-white">
          <header className="footer-title">Links</header>
          <Link href={"/service"} className="link link-hover">
            Services
          </Link>
          <Link href={"/portfolio"} className="link link-hover">
            Portfolio
          </Link>
          <Link href={"/about"} className="link link-hover">
            About us
          </Link>
          <Link href={"/contact"} className="link link-hover">
            Contact us
          </Link>
        </nav>
        <nav className="text-white">
          <header className="footer-title pb-4">Address</header>
          <p>
            Design Agency Head Office <br />
            AirPort Road <br />
            United Arab Emirate!
          </p>
        </nav>
      </div>
      <p className="text-center text-white text-xs italic py-3">
        &#169;copyright by DIGITAL AGENCY
      </p>
    </footer>
  );
};

export default FooterAllPage;
