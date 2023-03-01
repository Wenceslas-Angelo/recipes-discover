import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyles from './index.styles';

function Button({ text, icon, callback }) {
  return (
    <ButtonStyles onClick={callback} className="btn">
      <span>{text}</span>
      <span>{icon}</span>
    </ButtonStyles>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object,
  callback: PropTypes.func,
};

export default Button;
