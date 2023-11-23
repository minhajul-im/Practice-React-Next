import RelatedVideo from "./RelatedVideo";
import RelatedVideoDes from "./RelatedVideoDes";

export default function RelatedVideos({ currentVideoId, tags }) {
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <div className="w-full flex flex-row gap-2 mb-4">
        <RelatedVideo />

        <RelatedVideoDes />
      </div>
    </div>
  );
}
