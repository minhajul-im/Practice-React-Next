import { useContext, useEffect, useState } from "react";
import Video from "./Video";
import { SearchContext } from "../../utilities/SearchContext";

export default function Videos() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetchData();
    x();
  }, []);

  const fetchData = async () => {
    const response = await fetch(" http://localhost:9000/videos");
    const jsonData = await response.json();
    setData(jsonData);
    setSearchData(jsonData);
  };

  const { search } = useContext(SearchContext);

  const x = () => {
    const searchedData = searchData.filter((video) =>
      video?.title.includes(search)
    );
    setData(searchedData);
  };

  return (
    <section className="pt-12">
      <h1 className="text-center font-bold text-red-600 pb-10">{search}</h1>
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {data.map((video) => (
          <Video key={video?.id} video={video} />
        ))}

        {/* <div className="col-span-12">some error happened</div> */}
      </div>
    </section>
  );
}
