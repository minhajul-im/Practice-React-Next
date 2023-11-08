export const initial = {
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "Create Tasker Application!",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil illum aspernatur molestiae, placeat fugiat ntur adipisicing elit.",
      tags: ["JavaScript", "python", "java"],
      priority: "High",
      isFovarite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Tasker Application!",
      description:
        "Lorem, ipsum ctetur adipisicing elit. Nihil illum aspernatur molestiae, placeat fugiat nullaipsum ctetur adipisicing elit.",
      tags: ["JavaScript", "python", "java"],
      priority: "Low",
      isFovarite: false,
    },
  ],
  show: false,
  editTask: null,
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      if (!state.editTask) {
        return {
          ...state,
          tasks: [...state.tasks, { ...action.task, id: crypto.randomUUID() }],
        };
      } else {
        return {
          ...state,
          tasks: state.tasks.map((task) => {
            if (task.id === action.task.id) {
              return action.task;
            } else {
              return task;
            }
          }),
        };
      }
    }
    case "EDIT_TASK": {
      return {
        ...state,
        show: true,
        editTask: action.task,
      };
    }

    default:
      throw Error(`It's an invalid ${action.type}!`);
  }
};
