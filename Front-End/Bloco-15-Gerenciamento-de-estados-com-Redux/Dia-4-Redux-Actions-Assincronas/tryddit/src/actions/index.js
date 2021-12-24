import fetchAPI from '../services/fetchRedditApi';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const GET_POSTS = 'GET_POSTS';

export const requestPosts = () => ({
  type: REQUEST_POSTS,
  isLoading: true,
});

export const getPosts = (posts) => ({
  type: GET_POSTS,
  isLoading: false,
  payload: posts,
});

export const requestPostsFromApi = (search) => async (dispatch) => {
  dispatch(requestPosts());
  const data = await fetchAPI(search);
  dispatch(getPosts(data));
};
