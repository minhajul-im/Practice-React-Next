import TaskName from "./TaskName";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul style={{}}>
      {tasks.map((task) => (
        <li style={{ listStyle: "none" }} key={task.id}>
          <TaskName
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
