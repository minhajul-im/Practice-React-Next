import { newsDateFormet } from "../../utilities/newsDateFormet";
import defaultNewsImg from "../../assets/thumb.png";

export default function LatestNewsItem({ news }) {
  const { content, description, publishedAt, title, url, urlToImage } =
    news || {};

  return (
    <div className='col-span-12 grid grid-cols-12 gap-4'>
      <div className='col-span-12 lg:col-span-4'>
        <a href={url}>
          <h3 className='mb-2.5 text-2xl font-bold lg:text-[28px]'>{title}</h3>
        </a>
        <p className='text-base text-[#5C5955]'>{content}</p>
        <p className='mt-5 text-base text-[#5C5955]'>
          {newsDateFormet(publishedAt)}
        </p>
      </div>

      <div className='col-span-12 lg:col-span-8'>
        <img
          className='w-full'
          src={urlToImage || defaultNewsImg}
          alt={title}
        />
        <p className='mt-5 text-base text-[#5C5955]'>{description}</p>
      </div>
    </div>
  );
}
