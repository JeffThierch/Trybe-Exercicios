import { REQUEST_POSTS, GET_POSTS } from '../actions';

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, loading: action.isLoading };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload.data,
        loading: action.isLoading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default postsReducer;
