import { useThemeContext } from "../../hooks/useThemeContext";
import { newsDateFormet } from "../../utilities";

// eslint-disable-next-line react/prop-types
export default function SingleRightSideNews({ newsInfo }) {
  const { darkMode } = useThemeContext();
  const { content, description, publishedAt, title, url } = newsInfo || {};

  return (
    <div className="col-span-12 md:col-span-8">
      <div className="col-span-12 md:col-span-4">
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
