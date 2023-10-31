import Task from "./Task";

import { useTaskContext } from "../../contexts/TaskContext";

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
