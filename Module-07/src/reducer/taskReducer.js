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

    case "TOGGLE": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.taskId) {
            return { ...task, isFovarite: !task.isFovarite };
          } else {
            return task;
          }
        }),
      };
    }

    case "OPEN_MODAL": {
      return {
        ...state,
        show: true,
        editTask: null,
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        show: false,
      };
    }

    case "SEARCH_TASK": {
      return {
        ...state,
        filteredTasks: state.tasks.filter((task) =>
          task.title.toLowerCase().includes(action.text.toLowerCase())
        ),
        query: action.text,
      };
    }

    case "DELETE_TASK": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.taskId),
      };
    }

    case "DELETE_ALL_TASK": {
      return {
        ...state,
        tasks: [],
      };
    }

    default:
      throw Error(`It's an invalid ${action.type}!`);
  }
};
