// import { useState } from "react";

// import Closer from "./components/Closer";
// import Fetching from "./components/Fetching";
import Parent from "./components/Parent";

export default function App() {
  // const [show, setShow] = useState(false);
  return (
    <div>
      {/* <h1>Application!</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"}
      </button>

      <br />
      {show && <hr />}
      {show && <Closer />} */}

      {/* <div>
        <hr />
        <h1>Hello Data</h1>
        <Fetching postId={"1"} />
      </div> */}

      <hr />
      <Parent />
    </div>
  );
}
