import PlayVideo from "../components/watchVideos/PlayVideo";
import RelatedVideos from "../components/watchVideos/RelatedVideos";

export default function Watch() {
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <PlayVideo />

          <RelatedVideos />
        </div>
      </div>
    </section>
  );
}
