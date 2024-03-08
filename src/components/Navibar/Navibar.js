import React, { useState, useRef } from 'react'
import { Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import style from './Navibar.module.css';
import Tilt from 'react-parallax-tilt';
import coffee_cup from '../../source/image/coffee_cup.png';

const tiltOptions = {
  tiltMaxAngleX: 60,
  tiltMaxAngleY: 45,
  perspective: 300,
  scale: 1.1,
  transitionSpeed: 2000,
  gyroscope: true
};



const Navibar = ({ setSelectedFlavor, setSelectedFeeling }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };


  const scrollToTop = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeDropdown();
  };

  const scrollToType = (id) => {
    closeDropdown();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resetFind = () => {
    setSelectedFlavor(null);
    setSelectedFeeling(null);
    scrollToTop();
    navigate('/Find');
  };

  return (
    <Stack direction="row" className={style.bar} >
      <Link to="/" className={style.coffee} onClick={scrollToTop} style={{ textDecoration: 'none', color: "white" }}>
        Just a cup of Coffee
        <img alt="logo" src={coffee_cup} style={{ paddingLeft: '7px', marginBottom: '3px', width: "50px", height: "50px" }} />
      </Link>


      <div className={style.Nav}>
        <Tilt {...tiltOptions} >
          <Link to="/Coffee" onClick={scrollToTop} style={{ textDecoration: 'none', color: "white" }}>커피?</Link>
        </Tilt>

        <div className={style.dropdownContainer} onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
          <Tilt {...tiltOptions}>
            <Link to="/Type" onClick={scrollToTop} style={{ textDecoration: 'none', color: "white" }}>
              종류?
            </Link>
          </Tilt>
          {isDropdownOpen && (
            <div className={style.dropdownContent}>
              <Link to="/Type" onClick={() => scrollToType('espresso')} style={{ textDecoration: 'none', color: 'white' }}>
                에스프레소
              </Link>
              <Link to="/Type" onClick={() => scrollToType('latte')}  style={{ textDecoration: 'none', color: 'white' }}>
                라떼
              </Link>
              <Link to="/Type" onClick={() => scrollToType('brewed')} style={{ textDecoration: 'none', color: 'white' }}>
                브루드 커피
              </Link>
            </div>
          )}
        </div>


        <Tilt {...tiltOptions}>
        <Link to="/Find" onClick={resetFind}style={{ textDecoration: 'none', color: "white" }}>
            원두?
          </Link>
        </Tilt>
      </div>

    </Stack>
  )
}

export default Navibar;


