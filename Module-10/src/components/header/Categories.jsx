import { url } from "../../constant/newsServices";
import { useFetchNews, useNewsContext } from "../../hooks";

export default function Categories() {
  const { data: home } = useFetchNews(url.home);
  const { data: general } = useFetchNews(url.general);
  const { data: business } = useFetchNews(url.business);
  const { data: entertainment } = useFetchNews(url.entertainment);
  const { data: health } = useFetchNews(url.health);
  const { data: science } = useFetchNews(url.science);
  const { data: sports } = useFetchNews(url.sports);
  const { data: technology } = useFetchNews(url.technology);
  const { setData } = useNewsContext();

  return (
    <div className='container mx-auto mt-6'>
      <ul className='flex flex-wrap items-center justify-center gap-x-12 text-xs font-semibold lg:text-base'>
        <li onClick={() => setData(home)}>Home</li>
        <li onClick={() => setData(general)}>General</li>
        <li onClick={() => setData(business)}>Business</li>
        <li onClick={() => setData(entertainment)}>Entertainment</li>
        <li onClick={() => setData(health)}>Health</li>
        <li onClick={() => setData(science)}>Science</li>
        <li onClick={() => setData(sports)}>Sports</li>
        <li onClick={() => setData(technology)}>Technology</li>
      </ul>
    </div>
  );
}
