import { useState, useEffect } from 'react';
import API from '../utils/API';

function useRecipe(id) {
  const [recipe, setRecipe] = useState({});
  // const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchRecipe = async (recipeId) => {
    try {
      setLoading(true);
      setError(false);
      const recipeData = await API.fetchRecipe(recipeId);
      setRecipe(recipeData);
      // const recipeSimilar = await API.fetchSimilarRecipe(recipeId, number);
      // setSimilar(recipeSimilar);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipe(id);
  }, [id]);

  return { recipe, loading, error };
}

export default useRecipe;
