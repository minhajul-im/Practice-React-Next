import { useRef, useState } from "react";

export default function OnOff() {
  const isOnRef = useRef(false);
  const [toggle, setToggle] = useState(false);

  return (
    <button
      onClick={() => {
        setToggle((pre) => !pre);
      }}
    >
      {toggle ? "On" : "Off"}
    </button>
  );
}
