import { useState } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

interface ToDo {
  id: string;
  title: string;
  isDone: boolean;
}

const todosData: ToDo[] = [
  {
    id: crypto.randomUUID(),
    title: "First",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Second",
    isDone: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Third",
    isDone: false,
  },
];

export default function ToDoApp() {
  const [todos, setTodos] = useState<ToDo[]>(todosData);

  const handleTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: text,
        isDone: false,
      },
    ]);
  };

  const handleEdit = (todo: ToDo) => {
    setTodos(
      todos.map((t: ToDo) => {
        if (todo.id === t.id) {
          /// why give me red alart can you check
          return todo;
        } else {
          return t;
        }
      })
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo: ToDo) => todo.id !== id));
  };

  return (
    <div>
      <AddTodo onAdd={handleTodo} />
      <Todos onEdit={handleEdit} todos={todos} onDelete={handleDelete} />
    </div>
  );
}
