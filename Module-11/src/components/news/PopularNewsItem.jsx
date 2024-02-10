import img2 from "../../assets/thumb_lg.png";
export default function PopularNewsItem() {
  return (
    <div className='col-span-12 mb-6 md:col-span-8'>
      <img className='w-full' src={img2} alt='thumb' />

      <div className='col-span-12 mt-6 md:col-span-4'>
        <a href='#'>
          <h3 className='mb-2.5 text-xl font-bold lg:text-[20px]'>
            Why is Uber selling its autonomous-vehicle division?
          </h3>
        </a>
        <p className='text-base text-[#292219]'>
          Self-driving cars were meant to be its future
        </p>
        <p className='mt-5 text-base text-[#94908C]'>25 Feb 2021</p>
      </div>
    </div>
  );
}
