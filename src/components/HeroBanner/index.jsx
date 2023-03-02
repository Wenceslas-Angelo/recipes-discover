import React from 'react';
import PropTypes from 'prop-types';
import { FaClock } from 'react-icons/fa';

import BannerStyles from './index.styles';

function HeroBanner({ image, title, readyInMn, isGradient }) {
  return (
    <BannerStyles bg={image}>
      {isGradient && (
        <div className="container">
          <h2>{title}</h2>
          <div className="ready-mn">
            <FaClock />
            <span>{readyInMn}min</span>
          </div>
        </div>
      )}
    </BannerStyles>
  );
}

HeroBanner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  readyInMn: PropTypes.number,
  isGradient: PropTypes.bool,
};

export default HeroBanner;
