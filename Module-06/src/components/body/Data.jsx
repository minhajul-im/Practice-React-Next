import { useContext, useState } from "react";
import Item from "./Item";
import ContextData from "../../utils/ContextData";

const Data = ({ item, state, setData }) => {
  //   const [state, setState] = useState(false);
  const handleClick = (e) => {
    // setState(!state);
    setData(e.target.value);
  };

  const { setState, username } = useContext(ContextData);
  console.log(username);

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setState(e.target.value)}
      />
      <h3
        onClick={handleClick}
        style={{ cursor: "pointer", margin: "20px 100px" }}
      >
        {item?.title}
      </h3>

      {item?.arr.map((i) => state && <Item key={i} index={i} />)}
    </div>
  );
};

export default Data;
