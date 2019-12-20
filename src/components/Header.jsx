import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import toggle from '../toggle.svg'
import starCoin from '../star_coin.png'

const Header = ({ darkModeBlenderRef, history }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleClick = () => {
    darkModeBlenderRef.current.classList.toggle('expand')
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSearchValue('')
  }

  const handleChange = input => {
    setSearchValue(input.target.value)
  }

  return (
    <Navbar bg="white" variant="light" position="top" className="d-flex">
      <Navbar.Brand className="isolate">
        <Link variant="dark" to="/">
          <img alt="stella" src={starCoin} style={{ maxWidth: '2.5rem' }} />
        </Link>
      </Navbar.Brand>
      <Nav className="mx-auto">
        {history.location.pathname !== '/' ? (
          <Form inline onSubmit={handleSubmit}>
            <FormControl
              value={searchValue}
              onChange={handleChange}
              type="text"
              placeholder="Search"
            />
          </Form>
        ) : (
          <></>
        )}
      </Nav>
      <Nav.Item>
        <Button onClick={handleClick} id="toggle" size="sm" variant="link">
          <img alt="dark mode" src={toggle} style={{ maxWidth: '2.2rem' }} />
        </Button>
      </Nav.Item>
    </Navbar>
  )
}

const historyPropType = PropTypes.shape({
  location: PropTypes.shape({ pathname: PropTypes.string }),
})

Header.propTypes = {
  darkModeBlenderRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
  history: historyPropType.isRequired,
}

export default withRouter(Header)
