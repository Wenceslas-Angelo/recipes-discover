import { useEffect, useState } from 'react';
import API from '../utils/API';

function useHome(searchTerm) {
  const [state, setState] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const fetchRecipes = async (number, searchValue = '') => {
    try {
      setError(false);
      setLoading(true);
      const checkRecipes = localStorage.getItem('popular');
      if (!searchValue && checkRecipes) {
        setState(JSON.parse(checkRecipes));
      } else {
        const data = await API.fetchRecipes(number, searchValue);
        setState(searchValue ? data.results : data.recipes);
      }
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setState([]);
    fetchRecipes(12);
  }, []);

  useEffect(() => {
    setState([]);
    fetchRecipes(12, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!loadMore) return;
    setState([]);
    fetchRecipes(12, searchTerm);
    setLoadMore(false);
  }, [loadMore, searchTerm]);

  return { state, error, loading, setLoadMore };
}

export default useHome;
