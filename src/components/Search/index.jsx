import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import SearchStyles from './index.styles';

function Search({ setSearchTerm }) {
  const [query, setQuery] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return undefined;
    }
    const timer = setTimeout(() => {
      setSearchTerm(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, query]);

  return (
    <SearchStyles>
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search for recipes, Ingredients and Tags"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </SearchStyles>
  );
}

Search.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Search;
