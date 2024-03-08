import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title from './components/Title/Title';

import Navibar from './components/Navibar/Navibar';

import Home from './components/Home/Home';
import Home_coffee from './components/Home/Home_coffee';
import Home_type from './components/Home/Home_type';

import Coffee from './components/Coffee/Coffee';

import Type from './components/Type/Type';
import Type_espresso from './components/Type/Type_espresso';
import Type_latte from './components/Type/Type_latte';
import Type_brewed from './components/Type/Type_brewed';
import Find from './components/Find/Find';
import Find1 from './components/Find/Find1';
import Find2 from './components/Find/Find2';
import Answer1_1 from './components/Find/Find_answer/Answer1_1';
import Answer1_2 from './components/Find/Find_answer/Answer1_2';

import Footer from './components/Footer/Footer';



function App() {
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  const scrollToType = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <Route path="/Type" element={<Type_espresso />} />
        <Route path="/Type" element={<Type_latte />} />
        <Route path="/Type" element={<Type_brewed />} />


        <Route path="/Find" element={<Find />} />
        <Route path="/Find1" element={<Find1 />} />
        <Route path="/Find2" element={<Find2 />} />
        <Route path="/Find2/Answer1_1" element={<Answer1_1 />} />
        <Route path="/Find2/Answer1_2" element={<Answer1_2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
