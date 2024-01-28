import { useTaskContext } from "../../contexts/TaskContext";

import Task from "./Task";

export default function TaskLists() {
  const { state } = useTaskContext();

  return (
    <tbody>
      {(state.query ? state.filteredTasks : state.tasks).map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </tbody>
  );
}
