import { useState } from "react";

const TaskName = ({ task, onDeleteTask, onChangeTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    task.text && (
      <label
        style={{
          display: "flex",
          gap: "3rem",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChangeTask({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </label>
    )
  );
};

export default TaskName;
