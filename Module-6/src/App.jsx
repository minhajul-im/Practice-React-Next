import { useState } from "react";
import { handleButton } from "./function/AddButton";
import { handleDeleteTask } from "./function/DeleteButton";

const App = () => {
  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState([]);

  return (
    <div className="w-8/12 m-auto">
      {/* header section  */}
      <h1
        className="text-4xl font-bold 
      text-center my-5 text-sky-700"
      >
        Create To-Do List
      </h1>

      {/* todo list create section  */}
      <div
        className="flex items-center
        justify-center mb-4 my-6 "
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-400
           rounded-s-full border-e-0
            w-96 px-5 py-2 text-gray-500
            focus:outline-none"
          placeholder="what is your task name....."
        />
        <button
          onClick={() => handleButton(task, setTask, allTask, setAllTask)}
          type="button"
          className="bg-cyan-500
           border border-cyan-700
           border-s-0
           text-white font-semibold
           rounded-e-full px-4 py-2
            transition duration-300
            ease-in-out hover:bg-cyan-800
            capitalize "
        >
          Add Task
        </button>
      </div>

      {/* todo list store section */}
      <ul className="my-8 mx-auto w-3/4">
        {allTask.map((task, index) => (
          <li
            key={index}
            className="flex items-center
             justify-between bg-gray-100
             border border-gray-200 rounded
              px-8 py-2 mb-2 "
          >
            <span>{task}</span>
            <button
              onClick={() => handleDeleteTask(index, allTask, setAllTask)}
              className="text-red-500 font-bold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
