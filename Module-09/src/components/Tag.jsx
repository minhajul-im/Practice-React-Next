import { useContext, useEffect, useState } from "react";

import ContextApi from "../utils/ContextApi";

export default function Tag({ title, id }) {
  const [isActive, setIsActive] = useState(false);
  const [arr, setArr] = useState([]);

  const { search, setState } = useContext(ContextApi);

  let array = [];
  const handleClickTag = () => {
    if (isActive) {
      setIsActive(!isActive);
      array.push(title);
    } else {
      let find = array.indexOf(title);
      array.splice(find, 1);
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    const fetchTags = async ({ id, title }) => {
      const queryStr = `tags_like=${title}&id_ne${id}&_limit=5`;

      const response = await fetch(`http://localhost:9000/videos?${queryStr}`);
      const jsonData = await response.json();
      setState(jsonData);
      console.log(jsonData);
    };
    // fetchTags({ title, id });
  }, []);

  return (
    <div
      className={`${
        isActive ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
      } px-4 py-1 rounded-full cursor-pointer`}
      onClick={handleClickTag}
    >
      {title}
    </div>
  );
}
