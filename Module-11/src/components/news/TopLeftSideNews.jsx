import { newsDateFormet } from "../../utilities";
import { useThemeContext } from "../../hooks/useThemeContext";

// eslint-disable-next-line react/prop-types
export default function TopLeftSideNews({ newsInfo }) {
  const { darkMode } = useThemeContext();

  const { author, content, description, publishedAt, title, url, urlToImage } =
    newsInfo || {};

  return (
    <div className='col-span-12 grid grid-cols-12 gap-4'>
      <div className='col-span-12 lg:col-span-4'>
        <a href={url}>
          <h3 className='mb-2.5 text-2xl font-bold lg:text-[28px]'>{title}</h3>
        </a>
        <p
          className={`text-base ${
            darkMode ? "text-gray-400" : "text-[#292219]"
          }`}
        >
          {description || content}
        </p>
        <p className='mt-5 text-base text-[#94908C]'>
          {publishedAt && newsDateFormet(publishedAt)}
        </p>
      </div>

      <div className='col-span-12 lg:col-span-8'>
        <img className='w-full' src={urlToImage} alt={title} />
        <p
          className={`mt-5 text-base ${
            darkMode ? "text-gray-300" : "text-[#5C5955]"
          }`}
        >
          Illustration: {author}
        </p>
      </div>
    </div>
  );
}
// className=
//   5C5955
