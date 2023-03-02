import React from 'react';
import ErrorStyles from './index.styles';
import error404 from '../../images/undraw_page_not_found_re_e9o6.svg';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <ErrorStyles>
      <img src={error404} alt="404-error" />
      <Link to="/">
        <Button text="Back Home" />
      </Link>
    </ErrorStyles>
  );
}

export default Error;
