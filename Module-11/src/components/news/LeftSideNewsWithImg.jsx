import defaultImg from "../../assets/thumb.png";
import { useThemeContext } from "../../hooks/useThemeContext";
import { newsDateFormet } from "../../utilities/newsDateFormet";

// eslint-disable-next-line react/prop-types
export default function LeftSideNewsWithImg({ newsInfo }) {
  const { darkMode } = useThemeContext();
  const { content, description, publishedAt, title, url, urlToImage } =
    newsInfo || {};

  return (
    <div className='col-span-12 grid grid-cols-12 gap-4 lg:col-span-8'>
      <div className='col-span-12 md:col-span-6'>
        <a href={url}>
          <h3 className='mb-2.5 text-xl font-bold lg:text-2xl'>{title}</h3>
        </a>
        <p
          className={`text-base ${
            darkMode ? "text-gray-400" : "text-[#292219]"
          }`}
        >
          {description || content}
        </p>
        <p className='mt-5 text-base text-[#5C5955]'>
          {publishedAt && newsDateFormet(publishedAt)}
        </p>
      </div>

      <div className='col-span-12 md:col-span-6'>
        <img
          className='w-full'
          src={(title && urlToImage) || defaultImg}
          alt={title}
        />
      </div>
    </div>
  );
}
