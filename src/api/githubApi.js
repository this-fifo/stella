import linkParser from 'parse-link-header';

export const API_URL_ENDPOINT = 'https://api.github.com/users';

export const getStarredRepos = async (page = 1) => {
  const githubUsernameRegex = /^\/[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  if (!window.location.pathname.match(githubUsernameRegex)) {
    throw new Error('Invalid username');
  }

  const user = window.location.pathname.substr(1);
  const url = `${API_URL_ENDPOINT}/${user}/starred?per_page=15&page=${page}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const repos = await response.json();
  const headers = linkParser(response.headers.get('link'));

  return { ...headers, repos, user };
};
