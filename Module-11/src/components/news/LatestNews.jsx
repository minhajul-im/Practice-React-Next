import { useNewsContext } from "../../hooks/useNewsContext";
import LatestNewsItem from "./LatestNewsItem";

export default function LatestNews() {
  const { state } = useNewsContext();

  const { data } = state;

  return (
    <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
      {data?.articles.map((item, index) => (
        <LatestNewsItem
          key={item?.source?.id + index || item.title}
          news={item}
        />
      ))}
    </div>
  );
}
