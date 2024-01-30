import React, { forwardRef, useImperativeHandle, useRef } from "react";
import SearchInput from "./SearchInput";

export default function ChallengeFour() {
  const inputRef = useRef(null);

  return (
    <div>
      <h1>Hello</h1>

      <Search placeholder={"Searh"} type={"text"} ref={inputRef} />
      <SearchInput
        ref={inputRef}
        type={"tex"}
        placeholder={"looking something"}
      />

      <Button onClick={() => inputRef.current.focus()}>Focus Search</Button>
    </div>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
const Search = forwardRef((props, ref) => {
  const realRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realRef.current.focus();
    },
  }));
  return <input ref={realRef} {...props} />;
});
