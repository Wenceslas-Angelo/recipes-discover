import React from 'react';
import PropTypes from 'prop-types';
import { FaClock } from 'react-icons/fa';

import BannerStyles from './index.styles';

function HeroBanner({ image, title, readyInMn }) {
  return (
    <BannerStyles bg={image}>
      <div className="container">
        <h2>{title}</h2>
        <div className="ready-mn">
          <FaClock />
          <span>{readyInMn}min</span>
        </div>
      </div>
    </BannerStyles>
  );
}

HeroBanner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  readyInMn: PropTypes.number,
};

export default HeroBanner;
