import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import MySkills from './components/MySkills/MySkills';
import Process from './components/Process/Process';
import MyWorks from './containers/MyWorks/MyWorks';
import ContactMe from './containers/ContactMe/ContactMe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MySkills />
        <Process />
        <MyWorks />
        <ContactMe />
      </div>
    </BrowserRouter>
  );
}

export default App;
