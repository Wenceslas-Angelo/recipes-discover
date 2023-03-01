import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

import GlobalStyles from './utils/globalStyles';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="app">
      <GlobalStyles />
      <Header setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
      </Routes>
    </div>
  );
}

export default App;
