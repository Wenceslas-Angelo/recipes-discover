import React from 'react';
import { FaSearch } from 'react-icons/fa';

import SearchStyles from './index.styles';

function Search() {
  return (
    <SearchStyles>
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search for recipes, Ingredients and Tags"
      />
    </SearchStyles>
  );
}

export default Search;
