import { useEffect, useState } from 'react';
import API from '../utils/API';

function useHome(searchTerm) {
  const [state, setState] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const fetchRecipes = async (number, searchValue = '') => {
    try {
      setError(false);
      setLoading(true);
      const checkRecipes = localStorage.getItem('popular');
      if (!loadMore && !searchValue && checkRecipes) {
        setState(JSON.parse(checkRecipes));
      } else {
        const data = await API.fetchRecipes(number, searchValue);
        setState(searchValue ? data.results : data.recipes);
        setTotalResults(searchValue ? data.totalResults : 0);
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
    searchTerm
      ? fetchRecipes(totalResults, searchTerm)
      : fetchRecipes(12, searchTerm);
    setLoadMore(false);
  }, [loadMore, searchTerm]);

  return { state, error, loading, setLoadMore };
}

export default useHome;
