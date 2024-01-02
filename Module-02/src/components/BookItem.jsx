import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

export default function BookItem({ book }) {
  const { name, author, price, image, star, favorite } = book || {};

  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4'>
        <img className='max-w-[144px]' src={image} alt='book name' />
      </div>

      <div className='space-y-3'>
        <h4 className='text-lg font-bold lg:text-xl'>{name}</h4>
        <p className='text-xs lg:text-sm'>
          By : <span>{author}</span>
        </p>
        <div className='flex items-center justify-between'>
          <h4 className='text-lg font-bold lg:text-xl'>{price}</h4>

          <div className='flex items-center space-x-1'>
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />
            <FaStar className='text-yellow-400' />

            <span className='text-xs lg:text-sm'>({star})</span>
          </div>
        </div>

        <div className='flex items-center gap-3 text-xs lg:text-sm'>
          <button className='flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5'>
            <FaShoppingCart />
            Add to Cart
          </button>
          <button className='flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5'>
            <FaRegHeart />
            Favourite
          </button>
        </div>
      </div>
    </div>
  );
}
