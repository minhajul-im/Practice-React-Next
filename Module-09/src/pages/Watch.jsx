import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PlayVideo from "../components/PlayVideo";
import RelatedVideos from "../components/RelatedVideos";

export default function Watch() {
  const { videoId } = useParams();
  const [dataOfWatchVideo, setDataOfWatchVideo] = useState({});

  useEffect(() => {
    fetchWatchVideo(videoId);
  }, []);

  const fetchWatchVideo = async (id) => {
    try {
      const response = await fetch(`http://localhost:9000/videos/${id}`);
      const jsonData = await response.json();

      setDataOfWatchVideo(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <PlayVideo dataOfWatchVideo={dataOfWatchVideo} />

          <RelatedVideos
            id={dataOfWatchVideo?.id}
            tags={dataOfWatchVideo?.tags}
          />
        </div>
      </div>
    </section>
  );
}
