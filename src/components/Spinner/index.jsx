import React from 'react';
import SpinnerStyles from './index.styles';

function Spinner() {
  return (
    <SpinnerStyles>
      <div className="spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </SpinnerStyles>
  );
}

export default Spinner;
