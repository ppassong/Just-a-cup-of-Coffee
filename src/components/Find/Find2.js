import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import Navibar from '../Navibar/Navibar';
import style from '../Find/Find2.module.css';

const Find2 = ({ setSelectedFlavor, setSelectedFeeling }) => {
  //setSelectedFeeling함수를 prop로 받아서 업데이트 할 수 있도록
  
  return (
    <Stack direction="column" spacing={2} style={{ marginTop: '25px' }}>
      <div className={style.container}>
        <h1 className={style.h1}>어떤 느낌을 좋아하나요?</h1>
        <h3 className={style.h3}>입 안에 풍기는 느낌을 생각해보세요</h3>

        <div className={style.circle_container}>
          <div className={style.circle_text}>
            <Link onClick={() => {
              setSelectedFeeling('산뜻한 느낌');
            }}>
              <div className={`${style.circle} ${style.circle1}`}></div>
            </Link>

            <h2>산뜻한 느낌</h2>
          </div>

          <div className={style.circle_text}>
            <Link onClick={() => setSelectedFeeling('부드러운 느낌')}>
              <div className={`${style.circle} ${style.circle2}`}></div>
            </Link>
            <h2>부드러운 느낌</h2>
          </div>

          <div className={style.circle_text}>
            <Link onClick={() => setSelectedFeeling('묵직한 느낌')}>
              <div className={`${style.circle} ${style.circle3}`}></div>
            </Link>
            <h2>묵직한 느낌</h2>
          </div>
        </div>
      </div>

    
    </Stack >
  );
};

export default Find2

