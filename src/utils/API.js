import { API_KEY, API_URL, POPULAR_BASE_URL, SEARCH_BASE_URL } from './config';

const apiSettings = {
  fetchPopular: async (number) => {
    const endPoint = `${POPULAR_BASE_URL}&number=${number}`;
    const data = await fetch(endPoint);
    const dataJson = await data.json();
    return dataJson;
  },

  fetchSearch: async (searchTerm, number) => {
    const endPoint = `${SEARCH_BASE_URL}${searchTerm}&number=${number}`;
    const data = await fetch(endPoint);
    const dataJson = await data.json();
    return dataJson;
  },

  fetchRecipe: async (recipeId) => {
    const endPoint = `${API_URL}${recipeId}/information?apiKey=${API_KEY}`;
    const data = await fetch(endPoint);
    const dataJson = await data.json();
    return dataJson;
  },

  fetchSimilarRecipe: async (recipeId) => {
    const endPoint = `${API_URL}${recipeId}/similar?apiKey=${API_KEY}`;
    const data = await fetch(endPoint);
    const dataJson = await data.json();
    return dataJson;
  },
};

export default apiSettings;
