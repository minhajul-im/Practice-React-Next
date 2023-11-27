import Video from "./Video";

export default function AllVideos({ videos }) {
  return (
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {/* <!-- single video --> */}
        {videos.map((video) => (
          <Video video={video} key={video?.id} />
        ))}
      </div>
    </section>
  );
}
