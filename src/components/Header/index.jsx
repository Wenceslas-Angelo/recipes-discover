import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import Search from '../Search';

import HeaderStyles from './index.styles';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

function Header({ setSearchTerm }) {
  const location = useLocation();

  return (
    <HeaderStyles>
      <Link to="/" className="logo">
        Plan<span>Life.</span>
      </Link>

      {location.pathname === '/' ? (
        <Search setSearchTerm={setSearchTerm} />
      ) : (
        <Link to="/" className="home-link">
          <FaArrowAltCircleLeft fontSize={20} />
          <h2>Back to Home</h2>
        </Link>
      )}
    </HeaderStyles>
  );
}

Header.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Header;
