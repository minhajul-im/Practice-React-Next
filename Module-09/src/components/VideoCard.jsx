import { images } from "../db/navbarData";
import { getTimeAgo } from "../utilities/date";
import { formateViews } from "../utilities/formateViews";

export default function VideoCard({ videoInfo }) {
  return (
    <div className='w-[360px] h-[310px] rounded-lg hover:scale-100'>
      <img
        className='w-full object-cover rounded-lg'
        src={videoInfo?.snippet?.thumbnails?.medium?.url}
        alt={videoInfo?.snippet.title.slice(0, 30)}
      />
      <div className='flex gap-3 py-2 mt-2'>
        <img
          className='img w-10 h-10 rounded-full cursor-pointer border border-green-600'
          src={images.user}
          alt={videoInfo?.snippet?.channelTitle}
        />
        <ul className=' text-gray-500'>
          <li className='font-medium text-black'>
            {videoInfo?.snippet.title.slice(0, 60)}...
          </li>
          <li className='font-semibold text-sm'>
            {videoInfo?.snippet.channelTitle}
          </li>
          <li className='text-sm'>
            {formateViews(videoInfo?.statistics?.viewCount)} views •{" "}
            {getTimeAgo(videoInfo?.snippet?.publishedAt)}
          </li>
        </ul>
      </div>
    </div>
  );
}
