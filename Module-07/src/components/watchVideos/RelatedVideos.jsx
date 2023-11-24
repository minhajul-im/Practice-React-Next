import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../reusable/Loading";
import RelatedVideoDes from "./RelatedVideoDes";
import RelatedVideoThumbnail from "./RelatedVideoThumbnail";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideos";

export default function RelatedVideos({ currentVideoId, tags }) {
  const { isError, isLoading, videos } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, currentVideoId, tags]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <h1>error</h1>;
  if (!isLoading && !isError && videos.length === 0) {
    content = <h1>NO content here!</h1>;
  }
  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => (
      <div key={video.id} className="w-full flex flex-row gap-2 mb-4">
        <RelatedVideoThumbnail video={video} />
        <RelatedVideoDes video={video} />
      </div>
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
