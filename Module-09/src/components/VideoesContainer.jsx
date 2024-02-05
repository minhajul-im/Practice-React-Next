import { Link } from "react-router-dom";

import VideoCard from "./VideoCard";

export default function VideoesContainer({ videoes }) {
  console.log(videoes[0]);

  return (
    <div className='w-full flex flex-wrap gap-6'>
      {videoes.map((videoInfo) => (
        <Link
          to={`/watch?v=${videoInfo?.id}`}
          key={videoInfo?.id}
          className='mt-6'
        >
          <VideoCard videoInfo={videoInfo} />
        </Link>
      ))}
    </div>
  );
}
