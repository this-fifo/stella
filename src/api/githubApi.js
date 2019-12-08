import linkParser from 'parse-link-header';

export const API_URL = 'https://api.github.com/users/this-fifo/starred?per_page=15';

export const getStarredRepos = async (page = 1, url = API_URL) => {
  const response = await fetch(`${url}&page=${page}`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const repos = await response.json();
  const headers = linkParser(response.headers.get('link'));

  return { ...headers, repos };
};
