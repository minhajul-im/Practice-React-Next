import { useThemeContext } from "../../hooks/useThemeContext";
import { newsDateFormet } from "../../utilities";

// eslint-disable-next-line react/prop-types
export default function TopRightSideNews({ newsInfo }) {
  const { darkMode } = useThemeContext();
  const { content, description, publishedAt, title, url, urlToImage } =
    newsInfo || {};
  return (
    <div className="col-span-12 mb-6 md:col-span-8">
      <img className="w-full" src={urlToImage} alt={title} />

      <div className="col-span-12 mt-6 md:col-span-4">
        <a href={url}>
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{title}</h3>
        </a>
        <p
          className={`text-base ${
            darkMode ? "text-gray-400" : "text-[#292219]"
          }`}
        >
          {description || content}
        </p>
        <p className="mt-5 text-base text-[#94908C]">
          {publishedAt && newsDateFormet(publishedAt)}
        </p>
      </div>
    </div>
  );
}
