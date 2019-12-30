import React, { useState } from 'react'
import { Container, Form, Button, CardDeck } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ContentLoader from './ContentLoader'
import { searchUsers } from '../api/githubApi'
import UserCard from './UserCard'

const LandingPage = ({ history }) => {
  const [users, setUsers] = useState({})
  const [userId, setUserId] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = input => {
    setUserId(input.target.value)
  }

  const handleClick = event => {
    event.preventDefault()
    setLoading(true)
    searchUsers(userId).then((results) => {
      setUsers(results)
      setLoading(false)
    })
  }

  return (
    <Container>
      <h1>Hello!</h1>
      <Form>
        <Form.Group>
          <Form.Label>Search for a GitHub username to get started!</Form.Label>
          <Form.Control
            value={userId}
            onChange={handleChange}
            type="text"
            placeholder="GitHub Username"
          />
          <Button onClick={handleClick} variant="dark" className="mt-2" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
      <CardDeck>
        <ContentLoader loading={loading} />
        {users.items ? (
          users.items.map(user => <UserCard key={user.login} user={user} history={history} />)
        ) : <></>}
      </CardDeck>
    </Container>
  )
}

LandingPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
}

export default LandingPage
