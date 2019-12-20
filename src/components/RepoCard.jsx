import React from 'react'
import Moment from 'react-moment'
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
          <Badge
            className="small float-right"
            style={{
              color: repo.language_color,
              border: `.5px solid ${repo.language_color}`,
              boxShadow: `2px 2px 0 0 ${repo.language_color}`,
              borderRadius: '1px',
            }}
          >
            {repo.language}
          </Badge>
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
        </Card.Title>
        <Card.Title>
          <u>{repo.name}</u>
        </Card.Title>
        <Card.Text>{repo.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-truncate text-muted small border-top-0">
        <Moment fromNow ago className="float-right">
          {repo.updated_at}
        </Moment>
        {repo.license ? <span>{repo.license.name}</span> : <span>No License</span>}
      </Card.Footer>
    </Card>
  )
}

RepoCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  repo: PropTypes.object.isRequired,
}

export default RepoCard
