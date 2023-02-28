import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';
import HeaderStyles from './index.styles';

function Header() {
  return (
    <HeaderStyles>
      <Link to="/" className="logo">
        Plan<span>Life.</span>
      </Link>

      <Search />
    </HeaderStyles>
  );
}

export default Header;
