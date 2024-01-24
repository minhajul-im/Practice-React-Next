export default function taskImmerReducer(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });

      break;
    }

    case "changed": {
      const index = draft.findIndex((item) => item.id === action.task.id);
      draft[index] = action.task;

      break;
    }

    case "deleted": {
      return draft.filter((task) => task.id !== action.id);
    }

    default:
      throw Error(`${action.type} is not valid!`);
  }
}
