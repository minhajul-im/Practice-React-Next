import TaskLists from "./TaskLists";
import TaskDetails from "./TaskDetails";

export default function TaskTable() {
  return (
    <div className='overflow-auto'>
      <table className='table-fixed overflow-auto xl:w-full'>
        <TaskDetails />

        <TaskLists />
      </table>
    </div>
  );
}
