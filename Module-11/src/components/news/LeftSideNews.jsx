import SingleLeftSideNews from "./SingleLeftSideNews";

/* eslint-disable react/prop-types */
export default function LeftSideNews({ children, newsItems = [] }) {
  return (
    <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
      {children}

      {newsItems.map((news, i) => (
        <SingleLeftSideNews key={i} newsInfo={news} />
      ))}
    </div>
  );
}
