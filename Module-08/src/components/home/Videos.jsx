import { useEffect, useState } from "react";
import Video from "./Video";

export default function Videos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(" http://localhost:9000/videos");
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {data.map((video) => (
          <Video key={video?.id} video={video} />
        ))}

        {/* <div className="col-span-12">some error happened</div> */}
      </div>
    </section>
  );
}
