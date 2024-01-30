import { useRef } from "react";

export default function ChallengeTwo() {
  const ref = useRef(null);

  const handleFocus = () => {
    ref.current.focus();
  };
  return (
    <>
      <nav>
        <button onClick={handleFocus}>Search</button>
      </nav>
      <input ref={ref} placeholder='Looking for something?' />
    </>
  );
}
