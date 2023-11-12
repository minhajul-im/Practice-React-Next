import { useState } from "react";
import Item from "./Item";

const Data = ({ item, handleToggle, active }) => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <h3
        onClick={handleToggle}
        style={{ cursor: "pointer", margin: "20px 100px" }}
      >
        {item?.title}
      </h3>

      {active ? (
        item?.arr.map((i) => <Item key={i} index={i + "hey Minhaj!"} />)
      ) : (
        <></>
      )}
    </>
  );
};

export default Data;
