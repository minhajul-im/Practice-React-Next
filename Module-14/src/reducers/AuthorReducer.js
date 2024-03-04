import { actions } from "../actions";

export const initials = {
  author: null,
  loading: false,
  blogs: [],
  error: null,
};

export const AuthorReducer = (state, action) => {
  switch (action.type) {
    case actions.author.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.author.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        author: action.data,
      };
    }

    case actions.author.AUTHOR_DATA_EDITED: {
      return {
        ...state,
        loading: false,
        author: action.data,
        blogs: action.data.blogs,
      };
    }

    case actions.author.IMAGE_UPDATED: {
      return {
        ...state,
        loading: false,
        author: {
          ...state.author,
          avatar: action.data.avatar,
        },
      };
    }

    case actions.author.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};
