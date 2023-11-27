import { useEffect, useState } from "react";

import Tag from "./Tag";

export default function Tags() {
  const [tagsArr, setTagsArr] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("http://localhost:9000/tags");
        const jsonData = await response.json();
        setTagsArr(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTags();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
      {tagsArr.map((tag) => (
        <Tag key={tag?.id} title={tag?.title} id={tag?.id} />
      ))}
    </section>
  );
}
