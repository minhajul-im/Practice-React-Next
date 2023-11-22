import { useEffect } from "react";
import Pagination from "./Pagination";
import VideoCart from "./VideoCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videoSlice";

export default function VideoItems() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const { videos, isLoading, isError, error } = useSelector(
    (store) => store.videos
  );

  return (
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        <VideoCart />
        {/* <div className="col-span-12">some error happened</div> */}
      </div>
      <Pagination />
    </section>
  );
}
