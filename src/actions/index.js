// API SAGA

export const loadPostStart = () => {
  return {
    type: "LOAD_POST_START",
  };
};

export const loadPostSuccess = (posts, id) => {
  return {
    type: "LOAD_POST_SUCCESS",
    payload: posts,
    id,
  };
};

export const loadDetails = (post) => {
  return {
    type: "LOAD_POST_DETAILS",
    payload: post,
  };
};
