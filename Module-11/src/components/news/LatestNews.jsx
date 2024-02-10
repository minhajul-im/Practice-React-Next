import LatestNewsItem from "./LatestNewsItem";

export default function LatestNews() {
  return (
    <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
      <LatestNewsItem></LatestNewsItem>
    </div>
  );
}
