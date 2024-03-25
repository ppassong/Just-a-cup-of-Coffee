import React, { useState } from 'react'
import { Stack } from '@mui/material';
import Navibar from '../../Navibar/Navibar';
import style from '../Find_answer/Answer1_2.module.css';
import tanzania from '../../../source/image/tanzania.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Answer1_2 = () => {
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
          <img src={tanzania} alt="tanzania"></img>

          <div className={style.container3}>
            <h2 className={style.h2}>
              탄지니아
              <hr style={{ marginTop: '5px' }} />
            </h2>
            <p className={style.p}>
              케냐산보다 산도는 낮으나 풍부하고 부드러운 맛과<br />
              입안 가득한 풍미가 와인 같은 느낌을 줍니다.<br />
              간혹 흙냄새도 느낄 수 있어 가장 아프리카 다운 커피로 알려져 있기도 합니다.<br />
              AA등급이 가장 최상급 등급이며, '커피의 신사'라는 애칭을 지니고 있습니다.<br />
            </p>


            <div className={style.point}>
              <div className={`${style.card} ${style.tooltip_body}`} >
                바디감<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>&nbsp;&nbsp;★★★★★
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      커피를 입에 머금었을 때 느껴지는 밀도와 무게감을 뜻합니다.
                    </div>
                  </div>
                }
              </div>

              <div className={style.card} >
                산도<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★☆
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      커피의 산뜻함과 풍미를 결정지으며 신맛의 정도. 과일맛이라고도 불립니다.
                    </div>
                  </div>
                }
              </div>

              <div className={style.card} >
                균형<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★★☆
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

export default Answer1_2;