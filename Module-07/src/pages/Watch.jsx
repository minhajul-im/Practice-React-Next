import PlayVideo from "../components/watchVideos/PlayVideo";
import RelatedVideos from "../components/watchVideos/RelatedVideos";

export default function Watch() {
  return (
    <section class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div class="grid grid-cols-3 gap-2 lg:gap-8">
          <PlayVideo />

          <RelatedVideos />
        </div>
      </div>
    </section>
  );
}
