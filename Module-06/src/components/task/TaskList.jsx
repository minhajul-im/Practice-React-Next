import TaskName from "./TaskName";
import classes from "./Task.module.css";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul className={classes.ul}>
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
