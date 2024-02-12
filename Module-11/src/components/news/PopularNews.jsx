import PopularNewsItem from "./PopularNewsItem";
import { useNewsContext } from "../../hooks/useNewsContext";

export default function News() {
  const { state } = useNewsContext();

  const { data } = state;
  return (
    <div className='col-span-12 self-start xl:col-span-4'>
      <div className='space-y-6 divide-y-2 divide-[#D5D1C9]'>
        {data?.articles.map((item, index) => (
          <PopularNewsItem
            key={item?.source?.id + index || item.title}
            news={item}
          />
        ))}
      </div>
    </div>
  );
}
