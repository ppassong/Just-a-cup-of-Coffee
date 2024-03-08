import React, { useState } from 'react'
import { Stack } from '@mui/material';
import Navibar from '../../Navibar/Navibar';
import style from '../Find_answer/Answer2_1.module.css';
import colombia from '../../../source/image/colombia.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Answer2_1 = () => {
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
          <img src={colombia} alt="colombia"></img>

          <div className={style.container3}>
            <h2 className={style.h2}>
              콜롬비아 수프리모
              <hr style={{ marginTop: '5px' }} />
            </h2>
            <p className={style.p}>
              감미로운 아로마 향과 독특하고 고소한 호두의 향이 풍부한 것이 특징입니다.<br />
              '마일드 커피'의 대명사로 중량감 있는 맛과 달콤한 향기로 밸런스가 좋은 원두입니다.<br />
              커피를 처음 접하시는 분들에게 적극 추천하는 원두이기도 합니다.<br />
            </p>


            <div className={style.point}>
              <div className={`${style.card} ${style.tooltip_body}`} >
                바디감<HelpOutlineIcon onMouseEnter={handleHover} onMouseLeave={handleLeave}/>&nbsp;&nbsp;★★★☆☆
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      커피를 입에 머금었을 때 느껴지는 밀도와 무게감을 뜻합니다.
                    </div>
                  </div>
                }
              </div>

              <div className={style.card} >
                산도<HelpOutlineIcon onMouseEnter={handleHover} onMouseLeave={handleLeave}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★☆☆
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      커피의 산뜻함과 풍미를 결정지으며 신맛의 정도. 과일맛이라고도 불립니다.
                    </div>
                  </div>
                }
              </div>

              <div className={style.card} >
                균형<HelpOutlineIcon onMouseEnter={handleHover} onMouseLeave={handleLeave}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★★
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      산미, 쓴맛, 바디감, 향 등의 다양한 맛과 향이 조화롭게 어우러져 전반적인 균형 있는 맛을 의미합니다.
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

export default Answer2_1;