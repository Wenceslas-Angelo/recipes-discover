import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Error from './components/Error';
import Header from './components/Header';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

import GlobalStyles from './utils/globalStyles';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="app">
      <GlobalStyles />
      <Header setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
