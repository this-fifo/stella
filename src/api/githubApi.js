import linkParser from 'parse-link-header';

export const API_URL_ENDPOINT = 'https://api.github.com/users';

export const getStarredRepos = async (id, page = 1) => {
  const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  if (!id.match(githubUsernameRegex)) {
    throw new Error('Invalid username');
  }

  const url = `${API_URL_ENDPOINT}/${id}/starred?per_page=15&page=${page}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const json = await response.json();
  const pagination = {
    ...{ first: {}, prev: {}, next: {}, last: {} },
    ...linkParser(response.headers.get('link')),
  };
  const data = {
    user: {
      id,
      repos: json,
    },
    pagination,
    loading: false,
    error: false,
  };
  return data;
};
