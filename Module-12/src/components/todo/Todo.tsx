import { useState } from "react";

interface ToDo {
  id: string;
  title: string;
  isDone: boolean;
}

interface ToDoProps {
  todo: ToDo;
  onEdit: (todo: ToDo) => void;
  onDelete: (id: string) => void;
}

export default function ToDo({ todo, onEdit, onDelete }: ToDoProps) {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <li>
      <input
        type='checkbox'
        checked={todo.isDone}
        onChange={(e) => {
          onEdit({ ...todo, isDone: e.target.checked });
        }}
      />
      {edit ? (
        <input
          type='text'
          value={todo.title}
          onChange={(e) => {
            onEdit({
              ...todo,
              title: e.target.value,
            });
          }}
        />
      ) : (
        <span>{todo.title}</span>
      )}{" "}
      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        {edit ? "save" : "edit"}
      </button>{" "}
      <button onClick={() => onDelete(todo.id)}>delete</button>
    </li>
  );
}
