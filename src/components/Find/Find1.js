import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import style from '../Find/Find1.module.css';

const Find1 = ({ setSelectedFlavor }) => {
  //setSelectedFlavor함수를 prop로 받아서 업데이트 할 수 있도록

  return (

    <Stack direction="column" spacing={2} style={{ marginTop: '25px' }}>

      <div className={style.container}>
        <h1 className={style.h1}>어떤 맛과 향을 좋아하나요?</h1>
        <h3 className={style.h3}>선호하는 맛을 골라보세요</h3>

        <div className={style.circle_container}>
          <div className={style.circle_text}>
            <Link onClick={() => setSelectedFlavor('과일 맛')} >
              <div className={`${style.circle} ${style.circle1}`}></div>
            </Link>
            <h2>과일 맛</h2>
          </div>

          <div className={style.circle_text}>
            <Link onClick={() => setSelectedFlavor('고소한 맛')} >
              <div className={`${style.circle} ${style.circle2}`}></div>
            </Link>
            <h2>고소한 맛</h2>

          </div>

          <div className={style.circle_text}>
            <Link onClick={() => setSelectedFlavor('진한 맛')} >
              <div className={`${style.circle} ${style.circle3}`}></div>
            </Link>
            <h2>진한 맛</h2>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default Find1