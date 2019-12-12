import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import toggle from '../toggle.svg';
import starCoin from '../star_coin.png';

const Header = ({ darkModeBlenderRef }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleClick = () => {
    darkModeBlenderRef.current.classList.toggle('expand');
  };

  const handleChange = input => {
    setSearchValue(input.target.value);
  };

  return (
    <Navbar bg="white" variant="light" position="top">
      <Navbar.Brand>
        <Link to="/">
          <img alt="stella" src={starCoin} width="5%" className="mr-2" />
          Stella
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Form inline>
          <FormControl
            value={searchValue}
            onChange={handleChange}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
      </Nav>
      <Nav.Item>
        <Button onClick={handleClick} id="toggle" size="sm" variant="link">
          <img alt="dark mode" src={toggle} width="25%" />
        </Button>
      </Nav.Item>
    </Navbar>
  );
};

Header.propTypes = {
  darkModeBlenderRef: PropTypes.objectOf(PropTypes.instanceOf(Element)).isRequired,
};

export default Header;
