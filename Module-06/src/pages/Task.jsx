import { useState } from "react";
import AddTask from "../components/task/AddTask.jsx";
import TaskList from "../components/task/TaskList.jsx";

let nextId = 3;

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <main
      style={{
        textAlign: "center",
        width: "60%",
        margin: "auto",
      }}
    >
      <h1>Task App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
};
export default Task;
