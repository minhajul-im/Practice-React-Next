import VideoCard from "./VideoCard";

export default function VideoesContainer({ videoInfo }) {
  return (
    <div>

      <VideoCard videoInfo={videoInfo} />
    </div>
  );
}
