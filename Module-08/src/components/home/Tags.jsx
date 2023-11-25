import { useEffect, useState } from "react";
import Tag from "./Tag";

export default function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    const response = await fetch("http://localhost:9000/tags");
    const jsonData = await response.json();

    setTags(jsonData);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
      {tags.map((tag) => (
        <Tag key={tag?.id} title={tag?.title} />
      ))}
    </section>
  );
}
