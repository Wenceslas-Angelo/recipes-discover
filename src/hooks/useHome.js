import { useEffect, useState } from 'react';
import API from '../utils/API';

function useHome(searchTerm) {
  const [state, setState] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPopular = async () => {
    try {
      setError(false);
      setLoading(true);

      const checkRecipes = localStorage.getItem('popular');
      if (checkRecipes) {
        setState(JSON.parse(checkRecipes));
      } else {
        const data = await API.fetchPopular(12);
        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setState(data.recipes);
      }
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  const searchRecipes = async () => {
    try {
      setError(false);
      setLoading(true);
      const data = await API.fetchSearch(searchTerm, 12);
      // console.log(data);
      setState(data.results);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    searchTerm ? searchRecipes() : fetchPopular();
  }, [searchTerm]);

  return { state, error, loading };
}

export default useHome;
