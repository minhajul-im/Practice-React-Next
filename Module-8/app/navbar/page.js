import Link from "next/link";

const Nav = () => {
  return (
    <div className="bg-cyan-800 ">
      <div className="w-4/6 m-auto flex justify-between items-center py-1">
        <p className="text-white font-semibold uppercase space-x-1 cursor-pointer hover:text-black transition-all duration-100">
          assignment
        </p>

        <ul
          className="flex gap-6
         text-white text-xs font-semibold
          space-x-0  uppercase"
        >
          <li className="cursor-pointer hover:underline transition-all hover:text-black">
            <Link href={"../home"}> home</Link>
          </li>
          <li className="cursor-pointer hover:underline transition-all hover:text-black">
            docs
          </li>
          <li className="cursor-pointer hover:underline transition-all hover:text-black">
            about
          </li>
          <li className="cursor-pointer hover:underline transition-all hover:text-black">
            contact
          </li>
          <li className="cursor-pointer hover:underline transition-all hover:text-black">
            login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
