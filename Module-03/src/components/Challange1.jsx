import { useState } from "react";

export default function Challange1() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label='First input' text={text} onChangeInput={handleChange} />
      <Input label='Second input' text={text} onChangeInput={handleChange} />
    </>
  );
}

function Input({ label, text, onChangeInput }) {
  return (
    <label style={{ display: "block" }}>
      {label} <input value={text} onChange={onChangeInput} />
    </label>
  );
}
