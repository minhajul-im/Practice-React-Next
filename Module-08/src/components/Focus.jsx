import { useRef } from "react";

export default function Focus() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  console.log(inputRef);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
