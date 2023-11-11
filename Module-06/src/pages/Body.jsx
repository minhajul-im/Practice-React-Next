import { useContext, useState } from "react";
import Data from "../components/body/Data";
import ContextData from "../utils/ContextData";

const dataSet = [
  {
    id: 1,
    title: "Title -1",
    arr: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 2,
    title: "Title -2",
    arr: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 3,
    title: "Title -3",
    arr: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 4,
    title: "Title -4",
    arr: [1, 2, 3, 4, 5, 6, 7, 8],
  },
];

const Body = () => {
  const [data, setData] = useState(0);

  const { username } = useContext(ContextData);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{username}</h1>
      {dataSet.map((item, i) => (
        <Data
          key={item?.id}
          item={item}
          state={data === i ? true : false}
          setData={() => setData(i)}
        />
      ))}
    </div>
  );
};

export default Body;
