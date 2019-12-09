import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, CardDeck, Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import RepoCard from './RepoCard';
import { loadRepos } from '../redux/actions/repoActions';
import LoaderCard from './LoaderCard';
import ErrorCard from './ErrorCard';

const RepoGallery = ({ repos, prev, next, last, load, error, user }) => {
  useEffect(() => {
    if (repos.length === 0 && !error) {
      load(1);
    }
  }, [repos.length, load, error]);

  const content =
    repos.length === 0 ? (
      <LoaderCard user={user} />
    ) : (
      repos.map(repo => <RepoCard key={repo.id} repo={repo} />)
    );

  const currentPage = prev.page === last.page - 1 ? last.page : next.page - 1;

  if (error) return <ErrorCard />;

  return (
    <Container className="mt-5">
      <CardDeck>{content}</CardDeck>
      {next.page >= 2 ? (
        <Pagination className="mt-5 d-flex justify-content-center">
          <Pagination.First onClick={() => load(1)} disabled={prev.page === 0} />
          <Pagination.Prev onClick={() => load(prev.page)} disabled={prev.page === 0} />
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Next onClick={() => load(next.page)} disabled={next.page === last.page} />
          <Pagination.Last onClick={() => load(last.page)} disabled={next.page === last.page} />
        </Pagination>
      ) : (
        <></>
      )}
    </Container>
  );
};

const paginatorInstance = {
  page: PropTypes.number,
  per_page: PropTypes.string,
  rel: PropTypes.string,
  url: PropTypes.string,
};

RepoGallery.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  load: PropTypes.func.isRequired,
  prev: PropTypes.shape(paginatorInstance).isRequired,
  next: PropTypes.shape(paginatorInstance).isRequired,
  last: PropTypes.shape(paginatorInstance).isRequired,
  error: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  load: page => dispatch(loadRepos(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoGallery);
