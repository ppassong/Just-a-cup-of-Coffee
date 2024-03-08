import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom';
import coffee_couple from '../../source/image/coffee_couple.png';
import style from './Home_coffee.module.css';

const Home_coffee = () => {

  const scrollToTop = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };


  return (
    <div className={style.container}>
      <Link to='/coffee' className={style.link} onClick={scrollToTop}>

        <div className={style.imagecontainer}>
          <div className={style.text_container}>
            <h1 className={style.h1}>커피에 대해 아시나요?</h1>
            <h2 className={style.h2}>알아보기 &gt;</h2>
            <img className={style.img} src={coffee_couple} alt="coffee_couple" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home_coffee