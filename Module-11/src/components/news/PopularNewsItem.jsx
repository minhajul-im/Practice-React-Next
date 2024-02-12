import img2 from "../../assets/thumb_lg.png";
import { newsDateFormet } from "../../utilities/newsDateFormet";

export default function PopularNewsItem({ news }) {
  const { description, publishedAt, title, url, urlToImage } = news || {};

  return (
    <div className='col-span-12 mb-6 md:col-span-8'>
      <img className='w-full' src={urlToImage || img2} alt='thumb' />

      <div className='col-span-12 mt-6 md:col-span-4'>
        <a href={url}>
          <h3 className='mb-2.5 text-xl font-bold lg:text-[20px]'>{title}</h3>
        </a>
        <p className='text-base text-[#292219]'>{description}</p>
        <p className='mt-5 text-base text-[#94908C]'>
          {newsDateFormet(publishedAt)}
        </p>
      </div>
    </div>
  );
}
