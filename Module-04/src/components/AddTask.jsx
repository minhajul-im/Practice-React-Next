import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
      />
      <button
        onClick={() => {
          onAddTask(input);
          setInput("");
        }}
      >
        add
      </button>
    </div>
  );
}
