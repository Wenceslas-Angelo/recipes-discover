import React from 'react';
import PropTypes from 'prop-types';

import InfoStyles from './index.styles';

function RecipeInfo({ title, summary, instructions, ingredients }) {
  return (
    <InfoStyles>
      <h1>{title}</h1>
      <div className="section summary">
        <h2>Summary</h2>
        <p dangerouslySetInnerHTML={{ __html: summary }}></p>
      </div>

      <div className="section instructions">
        <h2>Instructions</h2>
        <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
      </div>

      <div className="section ingredients">
        <h2>Extended Ingredients</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      </div>
    </InfoStyles>
  );
}

RecipeInfo.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  instructions: PropTypes.string,
  ingredients: PropTypes.array,
};

export default RecipeInfo;
