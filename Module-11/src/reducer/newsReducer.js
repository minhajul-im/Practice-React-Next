export default function newsReducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        ...state,
        data: action.data,
        loading: { status: false, message: "" },
        else: null,
      };
    }
    case "GENERAL": {
      return {
        ...state,
        data: action.generalData,
        loading: { status: false, message: "" },
        else: null,
      };
    }

    default:
      return state;
  }
}
