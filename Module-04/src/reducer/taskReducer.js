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

export const taskReducers = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }

    case "changed": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }

    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }

    default:
      throw Error(`${action.type} is not valid!`);
  }
};
