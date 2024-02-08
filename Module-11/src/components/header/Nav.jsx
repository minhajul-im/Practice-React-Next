import Svg from "./Svg";

import { formatDate } from "../../utilities/formatDate";

export default function Nav({ children }) {
  return (
    <div className='container mx-auto flex items-center justify-between gap-4'>
      <div className='flex items-center space-x-4'>
        <Svg />
        <span>{formatDate()}</span>
      </div>

      <a className='' href='/'>
        🚀🚀
        <img
          className='max-w-[100px] md:max-w-[165px] cursor-pointer'
          src=''
          alt=''
        />
      </a>

      {children}
    </div>
  );
}
