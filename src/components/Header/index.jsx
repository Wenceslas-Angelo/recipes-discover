import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Search from '../Search';
import HeaderStyles from './index.styles';

function Header({ setSearchTerm }) {
  return (
    <HeaderStyles>
      <Link to="/" className="logo">
        Plan<span>Life.</span>
      </Link>

      <Search setSearchTerm={setSearchTerm} />
    </HeaderStyles>
  );
}

Header.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Header;
