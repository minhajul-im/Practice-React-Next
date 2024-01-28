import Search from "./Search";
import Button from "./Button";

import { useTaskContext } from "../../contexts/TaskContext";
import AddAndEditTask from "./AddAndEditTask";

export default function TaskManagementToolbar() {
  const { state, dispatch } = useTaskContext();

  return (
    <>
      {state.show && <AddAndEditTask />}

      <div className='mb-14 items-center justify-between sm:flex'>
        <h2 className='text-2xl font-semibold max-sm:mb-4'>Your Tasks</h2>
        <div className='flex items-center space-x-5'>
          <Search />

          <Button
            onButton={() => dispatch({ type: "OPEN_MODAL" })}
            color={"bg-blue-500"}
          >
            Add Task
          </Button>

          <Button
            onButton={() => dispatch({ type: "DELETE_ALL_TASK" })}
            color={"bg-red-500"}
          >
            Delete All
          </Button>
        </div>
      </div>
    </>
  );
}
