const API_URL = 'https://api.spoonacular.com/recipes/';
const API_KEY = process.env.REACT_APP_API_KEY;

const POPULAR_BASE_URL = `${API_URL}random?apiKey=${API_KEY}`;
const SEARCH_BASE_URL = `${API_URL}complexSearch?apiKey=${API_KEY}&query=`;

export { POPULAR_BASE_URL, SEARCH_BASE_URL, API_URL, API_KEY };
