import React, { useState } from 'react'
import { Stack } from '@mui/material';
import Navibar from '../../Navibar/Navibar';
import style from '../Find_answer/Answer2_2.module.css';
import brazil from '../../../source/image/brazil.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Answer2_2 = () => {
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
          <img src={brazil} alt="brazil"></img>

          <div className={style.container3}>
            <h2 className={style.h2}>
              브라질
              <hr style={{ marginTop: '5px' }} />
            </h2>
            <p className={style.p}>
              브라질에서 생산되는 원두는 뚜렷한 개성보다는 맛의 중간에 위치해있는 무난한 요소가 많은 커피입니다.<br />
              맛은 대체로 산도가 낮으며 부드럽고 순한 맛이 특징입니다.<br /> 
              그렇기에 블렌딩의 베이스로 가장 많이 사용되기도 합니다.<br />
              가장 유명한 것은 브라질의 '산토스' 원두입니다.
            </p>


            <div className={style.point}>
              <div className={`${style.card} ${style.tooltip_body}`} >
                바디감<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>&nbsp;&nbsp;★★★☆☆
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      커피를 입에 머금었을 때 느껴지는 밀도와 무게감을 뜻합니다.
                    </div>
                  </div>
                }
              </div>

              <div className={style.card} >
                산도<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★☆☆☆
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      커피의 산뜻함과 풍미를 결정지으며 신맛의 정도. 과일맛이라고도 불립니다.
                    </div>
                  </div>
                }
              </div>

              <div className={style.card} >
                균형<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★☆☆
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

export default Answer2_2;