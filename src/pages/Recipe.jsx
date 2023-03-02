import React from 'react';
import { useParams } from 'react-router-dom';

import useRecipe from '../hooks/useRecipe';

import Spinner from '../components/Spinner';
import HeroBanner from '../components/HeroBanner';
import RecipeInfo from '../components/RecipeInfo';
import Error from '../components/Error';

function Recipe() {
  const { id } = useParams();
  const { recipe, loading, error } = useRecipe(id);

  if (error) return <Error />;

  return (
    <>
      {recipe ? <HeroBanner image={recipe.image} /> : null}

      {recipe.title ? (
        <RecipeInfo
          title={recipe.title}
          summary={recipe.summary}
          instructions={recipe.instructions}
          ingredients={recipe.extendedIngredients}
        />
      ) : null}

      {loading && <Spinner />}
    </>
  );
}

export default Recipe;
