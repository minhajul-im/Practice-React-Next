import CategoryLink from "../reusable/CategoryLink";
import { useFetchData } from "../../hooks/useFetchData";
import { url } from "../../constant/newsServices";
import { useNewsContext } from "../../hooks/useNewsContext";
// import { useEffect } from "react";

export default function Categories() {
  const { data } = useFetchData(url.general);

  const { dispatch } = useNewsContext();
  // const generalData = data?.data?.articles;
  // useEffect(() => {}, []);

  return (
    <div className='container mx-auto mt-6'>
      <ul className='flex flex-wrap items-center justify-center gap-x-12 text-xs font-semibold lg:text-base'>
        <CategoryLink>Home</CategoryLink>
        <li
          onClick={() => {
            dispatch({
              type: "GENERAL",
              generalData: data?.articles,
            });
          }}
        >
          <a href='#'>General</a>
        </li>
        <CategoryLink>Business</CategoryLink>
        <CategoryLink>Entertainment</CategoryLink>
        <CategoryLink>Health</CategoryLink>
        <CategoryLink>Science</CategoryLink>
        <CategoryLink>Sports</CategoryLink>
        <CategoryLink>Technology</CategoryLink>
      </ul>
    </div>
  );
}
// onGeneral={() => {
// dispatch({
//   type: "GENERAL",
//   generalData,
// });
// }}
