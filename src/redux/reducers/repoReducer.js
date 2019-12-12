import types from '../actions/actionTypes';

const pagination = {
  first: {},
  prev: {},
  next: {},
  last: {},
};

const user = {
  id: '',
  repos: [],
};

const initialState = {
  user,
  pagination,
  error: false,
  loading: true,
};

export default function reposReducer(state = initialState, { type, response, payload }) {
  switch (type) {
    case types.LOAD_REPOS_STARTED:
      if (state.user.id === payload.user.id) return state;
      return { user, pagination, error: false, loading: true };
    case types.LOAD_REPOS_SUCCESS:
      return response;
    case types.LOAD_REPOS_FAILED:
      return { user, pagination, error: true, loading: false };
    default:
      return state;
  }
}
