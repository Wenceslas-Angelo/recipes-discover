import React from 'react';
import PropTypes from 'prop-types';

import ThumbStyles from './index.styles';

function Thumbnail({ image }) {
  return (
    <ThumbStyles>
      <img src={image} alt="recipe-thumb" />
    </ThumbStyles>
  );
}

Thumbnail.propTypes = {
  image: PropTypes.string,
};

export default Thumbnail;
