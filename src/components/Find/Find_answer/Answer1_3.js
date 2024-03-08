import React, { useState } from 'react'
import { Stack } from '@mui/material';
import Navibar from '../../Navibar/Navibar';
import style from '../Find_answer/Answer1_3.module.css';
import guatemala from '../../../source/image/guatemala.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Answer1_3 = () => {
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
                    <img src={guatemala} alt="guatemala"></img>

                    <div className={style.container3}>
                        <h2 className={style.h2}>
                            과테말라 안티구아
                            <hr style={{ marginTop: '5px' }} />
                        </h2>
                        <p className={style.p}>
                            과테말라는 커피는 일반적으로 해발 1,200~1,800m 범위의 높은 고도에서 재배되며,<br />
                            높은 고도와 그 나라의 화산 토양 및 기후가 결합되어 원두의 독특한 풍미를 가합니다.<br />
                            허브, 감귤류, 꽃향기가 이루어지는 상쾌한 산미에 강한 바디감을 지닌 것이 특징입니다.<br />
                            과테말라의 커피는 재배고도에 따른 지역별 원두가 맛이 조금씩 다릅니다.<br />
                        </p>


                        <div className={style.point}>
                            <div className={`${style.card} ${style.tooltip_body}`} >
                                바디감<HelpOutlineIcon onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;★★★★☆
                                {isHovered &&
                                    <div className={style.tooltip}>
                                        <div className={style.tooltipContent} >
                                            커피를 입에 머금었을 때 느껴지는 밀도와 무게감을 뜻합니다.
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className={style.card} >
                                산도<HelpOutlineIcon onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★☆☆
                                {isHovered &&
                                    <div className={style.tooltip}>
                                        <div className={style.tooltipContent} >
                                            커피의 산뜻함과 풍미를 결정지으며 신맛의 정도. 과일맛이라고도 불립니다.
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className={style.card} >
                                균형<HelpOutlineIcon onMouseEnter={handleHover} onMouseLeave={handleLeave} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★★★☆☆
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

export default Answer1_3;