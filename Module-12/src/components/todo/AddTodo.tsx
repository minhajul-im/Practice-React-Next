import { useState } from "react";

interface AddToDoProps {
  onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: AddToDoProps) {
  const [text, setText] = useState<string>("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
      />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add todo
      </button>
    </div>
  );
}
