import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, CardDeck, Pagination } from 'react-bootstrap'
import PropTypes from 'prop-types'
import RepoCard from './RepoCard'
import { loadRepos } from '../redux/actions/repoActions'
import LoaderCard from './LoaderCard'
import ErrorCard from './ErrorCard'

const RepoGallery = ({ user, pagination, load, error, loading, history }) => {
  const { id, repos } = user
  const { prev, next, last } = pagination
  const current = parseInt(prev.page || 0, 10) + 1

  useEffect(() => {
    load(history.location.pathname.substr(1))
  }, [load, history.location.pathname])

  const content =
    repos.length === 0 ? (
      <LoaderCard user={id} loading={loading} />
    ) : (
      repos.map(repo => <RepoCard key={repo.id} repo={repo} />)
    )

  if (error) return <ErrorCard />

  return (
    <Container className="mt-3">
      <CardDeck>{content}</CardDeck>
      {next.page || prev.page ? (
        <Pagination className="mt-3 d-flex justify-content-center">
          <Pagination.First onClick={() => load(id, 1)} disabled={current === 1} />
          <Pagination.Prev onClick={() => load(id, prev.page)} disabled={!prev.page} />
          <Pagination.Item active>{current}</Pagination.Item>
          <Pagination.Next onClick={() => load(id, next.page)} disabled={!next.page} />
          <Pagination.Last onClick={() => load(id, last.page)} disabled={!last.page} />
        </Pagination>
      ) : (
        <></>
      )}
    </Container>
  )
}

const paginatorInstance = {
  page: PropTypes.string,
  per_page: PropTypes.string,
  rel: PropTypes.string,
  url: PropTypes.string,
}

const historyPropType = PropTypes.shape({
  location: PropTypes.shape({ pathname: PropTypes.string }),
})

const userPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
})

RepoGallery.propTypes = {
  user: userPropType.isRequired,
  pagination: PropTypes.shape({
    first: PropTypes.shape(paginatorInstance).isRequired,
    prev: PropTypes.shape(paginatorInstance).isRequired,
    next: PropTypes.shape(paginatorInstance).isRequired,
    last: PropTypes.shape(paginatorInstance).isRequired,
  }).isRequired,
  load: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  history: historyPropType.isRequired,
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  load: (id, page = 1) => dispatch(loadRepos(id, page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoGallery)
