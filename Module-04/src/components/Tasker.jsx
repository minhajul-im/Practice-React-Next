import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
export default function Tasker() {
  const [tasks, setTasks] = useState(initialTasks);

  const nextId = (data) => {
    const id = data.reduce((prev, cur) =>
      prev && prev.id > cur.id ? prev.id : cur.id
    );
    return id + 1;
  };

  const handleAddTask = (text) => {
    setTasks([...tasks, { id: nextId(tasks), text, done: false }]);
  };

  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((item) => {
        if (task.id === item.id) {
          return task;
        } else {
          return item;
        }
      })
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  console.log(tasks);

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
