import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Loading from "../components/reusable/Loading";
import { fetchVideo } from "../features/video/videoSlice";
import PlayVideo from "../components/watchVideos/PlayVideo";
import RelatedVideos from "../components/watchVideos/RelatedVideos";

export default function Watch() {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch]);

  const { isLoading, video, isError } = useSelector((state) => state.video);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <h1>error</h1>;
  if (!isLoading && !isError && !video?.id) content = <h1>NO content here!</h1>;
  if (!isLoading && !isError && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <PlayVideo video={video} />
        <RelatedVideos currentVideoId={video?.id} tags={video?.tags} />
      </div>
    );

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
}
