import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title from './components/Title/Title';

import Navibar from './components/Navibar/Navibar';

import Home from './components/Home/Home';

import Coffee from './components/Coffee/Coffee';

import Type from './components/Type/Type';

import Find from './components/Find/Find';

import Footer from './components/Footer/Footer';


function App() {
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  return (
    <div>
      <Navibar setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling} />

      <Routes>
        <Route path="/" element={
          <>
            <Title /> <Home />
          </>
        } />

        <Route path="/Coffee" element={<Coffee />} />
        <Route path="/Type" element={<Type />} />
        <Route path="/Find" element={<Find />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
