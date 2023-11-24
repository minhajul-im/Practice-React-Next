import VideoDescription from "./VideoDescription";

export default function PlayVideo() {
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        width="100%"
        className="aspect-video"
        src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
        title="Some video title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <VideoDescription />
    </div>
  );
}
