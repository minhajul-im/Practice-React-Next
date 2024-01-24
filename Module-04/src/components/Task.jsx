import React, { useState } from "react";

export default function Task({ task, onChangeTask, onDeleteTask }) {
  const [isEidt, setIsEdit] = useState(false);

  return (
    <li>
      <input
        type='checkbox'
        checked={task.done}
        onChange={(e) => {
          onChangeTask({ ...task, done: e.target.checked });
        }}
      />
      {isEidt ? (
        <input
          type='text'
          value={task.text}
          onChange={(e) => {
            onChangeTask({ ...task, text: e.target.value });
          }}
        />
      ) : (
        task.text
      )}
      <button onClick={() => setIsEdit(!isEidt)}>
        {isEidt ? "save" : "edit"}
      </button>
      <button onClick={() => onDeleteTask(task.id)}>delete</button>
    </li>
  );
}
