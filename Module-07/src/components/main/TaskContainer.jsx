import { useReducer } from "react";

import TaskTable from "./TaskTable";
import TaskManagementToolbar from "./TaskManagementToolbar";
import { initial, taskReducer } from "../../reducer/taskReducer";
import { TaskContext } from "../../contexts/TaskContext";

export default function TaskContainer() {
  const [state, dispatch] = useReducer(taskReducer, initial);

  return (
    <section className='container mx-auto mb-20 '>
      <TaskContext.Provider value={{ state, dispatch }}>
        <div
          className='rounded-xl border border-[rgba(206,206,206,0.12)] 
          px-6 py-8 md:px-9 md:py-16'
        >
          <TaskManagementToolbar />
          {state.tasks.length === 0 ? <p>Empty Task</p> : <TaskTable />}
        </div>
      </TaskContext.Provider>
    </section>
  );
}
