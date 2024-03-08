import React, { useState } from 'react';
import Find1 from './Find1';
import Find2 from './Find2';
import Answer1_1 from './Find_answer/Answer1_1';
import Answer1_2 from './Find_answer/Answer1_2';
import Answer1_3 from './Find_answer/Answer1_3';
import Answer2_1 from './Find_answer/Answer2_1';
import Answer2_2 from './Find_answer/Answer2_2';
import Answer2_3 from './Find_answer/Answer2_3';
import Answer3_1 from './Find_answer/Answer3_1';
import Answer3_2 from './Find_answer/Answer3_2';
import Answer3_3 from './Find_answer/Answer3_3';
import Navibar from '../Navibar/Navibar';
import Type from '../Type/Type';
import style from './Find.module.css'

const Find = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  //맛을 고르는 Find1.js와 느낌을 고르는 Find2.js의 사용자 선택 추적요소의 상태변화 관리

  const scrollToType = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
       <Navibar setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling} scrollToType={scrollToType} /> 
    
      {!selectedFlavor && !selectedFeeling ?
        (
          <Find1 setSelectedFlavor={setSelectedFlavor} />
        ) : !selectedFeeling ? (
          <Find2 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling} />
        ) : (
          selectedFlavor === '과일 맛' && selectedFeeling === '산뜻한 느낌' ? 
          <Answer1_1 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/>
          :
          selectedFlavor === '과일 맛' && selectedFeeling === '부드러운 느낌' ? 
          <Answer1_2 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/> 
          :
          selectedFlavor === '과일 맛' && selectedFeeling === '묵직한 느낌' ? 
          <Answer1_3 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/> 
          :
          selectedFlavor === '고소한 맛' && selectedFeeling === '산뜻한 느낌' ? 
          <Answer2_1 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/> 
          :
          selectedFlavor === '고소한 맛' && selectedFeeling === '부드러운 느낌' ?
          <Answer2_2 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/> 
          :
          selectedFlavor === '고소한 맛' && selectedFeeling === '묵직한 느낌' ? 
          <Answer2_3 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/> 
          :
          selectedFlavor === '진한 맛' && selectedFeeling === '산뜻한 느낌' ? 
          <Answer3_1 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/> 
          :
          selectedFlavor === '진한 맛' && selectedFeeling === '부드러운 느낌' ? 
          <Answer3_2 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/> 
          :
          selectedFlavor === '진한 맛' && selectedFeeling === '묵직한 느낌' ? 
          <Answer3_3 setSelectedFlavor={setSelectedFlavor} setSelectedFeeling={setSelectedFeeling}/> 
          :
          null
        )}

  
    </div>
  );
}

export default Find