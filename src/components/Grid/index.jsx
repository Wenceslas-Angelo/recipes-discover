import React from 'react';
import PropTypes from 'prop-types';
import GridStyles from './index.styles';

function Grid({ header, children }) {
  return (
    <GridStyles>
      <h1>{header}</h1>
      <div className="content">{children}</div>
    </GridStyles>
  );
}

Grid.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Grid;
