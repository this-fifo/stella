import linkParser from 'parse-link-header'
import yaml from 'js-yaml'

const getLanguages = async () => {
  const url = 'https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml'
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  const text = await response.text()
  const languages = yaml.safeLoad(text)
  return languages
}

export const API_URL_ENDPOINT = 'https://api.github.com/users'

export const getStarredRepos = async (id, page = 1) => {
  const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i
  if (!id.match(githubUsernameRegex)) {
    throw new Error('Invalid username')
  }

  const url = `${API_URL_ENDPOINT}/${id}/starred?per_page=15&page=${page}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  const json = await response.json()
  const languages = await getLanguages()

  const repos = json.map(value => {
    const modified = value
    if (value.language) {
      modified.language_color = languages[value.language].color
      return modified
    }
    return value
  })
  const pagination = {
    ...{ first: {}, prev: {}, next: {}, last: {} },
    ...linkParser(response.headers.get('link')),
  }
  const data = {
    user: {
      id,
      repos,
    },
    pagination,
    loading: false,
    error: false,
  }
  return data
}