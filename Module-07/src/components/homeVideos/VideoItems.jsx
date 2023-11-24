import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tags from "./Tags";
import VideoCart from "./VideoCart";
import Pagination from "./Pagination";
import Loading from "../reusable/Loading";
import { fetchVideos } from "../../features/videos/videosSlice";

export default function VideoItems() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const { isLoading, isError, videos, error } = useSelector(
    (state) => state.videos
  );

  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isError && !isLoading && videos.length === 0) {
    content = <div className="col-span-12">Not content found!</div>;
  }
  if (!isError && !isLoading && videos.length > 0) {
    content = videos.map((video) => (
      <VideoCart key={video?.id} video={video} />
    ));
  }

  return (
    <>
      <Tags />
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
        <Pagination />
      </section>
    </>
  );
}
