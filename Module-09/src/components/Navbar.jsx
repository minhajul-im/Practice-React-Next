import { Link } from "react-router-dom";
import { images } from "../db/navbarData";

export default function Navbar({ onToggle }) {
  return (
    <nav className='grid grid-flow-col'>
      <div className='flex items-center gap-4 grid-cols-4 ml-10'>
        <img
          onClick={onToggle}
          className='img h-10 cursor-pointer'
          src={images.hamburger}
          alt='hamburger'
        />
        <Link to={"/"}>
          <img
            className='img h-20 cursor-pointer'
            src={images.brandLogo}
            alt='youtube'
          />
        </Link>
      </div>
      <form className='flex items-center grid-cols-4 gap-4'>
        <label className='border border-gray-600 flex items-center px-4 rounded-full w-full justify-between'>
          <input
            className='outline-none py-2 px-4 text-gray-600 font-semibold tracking-wide text-xl w-full'
            placeholder='Search'
            type='text'
          />
          <img
            className='img w-8 cursor-pointer pr-3'
            src={images.searchIcon}
            alt='search'
          />
        </label>
        <img
          src={images.voiceIcon}
          alt='voice'
          className='voice  h-8 cursor-pointer'
        />
      </form>
      <div className='flex items-center grid-cols-4 mr-10 justify-end gap-8'>
        <img
          className='img w-6 h-6 cursor-pointer'
          src={images.uploadIcon}
          alt='upload icon'
        />
        <img
          className='img w-6 h-6 cursor-pointer'
          src={images.notification}
          alt='notification'
        />
        <img
          className='img w-12 h-12 rounded-full cursor-pointer border border-green-600'
          src={images.user}
          alt='user'
        />
      </div>
    </nav>
  );
}
