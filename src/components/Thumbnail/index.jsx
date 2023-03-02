import React from 'react';
import PropTypes from 'prop-types';

import ThumbStyles from './index.styles';
import { Link } from 'react-router-dom';

function Thumbnail({ id, image }) {
  return (
    <ThumbStyles>
      <Link to={`recipe/${id}`}>
        <img src={image} alt="recipe-thumb" />
      </Link>
    </ThumbStyles>
  );
}

Thumbnail.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
};

export default Thumbnail;
