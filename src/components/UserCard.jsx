import React from 'react'
import { Card, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import githubIcon from '../github.svg'

const UserCard = ({ user, history }) => {
    const handleClick = () => {
        history.push(`/${user.login}`)
    }

    return (
      <Card
        style={{
            minWidth: '13rem',
            minHeight: '13rem',
        }}
        className="m-sm-2 custom-card custom-borders"
      >
        <Card.Img variant="top" src={user.avatar_url} className="isolate" />
        <Card.Body>
          <Card.Title>
            <span>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
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
            <u>{user.login}</u>
          </Card.Title>
          <Button variant="outline-dark" className="float-right" onClick={handleClick}>
            View
          </Button>
        </Card.Body>
      </Card>
    )
}

UserCard.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    user: PropTypes.object.isRequired,
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
}

export default UserCard
