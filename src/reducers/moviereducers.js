const initialApiCall = {
  loading: false,
  posts: [],
  // id :[]
};

const apiCallReducers = (state = initialApiCall, action) => {
  switch (action.type) {
    case "LOAD_POST_START":
      return {
        ...state,
        loading: true,
      };

    case "LOAD_POST_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        id: action.id,
      };

    default:
      return state;
  }
};

export const moviedetailsreducers = (state = {}, { type, payload }) => {
  switch (type) {
    case "LOAD_POST_DETAILS":
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export { apiCallReducers };
