import { useEffect, useState } from "react";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({ id, tags }) {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    fetchRelatedVideos(id, tags);
  }, []);

  const fetchRelatedVideos = async (id, tags) => {
    const queryString =
      tags?.length > 0
        ? tags.map((tag) => `tags_like=${tag}`).join("&") +
          `&id_ne=${id}&_limit=5`
        : `id_ne${id}&_limit=5`;

    const response = await fetch(`http://localhost:9000/videos?${queryString}`);
    const jsonData = await response.json();

    setRelatedVideos(jsonData);
  };

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {relatedVideos.map((relatedVideo) => (
        <RelatedVideo key={relatedVideo?.id} relatedVideo={relatedVideo} />
      ))}
    </div>
  );
}
