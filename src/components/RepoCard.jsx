import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const RepoCard = ({ repo }) => {
  return (
    <Card
      style={{ minWidth: '18rem', minHeight: '13rem' }}
      className="m-2 custom-card custom-borders"
    >
      <Card.Body>
        <Card.Title>{repo.name}</Card.Title>
        <Card.Text>{repo.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

RepoCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  repo: PropTypes.object.isRequired,
};

export default RepoCard;
