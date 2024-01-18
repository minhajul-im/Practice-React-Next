import Search from "./Search";

export default function Hero({ onFilter, onSort }) {
  return (
    <header className='mb-8 lg:mb-10 mx-auto max-w-7xl'>
      <div className='mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4'>
        <Search onFilter={onFilter} />

        <div className='flex items-stretch space-x-3'>
          <select
            onChange={(e) => onSort(e.target.value)}
            className='cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600 font-semibold '
            name='sortBy'
            id='sortBy'
          >
            <option value=''>Sort</option>
            <option value='name_asc'>Name (A-Z)</option>
            <option value='name_desc'>Name (Z-A)</option>
            <option value='year_asc'>Publication Year (Oldest)</option>
            <option value='year_desc'>Publication Year (Newest)</option>
          </select>
        </div>
      </div>
    </header>
  );
}
