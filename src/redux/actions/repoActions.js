import types from './actionTypes';
import * as githubApi from '../../api/githubApi';

export const loadReposStarted = payload => {
  return { type: types.LOAD_REPOS_STARTED, payload };
};

export const loadReposSuccess = response => {
  return { type: types.LOAD_REPOS_SUCCESS, response };
};

export const loadReposFailed = response => {
  return { type: types.LOAD_REPOS_FAILED, response };
};

export const loadRepos = (id, page = 1) => {
  return async dispatch => {
    try {
      dispatch(loadReposStarted({ user: { id } }));
      const response = await githubApi.getStarredRepos(id, page);
      dispatch(loadReposSuccess(response));
    } catch (error) {
      dispatch(loadReposFailed(error));
    }
  };
};
