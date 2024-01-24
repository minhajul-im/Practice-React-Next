export default function taskReducer(tasks, action) {
  if (action.type === "added") {
    return [...tasks, { id: action.id, text: action.text, done: false }];
  } else if (action.type === "changed") {
    return tasks.map((task) => {
      if (task.id === action.task.id) {
        return action.task;
      } else {
        return task;
      }
    });
  } else if (action.type === "deleted") {
    return tasks.filter((task) => task.id !== action.id);
  } else {
    throw Error(`${action.type} is not valid!`);
  }
}
