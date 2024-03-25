import React, { useState } from 'react'
import { Stack } from '@mui/material';
import Navibar from '../../Navibar/Navibar';
import style from '../Find_answer/Answer2_3.module.css';
import indonesia from '../../../source/image/indonesia.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Answer2_3 = () => {
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
          <img src={indonesia} alt="indonesia"></img>

          <div className={style.container3}>
            <h2 className={style.h2}>
              인도네시아 수마트라
              <hr style={{ marginTop: '5px' }} />
            </h2>
            <p className={style.p}>
              인도네시아는 세계적으로 유명한 원두 생산국으로 고품질의 아로마틱한 원두를 생산합니다.<br />
              그중 수마트라에서 생산되는 원두는 낮은 산도와 흙 향, 고소한 맛이 강하며 풍부한 바디감을 느낄 수 있습니다. <br />
              인도네시아의 주요 커피 산지로는 만델링, 수마트라, 자바, 술라웨시 등이 있습니다.<br />
              가장 유명한 커피는 사향고양이의 배설물에서 커피 씨앗을 채취해 만드는 '루왁 커피'입니다.
            </p>


            <div className={style.point}>
              <div className={`${style.card} ${style.tooltip_body}`} >
                바디감<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;★★★★★
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      커피를 입에 머금었을 때 느껴지는 밀도와 무게감을 뜻합니다.
                    </div>
                  </div>
                }
              </div>

              <div className={style.card} >
                산도<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★☆☆☆
                {isHovered &&
                  <div className={style.tooltip}>
                    <div className={style.tooltipContent} >
                      커피의 산뜻함과 풍미를 결정지으며 신맛의 정도. 과일맛이라고도 불립니다.
                    </div>
                  </div>
                }
              </div>

              <div className={style.card} >
                균형<HelpOutlineIcon sx={{ fontSize: 20 }} onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★☆☆☆
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

export default Answer2_3;