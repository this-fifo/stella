import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap';

const LandingPage = ({ history }) => {
  const [userId, setUserId] = useState('');
  const handleChange = input => {
    setUserId(input.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    history.push(`/${userId}`);
  };

  return (
    <Container className="mt-5">
      <h1>Hello!</h1>
      <Form>
        <Form.Group>
          <Form.Label>Enter a GitHub username below to get started!</Form.Label>
          <Form.Control
            value={userId}
            onChange={handleChange}
            type="text"
            placeholder="GitHub Username"
          />
          <Button onClick={handleClick} variant="dark" className="mt-2" type="submit">
            Go
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

LandingPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default LandingPage;
