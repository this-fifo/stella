import types from '../actions/actionTypes';

const initialState = {
  repos: [],
  prev: {},
  next: {},
  last: {},
  error: false,
  user: '',
};

export default function reposReducer(state = initialState, { type, response }) {
  switch (type) {
    case types.LOAD_REPOS_SUCCESS:
      if (response.last === undefined) {
        response.last = state.last;
        response.next = state.last;
      }
      if (response.prev === undefined) {
        response.prev = { page: 0 };
      }
      response.last.page = parseInt(response.last.page, 10);
      response.next.page = parseInt(response.next.page, 10);
      response.prev.page = parseInt(response.prev.page, 10);
      return { ...initialState, ...response };
    case types.LOAD_REPOS_FAILED:
      return { ...initialState, error: true };
    default:
      return state;
  }
}
