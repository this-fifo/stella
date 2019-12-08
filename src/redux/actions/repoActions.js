import types from './actionTypes';
import * as githubApi from '../../api/githubApi';

export const loadReposSuccess = response => {
  return { type: types.LOAD_REPOS_SUCCESS, response };
};

export const loadReposFailed = response => {
  return { type: types.LOAD_REPOS_FAILED, response };
};

export const loadRepos = (page = 1) => {
  return async dispatch => {
    try {
      const response = await githubApi.getStarredRepos(page);
      dispatch(loadReposSuccess(response));
    } catch (error) {
      dispatch(loadReposFailed(error));
    }
  };
};
