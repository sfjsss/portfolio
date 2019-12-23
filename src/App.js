import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import MySkills from './components/MySkills/MySkills';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MySkills />
      </div>
    </BrowserRouter>
  );
}

export default App;
