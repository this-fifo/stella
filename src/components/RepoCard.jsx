import React from 'react'
import { Card, Badge } from 'react-bootstrap'
import PropTypes from 'prop-types'
import githubIcon from '../github.svg'

const RepoCard = ({ repo }) => {
  return (
    <Card
      style={{
        minWidth: '18rem',
        minHeight: '13rem',
      }}
      className="m-sm-2 custom-card custom-borders"
    >
      <Card.Body>
        <Card.Title>
          <u>{repo.name}</u>
          <span>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <img
                alt="GitHub icon"
                src={githubIcon}
                className="ml-2 mr-2"
                style={{ maxWidth: '1.2rem' }}
              />
            </a>
          </span>
          <Badge
            className="small"
            style={{
              color: repo.language_color,
              border: `.5px solid ${repo.language_color}`,
              boxShadow: `1px 1px 0 0 ${repo.language_color}`,
              borderRadius: '1px',
            }}
          >
            {repo.language}
          </Badge>
        </Card.Title>
        <Card.Text>{repo.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

RepoCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  repo: PropTypes.object.isRequired,
}

export default RepoCard
