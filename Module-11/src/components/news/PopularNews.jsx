import PopularNewsItem from "./PopularNewsItem";

export default function News() {
  return (
    <div className='col-span-12 self-start xl:col-span-4'>
      <div className='space-y-6 divide-y-2 divide-[#D5D1C9]'>
        <PopularNewsItem></PopularNewsItem>
      </div>
    </div>
  );
}
