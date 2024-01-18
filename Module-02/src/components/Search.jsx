import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Search({ onFilter }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <h6 className='mb-2 text-base lg:text-xl'>Trending on 2021</h6>
      <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
        Trending Books of the Year
      </h2>

      <form onSubmit={(e) => e.preventDefault()} className='flex'>
        <div className='relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]'>
          <input
            onChange={(e) => setInput(e.target.value)}
            type='search'
            id='search-dropdown'
            className='z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none'
            placeholder='Search Book'
            required
          />
          <div className='absolute right-0 top-0 flex h-full items-center'>
            <button
              onClick={() => onFilter(input.toLowerCase())}
              type='submit'
              className='mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white'
            >
              <IoIosSearch />
              <span>Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
