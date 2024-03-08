import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom';
import coffee_cup2 from '../../source/image/coffee_cup2.png';
import style from './Home_find.module.css';
import bean_package from '../../source/image/bean_package.png'
import one_bean from '../../source/image/one_bean.png'


const Home_find = () => {

  const scrollToTop = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };


  return (
    <div className={style.container}>
      <Link to='/find' className={style.link} onClick={scrollToTop}>
        <div className={style.imagecontainer}>
          <img className={style.coffeeBeans1} src={one_bean} alt="one_bean" />
          <img className={style.coffeeBeans2} src={one_bean} alt="one_bean" />
          <img className={style.coffeeBeans3} src={one_bean} alt="one_bean" />
          <img className={style.coffeeBeans4} src={one_bean} alt="one_bean" />
          <img className={style.coffeeBeans5} src={one_bean} alt="one_bean" />
          <img className={style.coffeeBeans6} src={one_bean} alt="one_bean" />
          <img className={style.coffeeBeans7} src={one_bean} alt="one_bean" />
          <img className={style.coffeeBeans8} src={one_bean} alt="one_bean" />

          <div className={style.text_container}>
            <h1 className={style.h1}>내 취향 저격 원두</h1>
            <h2 className={style.h2_2}>선호하는 맛과 느낌에 따라서.</h2>
            <h2 className={style.h2}>알아보기 &gt;</h2>
            <div className={style.imageGroup}>
              <img className={style.img} src={coffee_cup2} alt="coffee_cup2" />
              <img className={style.img2} src={bean_package} alt="bean_package" />
              <img className={style.img3} src={coffee_cup2} alt="coffee_cup2" />
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home_find