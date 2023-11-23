import DescriptionOfVideo from "./DescriptionOfVideo";

export default function PlayVideo({ video }) {
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        width="100%"
        className="aspect-video"
        src={video?.link}
        title={video?.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <DescriptionOfVideo video={video} />
    </div>
  );
}
