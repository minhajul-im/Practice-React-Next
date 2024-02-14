import { useState } from "react";

import { url } from "../../constant/newsService";
import { useFetchData } from "../../hooks/useFetchData";
import { useNewsContext } from "../../hooks/useNewsContext";

export default function Categories() {
  const { newsData: home } = useFetchData(url.home);
  const { newsData: general } = useFetchData(url.general);
  const { newsData: business } = useFetchData(url.business);
  const { newsData: entertainment } = useFetchData(url.entertainment);
  const { newsData: health } = useFetchData(url.health);
  const { newsData: science } = useFetchData(url.science);
  const { newsData: sports } = useFetchData(url.sports);
  const { newsData: technology } = useFetchData(url.technology);

  const { setNewsData } = useNewsContext();
  const [activeCategory, setActiveCategory] = useState("Home");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    switch (category) {
      case "Home":
        setNewsData(home);
        break;
      case "General":
        setNewsData(general);
        break;
      case "Business":
        setNewsData(business);
        break;
      case "Entertainment":
        setNewsData(entertainment);
        break;
      case "Health":
        setNewsData(health);
        break;
      case "Science":
        setNewsData(science);
        break;
      case "Sports":
        setNewsData(sports);
        break;
      case "Technology":
        setNewsData(technology);
        break;
      default:
        break;
    }
  };

  return (
    <div className='container mx-auto mt-6'>
      <ul className='flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base'>
        <li
          className={activeCategory === "Home" ? "text-[#00d991]" : ""}
          onClick={() => handleCategoryClick("Home")}
        >
          <a href='#' className='text-sm font-semibold'>
            Home
          </a>
        </li>
        <li
          className={activeCategory === "General" ? "text-[#00d991]" : ""}
          onClick={() => handleCategoryClick("General")}
        >
          <a href='#' className='text-sm font-semibold'>
            General
          </a>
        </li>
        <li
          className={activeCategory === "Business" ? "text-[#00d991]" : ""}
          onClick={() => handleCategoryClick("Business")}
        >
          <a href='#' className='text-sm font-semibold'>
            Business
          </a>
        </li>
        <li
          className={activeCategory === "Entertainment" ? "text-[#00d991]" : ""}
          onClick={() => handleCategoryClick("Entertainment")}
        >
          <a href='#' className='text-sm font-semibold'>
            Entertainment
          </a>
        </li>
        <li
          className={activeCategory === "Health" ? "text-[#00d991]" : ""}
          onClick={() => handleCategoryClick("Health")}
        >
          <a href='#' className='text-sm font-semibold'>
            Health
          </a>
        </li>
        <li
          className={activeCategory === "Science" ? "text-[#00d991]" : ""}
          onClick={() => handleCategoryClick("Science")}
        >
          <a href='#' className='text-sm font-semibold'>
            Science
          </a>
        </li>
        <li
          className={activeCategory === "Sports" ? "text-[#00d991]" : ""}
          onClick={() => handleCategoryClick("Sports")}
        >
          <a href='#' className='text-sm font-semibold'>
            Sports
          </a>
        </li>
        <li
          className={activeCategory === "Technology" ? "text-[#00d991]" : ""}
          onClick={() => handleCategoryClick("Technology")}
        >
          <a href='#' className='text-sm font-semibold'>
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
}
