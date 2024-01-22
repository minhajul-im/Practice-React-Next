import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    onAddItem(title);
    setTitle("");
  };

  return (
    <>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
    </>
  );
}
