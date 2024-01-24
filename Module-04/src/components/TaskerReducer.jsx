import { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import taskReducer from "../reducer/taskReducer";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default function TaskerReducer() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const nextId = (data) => {
    const id = data.reduce((prev, cur) =>
      prev && prev.id > cur.id ? prev.id : cur.id
    );
    return id + 1;
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: nextId(tasks),
      text,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: "deleted",
      id,
    });
  };

  return (
    <>
      <h1>Hello Tasker App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
