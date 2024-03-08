import React, { useState } from 'react'
import { Stack } from '@mui/material';
import Navibar from '../../Navibar/Navibar';
import style from '../Find_answer/Answer1_1.module.css';
import kenya from '../../../source/image/kenya.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Answer1_1 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };


  return (
    <div>
      <Stack direction="column" spacing={2} style={{ marginTop: '50px' }}>
        <div className={style.container}>
          <h1 className={style.h1}>당신과 잘 어울리는 원두 및 생산지입니다!</h1>
          <h3 className={style.h3}>한 번 즐겨먹어보는건 어떨까요?</h3>
        </div>

        <div className={style.container2}>
          <img src={kenya} alt="kenya"></img>

          <div className={style.container3}>
            <h2 className={style.h2}>
              케냐
              <hr style={{ marginTop: '5px' }} />
            </h2>
            <p className={style.p}>
              주로 상큼하고 깔끔한 맛과 함께 자몽과 와인과 같은 풍부한 풍미를 지니며,<br />
              입 안에 꽉찬 무게감을 줍니다.<br />

              케냐산 원두는 물세척법으로 가공하여 상큼한 신맛을 띠는 경우가 많습니다.<br />
              특급품은 '케냐AA'로 표시합니다.
            </p>


            <div className={style.point}>
              <div className={`${style.card} ${style.tooltip_body}`} >
                바디감<HelpOutlineIcon onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;★★★★☆
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      커피를 입에 머금었을 때 느껴지는 밀도와 무게감을 말함
                    </div>
                  </div>
                }
              </div>

              <div className={style.card} >
                산도<HelpOutlineIcon onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      커피의 산뜻함과 풍미를 결정지으며 신맛의 정도. 과일맛이라고도 불림
                    </div>
                  </div>
                }
              </div>

              <div className={style.card} >
                균형<HelpOutlineIcon onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      산미, 쓴맛, 바디감, 향 등의 다양한 맛과 향이 조화롭게 어우러져 전반적인 균형있는 맛을 의미
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Answer1_1;