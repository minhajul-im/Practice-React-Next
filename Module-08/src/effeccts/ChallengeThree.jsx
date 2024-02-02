import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount((p) => p + 1);
    }

    let x = setInterval(onTick, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);

  return <h1>{count}</h1>;
}

export default function ChallengeThree() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} counter
      </button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}
