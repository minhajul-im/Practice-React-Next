import { FaRegBell } from "react-icons/fa";

import logoLWS from "../assets/lws-logo-en.svg";

export default function Navbar() {
  return (
    <nav className='py-6 '>
      <div className='container mx-auto flex items-center justify-between gap-x-6 max-w-7xl'>
        <a href='/'>
          <img
            className='max-w-[100px] md:max-w-[165px]'
            src={logoLWS}
            alt='Lws'
          />
        </a>

        <FaRegBell className='cursor-pointer' />
      </div>
    </nav>
  );
}
