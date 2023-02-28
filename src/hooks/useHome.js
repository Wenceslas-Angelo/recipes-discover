import { useEffect, useState } from 'react';
import API from '../utils/API';

function useHome() {
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPopular = async () => {
    try {
      setError(false);
      setLoading(true);
      const data = await API.fetchPopular(12);
      setPopular(data.recipes);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return { popular, error, loading };
}

export default useHome;
