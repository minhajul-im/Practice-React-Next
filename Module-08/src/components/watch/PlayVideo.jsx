import VideoDescription from "./VideoDescription";

export default function PlayVideo({ dataOfWatchVideo }) {
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        width="100%"
        className="aspect-video"
        src={dataOfWatchVideo?.link}
        title={dataOfWatchVideo?.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <VideoDescription dataOfWatchVideo={dataOfWatchVideo} />
    </div>
  );
}
