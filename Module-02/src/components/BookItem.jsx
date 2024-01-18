import { FaStar, FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

export default function BookItem({ book, onToggle }) {
  const { bookName, author, price, image, star, favorite, year } = book || {};

  let style = favorite
    ? "bg-[#DC2954]/[14%]  text-[#DC2954]  hover:bg-[#DC2954]/[24%]"
    : "bg-[#1C4336]/[14%] hover:bg-[#1C4336]/[24%] text-[#1C4336]";

  return (
    <section className='space-y-3'>
      <div className='flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4'>
        <img className='max-w-[144px]' src={image} alt='book name' />
      </div>

      <div className='space-y-3'>
        <h4 className='text-lg font-bold lg:text-xl'>
          {bookName} ({year})
        </h4>
        <p className='text-xs lg:text-sm'>
          By : <span>{author}</span>
        </p>
        <div className='flex items-center justify-between'>
          <h4 className='text-lg font-bold lg:text-xl'>{price}</h4>

          <div className='flex items-center space-x-1 text-yellow-400'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className='text-xs lg:text-sm text-gray-600'>({star})</span>
          </div>
        </div>

        <div className='flex items-center gap-3 text-xs lg:text-sm'>
          <button className='flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5'>
            <FaShoppingCart />
            Add to Cart
          </button>
          <button
            onClick={() => onToggle(book)}
            className={`${style} flex min-w-[132px] items-center justify-center gap-1 rounded-md transition-all lg:py-1.5 py-1.5`}
          >
            {favorite ? (
              <FaHeart className='text-[#DC2954]' />
            ) : (
              <FaRegHeart className='text-[#1C4336]' />
            )}
            Favourite
          </button>
        </div>
      </div>
    </section>
  );
}
